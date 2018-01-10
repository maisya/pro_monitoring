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
    public class SelectResult
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
    }

    public class GetRead
    {
        public List<SelectResult> data { get; set; }
        public int total { get; set; }
    }

    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CRUDController : ApiController
    {
        private Makers1DataContext context = null;
        public CRUDController()
        {
            context = new Makers1DataContext();
        }


        [HttpPost]
        public IHttpActionResult Create ([FromBody] Siswa req)
        {
            var result = new List<SelectResult>();
            using (var dc = new Makers1DataContext())
            {
                var data = new Siswa()
                {
                    Username = req.Username,
                    Password = req.Password,
                    Firstname = req.Firstname,
                    Lastname = req.Lastname
                };
                
                dc.Siswas.InsertOnSubmit(data);
                dc.SubmitChanges();
            }
            return Ok(result);
        }

        [HttpPost]
        public GetRead ReadAll()
        {
            var query = from Baca in context.Siswas
                        select new SelectResult
                        {
                            Id = Baca.Id,
                            Username = Baca.Username,
                            Password = Baca.Password,
                            Firstname = Baca.Firstname,
                            Lastname = Baca.Lastname
                        };
            GetRead getdata = new GetRead
            {
                data = query.ToList(),
                total = query.ToList().Count
            };

            return getdata;
        }

        [HttpPost]
        public IHttpActionResult UpdateData([FromBody] Siswa req)
        {
            try
            {
                if (req != null)
                {
                    using (var dc = new Makers1DataContext())
                    {
                        var data = dc.Siswas.FirstOrDefault(o => o.Username == req.Username);
                        data.Username = req.Username;
                        data.Password = req.Password;
                        data.Firstname = req.Firstname;
                        data.Lastname = req.Lastname;
                        dc.SubmitChanges();

                        return Ok(data);

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

        [HttpPost]
        public IHttpActionResult DeleteData(string Username)
        {
            try
            {
                if (Username != null)
                {
                    using (var dc = new Makers1DataContext())
                    {
                        var data = dc.Siswas.FirstOrDefault(o => o.Username == Username);
                        dc.Siswas.DeleteOnSubmit(data);
                        dc.SubmitChanges();
                        return Ok(data);

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
