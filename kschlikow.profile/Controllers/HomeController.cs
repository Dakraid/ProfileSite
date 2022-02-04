// --------------------------------------------------------------------------------------------------------------------
// Filename : HomeController.cs
// Project: kschlikow.profile / kschlikow.profile
// Author : Kristian Schlikow (kristian@schlikow.de)
// Created On : 01.02.2022 19:25
// Last Modified On : 03.02.2022 01:04
// Copyrights : Copyright (c) Kristian Schlikow 2022-2022, All Rights Reserved
// License: License is provided as described within the LICENSE file shipped with the project
// If present, the license takes precedence over the individual notice within this file
// --------------------------------------------------------------------------------------------------------------------

namespace kschlikow.profile.Controllers
{
    using System.Diagnostics;
    using System.Linq;
    using System.Threading.Tasks;

    using Models;

    using Microsoft.AspNetCore.Mvc;

    using Squidex.ClientLibrary;

    public sealed class HomeController : Controller
    {
        private readonly SquidexClientManager _clientManager;

        public HomeController(SquidexClientManager clientManager) => _clientManager = clientManager;

        public async Task<IActionResult> Index()
        {
            var vm = new HomeVm();

            await Task.WhenAll(LoadBasics(vm),
                LoadProjectsAsync(vm),
                LoadEducationAsync(vm),
                LoadExperienceAsync(vm),
                LoadCertificationsAsync(vm),
                LoadPublicationsAsync(vm),
                LoadSkillsAsync(vm));

            return View(vm);
        }

        private async Task LoadSkillsAsync(HomeVm vm)
        {
            var records = await _clientManager.CreateContentsClient<Skill, SkillData>("skills").GetAsync();

            vm.Skills = records.Items;
        }

        private async Task LoadProjectsAsync(HomeVm vm)
        {
            var professionalRecords = await _clientManager.CreateContentsClient<Project, ProjectData>("professional-projects").GetAsync();
            vm.ProfessionalProjects = professionalRecords.Items;

            var personalRecords = await _clientManager.CreateContentsClient<Project, ProjectData>("personal-projects").GetAsync();
            vm.PersonalProjects = personalRecords.Items;
        }

        private async Task LoadCertificationsAsync(HomeVm vm)
        {
            var records = await _clientManager.CreateContentsClient<Certifications, CertificationData>("certifications").GetAsync();

            vm.Certifications = records.Items;
        }

        private async Task LoadPublicationsAsync(HomeVm vm)
        {
            var records = await _clientManager.CreateContentsClient<Publication, PublicationData>("publications").GetAsync();

            vm.Publications = records.Items;
        }

        private async Task LoadExperienceAsync(HomeVm vm)
        {
            var records = await _clientManager.CreateContentsClient<Experience, ExperienceData>("experience").GetAsync();

            vm.Experiences = records.Items;
        }

        private async Task LoadEducationAsync(HomeVm vm)
        {
            var records = await _clientManager.CreateContentsClient<Education, EducationData>("education").GetAsync();

            vm.Education = records.Items;
        }

        private async Task LoadBasics(HomeVm vm)
        {
            var query = new ContentQuery
            {
                Top = 1
            };

            var records = await _clientManager.CreateContentsClient<Basics, BasicsData>("basics").GetAsync(query);

            vm.Basics = records.Items.FirstOrDefault()?.Data ?? new BasicsData();
        }
    }
}
