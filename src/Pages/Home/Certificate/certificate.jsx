import { useState } from "react";

const Certificate = () => {
  const certificateData = [
    {
      id: "1nRPrVxOIIVWv-bLYg-stR7nLzfkRFK8w",
      name: "Full stack web development course",
      subtitle:
        "Completed Full stack Web Development Course with Programming Hero",
      image: "https://i.ibb.co/pxkhpct/certificate-page-0001.jpg",
    },
    {
      id: "1nRPrVxOIIVWv-bLYg-stR7nLzfkRFK8",
      name: "Responsive web design course",
      subtitle:
        "Completed Responsive web design Video course Elearn DB in bangladesh",
      image: "https://i.ibb.co/VWTrC36/web-design.jpg",
    },
    {
      id: "1nRPrVxOIIVWv-bLYg-stR7nLzfkRFK9",
      name: "programming Hero Language Club",
      subtitle:
        "Completed programming Hero Language Club in bangladesh",
      image: "https://i.ibb.co.com/dGW4PyT/Shahsultan-Islam-Joy-page-0001.jpg",
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleClickToOpen = (certificate) => {
    setSelectedCertificate(certificate);
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <div>
      <div className="flex gap-2 sm:flex-wrap-reverse mt-24 ">
        {certificateData.map((certificate, index) => (
          <div
            key={index}
            className="mx-auto max-w-[350px] space-y-4 rounded-lg p-6 shadow-lg md:w-[350px] bg-[#222D56] mb-4"
          >
            <img
              width={200}
              height={200}
              className="h-[275px] w-[350px] rounded-lg object-cover"
              src={
                certificate.image || "https://source.unsplash.com/200x200/?bed"
              }
              alt={certificate.name}
            />
            <div className="grid gap-2">
              <h1 className="text-lg font-semibold">{certificate.name}</h1>
              <p className="text-sm text-[#94a1cf]">{certificate.subtitle}</p>
            </div>
            <div className="text-center">
              {certificate.id && (
                <button
                  onClick={() => handleClickToOpen(certificate)}
                  className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base"
                >
                  Show Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {open && selectedCertificate && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg p-4">
            <button
              onClick={handleToClose}
              className="absolute text-red-500 bg-black rounded-full text-2xl top-2 right-2"
            >
              &times;
            </button>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.name}
              className="h-auto w-full max-w-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
