import React from "react";
import { Link } from "react-router-dom";
import TextAnimation from "../../components/TextAnimation/TextAnimation";

import footerLogo from "/assets/img/icon/logo.png";

const footerDataArray = [
  {
    className: "footer-info",
    dataAosDelay: "0",
    phone: "+971501997884",
    desp: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    className: "footer-menu-one",
    dataAosDelay: "50",
    links: [
      { title: "About", link: "/about" },
      { title: "Service", link: "/service" },
      { title: "Contact Us", link: "/contact" },
    ],
  },
  {
    className: "footer-menu-two",
    dataAosDelay: "100",
  },
  {
    className: "footer-address",
    dataAosDelay: "150",
    address: "GMR9+7QR Emirate of Umm Al Quwain - UAE",
    email: "info@eminoloil.com",
  },
];

const Footer = () => {
  return (
    <>
      <div className="h-32 lg:h-20"></div>
      <footer className="footer bg-black text-white py-10">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div
            className="footer-email text-center"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
          >
            <div
              className="background-text text-4xl lg:text-6xl font-bold text-gray-700"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              {/* EMINOL */}
            </div>
          </div>
          <div className="my-8 border-t border-red-500"></div>

          {/* Footer Logo */}
          <div className="flex justify-start lg:justify-center">
            <img src={footerLogo} alt="footer-logo" className="w-40" />
          </div>
          <div className="h-4 lg:h-6"></div>

          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-start  md:text-left">
            {footerDataArray.map((item, index) => (
              <div
                key={index}
                className=""
                data-aos="fade-up"
                data-aos-delay={item.dataAosDelay}
                data-aos-duration="500"
              >
                {item.phone && (
                  <>
                    <p className="text-gray-400 text-sm">{item.desp}</p>
                    <div className="mt-4 flex items-center justify-start md:justify-center gap-2">
                      <Link to={`tel:${item.phone}`}>
                        <img
                          src="/assets/img/icon/phone.svg"
                          alt="Phone"
                          className="w-8  border-8 border-red-500/50 bg-red-500 p-1 rounded-full"
                        />
                      </Link>
                      <TextAnimation
                        link={`tel:${item.phone}`}
                        title={item.phone}
                        classNamePass="text-white text-lg font-semibold"
                      />
                    </div>
                  </>
                )}
                {item.links && (
                  <div className="footer-menu">
                    <p className="menu-title text-lg font-semibold mb-2">
                      QUICK LINKS
                    </p>
                    <ul className="space-y-2">
                      {item.links.map((link, idx) => (
                        <li key={idx}>
                          <TextAnimation
                            link={link.link}
                            title={link.title}
                            classNamePass="text-gray-300 hover:text-white"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.address && (
                  <div className="footer-address">
                    <p className="text-lg font-semibold mb-2">
                      LOCATION & CONTACT
                    </p>
                    <Link
                      to="https://www.google.com/maps?q=25.5407371520996,55.669376373291"
                      target="_blank"
                      className="text-gray-300 hover:text-white flex items-center gap-2"
                    >
                      <img
                        src="/assets/img/icon/location.svg"
                        alt="Location"
                        className="w-5"
                      />
                      {item.address}
                    </Link>
                    <Link
                      to={`mailto:${item.email}`}
                      className="text-gray-300 hover:text-white flex items-center gap-2 mt-2"
                    >
                      <img
                        src="/assets/img/icon/email.svg"
                        alt="Email"
                        className="w-5"
                      />
                      {item.email}
                    </Link>
                    <p className="mt-2 text-sm text-gray-400">
                      <span>Mon - Thu: Online</span>
                      <br />
                      <span>Sat - Sun: Offline</span>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="my-8 border-t border-red-500"></div>

          {/* Social Links */}
          <div className="flex flex-col lg:flex-row justify-around items-center">
            <p className="text-sm text-gray-500">
              © 2024, Build by TOP SOFT
            </p>
            <div className="flex gap-4 mt-4 lg:mt-0">
              <Link
                to="https://www.facebook.com/share/1CrpV82aLT/?mibextid=wwXIfr"
                className="hover:opacity-80"
              >
                <img
                  src="/assets/img/icon/facebookicon.svg"
                  alt="Facebook"
                  className="w-6"
                />
              </Link>
              {/* <Link className="hover:opacity-80">
                <img
                  src="/assets/img/icon/linkedinicon.svg"
                  alt="LinkedIn"
                  className="w-6"
                />
              </Link> */}
              {/* <Link className="hover:opacity-80">
                <img
                  src="/assets/img/icon/twittericon.svg"
                  alt="Twitter"
                  className="w-6"
                />
              </Link> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;


