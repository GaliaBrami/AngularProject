using Microsoft.AspNetCore.Mvc;

namespace BasicAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LecturerController : Controller
    {
        public static int identity = 5;

        static List<Lecturer> l = new List<Lecturer>
        {
            new Lecturer(1, "John Doe", "123 Main St", "john@example.com", "password123","comp"),
            new Lecturer(2, "Jane Smith", "456 Elm St", "jane@example.com", "password456","math"),
            new Lecturer(3, "Alice Johnson", "789 Oak St", "alice@example.com", "password789","english"),
            new Lecturer(4, "AAA", "789 Oak St", "alice@example.com", "123","aaa")
        };

        [HttpGet]
        public IEnumerable<Lecturer> GetAllusers()
        {
            return l;
        }
        //public IActionResult Index()
        //{
        //    return View();
        //}
    }
}
