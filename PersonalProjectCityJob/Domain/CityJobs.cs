using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersonalProjectCityJob.Domain
{
    public class CityJobs : IDbEntity
    {

        public int Id { get; set; }

        public IList<City> Cities { get; set; }

        public IList<Job> Jobs { get; set; }

        public decimal Salary { get; set; }

        public bool Active { get; set; } = true;


    }
}