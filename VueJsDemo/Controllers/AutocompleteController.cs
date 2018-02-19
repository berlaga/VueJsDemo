using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Collections;
using Newtonsoft.Json.Linq;

namespace VueJsDemo.Controllers
{
    public class AutocompleteController : ApiController
    {
        // GET: api/search
        [HttpGet]
        [Route("api/autocomplete/searchState")]
        public IHttpActionResult search(string term)
        {
            List<string> listStates = new List<string>() {"Alaska",
                              "Alabama",
                              "Arkansas",
                              "American Samoa",
                              "Arizona",
                              "California",
                              "Colorado",
                              "Connecticut",
                              "District of Columbia",
                              "Delaware",
                              "Florida",
                              "Georgia",
                              "Guam",
                              "Hawaii",
                              "Iowa",
                              "Idaho",
                              "Illinois",
                              "Indiana",
                              "Kansas",
                              "Kentucky",
                              "Louisiana",
                              "Massachusetts",
                              "Maryland",
                              "Maine",
                              "Michigan",
                              "Minnesota",
                              "Missouri",
                              "Mississippi",
                              "Montana",
                              "North Carolina",
                              " North Dakota",
                              "Nebraska",
                              "New Hampshire",
                              "New Jersey",
                              "New Mexico",
                              "Nevada",
                              "New York",
                              "Ohio",
                              "Oklahoma",
                              "Oregon",
                              "Pennsylvania",
                              "Puerto Rico",
                              "Rhode Island",
                              "South Carolina",
                              "South Dakota",
                              "Tennessee",
                              "Texas",
                              "Utah",
                              "Virginia",
                              "Virgin Islands",
                              "Vermont",
                              "Washington",
                              "Wisconsin",
                              "West Virginia",
                              "Wyoming" };

            var result = listStates.Where(x => x.Contains(term)).Select(p => new { label = p, value = 1 }).ToList();

            return Ok(result);
        }

        [HttpGet]
        [Route("api/autocomplete/searchProv")]
        public IHttpActionResult searchProv(string term)
        {
            var list = JToken.Parse("[ { name: 'Alberta', abbreviation: 'AB' }, { name: 'British Columbia', abbreviation: 'BC' }, { name: 'Manitoba', abbreviation: 'MB' }, { name: 'New Brunswick', abbreviation: 'NB' }, { name: 'Newfoundland and Labrador', abbreviation: 'NL' }, { name: 'Northwest Territories', abbreviation: 'NT' }, { name: 'Nova Scotia', abbreviation: 'NS' }, { name: 'Nunavut', abbreviation: 'NU' }, { name: 'Ontario', abbreviation: 'ON' }, { name: 'Prince Edward Island', abbreviation: 'PE' }, { name: 'Quebec', abbreviation: 'QC' }, { name: 'Saskatchewan', abbreviation: 'SK' }, { name: 'Yukon Territory', abbreviation: 'YT' } ]");

            IDictionary<string, string> dic = list.ToDictionary(x=> x["abbreviation"].ToString(), x=> x["name"].ToString());

            var result = dic.Where(x => x.Value.Contains(term)).Select(p => new { label = p.Value, value = p.Key }).ToList();

            return Ok(result);
        }


    }


}
