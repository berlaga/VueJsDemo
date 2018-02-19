using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace VueJsDemo.Controllers
{
    public class AutocompleteController : ApiController
    {
        // GET: api/search
        [HttpGet]
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

    }
}
