import React from "react";

export interface ICarouselProps {
  images: string[];
}

const Carousel = (props: ICarouselProps) => {
  const domId = `carousel-id-${Math.floor(Math.random() * 1000)}`;
  const carouselTarget = "#" + domId;
  return (
    <div id={domId} className="carousel slide" data-ride="carousel">
      {props.images.length > 1 && (
        <ol className="carousel-indicators">
          {props.images.map((link, i) => (
            <li
              key={link}
              data-target={carouselTarget}
              data-slide-to={i}
              className={`${i === 0 ? "active" : ""}`}
            ></li>
          ))}
        </ol>
      )}
      <div className="carousel-inner">
        {props.images.map((image, i) => (
          <div
            key={image}
            className={`carousel-item ${i === 0 ? "active" : ""}`}
          >
            <img
              className="d-block w-100 image-fluid"
              src={image}
              alt={image}
            />
          </div>
        ))}
        {props.images.length > 1 && (
          <>
            <a
              className="carousel-control-prev"
              href={carouselTarget}
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>

            <a
              className="carousel-control-next"
              href={carouselTarget}
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Carousel;
