import Card from "./Card";
import FeaturedCard from "./FeaturedCard";

const BlogPosts = () =>{
 const featuredPost = {
    date: "Sunday, 1 Jan 2024",
    title: "Understanding the Importance of Regular Health Screenings",
    description: "Regular health screenings play a critical role in preventive healthcare. This article discusses the benefits of routine screenings, including early detection and improved health outcomes.",
    image: "HMS1.jpg",
     tags :[{name : "Design", bg : "#F9F5FF", textColor: "#6941C6"}, {name : "Research", bg : "#EEF4FF", textColor: "#3538CD"}, {name : "Presentation", bg : "#FDF2FA", textColor: "#C11574"}],
    href: "#"
  }

  const recentPosts= [
    {
      date: "Sunday, 1 Jan 2024",
      title: "Top 10 Tips for a Heart-Healthy Lifestyle",
      description: "Heart health is essential to overall wellness, and adopting healthy habits can significantly reduce the risk of cardiovascular disease.",
      image: "HMS2.jpg",
      tags: [{name : "Design", bg : "#F9F5FF", textColor: "#6941C6"}, {name : "Research", bg : "#EEF4FF", textColor: "#3538CD"}, {name : "Presentation", bg : "#FDF2FA", textColor: "#C11574"}],
      href: "#"
    },
    {
      date: "Sunday, 1 Jan 2023",
      title: "The Benefits of Telemedicine: Healthcare at Your Fingertips",
      description: "Telemedicine is transforming the healthcare landscape, offering convenient access to healthcare professionals from the comfort of home.",
      image: "HMS3.jpg",
      href: "#"
    }
  ]

  return (
    <>
    <section className="max-w-7xl mx-auto  sm:px-6 lg:px-8 py-12 font-afacad">
      <h2 className="text-5xl font-bold mb-12">Recent blog posts</h2>
      
      {/* Featured Post */}
      <FeaturedCard props={featuredPost} />

      {/* Recent Posts */}
      <div className="space-y-8 my-8">
        {recentPosts.map((post, index) => (
          <Card key={index} props={post} />
        ))}
      </div>
    </section>
    <section className="max-w-7xl mx-auto  sm:px-6 lg:px-8 py-2 font-afacad">
      <FeaturedCard props={featuredPost} />
    </section>
    <section className="max-w-7xl mx-auto  sm:px-6 lg:px-8 py-12 font-afacad">
      <h2 className="text-5xl font-bold mb-12">All blog posts</h2>

      <div className="space-y-8 my-8">
        {recentPosts.map((post, index) => (
          <Card key={index} props={post} />
        ))}
      </div>
    </section></>
  )
}

export default BlogPosts;

