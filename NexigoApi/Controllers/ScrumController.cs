using NexigoApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Script.Serialization;

namespace NexigoApi.Controllers
{
    public class Scrum
    {
        public string ITCM_SR_HPPID { get; set; }
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
        public string Status { get; set; }
        public int Completion { get; set; }
        public string Last_Update { get; set; }
        public string Progress_History { get; set; }
        public string Teams { get; set; }
        public string Conf_Type { get; set; }
        public string Conf_Value { get; set; }
        public string Attachment { get; set; }
        
    }

    public class ScrumRead
    {
        public List<Scrum> data { get; set; }
        public int total { get; set; }

    }

    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ScrumController : ApiController
    {
        private ProjectMonitorDataContext context = null;

        public ScrumController()
        {
            context = new ProjectMonitorDataContext();
        }

        [HttpPost]
        public ScrumRead bacaManager()
        {
            var muncul = from baca in context.ProjectManagers select new Scrum
            {
                Total_Manhours = baca.Total_Manhours,
                Ended = baca.Ended,
                Ready_for_BA_Testing = baca.Ready_for_BA_Testing,
                UAT = baca.UAT,
                LIVE = baca.LIVE,
                ITCM_SR_HPPID = baca.ITCM_SR_HPPID,
            };
            ScrumRead getdata = new ScrumRead
            {
                data = muncul.ToList(),
                total = muncul.ToList().Count()
            };
            return getdata;
        }

        [HttpPost]
        public IHttpActionResult Create([FromBody] ScrumMaster req)
        {
            var result = new List<Scrum>();
            using (var ef = new ProjectMonitorDataContext())
            {
                var data = new ScrumMaster()
                {
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
                    Status = req.Status,
                    Completion = req.Completion,
                    Last_Update = req.Last_Update,
                    Progress_History = req.Progress_History,
                    Teams = req.Teams,
                    Conf_Type = req.Conf_Type,
                    Conf_Value = req.Conf_Value,
                    history = req.history,
                    Attachment = req.Attachment,
                    ITCM_SR_HPPID = req.ITCM_SR_HPPID,
                };
                ef.ScrumMasters.InsertOnSubmit(data);
                ef.SubmitChanges();
            }
            return Ok(result);
        }

         [HttpPost]
        public IHttpActionResult Update ([FromBody] ScrumMaster req)
        {
            try
            {
                if(req != null)
                {
                    using (var team = new ProjectMonitorDataContext())
                    {
                        var gf = team.ScrumMasters.FirstOrDefault(b => b.Total_Manhours == req.Total_Manhours);
                        {
                            gf.Teams = req.Teams;
                        }
                        team.SubmitChanges();
                        return Ok(gf);
                    }
                }
                else
                {
                    return Unauthorized();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message); 
            }
        }
    }
}
