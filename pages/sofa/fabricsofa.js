import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Review from '../../components/Review';
import Filter from '../../components/Filter';
import Menu from '../../components/Menu';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProductBox from "../../components/comps/ProductBox";
import { useRouter } from "next/router";
import SofaBox from "../../components/comps/SofaBox";



const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two', className: 'myOptionClassName' }, 
];


function Fabricsofa({response}){
  const router = useRouter();
  
  const [size,setSize]=useState("");
  const[maxPrice,setMaxPrice]=useState();
  const [minPrice,setMinPrice]=useState();
  
  const [imageIndex,setImageIndex]=useState("0")

  useEffect(()=>{

    router.push(`/sofa/fabricsofa?${size?"size="+size:""}${maxPrice ? size?"&maxPrice="+maxPrice:"maxPrice="+maxPrice : ""}${minPrice? "&minPrice="+minPrice:""}`)

  },[size,maxPrice,minPrice])
 
 

  const [items ,setItem]=useState(Menu);
  const filterItem =(cateItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === cateItem;

    });
    setItem(updatedItems);

  }

    return(
        <div style={{fontFamily:"sofia-pro,Helvetica,Arial,sans-serif"}}>
             <Head>
          <title>BedsDivans</title>
          <meta name="description" content="Generated by create next app" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <link rel="icon" href="/logo (1).png" />
        </Head>

        <Header/>

        
        
          <div className="container">
              <div className="row text-center ">
                  <h1 className="font-weight-bold mt-6" style={{color:"#0e3f70"}}>Fabric Sofa</h1>
                  <p className="mt-4" style={{fontSize:"17px",fontWeight:"300",color:"#3a356d",fontStyle:"normal"}}>A great night’s sleep starts with the perfect bed, and we can help with that! Not only are our house fabric divan beds ridiculously comfortable, but they’re super stylish too. Available in a variety of fabrics and colours, our range of divan beds will complement any home decor perfectly. We have something to suit everyone.</p>

              </div>

          </div>

          <div className="section mt-10">
        <div className="container">
          
          <div className="row">
            <div className="size-box">
              {/* <div className="single-box category-icon">
                <a href="">
                  
                  <Image
                    width={140}
                    height={100}
                    alt="BedsDivan"
                    src="/assets/images/image/bed-sizes-01.png"
                  />
                </a>

                <p className="text-center text-blue mt-2">   1 Seater </p>
              </div> */}

              <div className="single-box category-icon" >
                <a href="/sofa/2seatersofa">
                  
                  <Image
                    width={140}
                    height={100}
                    alt="BedsDivan"
                    src="/assets/images/image/bed-sizes-02.png"
                  />
                </a>
                <p className="text-center text-blue mt-2">   2 Seater </p>
              </div>

              <div className="single-box category-icon">
                <a href="/sofa/3seatersofa">
                  <Image
                    width={140}
                    height={128}
                    alt="BedsDivan"
                    src="/assets/images/image/bed-sizes-03.png"
                  />
                </a>
                <p className="text-center text-blue mt-2">  3 Seater  </p>
              </div>

              <div className="single-box category-icon">
                <a href="/sofa/4seatersofa">
                  <Image
                    width={140}
                    height={128}
                    alt="BedsDivan"
                    src="/assets/images/image/bed-sizes-04.png"
                  />
                </a>
                <p className="text-center text-blue mt-2">  4 Seater</p>
              </div>

              <div className="single-box category-icon">
                <a href="/sofa/chicagosofa">
                  <Image
                    width={140}
                    height={128}
                    alt="BedsDivan"
                    src="/assets/images/image/bed-sizes-05.png"
                  />
                </a>
                <p className="text-center text-blue mt-2">   Chicago Sofa </p>
              </div>

              <div className="single-box category-icon">
                <a href="/sofa/fabricsofa">
                  <Image
                    width={250}
                    height={50}
                    alt="BedsDivan"
                    src="/assets/images/image/bed-sizes-N-01.png"
                  />
                </a>
                <p className="text-center text-blue mt-2">   Fabric Sofa  </p>
              </div>
            </div>
          </div>
        </div>
      </div>



          {/* Filter Tag Start */}
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
                          // router.push(`/product/divanbed?size=${e.target.value}`)
                          setSize(e.target.value)
                        }
                      >
                        <option label="Beds" />
                        <option value="2FT 6" label="2 6Feet" />
                        <option value="3FT" label="3Feet" />
                        <option value="4FT" label="4Feet" />
                        <option value="4FT 6" label="4 6Feet" />
                        <option value="5FT" label="5 Feet" />
                        <option value="6FT" label="6 Feet" />
                      </select>
                    </span>
                  </div>
                  <div className="col-md-3">
                    <span
                      style={{ marginRight: "0 !important", margin: "0 auto" }}
                    >
                      <select className="dropdown-section"
                       onChange={(e) =>
                        setImageIndex(e.target.value)
                      }>
                        <option label="Color" />
                        <option value="0" label="Grey Linen" />
                        <option value="1" label="Grey Suede" />
                        <option value="2" label="Chenille" />
                        <option value="3" label="Black Crushed" />
                      </select>
                    </span>
                  </div>
                  <div className="col-md-3">
                    <span
                      style={{ marginRight: "0 !important", margin: "0 auto" }}
                    >
                     

                     <select className="dropdown-section"
                      onChange={(e) =>{
                        const value = JSON.parse(e.target.value)
                        setMaxPrice(value.maxPrice);
                        setMinPrice(value.minPrice)
                        router.push(`/sofa/fabricsofa?maxPrice=${value.maxPrice}&minPrice=${value.minPrice}${router?.query?.size?"&size="+router.query.size:""}`)
              
                    
                        }  }>
                        <option label="Price" />
                        <option value={JSON.stringify({maxPrice:50,minPrice:0})} label="0-50" />
                        <option value={JSON.stringify({maxPrice:100,minPrice:51})} label="51-100" />
                        <option value={JSON.stringify({maxPrice:200,minPrice:150})} label="151-200" />
                        <option value={JSON.stringify({maxPrice:250,minPrice:201})} label="201-250" />
                      </select>
                    </span>
                  </div>
                </div>
              </div>


          

          
    
          

