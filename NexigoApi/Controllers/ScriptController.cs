using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace NexigoApi.Controllers
{
    public class valueDropdown
    {
        public string value { get; set; }
        public string text { get; set; }
    }

    public class Grid
    {
        public  string No { get; set; }
        public string Nama { get; set; }
        public string NIM { get; set; }
    }

    public class GetGrid
    {
        public int Total { get; set; }
        public List<Grid> data { get; set; }
    }

    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ScriptController : ApiController
    {
        [HttpPost]
        public List<valueDropdown> getData()
        {
            List<valueDropdown> data = new List<valueDropdown>();
            data.Add(new valueDropdown() { text = "Data1", value = "1" });
            data.Add(new valueDropdown() { text = "Data2", value = "99" });

            return data;
        }

        [HttpPost]
        public GetGrid gridData()
        {
            List<Grid> data = new List<Grid>();
            data.Add(new Grid() { No = "1", Nama = "Maisya", NIM = "123" });
            data.Add(new Grid() { No = "2", Nama = "Ayu", NIM = "124" });

            GetGrid get = new GetGrid
            {
                data = data,
                Total = data.Count
            };

            return get;
        }

    }
}
