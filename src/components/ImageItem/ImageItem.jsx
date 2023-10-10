import PropTypes from "prop-types";
import "./ImageItem.css";

const ImageItem = ({ image }) => {
  return (
    <>
      <div className="image-item-container">
        <ul className="image-item__list">
          <li className="image-data">Name</li>
          <li className="image-data">Size</li>
          <li className="image-data">Weight</li>
        </ul>
        <ul className="image-item__data">
          <li className="image-data">
            <strong>{image.name}</strong>
          </li>
          <li className="image-data">
            <strong>{image.size}</strong>
          </li>
          <li className="image-data">
            <strong>{image.weight} KB</strong>
          </li>
        </ul>
      </div>
    </>
  );
};

ImageItem.propTypes = {
  image: PropTypes.shape({
    name: PropTypes.string,
    size: PropTypes.string,
    weight: PropTypes.number,
  }).isRequired,
};
export default ImageItem;
