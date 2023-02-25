import PropTypes from "prop-types";

export const NoImagesMessage = ({request}) => {
    return (
      <div className="loader-wrapper">
        <h2>No images found for "{request}"</h2>
      </div>
    );
  };
  
NoImagesMessage.propTypes = {
  request:PropTypes.string.isRequired,
}