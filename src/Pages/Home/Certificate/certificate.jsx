const Certificate = () => {
  const certificateData = [
    {
      id: "1nRPrVxOIIVWv-bLYg-stR7nLzfkRFK8w",
      name: "Full stack web development course",
      subtitle:
        "Completed Full stack Web Development Course with Programming Hero",
      image: "https://ibb.co/hRVf8F1",
    },
  ];

  const handleDownload = (certificateId) => {
    if (!certificateId) {
      console.error("No certificate ID provided");
      return;
    }
    const downloadLink = `https://drive.google.com/uc?export=download&id=${certificateId}`;
    const downloadElement = document.createElement("a");
    downloadElement.href = downloadLink;
    downloadElement.click();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1">
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
                onClick={() => handleDownload(certificate.id)}
                className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base"
              >
                Download Now
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certificate;
