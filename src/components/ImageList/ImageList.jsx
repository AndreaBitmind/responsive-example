import ImageItem from "../ImageItem/ImageItem";
import data from "../../data/data.json";
import "./ImageList.css";
import { Link } from "react-router-dom";

const ImageList = () => {
  return (
    <div className="image-list">
      <ul className="image-list__item">
        {data.map((image) => {
          return (
            <li key={image.id} className="image-item">
              <ImageItem image={image} />
              <Link to={`/image/${image.id}`} className="image-link">
                more detail
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageList;
