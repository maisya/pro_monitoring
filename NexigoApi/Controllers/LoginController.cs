using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using NexigoApi.Models;
using System.Web;
using System.Web.Http.WebHost;
using System.Web.SessionState;
using System.Web.Routing;


namespace NexigoApi.Controllers
{
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public class LoginController : ApiController
        {
            private ProjectMonitorDataContext context = null;

            public LoginController()
            {
                context = new ProjectMonitorDataContext();
            }

            [HttpPost]
            public IHttpActionResult Log([FromBody] Employee req)
            {
                try
                {
                    if (req != null)
                    {
                        var result = string.Empty;
                        using (var dc = new ProjectMonitorDataContext())
                        {
                            var user = dc.Employees.Where(o => o.Name == req.Name && o.Password == req.Password).SingleOrDefault();
                            return Ok(user);
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