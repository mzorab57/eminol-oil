import React from "react";
import { CtaBtn } from "../Button/Button";

const ctaData = {
  title: "Get in touch with our experts",
  description:
    "Find contact information, Chevron has always put people at the center of the energy conversation. Because we understand that the well-being of people everywhere depends on energy.",
};

const Cta = () => {
  const { title, description } = ctaData;

  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="cta" data-aos="fade-right">
        <span className="border-pr"></span>
        <span className="border-wh"></span>
        <div className="cta-info">
          <h2 className="cta-title text-3xl" data-aos="fade-left" data-aos-delay="100">
          Get in touch with our experts
          </h2>
          <p className="cta-desp">{description}</p>
          <CtaBtn to="/contact">GET IN TOUCH WITH US</CtaBtn>
        </div>
      </div>
    </div>
  );
};

export default Cta;
