// --------------------------------------------------------------------------------------------------------------------
// Filename : Experience.cs
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

    using Newtonsoft.Json;

    using Squidex.ClientLibrary;

    public class Experience : Content<ExperienceData> { }

    public class ExperienceData
    {
        [JsonConverter(typeof(InvariantConverter))]
        public string Position { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string Company { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string[] Logo { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public DateTime From { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public DateTime? To { get; set; }
    }
}
