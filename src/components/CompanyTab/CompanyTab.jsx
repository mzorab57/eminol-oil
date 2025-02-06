import { useState } from "react";

const tabContents = [
  {
    title: "energy",
    description:
      "We work every day to provide energy that helps billions of people achieve the benefits of modern life. And to create solutions that will help advance a lower carbon future.",
  },
  {
    title: "Robots",
    description:
      "Robots, drones, machine learning, artificial intelligence and beyond. Digital technologies are helping us integrate data, reduce costs and enhance safety.",
  },
  {
    title: "History",
    description:
      "We’ve always believed in the power of human ingenuity. A group of explorers successfully struck oil in California in 1876. Three years later our company entered the industry in 1879. Our spirit has been driven by integrity, trust, and innovation. And we’ve continued our purpose to provide the affordable, reliable, ever-cleaner energy that enables human progress.",
  },
];

const CompanyTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="company-tab">
        <ul className="tabs">
          {tabContents?.map((tab, index) => (
            <li
              key={index}
              className={activeTab === index ? "active-tab" : ""}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </li>
          ))}
        </ul>

        <div className="tabs-content">
          <div className="list">
            <div className="ak-section-heading ak-style-1 ak-type-1">
              <div className="background-text">About Company</div>
              <h3 className="desp">{tabContents[activeTab].description}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyTab;
