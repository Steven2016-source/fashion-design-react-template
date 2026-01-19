import { useEffect, useState, useRef } from "react";
import design1 from "../assets/image1.jfif";
import design2 from "../assets/image2.jfif";
import design3 from "../assets/image3.jfif";
import design4 from "../assets/image4.jfif";
import design5 from "../assets/image5.jpeg";
import design6 from "../assets/image6.jpeg";
import design7 from "../assets/image7.jpeg";
import design8 from "../assets/image8.jpeg";
import design9 from "../assets/image10.jpeg";
import design10 from "../assets/image9.jpeg";
import design11 from "../assets/image10.jpeg";
import design12 from "../assets/image11.jpeg";
import design13 from "../assets/image12.jpeg";
import design14 from "../assets/image13.jpeg";
import design15 from "../assets/image14.jpeg";
import design16 from "../assets/image15.jpeg";

export default function Gallery() {
  const images = [design1, design2, design3, design4, design5, design6, design7, design8, design9, design10, design11, design12, design13, design14, design15, design16 ];

  const containerRef = useRef(null);
  const [visible, setVisible] = useState(
    new Array(images.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const children = containerRef.current.children;
    for (let i = 0; i < children.length; i++) {
      observer.observe(children[i]);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      className="py-16 px-6 bg-gray-100 text-center flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center"></h2>


      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center"
      >
        {images.map((src, i) => (
          <div
            key={i}
            data-index={i}
            className={`bg-white/20 backdrop-blur-md rounded-xl overflow-hidden shadow-lg
                        transform transition-all duration-700 ease-in-out
                        hover:scale-105 hover:shadow-2xl
                        ${
                          visible[i]
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }`}
          >
            <img
              src={src}
              alt={`Design ${i + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
