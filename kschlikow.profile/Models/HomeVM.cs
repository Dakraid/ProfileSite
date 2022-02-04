// --------------------------------------------------------------------------------------------------------------------
// Filename : HomeVM.cs
// Project: kschlikow.profile / kschlikow.profile
// Author : Kristian Schlikow (kristian@schlikow.de)
// Created On : 01.02.2022 19:25
// Last Modified On : 03.02.2022 01:04
// Copyrights : Copyright (c) Kristian Schlikow 2022-2022, All Rights Reserved
// License: License is provided as described within the LICENSE file shipped with the project
// If present, the license takes precedence over the individual notice within this file
// --------------------------------------------------------------------------------------------------------------------

namespace kschlikow.profile.Models
{
    using System;
    using System.Collections.Generic;

    public sealed class HomeVm
    {
        public BasicsData Basics { get; set; }

        public List<Skill> Skills { get; set; }

        public List<Project> PersonalProjects { get; set; }

        public List<Project> ProfessionalProjects { get; set; }

        public List<Certifications> Certifications { get; set; }

        public List<Education> Education { get; set; }

        public List<Experience> Experiences { get; set; }

        public List<Publication> Publications { get; set; }

        public Func<string, string> BuildImageUrl { get; set; }
    }
}
