import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Tab, Tabs, Sonnet, Row, Col, Nav } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Review from "../../components/Review";
import Timer from "../../components/Timer";
import { useRouter } from "next/router";
import Mobilemenu from "../../components/comps/Mobilemenu";
import { QuantityPicker } from "react-qty-picker";
import { useSelector, useDispatch } from "react-redux";
import Checkout from "../../components/checkout/Checkout";
import { addToCart } from "../../store/actions/cartActions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

let descolor = {
  color: "00b2bd ",
};
let imgStyle = {
  width: "100%",
  height: "300px",

  // backgroundColor: "#FFB900",
  paddingRight: "auto !important",
  paddingLeft: "auto !important",
};
let paddingP = {
  paddingTop: "8rem!important",
};
let headerButton = {
  border: "1px solid #1A4692",
  fontSize: "12px",
  width: "70px",
  height: "48px",
  color: "#1A4692",
  borderRadius: "5px",
};
let card = {
  padding: "8px",
  borderRadius: "8px",
  boxShadow: "7px 5px 19px -7px rgb(0 0 0 / 15%)",
};
let mainheading = {
  color: "#1A4692",
};
let heading = {
  fontSize: "15px",
};
let fa = {
  color: "red",
};
let deltext = {
  fontSize: "14px",
  color: "#7c7c7c",
};
let savetext = {
  fontSize: "14px",
  paddingLeft: "22px",
  color: "#00b2bd",
};
let sizetext = {
  fontSize: "10px",
  color: "#7c7c7c",
};
let button = {
  fontSize: "13px",
  color: "red",
  border: "2px solid grey",
  borderRadius: "4px",
  width: "170px",
};
let textwidth = {
  width: "1175px",
};
let titlebottomline = {
  display: "block",
  height: "2px",
  width: "73px",
  borderBottom: "2px solid grey",
  margin: "0 auto ",
};

