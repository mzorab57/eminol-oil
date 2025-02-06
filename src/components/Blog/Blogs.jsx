import React from "react";
import BlogCard from "./BlogCard";
import SectionHeading from "../SectionHeading/SectionHeading";

const blogPosts = [
  {
    id: 1,
    eminol: "Eminol",
    title: "HQ OW-16",
    imageUrl: "/assets/img/blog/blog_3.png",
  },
  {
    id: 2,
    eminol: "Eminol",
    title: "SAE-5W-20",
    imageUrl: "/assets/img/blog/blog_1.png",
  },
  {
    id: 3,
    eminol: "Eminol",
    title: "SAE-10W-30",
    imageUrl: "/assets/img/blog/blog_2.png",
  },
];

const Blogs = () => {
  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <SectionHeading
        type={true}
        bgText="Products"
        title="Products"
        desp="Our car oil is engineered to reduce wear and tear, ensuring your engine runs smoothly even under the toughest conditions."
      />
      <div className="ak-height-50 ak-height-lg-50"></div>
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-5 g-lg-4">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
