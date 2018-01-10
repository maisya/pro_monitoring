using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NexigoApi.Models
{
    public class EmployeeModel
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int SPV_ID { get; set; }
        public string Email { get; set; }
        public string Loc_Code { get; set; }
        public DateTime Join_Date { get; set; }
        public string Sex { get; set; }
        public string DIV_Code { get; set; }
        public string Unit_Code { get; set; }
        public string Staff_Level { get; set; }
        public string Job_Family { get; set; }
        public string Job_Title { get; set; }
        public bool Expat { get; set; }
        public bool Contract { get; set; }
        public string Password { get; set; }
        public int Balance { get; set; }

    }
}