function Gardenproduct({ response ,response1 ,response2}) {
  const router = useRouter();
  //ADD TO CART REDUX
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [qty, setQty] = useState(1);
  const [woodColorname, setWoodColorName] = useState("No Wood Selected");
  const [cushionColorname, setCushionColorName] = useState(
    "No Cushion Selected"
  );
  const [category,setCategory]=useState()

  //FILTER CURRENT PRODUCT

  const currentProduct = response.filter((item) => {
    return item.category === router.query.category;
  });

  const addToCartHandler = () => {
    dispatch(addToCart(response[0]._id, parseInt(qty),cushionColorname));
    router.push("/cart");
  };

  const [expanded, setExpanded] = useState("panel1");
  const [data, setData] = useState([]);
  const [bed, setBed] = useState([]);
  const [color, setColor] = useState([]);
  //FETCHING API FOR BEDS

  useEffect(() => {
    setBed(currentProduct[0]);
  }, [response]);

  const [image, setImage] = useState(currentProduct[0]?.images[0]?.url);
  const storageIcon = [
    "/assets/images/newicons/storage000-01.png",
    "/assets/images/newicons/Storage-03.png",
    "/assets/images/newicons/Storage-04.png",
  ];
  const storagetitle = ["2 Same Side", " 2Foot Side", "4 Drawer"];

  let storageindex = 0;

  const feetIcon = [
    "/assets/images/newicons/feets-01.png",
    "/assets/images/newicons/feets-02.png",
  ];
  let feetindex = 0;

  //STORING PRICE IN STATE
  const [headboard, setHeadboard] = useState(0);
  const [storage, setStorage] = useState(0);
  const [mattress, setMattress] = useState(0);
  const [feets, setfeet] = useState(0);

  
  
  
  

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
 // send query to route
//  const router = useRouter()
 const { id } = router.query

 //GET SIZE
 

 //FILTER BED DYNAMIC

 var divanBedSize;
 if(router.query.category){
 divanBedSize = response?.filter(
   function (beds) {
     return beds.category === router.query.category;
   }
 );
 }
 else{
    divanBedSize = response;
   
 }
 // set Cushion color
 var divanBedColor
 if(router.query.color){
 divanBedColor = response?.filter(
   function (beds) {
     return beds.color === router.query.color;
   }
 );
 }
 else{
    divanBedColor = response;
   
 }
 // set product color image

 var garden_color=router.query.color;

 var product_color
 switch(garden_color){
   case "Cream": product_color="0";
   break;
   case "White": product_color="1";
   break;
   case "Blue": product_color="2";
   break;
   case "Black": product_color="3";
   break;
 }


 



const classes = useStyles({});

//FETCHING API FOR BEDS

useEffect(() => {

 
 //setColor(divanBedSize[0].images[0].color1)
 setData(response);

 setCategory(router.query.category)
//  setSize(router.query.size);
setCushionColorName(router.query.color);
//setColor(router.query.color)
// setImage(router.query.src)
setImage(response[0].images[product_color].url)


}, [response]);
  useEffect(() => {
    setTotal(
      parseInt(qty) *
        (parseInt(bed?.price) +
          parseInt(headboard) +
          parseInt(storage) +
          parseInt(mattress) +
          parseInt(feets))
    );
  }, [response, headboard, storage, mattress, bed, feets, qty]);

  
  return (
    <div>
      <div>
        <Head>
          <title>BedsDivans</title>
          <meta name="description" content="Generated by create next app" />
          <link
            passHref={true}
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          />

          <link
            passHref={true}
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <link
            passHref={true}
            href="/style/plugins/plugins.min.css/"
            rel="stylesheet"
          ></link>
          <link passHref={true} rel="icon" href="/logo (1).png" />
        </Head>
        <div>
          <div className="fordesktopmeu">
            <Header />
          </div>

          <div className="mb-10 formobilemenu">
            <Mobilemenu />
          </div>

          <div className="container-fluid fluid-color tab-touch-section">
            <div className="container  tab-touch-cont">
              <div className="row">
                <div className="col-md-6 big-img-chenger">
                  <div className="twofeet">
                    <Timer />
                    <Image
                      id="shwimg_1"
                      className="imgfornone"
                      width={600}
                      height={550}
                      src={image}
                    />
                  </div>

                  {/* <Image width={100} height={100} id="shwimg_7" className="imgfornone"   src="/assets/images/image/meter.png"/> */}
                  {/* <Image src=""/> */}
                </div>
                <div className="col-md-6 mt-4 outer-tab-section">
                  <h5 className="HeadingProduct">
                    <b>{bed?.product_name}</b>
                  </h5>
                  <Image
                    src="/assets/images/image/trustpilot-5stars.png"
                    width={140}
                    height={30}
                  />
                  <span className="trustreview">
                    <b> ( 5,245,22 Reviews) </b>
                  </span>
                  <div className="mt-4 image-multitabs">
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="first"
                    >
                      <Row>
                        <Col sm={3} xs={12}>
                          <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                              <Nav.Link eventKey="first">
                                <span
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "600",
                                  }}
                                >
                                  {" "}
                                  Wood Colour
                                </span>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">
                                <span
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "600",
                                  }}
                                >
                                  Cushion Colour{" "}
                                </span>
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col sm={9} col xs={12}>
                          <Tab.Content>
                            <Tab.Pane eventKey="first">
                              <div className="bg-white cusHeight Headboard-page">
                                <div className="row">
                                  <div className="col-md-12 mt-4 ml-6 ">
                                    {/* <Image
                                      width={40}
                                      height={50}
                                      src="/assets/images/image/meter.png"
                                    />
                                    <span className="cusSize">Bed Size </span> */}
                                    <span className="optionB">
                                      24 Option Available
                                    </span>{" "}
                                    <br />
                                    <hr
                                      style={{
                                        marginLeft: "-20px",
                                        width: "445px",
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="container-fluid slider-Mobile">
                                  <div className="row">
                                    <div
                                      className={`col-md-3 productimghover ${category==='Teak color' ? 'activeSize':""}`}
                                      onClick={() => {
                                        var newarray = response?.filter(
                                          function (beds) {
                                            return (
                                              beds.category === "Teak color"
                                            );
                                          }
                                        );
                                        
                                        setImage(newarray[0].images[0].url);
                                        setBed(newarray[0]);
                                        setWoodColorName("Teak color");
                                        setCategory("Teak color");
                                        
                                      }}
                                    >
                                      <Image
                                        id="img_1"
                                        width={60}
                                        height={60}
                                        src="/assets/images/woodicons/Untitled-1.png"
                                      />
                                      <br />
                                      <span className="productsize">
                                        Teak Colour{" "}
                                      </span>
                                      <br />
                                      {/*<span className="productsize" style={{fontSize:"14px"}}> £ 400</span>*/}
                                    </div>
                                    <div
                                       className={`col-md-3 productimghover ${category==='Black Ash' ? 'activeSize':""}`}
                                      onClick={() => {
                                        var newarray = response?.filter(
                                          function (beds) {
                                            return (
                                              beds.category === "Black Ash"
                                            );
                                          }
                                        );
                                        setImage(newarray[0].images[0].url);
                                        setBed(newarray[0]);
                                        setCategory('Black Ash')
                                        setWoodColorName("Black Ash");
                                        
                                      }}
                                    >
                                      <Image
                                        width={60}
                                        height={60}
                                        id="img_2"
                                        src="/assets/images/woodicons/Black Ash.png"
                                      />
                                      <br />
                                      <span className="productsize">
                                        Black Ash{" "}
                                      </span>
                                      <br />
                                      {/*<span className="productsize" style={{fontSize:"14px"}}> £ 400</span>*/}
                                    </div>
                                    {/* <div className="container-fluid">
                                  <div className="row mt-2"> */}
                                    {/* <div className="col-md-3 mt-4  ">
        <Image width={100} height={80} src="/assets/images/image/box-image.png"/>

    </div> */}
                                    {/* <div className="col-md-3 mt-4  ">
        <Image width={100} height={80} src="/assets/images/image/box-image.png"/>

    </div> */}{" "}
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              <div className="bg-white dining-cusHeight Headboard-page">
                                <div className="row">
                                  <div className="col-md-12 mt-4 ml-6">
                                    <span className="optionB">
                                      24 Option Available
                                    </span>{" "}
                                    <br />
                                    <hr
                                      style={{
                                        marginLeft: "-20px",
                                        width: "445px",
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="container-fluid slider-Mobile">
                                  <div className="row">
                                    <div
                                      className={`col-md-3 productimghover ${cushionColorname==='Cream' ? 'activeSize':""}`}
                                      onClick={() => {
                                        setImage(bed?.images[0].url);
                                        setColor(bed?.images[0]);
                                        setCushionColorName("Cream");
                                      }}
                                    >
                                      <Image
                                        id="img_7"
                                        width={60}
                                        height={60}
                                        src="/assets/images/woodicons/Cream.png"
                                        className="colorImgR"
                                      />
                                      <br />
                                      <span className="productcolor">
                                        Cream
                                      </span>
                                    </div>
                                    <div
                                      className={`col-md-3 productimghover ${cushionColorname==='White' ? 'activeSize':""}`}
                                      onClick={() => {
                                        setImage(bed?.images[1].url);
                                        setColor(bed?.images[1]);
                                        setCushionColorName("White");
                                      }}
                                    >
                                      <Image
                                        id="img_8"
                                        width={60}
                                        height={60}
                                        src="/assets/images/woodicons/White.png"
                                        className="colorImgR"
                                      />
                                      <br />
                                      <span className="productcolor text-center">
                                        White
                                      </span>
                                    </div>
                                    <div
                                      className={`col-md-3 productimghover ${cushionColorname==='Blue' ? 'activeSize':""}`}
                                      onClick={() => {
                                        setImage(bed?.images[2].url);
                                        setColor(bed?.images[2]);
                                        setCushionColorName("Blue");
                                      }}
                                    >
                                      <Image
                                        id="img_9"
                                        width={60}
                                        height={60}
                                        src="/assets/images/woodicons/Blue.png"
                                        className="colorImgR"
                                      />
                                      <br />
                                      <span className="productcolor">Blue</span>
                                    </div>
                                    <div
                                     className={`col-md-3 productimghover ${cushionColorname==='Black' ? 'activeSize':""}`}
                                      onClick={() => {
                                        setImage(bed?.images[3].url);
                                        setColor(bed?.images[3]);
                                        setCushionColorName("Black");
                                      }}
                                    >
                                      <Image
                                        id="img_10"
                                        width={60}
                                        height={60}
                                        src="/assets/images/woodicons/black.png"
                                        className="colorImgR"
                                      />
                                      <br />
                                      <span className="productcolor">
                                        Black
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="container-fluid">
                                  {/* <div className="row">
    <div className="col-md-3  mt-2 productimghover ">
        <a href="">
        <Image id="img_11" width={60} height={60} src="/assets/images/image/173.jpg" className="colorImgR"/>
        <span className="productcolor" >Grey Seude   </span> 
        </a>
    </div>
    <div className="col-md-5 mt-2 productimghover">
        <a href="">
    <Image id="img_12" width={60} height={60} src="/assets/images/image/173.jpg" className="colorImgR"/> <br />
    <span className="productcolor" >Charcoal Chenille</span> 
    </a>
    </div>
     
</div> */}
                                </div>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </div>

                  <div className="container price-touch-tab">
                    <div className="row">
                      <div className="col-md-3 col-xs-3 price-input">
                        <QuantityPicker
                          min={1}
                          onChange={(e) => setQty(e)}
                          value={qty}
                        />
                      </div>
                      <div className="col-md-9 col-xs-9 price-box">
                        <div className="scndbtn">
                          <div className="row">
                            <div className="col-md-6">
                              <h6
                                style={{
                                  color: "#7c7c7c",
                                  textAlign: "right",
                                  position: "relative",
                                  left: "-6px",
                                  top: "14px",
                                }}
                              >
                                <blockquote>WAS: £549.00</blockquote>
                              </h6>
                              <h2
                                style={{
                                  color: "red",
                                  position: "relative",
                                  left: "43px",
                                }}
                              >
                                <span
                                  style={{ fontSize: "12px", color: "#7c7c7c" }}
                                >
                                  <b>NOW: </b>
                                </span>
                                <b>
                                  £<span id="price_now">{total}</span>
                                </b>
                              </h2>
                            </div>
                            <div className="col-md-6">
                              <Checkout
                                addToCartHandler={addToCartHandler}
                                title={bed?.product_name}
                                base_price={bed?.price}
                                woodColor={woodColorname}
                                cushionColor={cushionColorname}
                                type="garden_furniture"
                                price={total}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="container-fluid  Complete-your-Bedroom"
            style={{ backgroundColor: "#F5F5F5" }}
          >
            <div className="rightcol">
              <div className="container ">
                <div className="row ">
                  <div className="col-sm-5 mt-10 ">
                    <div style={{ position: "sticky", top: "10px" }}>
                      <h3
                        style={{
                          color: "#222178",
                          fontWeight: "500",
                          textAlign: "center",
                        }}
                      >
                        <b>Complete your Bedroom</b>
                      </h3>
                      <br />
                      <br />
                      <div>
                      {response2.map((bed)=>{
                          return(

                         
                        <div
                          className="container bg-white"
                          style={{
                            borderRadius: "7px",
                            border: "1px solid #00b2bd",
                          }}
                        >
                          <div className="row pt-2">
                            <div className="col-md-2 col-6">
                              <img
                                className="mobile-width"
                                //src="/assets/images/ProductImage/Chicago-3-Seater-Crushed-Velvet-Silver-1-768x549.jpg"
                                src={bed.images[0].url}
                                style={{ width: "94px" }}
                                alt=""
                              />
                            </div>
                            <div className="col-md-6 col-6 pl-8">
                              <h6
                                style={{ color: "#141414", fontSize: "15px" }}
                                className="completebed-heading"
                              >
                                {/* <b>Chicago 3 Seater Crushed Velvet Silver</b> */}
                                {bed.product_name}
                              </h6>
                              <img
                                src="/assets/images/image/Group 480.png"
                                alt=""
                              />
                              <span className="ratingfont pl-1">(8524)</span>
                              <p style={{ color: "#f22222" }}>{bed.price}</p>
                            </div>
                            <div className="col-md-4">
                              <button className="ProductPageB " onClick={()=>router.push(`/gardenfurniture/Gardenproduct?title=${bed.product_name}&category=${bed.category}&color=${router.query.color}`)}>
                                <b>ADD</b>
                              </button>
                            </div>
                          </div>
                        </div>
                        )
                        })}
                        {/* <div
                          className="container bg-white mt-2"
                          style={{
                            borderRadius: "7px",
                            border: "1px solid #00b2bd",
                          }}
                        >
                          <div className="row pt-2">
                            <div className="col-md-2">
                              <img
                                src="assets/images/image/box-image.png"
                                style={{ width: "94px" }}
                                alt=""
                              />
                            </div>
                            <div className="col-md-6 pl-8">
                              <h6
                                style={{ color: "#141414", fontSize: "15px" }}
                                className="completebed-heading"
                              >
                                <b>OTTOMAN STORAGE BED NEW COLLECTION</b>
                              </h6>
                              <img
                                src="assets/images/image/Group 480.png"
                                alt=""
                              />
                              <span className="ratingfont pl-1">(8524)</span>
                              <p style={{ color: "#f22222" }}>425</p>
                            </div>
                            <div className="col-md-4">
                              <button className="ProductPageB ">
                                <b>ADD</b>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div
                          className="container bg-white mt-2"
                          style={{
                            borderRadius: "7px",
                            border: "1px solid #00b2bd",
                          }}
                        >
                          <div className="row pt-2">
                            <div className="col-md-2">
                              <img
                                src="assets/images/image/box-image.png"
                                style={{ width: "94px" }}
                                alt=""
                              />
                            </div>
                            <div className="col-md-6 pl-8">
                              <h6
                                style={{ color: "#141414", fontSize: "15px" }}
                                className="completebed-heading"
                              >
                                <b>OTTOMAN STORAGE BED NEW COLLECTION</b>
                              </h6>
                              <img
                                src="assets/images/image/Group 480.png"
                                alt=""
                              />
                              <span className="ratingfont pl-1">(8524)</span>
                              <p style={{ color: "#f22222" }}>425</p>
                            </div>
                            <div className="col-md-4">
                              <button className="ProductPageB ">
                                <b>ADD</b>
                              </button>
                            </div>
                          </div>
                        </div> */}
                        <div className="mt-8">
                          <div
                            className="container bg-white mt-2"
                            style={{
                              borderRadius: "7px",
                              border: "2px solid #B2B2B2  ",
                            }}
                          >
                            <div className="NeedImg  text-center need-help">
                              <img
                                className="mt-2"
                                src="assets/images/DivanBedsicon/chat call-01.png"
                                alt=""
                              />
                              <span
                                style={{ color: "#222178", fontSize: "22px" }}
                              >
                                <b> Need help?</b>
                              </span>
                              <p className="mt-6" style={{ color: "#4E4E4E" }}>
                                <b>
                                  Our Sleep Specialists are here for you. Chat
                                  Or Call Us
                                </b>
                              </p>
                              <img
                                className="icons"
                                width="5%"
                                src="assets/images/DivanBedsicon/Icon ionic-md-call.png"
                                alt=""
                              />
                              <span style={{ color: "#000", fontSize: "26px" }}>
                                <b> 01902 405535</b>
                              </span>
                              <p
                                className="mt-4 mb-6"
                                style={{
                                  color: "#8E8E8E",
                                  fontSize: "12px",
                                  marginBottom: "9px",
                                }}
                              >
                                Available 7 days a week
                              </p>
                              <p className="mt-4"></p>
                            </div>
                            {/* <div className="row pt-2">
                        <div className="col-md-2">
                            <img src="assets/images/image/box-image.png" style={{width:"94px"}} alt="" />

                        </div>
                        <div className="col-md-6 pl-8">
                            <h6 style={{color:"#141414" ,fontSize:"15px"}}><b>OTTOMAN STORAGE BED NEW COLLECTION</b></h6>
                            <img src="assets/images/image/Group 480.png" alt="" /><span className="ratingfont pl-1">(8524)</span>
                            <p style={{color:"#f22222"}}>425</p>
                        </div>
                        <div className="col-md-4">
                        <button className="ProductPageB " > <b>ADD</b> </button>
                        </div>

                    </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-7  mt-10">
                    <Accordion
                      square
                      expanded={expanded === "panel1"}
                      onChange={handleChange("panel1")}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography
                          className={classes.heading}
                          style={{
                            color: "#00B2BD",
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          DESCRIPTION
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="panel-body">
                          {/* <h5 className="sub-headingA">
                            <i> Specification</i>
                          </h5> */}
                          {/* <ul className="li-text acc-para">
                            <li>
                              <i
                                className="fa fa-play"
                                aria-hidden="true"
                                width="30px"
                              ></i>
                              <span className="pl-2">
                                Variety of colours available in many different
                                fabrics
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Various drawer options available
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Chrome Glides or castor wheel options
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                3 different Mattress options and 5 headboard
                                options available
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2"> Made in the UK </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                1-year guarantee included on a full set (not on
                                a base alone – 30 days on a base alone)
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Headboard can be fitted on either side of the
                                base for a 2 draw same side option
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Base height is 12” without the feet.
                              </span>
                            </li>
                          </ul> */}
                          {bed?.description}
                          {/* <h5 className=" sub-headA ">
                            <i> Dimensions </i>
                          </h5>
                          <ul className="li-text acc-para mt-2">
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Table: L 110cm x W 110cm x H 74cm
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Chair: L 53cm x W 53cm x H 87-90cm
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Footstool: L 35.5cm x W 35.5cm x H 36-40cm
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">5mm Tempered Glass</span>
                            </li>
                          </ul>
                          <h5 className="sub-headA">
                            6 Headboards options available as an optional extra,
                            shop our range of matching headboards here:
                          </h5>
                          <ul className="li-text acc-para">
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Our couriers will deliver between the hours of
                                7am to 9pm.
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Once you place an order and your order is ready
                                to be dispatched you will receive a message
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Alternatively, you can send us another message
                                after placing your order and we will manually
                                update your delivery date.
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                The day before delivery you will receive a
                                text/email with a delivery time, unfortunately
                                we cannot supply estimated delivery times
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Deliveries are made to the communal door of your
                                property and couriers are not authorized to take
                                items any further.
                              </span>
                            </li>
                          </ul>
                          <h5 className="sub-headA">
                            <i>
                              3 optional Mattressess available separately, shop
                              our range of mattress here:
                            </i>
                          </h5>
                          <ul className="li-text acc-para">
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Our couriers will deliver between the hours of
                                7am to 9pm.
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Once you place an order and your order is ready
                                to be dispatched you will receive a message
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Alternatively, you can send us another message
                                after placing your order and we will manually
                                update your delivery date.
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                The day before delivery you will receive a
                                text/email with a delivery time, unfortunately
                                we cannot supply estimated delivery times
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Deliveries are made to the communal door of your
                                property and couriers are not authorized to take
                                items any further.
                              </span>
                            </li>
                          </ul>
                          <h5 className="sub-headA">
                            <i> Please note: </i>
                          </h5>
                          <ul className="li-text acc-para">
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Our couriers will deliver between the hours of
                                7am to 9pm.
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Once you place an order and your order is ready
                                to be dispatched you will receive a message
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Alternatively, you can send us another message
                                after placing your order and we will manually
                                update your delivery date.
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                The day before delivery you will receive a
                                text/email with a delivery time, unfortunately
                                we cannot supply estimated delivery times
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-play" aria-hidden="true"></i>
                              <span className="pl-2">
                                Deliveries are made to the communal door of your
                                property and couriers are not authorized to take
                                items any further.
                              </span>
                            </li>
                          </ul> */}
                        </div>
                        {/* <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography> */}
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography
                          className={classes.heading}
                          style={{
                            color: "#00B2BD",
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          DILIVERY POLICY
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Free delivery within 2-5 Working days within 120 miles
                          of our post code WV14 7HZ. Once you’ve successfully
                          placed your order, you’ll receive an order
                          confirmation by email followed up by a call from the
                          sales team within 2-3 working days, they will confirm
                          your order and give you a confirmed delivery date.
                          Areas that are covered within 2-5 working days are –
                          London, East Midlands, West Midlands, South Wales,
                          Manchester, Yorkshire & surrounding postcodes. Areas
                          outside the above postcodes will take up to a further
                          2-5 working days. We only deliver to UK Mainland. Each
                          order will only be dispatched once the order has been
                          confirmed with the customer & the delivery date and
                          approximate time has been given. Please ensure you
                          must leave a correct Contact number for our sales team
                          to contact you, if we fail to reach you on a contact
                          number your order will be put on hold until we hear
                          from you to confirm.
                          <b>
                            Please note Dilivery times can strat from 5am
                            onwards up to 10pm
                          </b>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                      >
                        <Typography
                          className={classes.heading}
                          style={{
                            color: "#00B2BD",
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          ADDITIONAL INFORMATION
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem Ipsum is simply dummy text of the Beds Divans
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                        when an unknown
                      </AccordionDetails>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                      >
                        <Typography
                          className={classes.heading}
                          style={{
                            color: "#00B2BD",
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          CANCELLATIONS
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        Once an order has been placed online or by phone, you
                        agree to our terms and conditions, of the item being
                        made to your specification, and if you decide to cancel
                        your order a £30 administration charge will be liable to
                        be paid, and this will be deducted from your order.
                      </AccordionDetails>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5a-content"
                        id="panel5a-header"
                      >
                        <Typography
                          className={classes.heading}
                          style={{
                            color: "#00B2BD",
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          RETURN POLICY
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        DUE TO COVID-19 WE CANNOT ACCEPT ANY RETURNS OF ITEMS
                        BEING OPENED OR USED. Our policy lasts 30 days. If 30
                        days have gone by since your purchase, unfortunately, we
                        can’t offer you a refund or exchange. Any cancellations
                        after 48 hours will incur a £30:00 cancellation fee due
                        to the item being made. Please note if any items are no
                        longer wanted within 30 days, and a change of mind
                        occurs, you must return the item to us at your own cost,
                        Or pay a collection fee of £62 to us directly and we can
                        arrange for collection with one of our drivers – please
                        ensure you clearly mark your name, order number, and
                        full address, so that we can process your return for
                        you. Please ensure you use a tracking service so we can
                        safely receive your returned item. Any returns must be
                        approved by DBZKHAN LTD (bedsDivans) before any return
                        is made. To be eligible for a return, your item must be
                        unused and in the same condition that you received it.
                        It must also be in the original packaging. So, you must
                        make sure that the base bag is kept in good condition.
                        To complete your return, we require a receipt or proof
                        of purchase. This could be through a form of email or
                        invoice. Our sales teams are always here to help you
                        with any enquirers many thanks BedsDivans Please do not
                        send your purchase back to the manufacturer before a
                        booking is made this will speed up the process and allow
                        us to rectify the issue.
                      </AccordionDetails>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel6a-content"
                        id="panel6a-header"
                      >
                        <Typography
                          className={classes.heading}
                          style={{
                            color: "#00B2BD",
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          REFUND POLICY
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        Once your return is received and inspected, we will send
                        you an email to notify you that we have received your
                        returned item. We will also notify you of the approval
                        or rejection of your refund. If you are approved, then
                        your refund will be processed, and a credit will
                        automatically be applied to your credit card or original
                        method of payment, within a 5-7 days depending on your
                        bank
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row mt-6">
                <div className="col-md-8">
                  <img
                    src="/assets/images/DivanBedsicon/Review.png"
                    width="100%"
                    alt=""
                  />
                </div>
                <div className="col-md-4">
                  <div
                    className=" bg-white mt-2"
                    style={{ borderRadius: "7px" }}
                  >
                    <div className="NeedImg bedsdivanLog text-center">
                      <img
                        className="mt-2"
                        src="/assets/images/DivanBedsicon/Logo (1).png"
                        width="75%"
                        alt=""
                      />
                      <hr />
                      <button className="trustpilot">
                        <img
                          src="/assets/images/DivanBedsicon/Trustpilot02.png"
                          width="300px"
                          alt=""
                        />
                      </button>
                      <br /> <br />
                      <a href="https://www.reviews.co.uk/" className="pointer">
                        <img
                          src="/assets/images/DivanBedsicon/Reviews-co-uk.png"
                          width="200px"
                          alt=""
                        />
                      </a>
                      <br />
                      <br />
                      <button className="trustpilot">
                        <img
                          src="/assets/images/DivanBedsicon/toppng.com-oogle-review-logo-png-google-reviews-transparent-993x400.png"
                          width="200px"
                          alt=""
                        />
                      </button>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>

           {/* Unique Scroller End */}
      <div className="section product-tab-area">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center" data-aos="fade-up">
                    <div className="section-title mb-0">
                      <h2 className="title my-5 ">
                        <span style={mainheading}>Related Products</span>
                      </h2>

                      <div
                        className="divider  title-bottom-line light my-4 text-center"
                        style={titlebottomline}
                      />
                    </div>
                  </div>
                </div>

                <div className="section pt-6  bg-lightgray">
                  <div className="container-fluid">
                    <div className="row">
                      <div
                        className="col-md-12 text-center"
                        data-aos="fade-up"
                      ></div>
                    </div>

                    {/* //</div><div> */}

                    <div
                      className="forSlider ForDesktopView"
                      style={{ paddingTop: "82px" }}
                    >
                      <div className="container-fluid">
                        <div
                          className="row "
                          style={{ marginBottom: "20px" }}
                        ></div>
                      </div>
                      <Slider
                        dots={true}
                        slidesToShow={4}
                        slidesToScroll={4}
                        autoplay={false}
                        arrows={true}
                        autoplaySpeed={3000}
                      >
                        {response1.map((bed) => {
                          return (
                            <div className="product productNew sliderProduct">
                              <div className="thumb">
                                {/* <a href="/newproduct" className="image">
                        <Image
                          width={378}
                          height={128}
                          src={bed.images[0].color1.base_url}
                          className="rounded"
                          alt="Product"
                        />
                        {/* <Image width={128} height={128} className="hover-image" src="/assets/images/product-image/2.jpg" alt="Product" /> */}
                                {/* {</a> */}
                                <button
                                  onClick={() =>
                                    router.push(
                                      `/gardenfurniture/Gardenproduct?title=${bed.product_name}&category=${bed.category}&color=${router.query.color}`
                                    )
                                  }
                                  className="image"
                                >
                                  <Image
                                    width={378}
                                    height={128}
                                    src={bed.images[0].url}
                                    className="rounded"
                                    alt="Product"
                                  />
                                  {/* <Image width={128} height={128} className="hover-image" src="/assets/images/product-image/2.jpg" alt="Product" /> */}
                                </button>

                                <div className="actions">
                                  <a
                                    href="wishlist.html"
                                    className="action wishlist"
                                    title="Wishlist"
                                  >
                                    <Image
                                      src="/assets/images/icons/heart1.png"
                                      width={20}
                                      height={20}
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="best-seller mb-6 mt-8 text-center">
                                <button
                                  onClick={() =>
                                    router.push(
                                      `/gardenfurniture/Gardenproduct?title=${bed.product_name}&category=${bed.category}&color=${router.query.color}`
                                    )
                                  }
                                >
                                  BUY NOW
                                </button>
                              </div>

                              <div className="rating-product">
                                {/* <Image width={128} height={128} src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg" width="120px" alt="" /> */}
                              </div>
                              <div className="contentNew">
                                <p>{bed.product_name}</p>
                                <h4>
                                  {" "}
                                  <span
                                    className="price"
                                    style={{
                                      fontWeight: "600",
                                      paddingLeft: "18px",
                                      color: "#fc2003",
                                    }}
                                  >
                                    £{bed.price}
                                  </span>
                                </h4>
                                <span
                                  style={{
                                    fontWeight: "600",
                                    paddingLeft: "18px",
                                    color: "#00b2bc",
                                  }}
                                >
                                  Deal of The Day
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </Slider>
                    </div>

                    {/* For Mobile Strat */}

                    <div className="forSlider ForMobileView pb-6">
                      <div className="container-fluid">
                        <div
                          className="row "
                          style={{ marginBottom: "20px", marginTop: "60px" }}
                        ></div>
                      </div>
                      <Slider
                        dots={true}
                        slidesToShow={2}
                        slidesToScroll={2}
                        autoplay={false}
                        arrows={false}
                        autoplaySpeed={3000}
                      >
                        {response1.map((bed) => {
                          return (
                            <div className="product productNew sliderProduct">
                              <div className="thumb">
                                <button
                                  onClick={() =>
                                    router.push(
                                      `/gardenfurniture/Gardenproduct?title=${bed.product_name}&category=${bed.category}&color=${router.query.color}`
                                    )
                                  }
                                  className="image"
                                >
                                  <Image
                                    width={128}
                                    height={128}
                                    src={bed.images[0].url}
                                    className="rounded"
                                    alt="Product"
                                  />
                                </button>

                                <div className="actions">
                                  <a
                                    href="wishlist.html"
                                    className="action wishlist"
                                    title="Wishlist"
                                  >
                                    <Image
                                      src="/assets/images/icons/heart.png"
                                      width={20}
                                      height={20}
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="best-seller mb-6 mt-8 text-center">
                                <button>BUY NOW</button>
                              </div>

                              <div className="rating-product">
                                {/* <Image width={128} height={128} src="" width="120px" alt="BedsDivan"/> */}
                              </div>
                              <div className="contentNew">
                                <p>{bed.product_name}</p>

                                <span
                                  className="price"
                                  style={{
                                    fontWeight: "600",
                                    paddingLeft: "18px",
                                    color: "#fc2003",
                                  }}
                                >
                                  £{bed.price}
                                </span>
                                <span
                                  style={{
                                    fontWeight: "600",
                                    paddingLeft: "18px",
                                    color: "#00b2bc",
                                  }}
                                >
                                  Deal of The Day
                                </span>
                              </div>
                            </div>
                          );
                        })}
                        <div className="product productNew sliderProduct">
                          <div className="thumb">
                            <a href="shop-left-sidebar.html" className="image">
                              <Image
                                width={128}
                                height={128}
                                src="/assets/images/banner/Homepage-banner.png"
                                className="rounded"
                                alt="Product"
                              />
                            </a>

                            <div className="actions">
                              <a
                                href="wishlist.html"
                                className="action wishlist"
                                title="Wishlist"
                              >
                                <Image
                                  src="/assets/images/icons/heart.png"
                                  width={20}
                                  height={20}
                                />
                              </a>
                            </div>
                          </div>
                          <div className="best-seller mb-6 mt-8 text-center">
                            <button>BUY NOW</button>
                          </div>

                          <div className="rating-product">
                            {/* <Image width={128} height={128} src="" width="120px" alt="BedsDivan"/> */}
                          </div>
                          <div className="contentNew">
                            <p>
                              Grey Linen Divan Base Or Set + Headboard &
                              Mattress FREE UK DELIVERY
                            </p>
                            <span className="price"></span>
                          </div>
                        </div>
                        <div className="product productNew sliderProduct">
                          <div className="thumb">
                            <a href="shop-left-sidebar.html" className="image">
                              <Image
                                width={128}
                                height={128}
                                src="/assets/images/banner/Homepage-banner.png"
                                className="rounded"
                                alt="Product"
                              />
                            </a>

                            <div className="actions">
                              <a
                                href="wishlist.html"
                                className="action wishlist"
                                title="Wishlist"
                              >
                                <Image
                                  src="/assets/images/icons/heart.png"
                                  width={20}
                                  height={20}
                                />
                              </a>
                            </div>
                          </div>
                          <div className="best-seller mb-6 mt-8 text-center">
                            <button>BUY NOW</button>
                          </div>

                          <div className="rating-product">
                            {/* <Image width={128} height={128} src="" width="120px" alt="BedsDivan" /> */}
                          </div>
                          <div className="contentNew">
                            <p>
                              Grey Linen Divan Base Or Set + Headboard &
                              Mattress FREE UK DELIVERY
                            </p>
                            <span className="price"></span>
                          </div>
                        </div>
                        <div className="product productNew sliderProduct">
                          <div className="thumb">
                            <a href="shop-left-sidebar.html" className="image">
                              <Image
                                width={128}
                                height={128}
                                src="/assets/images/banner/Homepage-banner.png"
                                className="rounded"
                                alt="Product"
                              />
                            </a>

                            <div className="actions">
                              <a
                                href="wishlist.html"
                                className="action wishlist"
                                title="Wishlist"
                              >
                                <i className="icon-heart"></i>
                              </a>
                            </div>
                          </div>
                          <div className="best-seller mb-6 mt-8 text-center">
                            <button>BUY NOW</button>
                          </div>

                          <div className="rating-product">
                            {/* <Image width={128} height={128} src="" width="120px" alt="BedsDivan" /> */}
                          </div>
                          <div className="contentNew">
                            <p>
                              Grey Linen Divan Base Or Set + Headboard &
                              Mattress FREE UK DELIVERY
                            </p>
                            <span className="price"></span>
                          </div>
                        </div>
                        <div className="product productNew sliderProduct">
                          <div className="thumb">
                            <a href="shop-left-sidebar.html" className="image">
                              <Image
                                width={128}
                                height={128}
                                src="/assets/images/banner/Homepage-banner.png"
                                className="rounded"
                                alt="Product"
                              />
                            </a>

                            <div className="actions">
                              <a
                                href="wishlist.html"
                                className="action wishlist"
                                title="Wishlist"
                              >
                                <Image
                                  src="/assets/images/icons/heart.png"
                                  width={20}
                                  height={20}
                                />
                              </a>
                            </div>
                          </div>
                          <div className="best-seller mb-6 mt-8 text-center">
                            <button>BUY NOW</button>
                          </div>

                          <div className="rating-product">
                            {/* <Image width={128} height={128} src="" width="120px" alt="BedsDivan" /> */}
                          </div>
                          <div className="contentNew">
                            <p>
                              Grey Linen Divan Base Or Set + Headboard &
                              Mattress FREE UK DELIVERY
                            </p>
                            <span className="price"></span>
                          </div>
                        </div>
                        <div className="product productNew sliderProduct">
                          <div className="thumb">
                            <a href="shop-left-sidebar.html" className="image">
                              <Image
                                width={128}
                                height={128}
                                src="/assets/images/banner/Homepage-banner.png"
                                className="rounded"
                                alt="Product"
                              />
                            </a>

                            <div className="actions">
                              <a
                                href="wishlist.html"
                                className="action wishlist"
                                title="Wishlist"
                              >
                                <Image
                                  src="/assets/images/icons/heart.png"
                                  width={20}
                                  height={20}
                                />
                              </a>
                            </div>
                          </div>
                          <div className="best-seller mb-6 mt-8 text-center">
                            <button>BUY NOW</button>
                          </div>

                          <div className="rating-product">
                            {/* <Image width={128} height={128} src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg" width="120px" alt="" /> */}
                          </div>
                          <div className="contentNew">
                            <p>
                              Grey Linen Divan Base Or Set + Headboard &
                              Mattress FREE UK DELIVERY
                            </p>
                            <span className="price"></span>
                          </div>
                        </div>
                      </Slider>
                    </div>

                    {/* For Mobile ENd */}
                  </div>
                </div>
              </div>
              <div className="container my-5">
                <div className="row">
                  <div className="col text-center">
                    <button
                      className="btn btn-default btn-hover"
                      style={button}
                      onClick={() => router.push(`/product/gardenfurniture`)}
                    >
                      VIEW ALL PRODUCTS
                    </button>
                  </div>
                </div>
              </div>

              <div className="container my-5">
                <div className="row">
                  <div className="col text-center my-5">
                    <h4 className="testomonial">
                      Check out our TrustPilot reviews and join hundreds of
                      happy customers who we’ve helped to buy a bed over the
                      last 10 years — you won’t be disappointed.
                    </h4>
                    <h6 className="mt-4">
                      We are confident you’ll love your new bed and that our
                      service will leave you more than satisfied. But if you
                      aren’t happy, we’ll happily either exchange it or give you
                      a refund within 30-days of purchase. The team we have is
                      dedicated to offering an unbeatable customer service. So
                      if there’s anything you need or any questions you want
                      answering — just give us a call or send us an email. A
                      friendly member of our team will be happy to help.
                    </h6>
                  </div>
                </div>
              </div>
            </div>


            <div className="container"></div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Gardenproduct;

export async function getServerSideProps(context) {
  const { req } = context;

  const title = req?.__NEXT_INIT_QUERY?.title;
  const category = req?.__NEXT_INIT_QUERY?.category;
  const price = req?.__NEXT_INIT_QUERY.price;
  
  

  const data = await axios.post(
    `${process.env.BASE_URL}/api/gardenfurniture/getbeds`,

    {
      method: "product_name",
      value: title,
      
    }
  );

  const data1 = await axios.post(
    `${process.env.BASE_URL}/api/gardenfurniture/getbeds`,

    {
      method: "category",
      value: category,
      
    }
  );

  const data2 = await axios.post(
    `${process.env.BASE_URL}/api/gardenfurniture/lastproduct`,

    // {
    //   method: "category",
    //   value: category,
      
    // }
  );

  const response = await data.data.data;

  const response1= await data1.data.data;
  const response2= await data2.data.data;

  

  return {
    props: { response ,response1,response2}, // will be passed to the page component as props
  };
}
