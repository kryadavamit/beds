import Image from "next/image";
import router from "next/router";

function SleighbedsBox({ src, title, price, category, size,color }) {
  const handleRoute = () => {
    router.push(`/allbed/sleighproduct?title=${title}&category=${category}&size=${size}&colorName=${color}`);
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
            {/* <Image className="hover-image" src="/assets/images/product-image/2.jpg" width={180} height={180} alt="Product" /> */}
          </span>
          {/* <span className="badges">
            <span className="new" style={{ fontSize: "18px" }}>
              50% OFF
            </span>
          </span> */}

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

export default SleighbedsBox;
