import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="image-wrapper">
        <img src="../../../images/methinks.png" alt="methinks-logo" />
      </div>
      <div className="title-wrapper">
        <h1 className="title-header">Methinks challenge</h1>
        <h2 className="subtitle-header">Image Handler</h2>
      </div>
    </div>
  );
};

export default Header;
