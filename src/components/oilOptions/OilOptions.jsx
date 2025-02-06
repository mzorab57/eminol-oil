import React, { useState } from "react";

const oilOptions = [
  { value: "0W16", label: "0W-16", image: "/assets/img/search/0w16.jpg" },
  { value: "0W20", label: "0W-20 GDI", image: "/assets/img/search/0w20.jpg" },
  { value: "0W30", label: "0W-30", image: "/assets/img/search/0w30.jpg" },
  { value: "0W40", label: "0W-40", image: "/assets/img/search/0w40.jpg" },
  { value: "5W20", label: "5W-20 DXS - GDI", image: "/assets/img/search/5w20.jpg" },
  { value: "5W30", label: "5W-30", image: "/assets/img/search/5w30.jpg" },
  { value: "5W40", label: "5W-40", image: "/assets/img/search/5w40.jpg" },
  { value: "10W30", label: "10W-30", image: "/assets/img/search/10w30.jpg" },
  { value: "10W40", label: "10W-40 SN - CF", image: "/assets/img/search/10w40.jpg" },
  { value: "15W40", label: "15W-40", image: "/assets/img/search/15w40.jpg" },
  { value: "20W50", label: "20W-50", image: "/assets/img/search/20w50.jpg" },
  { value: "15W40C14", label: "15W-40 C14 GASOLINE", image: "/assets/img/search/15w40 CI4.jpg" },
  { value: "20W50C14", label: "20W-50 C14 GASOLINE", image: "/assets/img/search/20w50CI4.jpg" },
  // { value: "ATF_CVT_Fluid", label: "ATF CVT Fluid", image: "/assets/img/search/atf_cvt_fluid.jpg" },
  // { value: "ATF_Dexron_VI", label: "ATF DEXRON VI", image: "/assets/img/search/atf_dexron_vi.jpg" }
];


export default function OilSelectApp() {
  const [selectedOil, setSelectedOil] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto max-w-screen-md p-4">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Select Oil Type
      </h1>
      <select
        className="w-full text-sm border border-red-800 focus:border-red-800 focus:outline-none bg-black text-white p-3 mb-4"
        onChange={(e) => setSelectedOil(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled className="border border-red-800">
          Select Oil Type
        </option>
        {oilOptions.map((oil) => (
          <option
            key={oil.value}
            value={oil.value}
            className="border border-red-800"
          >
            {oil.label}
          </option>
        ))}
      </select>

      {selectedOil && (
        <div className="p-4 shadow-lg mt-4 rounded-lg text-center">
          <h2 className="text-xl font-bold mb-4">
            {selectedOil} Oil Information
          </h2>
          <img
            src={oilOptions.find((oil) => oil.value === selectedOil).image}
            alt={`${selectedOil} Information`}
            className="rounded-lg max-w-full sm:max-w-md mx-auto block cursor-pointer"
            onClick={handleImageClick}
          />
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="hidden xl:block">
          <div className="fixed inset-0 bg-black  bg-opacity-75 flex  items-center justify-center z-50">
            <div className="relative bg-white   rounded-lg max-w-full sm:max-w-4xl p-6">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-black font-bold text-lg"
              >
                ✕
              </button>
              <img
                src={oilOptions.find((oil) => oil.value === selectedOil).image}
                alt={`${selectedOil} Information`}
                className="rounded-lg max-w-full h-[50rem]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
