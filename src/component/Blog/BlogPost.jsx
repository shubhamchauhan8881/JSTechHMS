import Badge from "./Badge";
import Card from "./Card";

const blogPosts = [
  {
    date: "Sunday, 1 Jan 2024",
    title: "Understanding the Importance of Regular Health Screenings",
    description: "Regular health screenings play a critical role in preventive healthcare. This article discusses the benefits of routine screenings, including early detection and improved health outcomes.",
    image: "HMS1.jpg",
    tags: ["Design", "Research", "Presentation"],
    href: "#"
  },
  {
    date: "Sunday, 1 Jan 2024",
    title: "Top 10 Tips for a Heart-Healthy Lifestyle",
    description: "Heart health is essential to overall wellbeing, and adopting healthy habits can significantly reduce the risk of cardiovascular disease.",
    image: "HMS2.jpg",
    href: "#"
  },
  {
    date: "Sunday, 1 Jan 2023",
    title: "The Benefits of Telemedicine: Healthcare at Your Fingertips",
    description: "Telemedicine is transforming the healthcare landscape, offering convenient access to healthcare professionals from the comfort of home.",
    image: "HMS3.jpg",
    href: "#"
  },
  {
    date: "Sunday, 1 Jan 2024",
    title: "Understanding the Importance of Regular Health Screenings",
    description: "Regular health screenings play a critical role in preventive healthcare. This article discusses the benefits of routine screenings, including early detection and improved health outcomes.",
    image: "HMS1.jpg",
    tags: ["Design", "Research", "Presentation"],
    href: "#"
  },
  {
    date: "Sunday, 1 Jan 2024",
    title: "Top 10 Tips for a Heart-Healthy Lifestyle",
    description: "Heart health is essential to overall wellbeing, and adopting healthy habits can significantly reduce the risk of cardiovascular disease.",
    image: "HMS2.jpg",
    href: "#"
  },
  {
    date: "Sunday, 1 Jan 2023",
    title: "The Benefits of Telemedicine: Healthcare at Your Fingertips",
    description: "Telemedicine is transforming the healthcare landscape, offering convenient access to healthcare professionals from the comfort of home.",
    image: "HMS3.jpg",
    href: "#"
  }
];

const BlogPosts = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8">Recent blog posts</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Card key={index}>
            <a href={post.href} className="block">
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {post.description}
                </p>
                {post.tags && (
                  <div className="flex flex-wrap">
                    {post.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                )}
              </div>
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;

