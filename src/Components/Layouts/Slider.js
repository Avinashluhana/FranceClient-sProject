import "./Slider.css"
const Slider = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-dark"
      data-bs-ride="true"
    >
      <div className="carousel-indicators carousel-dark" >
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={0}
          className="active carousel-dark"
          aria-current="true"
          aria-label="Slide 1"

        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="./images/WhatsApp_Image_2022-09-13_at_16.48.51_1.jpeg"
            className="d-block w-100 slider-image"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/WhatsApp_Image_2022-09-13_at_16.48.51_1.jpeg"
            className="d-block w-100 slider-image"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/WhatsApp_Image_2022-09-13_at_16.48.51_1.jpeg"
            className="d-block w-100 slider-image"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev slider-button carousel-dark "
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next carousel-dark"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
