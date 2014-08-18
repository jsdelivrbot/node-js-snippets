using System;
using System.Web.Mvc;

namespace Angular_WebApi_Jasmine.Controllers
{
    public class JasmineController : Controller
    {
        public ViewResult Run()
        {
            return View("SpecRunner");
        }
    }
}
