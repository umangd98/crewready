import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import blog1 from "@/assets/blog/blog1.jpg";
import blog2 from "@/assets/blog/7-Common-Problems-in-Field-Worker-Hiring-for-Landscaping-Companies.jpg";
import blog3 from "@/assets/blog/Why-Manual-Screening-Slows-Down-Landscaping-And-Irrigation-Hiring.webp";
import blog4 from "@/assets/blog/Field-Hiring.jpg";
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
      id: 4,
      title: "Structuring Your Field Hiring Pipeline for Maximum Efficiency",
      image: blog4,
      link: "/blog/structuring-your-field-hiring-pipeline-for-maximum-efficiency",
      alt: "Field Hiring",
    },
    {
      id: 3,
      title: "Why Manual Screening Slows Down Landscaping and Irrigation Hiring",
      image: blog3,
      link: "/blog/why-manual-screening-slows-down-landscaping-irrigation-hiring",
      alt: "Landscaping and Irrigation Hiring",
    },
    {
      id: 2,
      title: "7 Common Problems in Field Worker Hiring for Landscaping Companies",
      image: blog2,
      link: "/blog/7-common-problems-in-field-worker-hiring-for-landscaping-companies",
      alt: "Field Worker Hiring",
    },
    {
      id: 1,
      title: "5 Benefits of AI Screening for Efficient Field Worker Recruitment",
      image: blog1,
      link: "/blog/5-benefits-of-ai-screening-for-efficient-field-worker-recruitment",
      alt: "Field Worker Recruitment",
    },
  ];

  return (
    <>
      <Helmet>
        <title>CrewReady - Blog</title>
        <meta
          name="description"
          content="Explore insights, updates, and helpful articles on AI-powered field hiring."
        />
      </Helmet>

      {/* Banner */}
      <section className="relative h-[420px] mt-[-120px]">
        <img
          src={banner}
          alt="Blog Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mt-[200px]">
              Blog
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              Explore insights, updates, and helpful articles on AI-powered hiring.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="bg-background py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {posts.map((post) => (

              <Link
                to={post.link}
                key={post.id}
                aria-label={post.title}
                className="group block border border-border rounded-2xl overflow-hidden bg-card 
                hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >

                <article className="flex flex-col h-full cursor-pointer">

                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.alt}
                      className="w-full h-full object-cover 
                      group-hover:scale-110 transition duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">

                    <h2 className="text-xl font-semibold mb-3 leading-snug group-hover:text-primary transition">
                      {post.title}
                    </h2>

                    <span className="inline-flex items-center gap-2 mt-auto text-primary font-medium">
                      Read More
                      <span className="transform group-hover:translate-x-1 transition">
                        →
                      </span>
                    </span>

                  </div>

                </article>

              </Link>

            ))}

          </div>

        </div>
      </section>
    </>
  );
};

export default Blog;