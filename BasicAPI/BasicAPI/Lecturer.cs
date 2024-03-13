
namespace BasicAPI
{
    public class Lecturer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string CourseName { get; set; }

        public Lecturer(int id, string name, string address, string email, string password,string courseName)
        {
            Id = id;
            Name = name;
            Address = address;
            Email = email;
            Password = password;
            CourseName = courseName;
        }
        public Lecturer()
        {

        }
    }



}
