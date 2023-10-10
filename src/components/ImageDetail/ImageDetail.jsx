import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ImageDetail.css";

const ImageDetail = ({ image }) => {
  const [comment, setComment] = useState("");
  const [commentsWrited, setCommentsWrited] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = (event) => {
    event.preventDefault();

    if (comment.trim() !== "") {
      setCommentsWrited([...commentsWrited, comment]);
      setComment("");
    }
  };

  return (
    <>
      <div className="back-link-container">
        <Link to={"/"} className="back-link">
          <img src="../../../images/atras.png" />
          <p className="back-link__text">Home</p>
        </Link>
      </div>
      <article className="imageDetail-container">
        <h2 className="imageDetail-name">{image.name}</h2>
        <div className="imageDetail-image">
          <img src={image.url} alt={image.name} width="100%" />
        </div>
        <h3 className="imageDetail-title">Comments</h3>
        <div className="imageDetail-comments">
          <div className="comments-wrapper">
            {commentsWrited.length === 0 ? (
              <p className="no-comments-message">No comments to show</p>
            ) : (
              <ul className="imageDetail-comment">
                {commentsWrited.map((commentWrited, index) => {
                  return (
                    <li key={index} className="comment">
                      {commentWrited}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div className="imageDetail-addComments">
            <textarea
              type="text"
              value={comment}
              onChange={handleCommentChange}
              placeholder="Write your comment"
              className="input-text"
            />
            <button onClick={handleSubmitComment} className="button-submit">
              Add comment
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

ImageDetail.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    size: PropTypes.string,
    weight: PropTypes.number,
    url: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ImageDetail;
