
import Image from 'next/image/';
import Link from 'next/link';
import Head from 'next/head'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Review from '../../components/Review';
import GardenfurnitureBox from '../../components/comps/GardenfurnitureBox';
import { useRouter } from "next/router";
import axios from "axios";

function GardenFurniture({ response }) {
    const router = useRouter();
    
    return (
        <div>
            <div>
                <Head>
                    <title>BedsDivan</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/logo (1).png" />

                </Head>
                <div>
                    <Header />

                    {/* Banner Start */}
                    <div className="section hero-slide-item2">
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mt-10 For-margin">
                                        <h2 className="DivanPageG"><b>Summer Sale Now On  <br /> Upto 70% Off</b></h2>
                                        <p className="mt-4" style={{ color: "#141414", fontSize: "15px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                                        <div className="mt-10">
                                            <button className="ShopMobile " style={{ color: "#ffffff", backgroundColor: "#EC9E17", padding: "9px", borderRadius: "42px", paddingLeft: "26px", paddingRight: "26px", fontSize: "18px", paddingTop: "7px", paddingBottom: "5px" }}> <b>SHOP NOW</b> </button>
                                        </div>
                                        <hr style={{ width: "84%" }} />
                                    </div>
                                </div>
                                <div className="col-md-6 mt-8 MobileSection" style={{ position: "relative", left: "16px" }}>
                                    <Image width={550} height={400} className="responsiveImage" src="/assets/images/DivanBedsicon/Group 538.png" alt="product" />
                                </div>
                            </div>

                        </div>


                    </div>
                    {/* Banner End */}
                    <div className="section mt-2" style={{ backgroundColor: "#EC9E17" }}>
                        <div className="container text-center p-3" >
                            <h3 style={{ color: "#141414" }}> <strong> Quick Delivery - </strong>Shop our beds available within 2 weeks</h3>

                        </div>


                    </div>

                    <div className="BodyMobileHeight" style={{ backgroundColor: "#f3f3f8", height: "1156px" }}>
                        <div className="section mb-10 pt-100px  ">
                            <div className="container-fluid">

                                <div className="row">
                                    <div className="col-md-12 text-center" data-aos="fade-up">
                                        <div className="section-title">
                                            <h2 className="title" style={{ color: "#222178", fontWeight: "700" }}>  Shop by Size</h2>
                                        </div>
                                    </div>



                                </div>
                                <div className="row">
                                    <div className="size-box">
                                        <div className="single-box">
                                            <a href="/gardenfurniture/one-seater"> <Image width={250} height={100} src="/assets/images/DivanBedsicon/Sofa-N1.png" alt="Product" /></a>

                                            <p className="text-center  mt-2" style={{ color: "#222178" }}> <b> 1 Seater </b></p>

                                        </div>

                                        <div className="single-box">
                                            <a href="/gardenfurniture/two-seater"> <Image width={250} height={100} src="/assets/images/DivanBedsicon/Sofa-N2.png" alt="Product" /></a>
                                            <p className="text-center  mt-2" style={{ color: "#222178" }}> <b> 2 Seater</b></p>
                                        </div>


                                        <div className="single-box">
                                            <a href="/gardenfurniture/three-seater"><Image width={250} height={100} src="/assets/images/DivanBedsicon/Sofa-N4.png" alt="Product" /></a>
                                            <p className="text-center  mt-2" style={{ color: "#222178" }}> <b> 3 Seater </b></p>
                                        </div>

                                        <div className="single-box">
                                            <a href="/gardenfurniture/four-seater"><Image width={250} height={100} src="/assets/images/DivanBedsicon/Sofa-N3.png" alt="Product" /></a>
                                            <p className="text-center mt-2" style={{ color: "#222178" }}>
                                                <b> 4 Seater</b>
                                            </p>
                                        </div>
                                        {/* 
                            <div className="single-box">
                                <a href="#"><Image width={180} height={100} src="/assets/images/DivanBedsicon/Group 481.svg" alt="Product"/></a>
                                <p className="text-center mt-2" style={{color:"#222178" }}>
                                  <b> Super King</b>
                                </p>
                            </div> */}
                                    </div>





                                </div>


                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center" data-aos="fade-up">
                                    <div className="section-title mb-0">
                                        <h2 className="title colorfirst">BedsDivans.co.uk</h2>  </div>
                                    <p className="sub-title mb-6" style={{ fontWeight: "600" }}> We’re one of the UK’s leading manufacturers of <span style={{ color: "#262884" }}>cheap divan beds</span> , offering a rich selection of products in a variety of styles. At BedsDivans, we are committed to improving comfort and sleep quality without compromising style. We believe shopping for a bed, mattress, or set of <span style={{ color: "#262884" }}>rattan furniture</span>  for your garden should be an enjoyable experience all the way through. </p>
                                    <hr />
                                </div>
                            </div>


                        </div>
                        <div className="section">
                            <div className="container">
                                <div className="row mt-6">
                                    <div className="col-md-6 bg-white" style={{ position: "relative", left: "105px" }}>
                                        <div className="Sofa-Heading">
                                            <h3 style={{ color: "#1E196C" }}> <b> Exclusive Offers on Sofa & Sofa Beds </b></h3>
                                            <p className="mt-2" style={{ color: "#7C7C7C", fontSize: "13px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed <br /> diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>

                                        </div>
                                        <div style={{ marginTop: "43px", marginLeft: "37px", marginBottom: "60px" }}>
                                            <button className="ShopMobile" style={{ color: "#ffffff", backgroundColor: "#f22222", padding: "9px", borderRadius: "0px", paddingLeft: "33px", paddingRight: "37px", fontSize: "18px", paddingTop: "7px", paddingBottom: "5px" }} onClick={() => router.push(`/product/sofa`)}> <b>SHOP NOW</b> </button>
                                        </div>

                                    </div>
                                    <div className="col-md-6  " style={{ backgroundColor: "transparent", position: "relative", left: "197px", width: "0%" }} >
                                        <Image width={500} height={500} src="/assets/images/DivanBedsicon/Group 501.png" className="" alt="" />

                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="section mb-10  pt-100px bg-white MobileShopClr">
                            <div className="container-fluid">

                                <div className="row">
                                    <div className="col-md-12 text-center" data-aos="fade-up">
                                        <div className="section-title">
                                            <h2 className="title" style={{ color: "#222178", fontWeight: "700" }}>  Shop By Color</h2>
                                        </div>
                                    </div>



                                </div>
                                <div className="row">
                                    <div className="size-box">
                                        <div className="single-box">
                                            <a href="/gardenfurniture/white"> <Image width={180} height={100} src="/assets/images/DivanBedsicon/Mask Group 20.png" alt="Product" /></a>

                                            <p className="text-center  mt-2" style={{ color: "#222178" }}> <b> White </b></p>

                                        </div>

                                        <div className="single-box">
                                            <a href="/gardenfurniture/Cream"> <Image width={180} height={100} src="/assets/images/DivanBedsicon/Mask Group 21.png" alt="Product" /></a>
                                            <p className="text-center  mt-2" style={{ color: "#222178" }}> <b> Cream </b></p>
                                        </div>


                                        <div className="single-box">
                                            <a href="/gardenfurniture/Blue"><Image width={180} height={100} src="/assets/images/DivanBedsicon/Mask Group 22.png" alt="Product" /></a>
                                            <p className="text-center  mt-2" style={{ color: "#222178" }}> <b> Blue </b></p>
                                        </div>

                                        <div className="single-box">
                                            <a href="/gardenfurniture/Black"><Image width={180} height={100} src="/assets/images/DivanBedsicon/Mask Group 23.png" alt="Product" /></a>
                                            <p className="text-center mt-2" style={{ color: "#222178" }}>
                                                <b> Black</b>
                                            </p>
                                        </div>

                                        <div className="single-box">
                                            <a href="/gardenfurniture/wooden"><Image width={180} height={100} src="/assets/images/DivanBedsicon/Mask Group 24.png" alt="Product" /></a>
                                            <p className="text-center mt-2" style={{ color: "#222178" }}>
                                                <b> Wooden color</b>
                                            </p>
                                        </div>
                                    </div>





                                </div>


                            </div>
                        </div>
                        <div className="section hero-slide-itemGardenFur">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mt-10 For-margin" style={{ float: "right" }}>
                                            <h2 className="SofaPageH2" style={{ marginTop: "10px" }}><b>Exclusive offer on <br /> Slender 3 Seater Sofa</b></h2>
                                            <p className="mt-4" style={{ color: "#000", fontSize: "15px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br /> sed  diam nonumy eirmod tempor invidunt ut labore et <br /> dolore magna</p>
                                            <div className="mt-10">
                                                <button className="ShopMobile" style={{ color: "#ffffff", backgroundColor: "#f22222", padding: "9px", borderRadius: "0px", paddingLeft: "33px", paddingRight: "37px", fontSize: "18px", paddingTop: "7px", paddingBottom: "5px" }} onClick={() => router.push(`/sofa/3seatersofa`)}> <b>SHOP NOW</b> </button>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>


                        </div>
                        {/* <div className="section hero-slide-item8">
        <div className="container ">
            <div className="row">
                <div className="col-md-12">
                    <div className="mt-10 For-margin">
                    <h2 className="SofaPageH2" style={{marginTop:"10px"}}><b>Exclusive offer on <br /> Slender 3 Seater Sofa</b></h2>
                    <p className="mt-4" style={{color:"#000",fontSize:"15px"}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br /> sed  diam nonumy eirmod tempor invidunt ut labore et <br /> dolore magna</p>
                         <div className="mt-10">
                            <button className="ShopMobile" style={{color:"#ffffff", backgroundColor:"#f22222", padding:"9px", borderRadius: "0px",paddingLeft:"33px",paddingRight:"37px", fontSize:"18px", paddingTop:"7px",paddingBottom: "5px" }}> <b>SHOP NOW</b> </button>
                        </div>
                       
                    </div>
                </div>
                
            </div>

        </div>


    </div> */}
                        <div className="container mt-10">
                            <div className="text-center">
                                <h4 style={{ color: "#F22222" }}> <b> OUR EXCLUSIVE </b> </h4>
                                <h2 className="title mt-2" style={{ color: "#222178", fontWeight: "800" }}>  Complete Divan Bed Set Range</h2>
                                <p className="mt-2 mb-6" style={{ color: "#7c7c7c", fontSize: "15px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod <br /> tempor invidunt ut labore  et dolore magna</p>

                            </div>
                            <div
                                className="container mt-4 mb-4 rounded"
                                style={{ backgroundColor: "#f2f2f2" }}
                            >
                                <div className="row" style={{ padding: "10px" }}>
                                    <div className="col-md-3">
                                        <span
                                            style={{ marginRight: "0 !important", margin: "0 auto" }}
                                        >
                                            <select
                                                className="dropdown-section"
                                                onChange={(e) =>
                                                    router.push(`/product/gardenfurniture?size=${e.target.value}`)
                                                }
                                            >
                                                <option label="GardenFurniture" />
                                                <option value="1-Seater" label="1-Seater" />
                                                <option value="2-Seater" label="2-Seater" />
                                                <option value="3-Seater" label="3-Seater" />
                                                <option value="4-Seater" label="4-Seater" />
                                                <option value="garden set" label="garden set" />
                                                {/* <option value="4FT" label="4Feet" />
                        <option value="4FT 6" label="4 6Feet" />
                        <option value="5FT" label="5 Feet" />
                        <option value="6FT" label="6 Feet" /> */}
                                            </select>
                                        </span>
                                    </div>
                                    <div className="col-md-3">
                                        <span
                                            style={{ marginRight: "0 !important", margin: "0 auto" }}
                                        >
                                            <select className="dropdown-section">
                                                <option label="Color" />
                                                <option value="White" label="White" />
                                                <option value="Cream" label="Cream" />
                                                <option value="Blue" label="Blue" />
                                                <option value="Black" label="Black" />
                                            </select>
                                        </span>
                                    </div>
                                    <div className="col-md-3">
                                        <span
                                            style={{ marginRight: "0 !important", margin: "0 auto" }}
                                        >
                                            <select className="dropdown-section">
                                                <option label="Price" />
                                                <option value="£0-£200" label="£0-£200" />
                                                <option value="£201-£400" label="£201-£400" />
                                                <option value="£401-£600" label="£401-£600" />
                                                <option value="£601-£800" label="£601-£800" />
                                                <option value="£801-£1000" label="£801-£1000" />
                                                <option value="£1001-£1200" label="£1001-£1200" />
                                            </select>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                {
                                    response.map((item) => {
                                        
                                        return (
                                            <GardenfurnitureBox
                      src={item.images[1].url}
                      title={item.product_name}
                      price={item.price}
                      category={item.category}
                      color='White'
                    />
                                        );
                                    })
                                }
                            </div>
                        </div>

                        <div className="section pb-100px pt-100px bg-brown">
                            <div className="container-fluid coustmer-review">
                                <div className="row">
                                    <div className="col-md-12" data-aos="fade-up">
                                        <div className="section-title text-center mb-11">
                                            <h2 className="title colorsecond">DISCOVER THE BENEFITS OF SHOPPING ONLINE AT BEDSDIVANS</h2>
                                            <p>When looking for a new bed why not try the new designed divan bed. It is affordable and looks great. At bedsdivans we spent years in improving our wide selection of beds and we can assure you will love our latest selection of divan beds.
                                                At Bedsdivans we aim to work around your needs whether it comes to short notice delivery dates or the slightest adjustment to your bed we are always here to help you get the bed right for you.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center">

                                    <div className="">
                                        <a href="#" className="btn btn-primary" style={{ borderRadius: "36px", marginBottom: "23px" }}>More Services</a>
                                    </div>
                                </div>





                                <Review />




                            </div>
                        </div>

                        <Footer />


                    </div>
                </div>
            </div>
        </div>
    )
}

export default GardenFurniture;
export async function getServerSideProps(context) {
    const { req } = context;
    const size = req?.__NEXT_INIT_QUERY?.size;
    let sizes = "";
    //size ? (sizes = size) : (sizes = "");
    const data = await axios.post(
        `${process.env.BASE_URL}/api/gardenfurniture`,
    );
    const response = data.data.data;
    return {
        props: { response }, // will be passed to the page component as props
    };
}
