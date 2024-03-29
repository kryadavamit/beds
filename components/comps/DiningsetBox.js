import Image from "next/image";
import router from "next/router";

function DiningsetBox({ src, title, price,category}) {
  const handleRoute = () => {
    router.push(`/diningset/Diningsetproduct?title=${title}&category=${category}`);
   
  };
  return (
    <div
      className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6"
      data-aos="fade-up"
      data-aos-delay="200"
      onClick={handleRoute}
    >
      <div className="product productfor2">
        <div className="thumb thumbfor2">
          <span className="image imagefor2">
            <Image src={src} alt="Product" width={210} height={10} />
            
          </span>
          <span className="badges">
            <span className="new" style={{ fontSize: "18px" }}>
              50% OFF
            </span>
          </span>

          <p className="sale">APRIL SALE</p>
        </div>
        <div className="content reco-pr">
          <h5 className="title">{title}</h5>
          <span className="price">
          <span className="new">£ {price}.00</span>
            <span className="old">  NOW £48.50</span>
            
          </span>
        </div>
      </div>
    </div>
  );
}

export default DiningsetBox;
