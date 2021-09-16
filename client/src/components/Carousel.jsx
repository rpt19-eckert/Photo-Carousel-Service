const Carousel = (props) => {
  return (
    <div id="carouselContainer">
      <img
        onClick={this.props.handleExit.bind(this)}
        src="https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/carouselX.png"
        alt="carousel exit button"
        id="carouselExitButton"
      />
      <div style={{ float: "left" }}>
        <img
          src="https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/carouselLeft.png"
          alt="carousel left button"
          id="carouselLeftButton"
          onClick={this.props.handleLeftClick}
        />
        <img
          src={`${this.props.currentPhotoUrl}`}
          alt="currently selected carousel photo"
          id="currentCarouselPhoto"
        />
        <img
          src="https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/carouselRight.png"
          alt="carousel right button"
          id="carouselRightButton"
          onClick={this.props.handleRightClick}
        />
      </div>
      <div id="prevAndNextImagesContainer">
        <img
          src={this.props.nextPrevImages[0]}
          alt="preview of previous and next images in carousel"
          className="nextPrevImages"
          onClick={this.props.handleNextPrevClick}
          style={{
            border: `${this.props.nextPrevBorders[0]}`,
            opacity: `${this.props.nextPrevOpacities[0]}`,
          }}
          id="0"
        />
        <img
          src={this.props.nextPrevImages[1]}
          alt="preview of previous and next images in carousel"
          className="nextPrevImages"
          onClick={this.props.handleNextPrevClick}
          style={{
            border: `${this.props.nextPrevBorders[1]}`,
            opacity: `${this.props.nextPrevOpacities[1]}`,
          }}
          id="1"
        />
        <img
          src={this.props.nextPrevImages[2]}
          alt="preview of previous and next images in carousel"
          className="nextPrevImages"
          onClick={this.props.handleNextPrevClick}
          style={{
            border: `${this.props.nextPrevBorders[2]}`,
            opacity: `${this.props.nextPrevOpacities[2]}`,
          }}
          id="2"
        />
        <img
          src={this.props.nextPrevImages[3]}
          alt="preview of previous and next images in carousel"
          className="nextPrevImages"
          onClick={this.props.handleNextPrevClick}
          style={{
            border: `${this.props.nextPrevBorders[3]}`,
            opacity: `${this.props.nextPrevOpacities[3]}`,
          }}
          id="3"
        />
      </div>
      <div id="numberAndCaptionContainer">
        <h4 id="numberOfCurrentPhoto">{`${this.props.currentPhotoIndexInListing} / ${this.props.numOfCurrentListingPhotos}`}</h4>
        <p id="caption">{`${this.props.currentPhotoCaption}`}</p>
      </div>
    </div>
  );
};

export default Carousel;
