import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 🔥 BIG SLIDER IMAGES
const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
];

// 🔥 CARD DATA
const cardData = [
  {
    title: "Shoes",
    images: [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg",
    ],
  },
  {
    title: "Clothes",
    images: [
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg",
      "/images/1.jpg",
    ],
  },
  {
    title: "Electronics",
    images: [
      "/images/3.jpg",
      "/images/4.jpg",
      "/images/1.jpg",
      "/images/2.jpg",
    ],
  },
  {
    title: "Accessories",
    images: [
      "/images/4.jpg",
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
    ],
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [cardIndex, setCardIndex] = useState([0, 0, 0, 0]);

  // 🔄 BIG SLIDER AUTO
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 🔄 CARD SLIDERS AUTO
  useEffect(() => {
    const interval = setInterval(() => {
      setCardIndex((prev) =>
        prev.map((val, i) => (val + 1) % cardData[i].images.length),
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // 🔥 CONTROLS
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-8">
        {/* 🔥 BIG SLIDER */}
        <div className="relative rounded-3xl overflow-hidden mb-8 group">
          <img
            src={images[current]}
            alt="banner"
            className="w-full h-[350px] object-cover transition duration-700"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex flex-col justify-center px-10">
            <h1 className="text-4xl font-extrabold text-white mb-4">
              Big Sale is Live 🔥
            </h1>

            <p className="text-white/80 mb-6">
              Up to 50% discount on selected products
            </p>

            <button className="w-fit bg-white text-black px-6 py-2 rounded-lg font-medium hover:scale-105 transition">
              Shop Now
            </button>
          </div>

          {/* ◀ PREV */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>

          {/* ▶ NEXT */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>

          {/* 🔵 DOTS */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${
                  current === index ? "bg-white scale-110" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 🔽 SMALL CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* 🔥 ANIMATED IMAGE */}
              <div className="relative w-full h-40 overflow-hidden">
                {item.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700
                      ${
                        cardIndex[index] === i
                          ? "opacity-100 translate-x-0 z-10"
                          : "opacity-0 translate-x-5 z-0"
                      }
                    `}
                  />
                ))}
              </div>

              {/* TEXT */}
              <div className="p-4">
                <h3 className="font-semibold mb-2">{item.title}</h3>

                <p className="text-sm text-gray-500 mb-3">Explore products</p>

                <button className="text-blue-600 text-sm font-medium hover:underline">
                  Shop →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
