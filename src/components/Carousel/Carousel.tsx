import { Carousel } from "@trendyol-js/react-carousel";
import Item from "./Item";
import { carouselEvents } from "../../pages/dataset";

export const CarouselComponent = () => {
  const handleClick = (link: string) => {
    window.location.href = link;
  };

  return (
    <>
      <h1 className="title-solano">Upcoming Events</h1>
      <Carousel show={3.5} slide={2} transition={0.5}>
        {carouselEvents.map((event) => (
          <Item
            image={event.imageCarousel}
            dateLocation={event.dateLocation}
            title={event.title}
            onButtonClick={() => handleClick(event.link)}
          />
        ))}
      </Carousel>
    </>
  );
};
