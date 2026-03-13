import { Link } from "react-router-dom";
import { useEffect } from "react";

// import Header from "@/components/landing/Header";
// import Footer from "@/components/landing/Footer";

import blog1 from "@/assets/blog/blog1.jpg";
import banner from "@/assets/blog/banner.jpg";

const Blog = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const posts = [
    {
      id: 1,
      title: "5 Benefits of AI Screening for Efficient Field Worker Recruitment",
      // excerpt:
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      // date: "March 13, 2026",
      // readTime: "5 min read",
      image: blog1,
      link: "/blog/5-benefits-of-ai-screening-for-efficient-field-worker-recruitment",
    },
  ];

  return (
    <>
      {/* Header */}
      {/* <Header onOpenContactModal={() => {}} /> */}

      {/* Banner */}
      <section className="relative h-[420px] mt-[-120px]">

        {/* Background Image */}
        <img
          src={banner}
          alt="Blog Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mt-[200px]">
              Blog
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              Welcome to our blog. Explore insights, updates, and helpful articles.
            </p>
          </div>
        </div>

      </section>

      {/* Blog Section */}
      <section className="bg-background py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {posts.map((post) => (

              <article
                key={post.id}
                className="group border border-border rounded-2xl overflow-hidden bg-card hover:shadow-xl transition-all duration-300 flex flex-col"
              >

                <div className="h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">

                  <div className="flex justify-between text-sm text-muted-foreground mb-3">
                    {/* <span>{post.date}</span> */}
                    {/* <span>{post.readTime}</span> */}
                  </div>

                  <h2 className="text-xl font-semibold mb-3 leading-snug">
                    {post.title}
                  </h2>

                  {/* <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                    {post.excerpt}
                  </p> */}

                  <Link
                    to={post.link}
                    className="inline-flex items-center justify-center mt-auto text-primary font-medium hover:underline"
                  >
                    Read More →
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
};

export default Blog;