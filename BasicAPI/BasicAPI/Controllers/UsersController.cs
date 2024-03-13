using BasicAPI;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static System.Net.Mime.MediaTypeNames;
using System.Runtime.Intrinsics.X86;
using Microsoft.Extensions.Logging;

namespace BasicAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        public static int identity = 1;

        static List<User> users = new List<User>
        {
            new User(identity++, "John Doe", "123 Main St", "john@example.com", "password123"),
            new User(identity++, "Jane Smith", "456 Elm St", "jane@example.com", "password456"),
            new User(identity++, "Alice Johnson", "789 Oak St", "alice@example.com", "password789"),
            new User(identity++, "AAA", "789 Oak St", "alice@example.com", "123")
        };

        [HttpGet]
        public IEnumerable<User> GetAllusers()
        {
            return users;
        }

        [HttpGet("{id}")]
        public User? GetById(int id)
        {
            var eve = users.Find(e => e.Id == id);
            return eve;
        }
        //post/put/delete
        // POST api/<usersController>
        [HttpPost("add")]
        public bool Post([FromBody] User u)
        {
            if (u != null)
            {
                u.Id = identity++;
                users.Add(u);
                return true;
            }return false;
            
        }

        

        // DELETE api/<usersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var eve = users.Find(e => e.Id == id);
            if(eve != null)
            users.Remove(eve);
        }
    }
}
