using Microsoft.AspNetCore.Mvc;

namespace BasicAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategotyController : Controller
    {
        public static int identity = 5;

        static List<Category> l = new List<Category>
        {
            new Category(1, "math",""),
            new Category(2, "english",""),
            new Category(3, "bake", ""),
            new Category(4, "AAA","123")
        };

        [HttpGet]
        public IEnumerable<Category> GetAllusers()
        {
            return l;
        }
    }
}
