// --------------------------------------------------------------------------------------------------------------------
// Filename : Certifications.cs
// Project: kschlikow.profile / kschlikow.profile
// Author : Kristian Schlikow (kristian@schlikow.de)
// Created On : 03.02.2022 01:03
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

    public class Certifications : Content<CertificationData> { }

    public class CertificationData
    {
        [JsonConverter(typeof(InvariantConverter))]
        public string Name { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string[] Badge { get; set; }


        [JsonConverter(typeof(InvariantConverter))]
        public DateTime? Date { get; set; }
    }
}
