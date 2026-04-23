import { useState } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Navigation } from "swiper/modules";

export function Slider({ children }) {
  window.addEventListener("resize", ResizeSlide);
  const [size, setSize] = useState(3);

  function ResizeSlide() {
    let r = window.innerWidth < 714;
    if (r) {
      setSize(2);
    } else {
      setSize(3);
    }
  }

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={size}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Keyboard, Navigation]}
      className="mySwiper">
      {children}
    </Swiper>
  );
}
