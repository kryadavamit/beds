import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image/";
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

import Header from "../components/Header";
import Footer from "../components/Footer";
import Review from "../components/Review";
import Timer from "../components/Timer";
import router, { useRouter } from "next/router";
import Mobilemenu from "../components/comps/Mobilemenu";
import { QuantityPicker } from "react-qty-picker";
import { useSelector, useDispatch } from "react-redux";
import Checkout from "../components/checkout/Checkout";

import { addToCart } from "../store/actions/cartActions";
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

function NewProduct({ response, response1, response2 }) {
  console.log(response)
  console.log(response)
  
  //ADD TO CART REDUX
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [qty, setQty] = useState(1);
  const [colorName, setColorName] = useState("No Color Selected");
  const [storageColorName, setStorageColorName] = useState("No storage");
  const [headboardColorName, setHeadboardColorName] = useState("No headboard");
  const [feetColorName, setFeetColorName] = useState("No feet");
  const [mattressColorName, setMattressColorName] = useState("No mattress");
  const [storageData, setStorageData] = useState([]); //Contains headboard data inside it
  const [headboardData, setHeadboardData] = useState([]); //Contains headboard data inside it
  const [MattressData,setMattressData]=useState([]);// 

  // const addToCartHandler = () => {
  //   dispatch(addToCart(response[0]._id, parseInt(qty), colorName));
  //   // router.push("/cart");
  // };

  // async function addToCarsst() {
  //   const { data } = await axios.get(`/api/products/${response[0]._id}`);

  //   
  // }
  // addToCarsst();
 

  const [expanded, setExpanded] = useState("panel1");
  const [data, setData] = useState([]);
  const [bed, setBed] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  
  // const [image, setImage] = useState(
  //   "/assets/images/ProductImage/divan-grey-pic-new-1 (1).jpg"
  // );
  const [image, setImage] = useState(response[0].images[0].color1.base_url);
  const storageIcon = [
    "/assets/images/newicons/storage000-01.png",
    "/assets/images/newicons/Storage-03.png",
    "/assets/images/newicons/Storage-04.png",
    "/assets/images/newicons/Storage-04.png",
    "/assets/images/newicons/Storage-04.png",
  ]
  const storagetitle = [
    "No-Storage",
    "2 Same Side",
    " 2Foot Side",
    "4 Drawer",
    "hel",
  ];
  

  let storageindex = -1;
  let headboardindex = -1;

  const headboardIcon = [
    "/assets/images/HeadboardIcon/headboard-icon-01 (1).png",
    "/assets/images/HeadboardIcon/headboard-icon-02.png",
    "/assets/images/HeadboardIcon/headboard-icon-03.png",
    "/assets/images/HeadboardIcon/headboard-icon-04.png",
    "/assets/images/HeadboardIcon/headboard-icon-04.png",
    "/headboard-icon-05.png",
    "/headboard-icon-05.png",
  ];
  const headboardtittle = [
    "No-Headboard",
    "Dimond Cube ",
    "Matching Cube",
    "Floor Standing",
    "Standing Cube",
  ];

  const feettitle = ["No-Feet", "Free Castor Wheels", "Chrome Gliders"];

  const feetIcon = [
    "/assets/images/newicons/feets-01.png",
    "/assets/images/newicons/feets-02.png",
    "/assets/images/newicons/feets-02.png",
    "/assets/images/newicons/feets-02.png",
    "/assets/images/newicons/feets-02.png",
  ];
  let feetindex = -1;
  let mattressessindex = -1;

  const mattressesstitle = [
    "No-Mattress",
    "Orthopedic Mattress",
    "Pocket (Tensel top)",
    "Pocket Pillow Top",
    "Memory Foam Mattress",
  ];
  const mattressesstitleIcon = [
    "/assets/images/newicons/Mattress-01.png",
    "/assets/images/newicons/Mattress-02.png",
    "/assets/images/newicons/Mattress-03.png",
    "/assets/images/newicons/Mattress-03.png",
    "/assets/images/newicons/Mattress-01.png",
    "/assets/images/newicons/feets-02.png",
  ];

  //STORING PRICE IN STATE
  const [headboard, setHeadboard] = useState(0);
  const [storage, setStorage] = useState(0);
  const [mattress, setMattress] = useState(0);
  const [feets, setfeet] = useState(0);

  
  
  
  

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  // send query to route
  const router = useRouter();
  const { id } = router.query;

  //GET SIZE
  

  //FILTER BED DYNAMIC

  var divanBedSize;
  if (router.query.size) {
    divanBedSize = response?.filter(function (beds) {
      return beds.size === router.query.size;
    });
  } else {
    divanBedSize = response;
  }

  // by color
  var image_color = router.query.colorName;
  var divanBedsColorName;
  if (router.query.colorName) {
    divanBedsColorName = response?.filter(function (beds) {
      console.log(beds.colorName)
      return (beds.colorName = router.query.colorName);
    });

    
  } else {
    divanBedsColorName = response;
  }
console.log(divanBedsColorName)
console.log(divanBedsColorName[0].images[0].color1)
  // color image
  var divanBedsrc;
  if (router.query.src) {
    divanBedsrc = response?.filter(function (beds) {
      return (beds.src = router.query.src);
    });

    
  } else {
    divanBedsrc = response;
  }
  var product_color;
  switch (image_color) {
    case "Grey Linen":
      product_color = "color1";
      break;
    case "Black Cotton":
      product_color = "color2";
      break;
    // case "Chenille":
    //   product_color = "color3";
    //   break;
    // case "Black Crushed":
    //   product_color = "color4";
    //   break;
  }

  const classes = useStyles({});
  console.log(color)

  //FETCHING API FOR BEDS
  console.log(response[4])

  useEffect(() => {
    setData(response);
    setBed(divanBedSize[0]);
    setColor(divanBedsColorName[0].images[0].color1);
    setImage(divanBedSize[0].images[0][product_color].base_url);
    //setImage(divanBedSize[0].images[0].color2.base_url)
    // setImage(router.query.src);
    setColorName(router.query.colorName);
    setStorageData(response[0].images[0].color1.storage[0]);
    setHeadboardData(response[0].images[0].color1.storage[0].headboard[0]);

    setSize(router.query.size);
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

  const addToCartHandler = () => {
    dispatch(addToCart(bed._id, parseInt(qty), colorName));
    router.push("/cart");
  };
  var i=0;
  const Not_Found_Image="/assets/images/image/no-image-found.png"
  return (
    <div>
      <div>
        <Head>
          <title>BedsDivans</title>
          <meta name="description" content="Generated by create next app" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <link href="/style/plugins/plugins.min.css/" rel="stylesheet"></link>
          <link rel="icon" href="/logo (1).png" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
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
              
                <div className="col-md-6 big-img-chenger"
                >
                   
                  <div className="twofeet">
                    <Timer />
                    <Image
                      id="shwimg_1"
                      className="imgfornone"
                      width={3000}
                      height={3000}
                      src={image}
                      priority
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
                  <div className="mt-4 tab-touch-inner">
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="first"
                    >
                      <Row>
                        <Col sm={3} xs={12}>
                          <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                              <Nav.Link eventKey="first"> Sizes</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">Color</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="thrid">Storage</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="fourth">Feet</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="five">Headboard</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="six">Mattressess</Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col sm={9} col xs={12}>
                          <Tab.Content>
                            <Tab.Pane eventKey="first">
                              <div className="bg-white cusHeight">
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
                                      className={`col-md-3 productimghover ${
                                        size === "2FT 6" ? "activeSize" : ""
                                      }`}
                                      onClick={() => {
                                        var newarray = response?.filter(
                                          function (beds) {
                                            return beds.size === "2FT 6";
                                          }
                                        );
                                        // setImage(
                                        //   // (size==="2FT 6")?newarray[0].images[0].color1.base_url:"/assets/images/image/no-image-found.png"
                                        //   function(size){
                                        //     return size==="2FT 6"?newarray[0].images[0].color1.base_url:"/assets/images/image/no-image-found.png"
                                        //   }
                                        // );
                                        setImage(newarray[0].images[0].color1.base_url?newarray[0].images[0].color1.base_url:"/assets/images/image/no-image-found.png")
                                        

                                        setSize("2FT 6");
                                        setBed(newarray[0]);
                                        // setColor(size==="2FT 6" ? newarray[0].images[0].color1:"/assets/images/image/no-image-found.png");
                                        setColor( newarray[0].images[0].color1);
                                      }}
                                    >
                                      <Image
                                        id="img_1"
                                        width={140}
                                        height={100}
                                        src="/assets/images/image/bed-sizes-01.png"
                                      />
                                      <br />
                                      <span className="productsize">
                                        2.6ft Single{" "}
                                        <span>
                                          {" "}
                                          <br /> <b> (£79)</b>
                                        </span>
                                      </span>
                                      <br />
                                      {/*<span className="productsize" style={{fontSize:"14px"}}> £ 400</span>*/}
                                    </div>
                                    <div
                                      className={`col-md-3 productimghover ${
                                        size === "3FT" ? "activeSize" : ""
                                      }`}
                                      onClick={() => {
                                        var newarray = response?.filter(
                                          function (beds) {
                                            return beds.size === "3FT";
                                          }
                                        );
                                        // setImage(
                                        // //  size==='3FT'? newarray[0].images[0].color1.base_url:"/assets/images/image/no-image-found.png"
                                        // function(size){
                                        //   return size==='3FT'? newarray[0].images[0].color1.base_url:"/assets/images/image/no-image-found.png"
                                        // }
                                        // );
                                         setImage(newarray[0].images[0].color1.base_url?newarray[0].images[0].color1.base_url:"/assets/images/image/no-image-found.png")

                                        setBed(newarray[0]);
                                        setColor(newarray[0].images[0].color1);
                                        setSize("3FT");
                                      }}
                                    >
                                      <Image
                                        width={140}
                                        height={100}
                                        id="img_2"
                                        src="/assets/images/image/bed-sizes-02.png"
                                      />
                                      <span className="productsize">
                                        3ft Single{" "}
                                        <span>
                                          {" "}
                                          <br />
                                          <b> (£89) </b>
                                        </span>
                                      </span>
                                      <br />
                                      {/*<span className="productsize" style={{fontSize:"14px"}}> £ 400</span>*/}
                                    </div>
                                    <div
                                      className={`col-md-3 productimghover ${
                                        size === "4FT" ? "activeSize" : ""
                                      }`}
                                      onClick={() => {
                                        var newarray = response?.filter(
                                          function (beds) {
                                            return beds.size === "4FT";
                                          }
                                        );
                                        setImage(
                                           newarray[0].images[0].color1.base_url?newarray[0].images[0].color1.base_url:"/assets/images/image/no-image-found.png"
                                        );
                                        setBed(newarray[0]);
                                        setColor(size==="4FT"?newarray[0].images[0].color1:"");
                                        setSize("4FT");
                                      }}
                                    >
                                      <Image
                                        width={140}
                                        height={100}
                                        id="img_3"
                                        src="/assets/images/image/bed-sizes-03.png"
                                      />
                                      <span className="productsize">
                                        4ft Single{" "}
                                        <span>
                                          {" "}
                                          <br /> <b> (£109)</b>
                                        </span>
                                      </span>
                                      <br />
                                      {/*<span className="productsize" style={{fontSize:"14px"}}> £ 400</span>*/}
                                    </div>
                                    <div
                                      className={`col-md-3 productimghover ${
                                        size === "4FT 6" ? "activeSize" : ""
                                      }`}
                                      onClick={() => {
                                        var newarray = response?.filter(
                                          function (beds) {
                                            return beds.size === "4FT 6";
                                            // beds.size?"4FT 6":""
                                          }
                                        );
                                        setImage(
                                          newarray[0].images[0].color1.base_url?newarray[0].images[0].color1.base_url:"/assets/images/image/no-image-found.png"
                                        );
                                        setColor( size==="4FT 6"? newarray[0].images[0].color1:"");
                                        setSize("4FT 6");
                                        setBed(newarray[0]);
                                        
                                      }}
                                    >
                                      <Image
                                        id="img_4"
                                        width={140}
                                        height={100}
                                        src="/assets/images/image/bed-sizes-04.png"
                                      />
                                      <span className="productsize">
                                        4.6ft Single{" "}
                                        <span>
                                          {" "}
                                          <br /> <b> (£109) </b>
                                        </span>
                                      </span>
                                      <br />

                                      {/*<span className="productsize" style={{fontSize:"14px"}}> £ 400</span>*/}
                                    </div>
                                    {/* <div className="container-fluid">
                                  <div className="row mt-2"> */}
                                    <div
                                      className={`col-md-3 productimghover ${
                                        size === "5FT" ? "activeSize" : ""
                                      }`}
                                      onClick={() => {
                                        var newarray = response?.filter(
                                          function (beds) {
                                            return beds.size === "5FT";
                                          }
                                        );
                                        setImage(
                                          newarray[0].images[0].color1.base_url?newarray[0].images[0].color1.base_url:"/assets/images/image/no-image-found.png"
                                        );
                                        setColor(size==="5FT"? newarray[0].images[0].color1:"");
                                        setSize("5FT");
                                        setBed(newarray[0]);
                                        
                                      }}
                                    >
                                      <Image
                                        id="img_5"
                                        width={140}
                                        height={100}
                                        src="/assets/images/image/bed-sizes-05.png"
                                      />
                                      <span className="productsize">
                                        5ft Single{" "}
                                        <span>
                                          {" "}
                                          <br /> <b> (£119)</b>
                                        </span>
                                      </span>
                                      <br />
                                      {/*<span className="productsize" style={{fontSize:"14px"}}> £ 400</span>*/}
                                    </div>
                                    <div
                                      className={`col-md-3 productimghover ${
                                        size === "6FT" ? "activeSize" : ""
                                      }`}
                                      onClick={() => {
                                        var newarray = response?.filter(
                                          function (beds) {
                                            return beds.size === "6FT";
                                          }
                                        );
                                        setColor(size==="6FT"? newarray[0].images[0].color1:"");
                                        setSize("6FT");
                                        setImage(
                                           newarray[0].images[0].color1.base_url?newarray[0].images[0].color1.base_url:"/assets/images/image/no-image-found.png"
                                        );
                                        setBed(newarray[0]);
                                        
                                      }}
                                    >
                                      <Image
                                        priority={true}
                                        id="img_6"
                                        width={140}
                                        height={100}
                                        src="/assets/images/image/bed-sizes-06.png"
                                      />
                                      <span className="productsize">
                                        6ft Single{" "}
                                        <span>
                                          {" "}
                                          <br /> <b> (£149) </b>
                                        </span>
                                      </span>
                                      <br />
                                     
                                    </div>
                                    
                                    
                                  </div>
                                </div>
                                {/* </div> */}
                                {/* </div> */}
                               
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              <div className="bg-white cusHeight">
                                <div className="row">
                                  <div className="col-md-12 mt-4 ml-6">
                                    {/* <Image
                                    
                                      width={40}
                                      height={50}
                                      src="/assets/images/image/meter.png"
                                    />
                                    <span className="cusSize">Choose Size</span>*/}
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
                                      className={`col-md-3 productimghover ${
                                        colorName === "Grey Linen"
                                          ? "activeSize"
                                          : ""
                                      }`}
                                      onClick={() => {
                                        setImage(
                                          (bed?.images[0].color1.base_url)?bed.images[0].color1.base_url:Not_Found_Image
                                        );
                                        setColor(bed?.images[0].color1);

                                        setColorName("Grey Linen");
                                      }}
                                    >
                                      <Image
                                        id="img_7"
                                        width={60}
                                        height={60}
                                        src="/assets/images/image/123.jpg"
                                        className="colorImgR"
                                      />
                                      <br />
                                      <span className="productcolor">
                                        Grey Linen
                                      </span>
                                    </div>
                                    <div
                                      className={`col-md-3 productimghover ${
                                        colorName === "Black Cotton"
                                          ? "activeSize"
                                          : ""
                                      }`}
                                      onClick={() => {
                                        setImage(
                                          (bed?.images[0].color2.base_url)?bed.images[0].color2.base_url:Not_Found_Image
                                        );
                                        setColor(bed?.images[0].color2);
                                        setColorName("Black Cotton");
                                      }}
                                    >
                                      <Image
                                        id="img_8"
                                        width={60}
                                        height={60}
                                        src="/assets/images/image/124.jpg "
                                        className="colorImgR"
                                      />
                                      <br />
                                      <span className="productcolor text-center">
                                      Black Cotton
                                      </span>
                                    </div>
                                    
                                    
                                  </div>
                                </div>
                                <div className="container-fluid">
                                 
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="thrid">
                              <div className="bg-white cusHeight">
                                <div className="row">
                                  <div className="col-md-12 mt-4 ml-6">
                                    {/* <Image
                                      width={40}
                                      height={50}
                                      src="/assets/images/image/meter.png"
                                    />
                                    <span className="cusSize">Choose Size</span> */}
                                    <span className="optionB">
                                      24 Option Available
                                    </span>
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
                                   
                                    {color?.storage?.map((storage) => {
                                      
                                      if (storage.url) {
                                        storageindex = storageindex + 1;
                                      
                                        return (
                                          <div
                                            className={`col-md-3 productimghover ${
                                              image === storage.url
                                                ? "activeSize"
                                                : ""
                                            }`}
                                            onClick={() => {
                                              setImage(storage.url?storage.url:Not_Found_Image);
                                              setStorageColorName(
                                                storagetitle[storageindex]
                                              );
                                              setStorageData(storage)
                                              setStorage(
                                                parseInt(storage.price)
                                              );
                                            }}
                                          >
                                            <Image
                                              id="img_43"
                                              width={120}
                                              height={100}
                                              src={storageIcon[storageindex]}
                                            />

                                            <span className="productcolor">
                                              {storagetitle[storageindex]}
                                            </span>
                                            <span>
                                              {" "}
                                              <b> (£{storage.price}) </b>
                                            </span>
                                          </div>
                                        );
                                      }
                                    })}

                                    
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                              <div className="bg-white cusHeight">
                                <div className="row">
                                  <div className="col-md-12 mt-4 ml-6">
                                    {/* <Image
                                      width={40}
                                      height={50}
                                      src="/assets/images/image/meter.png"
                                    />
                                    <span className="cusSize">Choose Size</span> */}
                                    <span className="optionB">
                                      24 Option Available
                                    </span>
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
                                    {color?.feet_images?.map((feet) => {
                                      if (feet.url) {
                                        feetindex = feetindex + 1;
                                        return (
                                          <div
                                            className={`col-md-3 productimghover ${
                                            //   feetColorName ===
                                            //   feettitle[feetindex]
                                            image === feet.url
                                                ? "activeSize"
                                                : ""
                                            }`}
                                            onClick={() => {
                                              setfeet(parseInt(feet.price));
                                              
                                              setImage(feet.url);
                                              setFeetColorName(
                                                feettitle[feetindex]
                                              );
                                            }}
                                          >
                                            <Image
                                              id="img_67"
                                              width={80}
                                              height={80}
                                              src={feetIcon[feetindex]}
                                            />
                                            <br />
                                            <span className="productcolor">
                                              {feettitle[feetindex]}
                                            </span>
                                            <span>
                                              {" "}
                                              <b> (£{feet.price}) </b>
                                            </span>
                                          </div>
                                        );
                                      }
                                    })}

                                   
                                         </div>
                                </div>
                               
                              
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="five">
                              <div className="bg-white cusHeight">
                                <div className="row">
                                  <div className="col-md-12 mt-4 ml-6">
                                    {/* <Image
                                      width={40}
                                      height={50}
                                      src="/assets/images/image/meter.png"
                                    />
                                    <span className="cusSize">Choose Size</span> */}
                                    <span className="optionB">
                                      24 Option Available
                                    </span>
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
                                  
                                 
                                  {storageData?.headboard?.map(
                                    

                                      (headboard) => {
                                        console.log(headboard)
                                        if (headboard.url) {
                                          headboardindex += 1;

                                          return (
                                            <div
                                              className={`col-md-3 productimghover ${
                                                image === headboard.url
                                                  ? "activeSize"
                                                  : ""
                                              }`}
                                              onClick={() => {
                                                setImage(headboard.url?headboard.url:Not_Found_Image);
                                                setHeadboardData(headboard);
                                                setHeadboard(
                                                  parseInt(headboard.price)
                                                );

                                                setHeadboardColorName(
                                                  headboardtittle[
                                                    headboardindex
                                                  ]
                                                );
                                              }}
                                            >
                                              <Image
                                                id="img_82"
                                                width={120}
                                                height={100}
                                                src={
                                                  headboardIcon[headboardindex]
                                                }
                                              />

                                              <span className="productcolor">
                                                {
                                                  headboardtittle[
                                                    headboardindex
                                                  ]
                                                }
                                                <span>
                                                  {" "}
                                                  <b> (£{headboard.price}) </b>
                                                </span>
                                              </span>
                                            </div>
                                          );
                                        }
                                      }
                                    )}
      {/*=============Headboard test=========================== */}

                                   
                                    
                                    
                                  </div>
                                </div>
                               
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="six">
                              <div className="bg-white cusHeight">
                                <div className="row">
                                  <div className="col-md-12 mt-4 ml-6">
                                    {/* <Image
                                      width={40}
                                      height={50}
                                      src="/assets/images/image/meter.png"
                                    />
                                    <span className="cusSize">Choose Size</span> */}
                                    <span className="optionB">
                                      24 Option Available
                                    </span>
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
                                    {headboardData?.mattresses_images?.map((mattress) => {
                                     
                                      mattressessindex = mattressessindex + 1;
                                      
                                      if (mattress) {
                                        
                                        return (
                                          <div
                                            className={`col-md-3 productimghover ${
                                              image === mattress.url
                                                ? "activeSize"
                                                : ""
                                            }`}
                                            onClick={() => {
                                              setImage(mattress.url?mattress.url:Not_Found_Image);
                                              setMattress(mattress.price);
                                              setMattressData(MattressData);
                                              
                                              setMattressColorName(
                                                mattressesstitle[
                                                  mattressessindex
                                                ]
                                              );
                                            }}
                                          >
                                            <Image
                                              id="img_67"
                                              width={80}
                                              height={80}
                                              src={
                                                mattressesstitleIcon[
                                                  mattressessindex
                                                ]
                                              }
                                            />
                                            <br />
                                            <span className="productcolor">
                                              {
                                                mattressesstitle[
                                                  mattressessindex
                                                ]
                                              }
                                            </span>
                                            <span>
                                              {" "}
                                              <b> (£{mattress.price}) </b>
                                            </span>
                                          </div>
                                        );
                                      }
                                    })}
                                    
                                    
                                  </div>
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
                        {/* <input
                          className="inputfield"
                          type="number"
                          max="10"
                          min="1"
                          placeholder="1"
                        /> */}
                        <QuantityPicker
                          min={1}
                          onChange={(e) => setQty(e)}
                          value={qty}
                        />

                        {/* <div class="quantity buttons_added">
                        <input type="button" value="-" class="minus"/><input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode=""/><input type="button" value="+" class="plus" />
                        </div> */}
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
                              {/* <button
                                className="price-button"
                                onClick={addToCartHandler}
                              >
                                ADD TO BASKET
                              </button> */}
                              <Checkout
                                addToCartHandler={addToCartHandler}
                                price={total}
                                title={bed?.product_name}
                                size={bed?.size}
                                base_price={bed?.price}
                                type="beds"
                                bedColor={colorName}
                                StorageColorName={storageColorName}
                                feetColorName={feetColorName}
                                headboardColorName={headboardColorName}
                                mattressColorName={mattressColorName}
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
                        {/* {response2.map((bed) => {
                          return (
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
                                    
                                    src={bed.images[0].color1.base_url}
                                    style={{ width: "94px" }}
                                    alt=""
                                  />
                                </div>
                                <div className="col-md-6 col-6 pl-8">
                                  <h6
                                    style={{
                                      color: "#141414",
                                      fontSize: "15px",
                                    }}
                                    className="completebed-heading"
                                  >
                           
                                    {bed.product_name}
                                  </h6>
                                  <img
                                    src="/assets/images/image/Group 480.png"
                                    alt=""
                                  />
                                  <span className="ratingfont pl-1">
                                    (8524)
                                  </span>
                                  <p style={{ color: "#f22222" }}>
                                    {bed.price}
                                  </p>
                                </div>
                                <div className="col-md-4">
                                  <button
                                    className="ProductPageB "
                                    onClick={() =>
                                      router.push(
                                        `/newproduct?title=${bed.product_name}&size=${bed.size}&colorName=${router.query.colorName}`
                                      )
                                    }
                                  >
                                    <b>ADD</b>
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })} */}

                       

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
                          
                         
                          {bed?.description}
                         
                        </div>
                       
                      </AccordionDetails>
                    </Accordion>
                    {/* <Accordion>
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
                    </Accordion> */}
                    {/* <Accordion>
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
                    </Accordion> */}
{/* 
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
                    </Accordion> */}

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
                    src="assets/images/DivanBedsicon/Review.png"
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
                        src="assets/images/DivanBedsicon/Logo (1).png"
                        width="75%"
                        alt=""
                      />
                      <hr />
                      <button className="trustpilot">
                        <img
                          src="assets/images/DivanBedsicon/Trustpilot02.png"
                          width="300px"
                          alt=""
                        />
                      </button>
                      <br /> <br />
                      <a href="https://www.reviews.co.uk/" className="pointer">
                        <img
                          src="assets/images/DivanBedsicon/Reviews-co-uk.png"
                          width="200px"
                          alt=""
                        />
                      </a>
                      <br />
                      <br />
                      <button className="trustpilot">
                        <img
                          src="assets/images/DivanBedsicon/toppng.com-oogle-review-logo-png-google-reviews-transparent-993x400.png"
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
                                      `/newproduct?title=${bed.product_name}&size=${bed.size}&colorName=${router.query.colorName}`
                                    )
                                  }
                                  className="image"
                                >
                                  <Image
                                    width={378}
                                    height={128}
                                    src={bed.images[0].color1.base_url}
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
                                      `/newproduct?title=${bed.product_name}&size=${bed.size}&colorName=${router.query.colorName}`
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
                                <button
                                  onClick={() =>
                                    router.push(
                                      `/newproduct?title=${bed.product_name}`
                                    )
                                  }
                                >
                                  <span
                                    style={{
                                      color: "blue",
                                    }}
                                  >
                                    <p>{bed.product_name}</p>
                                  </span>
                                </button>
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
                                      `/newproduct?title=${bed.product_name}`
                                    )
                                  }
                                  className="image"
                                >
                                  <Image
                                    width={128}
                                    height={128}
                                    src={bed.images[0].color1.base_url}
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
                      onClick={() => router.push(`/product/divanbed`)}
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

export default NewProduct;

export async function getServerSideProps(context) {
  const { req, query } = context;
  const title = query?.title;
  
  const size = query?.size;
  const data = await axios.post(
    `${process.env.BASE_URL}/api/products/getbeds`,
    {
      method: "product_name",
      value: decodeURI(title),
    }
  );

  console.log({tes_data:data})
  
  

  const data1 = await axios.post(`${process.env.BASE_URL}/api/products/getbeds`, {
    method: "size",
    value: size,
  });

  const data2 = await axios.post(
    `${process.env.BASE_URL}/api/products/lastproduct`
    //  {
    //   method: "size",
    //   value: size,
    // }
  );

  const response2 = await data2.data.data;

  const response = await data.data.data;


  const response1 = await data1.data.data;

  return {
    props: { response, response1, response2 }, // will be passed to the page component as props
  };
}
