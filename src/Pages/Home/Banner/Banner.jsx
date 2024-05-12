import { useEffect, useState, useRef } from "react";
import "./Banner.css";

// Import your images from the assets folder
import image1 from "../../../assets/slide/profile ssjoy .gif";
import image2 from "../../../assets/slide/Skills.gif";
import image3 from "../../../assets/slide/Experience.gif";
import image4 from "../../../assets/slide/team-work.gif";
import image5 from "../../../assets/slide/Contact.gif";
import image6 from "../../../assets/slide/remote job.gif";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const slider = document.querySelector(".slider");

    function activate(e) {
      const items = document.querySelectorAll(".item");
      e.target.matches(".next") && slider.append(items[0]);
      e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
    }

    document.addEventListener("click", activate, false);

    // Start auto  3 seconds
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);

    // Change interval duration to 3000 milliseconds for 3 seconds

    return () => {
      clearInterval(intervalRef.current);
      document.removeEventListener("click", activate, false);
    };
  }, []);

  const items = [image1, image2, image3, image4, image5, image6];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="banner-div">
      <ul className="slider">
        {items.map((item, index) => (
          <li
            key={index}
            className={` ${index === currentIndex ? "active" : ""} item`}
            style={{ backgroundImage: `url('${item}')` }}
          ></li>
        ))}
      </ul>
      <nav className="nav">
        <button className="btn prev" onClick={prevSlide}>
          <ion-icon name="arrow-back-outline"></ion-icon>
        </button>
        <button className="btn next" onClick={nextSlide}>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
      </nav>
    </div>
  );
};

export default Banner;
