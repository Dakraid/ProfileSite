// --------------------------------------------------------------------------------------------------------------------
// Filename : Project.cs
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
    using Newtonsoft.Json;

    using Squidex.ClientLibrary;

    public class Project : Content<ProjectData> { }

    public class ProjectData
    {
        [JsonConverter(typeof(InvariantConverter))]
        public string Name { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string Label { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string Link { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string Description { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string[] Image { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public int? Year { get; set; }
    }
}
