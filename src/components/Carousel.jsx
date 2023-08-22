import React, { useState, useEffect } from "react";

const Carousel = () => {
  let [index, setIndex] = useState(0);
  const images = [
    {
      title: "City1",
      url: "https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/04/mejores-lugares-turisticos-1.jpg",
      city: "isla de Honshu",
      country: "Japan",
    },
    {
      title: "City2",
      url: "https://www.costacruceros.com/content/dam/costa/costa-magazine/article-images/what-to-see-in-argentina/argentina-buenos-aires_2.jpg.image.694.390.low.jpg",
      city: "Buenos Aires",
      country: "Argentina",
    },
    {
      title: "City3",
      url: "https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/04/mejores-sitios-turisticos-1.jpg",
      city: "Bahía de Ha-Long de Vietnam",
      country: "Asia",
    },
    {
      title: "City4",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/6d/45/da/dinning-area.jpg?w=600&h=400&s=1",
      city: "Lamu",
      country: "Kenya",
    },
    {
      title: "City5",
      url: "https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/04/Mejores-sitios-tur%C3%ADsticos.jpg",
      city: "Bora Bora",
      country: "French Polynesia",
    },
    {
      title: "City6",
      url: "https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/03/Lugares-tur%C3%ADsticos.jpg",
      city: "San Francisco",
      country: "United States",
    },
    {
      title: "City7",
      url: "https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/03/Sitios-tur%C3%ADsticos-en-el-mundo.jpg",
      city: "Dubái",
      country: "United Arab Emirates",
    },
    {
      title: "City8",
      url: "https://www.swedishnomad.com/wp-content/images/2020/03/Largest-Cities-in-Colombia.jpg",
      city: "Colombia",
      country: "Colombia",
    },
    {
      title: "City9",
      url: "https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/04/mejores-lugares-turisticos.jpg",
      city: "Istanbul",
      country: "Turkey",
    },
    {
      title: "City10",
      url: "https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/04/lugares-turisticos-1.jpg",
      city: "Ahu Tongariki, Isla de Pascua",
      country: "Chile",
    },
    {
      title: "City11",
      url: "https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/04/sitios-turisticos-2.jpg",
      city: "Stonehenge",
      country: "England",
    },
    {
      title: "City12",
      url: "https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/04/mejores-sitios-turisticos.jpg",
      city: "Teotihuacán",
      country: "Mexico",
    },
  ];
  const handlePrev = () => {
    index > 0 ? setIndex(index - 4) : setIndex(8);
  };

  const handleNext = () => {
    index < 8 ? setIndex(index + 4) : setIndex(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < 8) {
        setIndex(index + 4);
      } else {
        setIndex(0);
      }
    }, 4000);
    return () => {
      clearInterval(timer);
    };
  }, [index]);
  return (
    <>
      <div className="min-h-[60vh] bg-white relative">
        <h2 className="text-center text-black font-bold font-customFont2 text-xl p-4">
          Popular MYTINERARIES
        </h2>
        <div className="md:mx-20 h-[70vh] grid grid-cols-2 grid-rows-2 relative">
          {images.slice(index, index + 4).map((image, idx) => (
            <div key={idx} className="relative group">
              <img
                className="absolute inset-0 object-cover object-center h-full w-full"
                src={image.url}
                alt=""
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <p
                  className={`text-sm text-center font-medium uppercase tracking-widest ${
                    idx % 2 === 0 ? "text-red-500" : "text-yellow-400"
                  }`}
                >
                  {image.city}
                </p>
                <p
                  className={`text-xl text-center font-bold ${
                    idx % 2 === 0 ? "text-green-100" : "text-green-400"
                  } sm:text-2xl`}
                >
                  {image.country}
                </p>
              </div>
            </div>
          ))}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-indigo-50 w-10 h-10 flex justify-center items-center rounded-full hover:bg-teal-200"
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-indigo-50 w-10 h-10 flex justify-center items-center rounded-full hover:bg-teal-200"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
export default Carousel;
