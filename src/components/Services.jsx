import React from "react";

function Services() {
  const services = [
    {
      title: "Corte",
    },
    {
      title: "Penteado",
    },
    {
      title: "Barba",
    },
    {
      title: "Massagem",
    },
    {
      title: "SPA",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-16">
      <div className="text-center">
        <h1 className="text-2xl font-light text-black">Serviços</h1>
        <div className="w-48 h-1 mx-auto bg-yellow-400 mt-2"></div>
      </div>
      <div className="flex flex-wrap justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4 gap-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white rounded shadow-lg cursor-pointer hover:shadow-xl hover:-translate-y-1 hover:transition-all hover:duration-300"
            style={{ width: "150px" }}
          >
            <div className="w-24 h-24 bg-black rounded-full mb-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-8 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M8.128 9.155a3.751 3.751 0 11.713-1.321l1.136.656a.75.75 0 01.222 1.104l-.006.007a.75.75 0 01-1.032.157 1.421 1.421 0 00-.113-.072l-.92-.531zm-4.827-3.53a2.25 2.25 0 013.994 2.063.756.756 0 00-.122.23 2.25 2.25 0 01-3.872-2.293zM13.348 8.272a5.073 5.073 0 00-3.428 3.57c-.101.387-.158.79-.165 1.202a1.415 1.415 0 01-.707 1.201l-.96.554a3.751 3.751 0 10.734 1.309l13.729-7.926a.75.75 0 00-.181-1.374l-.803-.215a5.25 5.25 0 00-2.894.05l-5.325 1.629zm-9.223 7.03a2.25 2.25 0 102.25 3.897 2.25 2.25 0 00-2.25-3.897zM12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
                <path d="M16.372 12.615a.75.75 0 01.75 0l5.43 3.135a.75.75 0 01-.182 1.374l-.802.215a5.25 5.25 0 01-2.894-.051l-5.147-1.574a.75.75 0 01-.156-1.367l3-1.732z" />
              </svg>
            </div>
            <h2 className="text-lg font-medium text-center">{service.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
