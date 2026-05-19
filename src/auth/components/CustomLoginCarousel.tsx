import { useEffect, useState } from "react";

const images = ["/TOMYI.png", "/TOMYI2.png", "/TOMYI3.png"];

export const CustomLoginCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); // cambia cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full overflow-hidden rounded-xl">
      <img
        src={images[currentImage]}
        alt="Login image"
        className="w-full h-full object-cover transition-all duration-500"
      />
    </div>
  );
};