{/* Product Start */}
<div className="lineproduts-style">
  <div className="container">

  
<div className="row">
                {response.map((item) => {
                  
                  let product_color
                  switch(imageIndex){
                    case "0": product_color="Grey Linen";
                    break;
                    case "1": product_color="Grey Suede";
                    break;
                    case "2": product_color="Chenille";
                    break;
                    case "3": product_color="Black Crushed";
                    break;
                  }
                  return (
                    <SofaBox
                      src={item.images[imageIndex].url}
                      title={item.product_name}
                      price={item.price}
                      size={item.size}
                      color={product_color}
                    />
                  );
                })}
              </div>
              </div>
     </div>


          <div className="container">
              <div className="row text-center ">
                  <h2 className="font-weight-bold mt-6" style={{color:"#0e3f70"}}>What is a linen fabric divan Bed?</h2>
                  <p className="mt-4" style={{fontSize:"18px"}}>When it comes to buying a new bed, a linen fabric divan bed is one of the best choices out there. These box-shaped beds are simple but incredibly practical. A divan bed set consists of a specially designed, firm base and a matching mattress.

The sturdy frame is covered in fabric for an aesthetically pleasing appearance and the bed is usually mounted on castor wheels or you can choose chrome gliders if you have wood or laminate flooring.</p>

              </div>

          </div>

          <div className="container">
              <div className="row text-center ">
                  <h2 className="font-weight-bold mt-6" style={{color:"#0e3f70"}}>Finding the right mattress type for your divan bed</h2>
                  <p className="mt-4" style={{fontSize:"18px"}}>The divan base and the mattress are designed to be used in conjunction with each other to provide comfort and good-quality sleep.

You can also choose which type of mattress you want that will suit you and your sleep pattern. Our beds come with a variety of options, choose from the orthopaedic, pocket, or pillow-top range. 

If you prefer a medium or soft mattress, our orthopaedic or pocket mattresses would be the ideal choice. If you like your mattress to be harder, the pillow top range would be the one for you.</p>

              </div>

          </div>

          <div className="container">
              <div className="row text-center ">
                  <h2 className="font-weight-bold mt-6" style={{color:"#0e3f70"}}>Is the standard option a spring mattress?</h2>
                  <p className="mt-4" style={{fontSize:"18px"}}>These days you have more options than just a spring mattress. Generally, you can use any style with a divan bed, however, some designer brands require a sprung edge base.

Sprung edge divans have springs integrated into the base. These springs act as a giant shock absorber and are very luxurious, taking pressure off the mattress.</p>

              </div>

          </div>

          <div className="container">
              <div className="row text-center ">
                  <h2 className="font-weight-bold mt-6" style={{color:"#0e3f70"}}>Which mattress size is best suited to a Divan base?</h2>
                  <p className="mt-4" style={{fontSize:"18px"}}>This depends on which size base you choose. For example, if you have a king size base you wouldn’t buy a single size mattress as it would be far too small.

Another advantage to divans is that they don’t take up too much space as the bed is only as wide as its mattress.</p>

              </div>

          </div>

          {/* Product End */}
          <br/>
          <br/>
          <Review/>
          <br/>
          <br/>
          <Footer/>


        </div>
    )
}
export default Fabricsofa;
export async function getServerSideProps(context) {
  const { req } = context;
  const size = req?.__NEXT_INIT_QUERY?.size;
  let sizes = "";
  const category = req?.__NEXT_INIT_QUERY.category

 // size ? (sizes = size) : (sizes = "1 Seater");
  const data = await axios.post(
   // "https://staggingx.bedsdivans.co.uk/api/products/getbeds",
   //"http://localhost:3000/api/sofa/getsofa",
   `${process.env.BASE_URL}/api/sofa/getsofa`,
    {
      method: "category",
      value: 'Fabric Sofa',
    }
  );
  const response = data.data.data;
  return {
    props: { response }, // will be passed to the page component as props
  };
}
