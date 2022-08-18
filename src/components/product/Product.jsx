import "./product.css";

const Product = ({img, link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div  className="p-circle-one"></div>
        <div className="p-circle-two"></div>
        <div className="p-circle-three"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img"></img>
      </a>
    </div>
  );
};

export default Product;
