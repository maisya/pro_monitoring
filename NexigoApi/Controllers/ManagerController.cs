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
    public class Manager
    {
        public string ITCM_SR_HPPID { get; set; }
        public string ProjectTitle { get; set; }
        public string Business_Analyst { get; set; }
        public string Project_Controller { get; set; }
        public string Department { get; set; }
        public string Project_Type { get; set; }
        public string Key_User { get; set; }
        public string Star_Date { get; set; }
        public string Priority_Type { get; set; }
        public string Usage { get; set; }
        public string Note { get; set; }
        public string Total_Manhours { get; set; }
        public string Ended { get; set; }
        public string Ready_for_BA_Testing { get; set; }
        public string UAT { get; set; }
        public string LIVE { get; set; }
        public string Total_Manhours1 { get; set; }
        public string Ended1 { get; set; }
        public string Ready_for_BA_Testing1 { get; set; }
        public string UAT1 { get; set; }
        public string LIVE1 { get; set; }
        public string history { get; set; }
    }

    public class Read
    {
        public List<Manager> data { get; set; }
        public int total { get; set; }
                
    }

    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ManagerController : ApiController
    {
        private ProjectMonitorDataContext context = null;

        public ManagerController()
        {
            context = new ProjectMonitorDataContext();
        }

        [HttpPost]
        public IHttpActionResult Create ([FromBody] ProjectManager req)
        {
            var result = new List<Manager>();
            using (var ab = new ProjectMonitorDataContext())
            {
                var data = new ProjectManager()
                {
                    ITCM_SR_HPPID = req.ITCM_SR_HPPID,
                    ProjectTitle = req.ProjectTitle,
                    Business_Analyst = req.Business_Analyst,
                    Web_Project_Identity = req.Web_Project_Identity,
                    Project_Controller = req.Project_Controller,
                    Department = req.Department,
                    Project_Type = req.Project_Type,
                    Key_User = req.Key_User,
                    Star_Date = req.Star_Date,
                    Priority_Type = req.Priority_Type,
                    Usage = req.Usage,
                    Note = req.Note,
                    Total_Manhours = req.Total_Manhours,
                    Ended = req.Ended,
                    Ready_for_BA_Testing = req.Ready_for_BA_Testing,
                    UAT = req.UAT,
                    LIVE = req.LIVE,
                    Total_Manhours1 = req.Total_Manhours1,
                    Ended1 = req.Ended1,
                    Ready_for_BA_Testing1 = req.Ready_for_BA_Testing1,
                    UAT1 = req.UAT1,
                    LIVE1 = req.LIVE1,
                    history = req.history
                };
                ab.ProjectManagers.InsertOnSubmit(data);
                ab.SubmitChanges();
            }
            return Ok(result);
        }

       
    }
}
