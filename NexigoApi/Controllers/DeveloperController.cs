using NexigoApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace NexigoApi.Controllers
{
    public  class Develop
    {
        public string ITCM_SR_HPPID { get; set; }
        public string Issue { get; set; }
        public string Raise_Date { get; set; }
        public string Attachment { get; set; }
        public string Solution { get; set; }
        public string Status { get; set; }
        public string history { get; set; }
    }

    public class Insert
    {
        public List<Develop> data { get; set; }
        public int total { get; set; }
    }

    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class DeveloperController : ApiController
    {
        private ProjectMonitorDataContext context = null;

        public DeveloperController()
        {
            context = new ProjectMonitorDataContext();
        }

        [HttpPost]
        public IHttpActionResult Create ([FromBody] Developer req)
        {
            var result = new List<Develop>();
            using(var gh = new ProjectMonitorDataContext())
            {
                var input = new Developer()
                {
                    ITCM_SR_HPPID = req.ITCM_SR_HPPID,
                    Issue = req.Issue,
                    Raise_Date = req.Raise_Date,
                    Attachment = req.Attachment,
                    Solution = req.Solution,
                    Status = req.Status,
                    history = req.history,
                };
                gh.Developers.InsertOnSubmit(input);
                gh.SubmitChanges();
            }
            return Ok(result);
        }
    }
    
       
    

    
   

}
