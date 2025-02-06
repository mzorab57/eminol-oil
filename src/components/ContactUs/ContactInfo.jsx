import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";

const contactData = [
  {
    label: "Mail",
    icon: "/assets/img/icon/email.svg",
    info: ["info@eminoloil.com"],
  },
  {
    label: "Location",
    icon: "/assets/img/icon/location.svg",
    info: ["GMR9+7QR Emirate of Umm Al Quwain - UAE"],
  },
  {
    label: "Phone",
    icon: "/assets/img/icon/phone.svg",
    info: ["+971501997884"],
  },
  {
    label: "Open Hour",
    icon: "/assets/img/icon/date-icon.svg",
    info: ["Mon - Thu: Online","Sat - Sun: Offline"],
  },
];

const ContactInfo = () => {
  return (
    <div className="container mt-7">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="contact-info">
        <div className="left-info" data-aos="fade-right">
          <div className="content">
            <SectionHeading
              bgText={"Contact"}
              title={"Contact"}
              desp={
                " There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form."
              }
            />
          </div>
        </div>

        <div className="right-info">
          {contactData.map((item, index) => (
            <div className="info-card" key={index} data-aos="fade-left">
              <p>{item.label} :</p>
              <div className="d-flex gap-2 align-items-center">
                <div>
                  <img src={item.icon} alt={item.label} />
                </div>
                <div>
                  {item.info.map((info, idx) => (
                    <p key={idx}>{info}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
