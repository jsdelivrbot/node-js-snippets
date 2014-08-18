using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Angular_WebApi_Jasmine.Controllers
{
    public class TestController : ApiController
    {
        public int Get()
        {
            return 2;
        }
    }
}
