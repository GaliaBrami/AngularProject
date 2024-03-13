namespace BasicAPI
{
    public enum EnumLearningMode
    {
        Frontally,
        Zoom
    }
    public class Course
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CategoryId { get; set; }
        public int NumberOfLessons { get; set; }
        public DateTime StartDate { get; set; }
        public List<string> Syllabus { get; set; }
        public EnumLearningMode LearningMode { get; set; }
        public int LecturerId { get; set; }
        public string Image { get; set; }
        public Course()
        {

        }
        public Course(int id, string name, int categoryId, int numberOfLessons, DateTime startDate,
                  List<string> syllabus, EnumLearningMode learningMode, int lecturerId, string image)
        {
            Id = id;
            Name = name;
            CategoryId = categoryId;
            NumberOfLessons = numberOfLessons;
            StartDate = startDate;
            Syllabus = syllabus;
            LearningMode = learningMode;
            LecturerId = lecturerId;
            Image = image;
        }public Course(Course other)
        {
            Id = other.Id;
            Name = other.Name;
            CategoryId = other.CategoryId;
            NumberOfLessons = other.NumberOfLessons;
            StartDate = other.StartDate;
            Syllabus = other.Syllabus;
            LearningMode = other.LearningMode;
            LecturerId = other.LecturerId;
            Image = other.Image;
        }
    }
}
