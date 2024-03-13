using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BasicAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private static int identity = 3;
        private static List<Course> courses = new List<Course>
        {
            new Course(1, "Introduction to Programming", 1, 10, DateTime.Parse("2024-03-10"), new List<string>{"Introduction", "Basic Syntax"}, EnumLearningMode.Zoom, 4, "\\assets\\pictures\\p1.jpg"),
            new Course(2, "Data Structures and Algorithms", 2, 15, DateTime.Parse("2024-03-15"), new List<string>{"Arrays", "Linked Lists", "Sorting Algorithms"}, EnumLearningMode.Frontally, 4, "\\assets\\pictures\\p2.webp"),
        };

        [HttpGet]
        public IEnumerable<Course> GetCourses()
        {
            return courses;
        }

        [HttpGet("{id}")]
        public Course GetById(int id)
        {
            var course = courses.FirstOrDefault(e => e.Id == id);
            return course;
        }

        [HttpPost]
        public Course Post([FromBody] Course c)
        {
            c.Id = identity++;
            courses.Add(c);
            return c;
        }

        [HttpPut("{id}")]
        public Course? Put(int id, [FromBody] Course c)
        {
            var course = courses.FirstOrDefault(e => e.Id == id);
            if (course == null) 
                return null;

            // Update course properties
            course.CategoryId = c.CategoryId;
            course.StartDate = c.StartDate;
            course.NumberOfLessons = c.NumberOfLessons;
            course.LecturerId = c.LecturerId;
            course.Syllabus = c.Syllabus;
            course.Image = c.Image;
            course.LearningMode = c.LearningMode;
            course.Name = c.Name;

            return course;
        }

        [HttpDelete("{id}")]
        public Course? Delete(int id)
        {
            var course = courses.FirstOrDefault(e => e.Id == id);
            if (course == null)
                return null;

            courses.Remove(course);
            return course;
        }
    }
}
