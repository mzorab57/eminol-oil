import React from "react";
import { MoreBtn } from "../Button/Button";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <div className="col">
      <div className="h-100">
        <div className="blog-card flex justify-center items-center " data-aos="fade-up" data-aos-delay="100">
          <Link
            // to={`/blog-single/${post.id}`}
            aria-label={`Read more about ${post.title}`}
          >
            <div className="flex justify-center items-center ">
              <img src={`${post.imageUrl}`} alt={post.title} className="h-64 hover:scale-100 duration-300 lg:scale-110  " />
            </div>
          </Link>
          <div className="blog-body-info">
            <p className="blog-text">{""}</p>
            {/* <Link to={`/blog-single/${post.id}`} className="blog-title">
              {post.title}
            </Link> */}
          </div>
          <div className="blog-footer-info font-bold">
            <MoreBtn  className="more-btn">
            {post.title}
            </MoreBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
