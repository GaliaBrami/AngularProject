namespace BasicAPI
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Icon { get; set; }
        public Category(int id, string name, string icon)
        {
            Id = id;
            Name = name;
            Icon = icon;
        }
        public Category()
        {

        }
    }
}
