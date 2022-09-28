import "../styles/Banner.css";

const Banner = ({ children }) => {
  return (
    <div className="banner">
      <p className="content">{children}</p>
    </div>
  );
};

export default Banner;
