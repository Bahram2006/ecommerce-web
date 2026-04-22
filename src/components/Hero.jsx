import { useState, useEffect } from "react";

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

// 🔥 CARD DATA (MULTI IMAGES)
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

  // 🔥 EACH CARD SLIDER INDEX
  const [cardIndex, setCardIndex] = useState([0, 0, 0, 0]);

  // 🔄 BIG SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 🔄 CARD SLIDERS
  useEffect(() => {
    const interval = setInterval(() => {
      setCardIndex((prev) =>
        prev.map((val, i) => (val + 1) % cardData[i].images.length),
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-8">
        {/* 🔥 BIG SLIDER */}
        <div className="relative rounded-3xl overflow-hidden mb-8">
          <img
            src={images[current]}
            alt="banner"
            className="w-full h-[350px] object-cover transition duration-700"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-10">
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
        </div>

        {/* 🔽 SMALL CARDS WITH SLIDER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <img
                src={item.images[cardIndex[index]]}
                alt={item.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition duration-500"
              />

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
