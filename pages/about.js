import React from 'react'
import Head from 'next/head'
import Header2 from "../components/Header2";
import Footer from '../components/Footer';
import Styles from "../styles/about/about.module.scss"
import Image from "next/image"

function about() {
  return (
    <div> 
         <Head>
    <meta name="description" content="Generated by create next app" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    ></link>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    ></link>
    <link href="/style/plugins/plugins.min.css/" rel="stylesheet"></link>
    <link href="/style/vendor/vendor.min.css/" rel="stylesheet"></link>
    <link rel="icon" href="/logo (1).png" />
    <title>About Us</title>
  </Head>
<Header2/>
 <div className={` ${Styles.bedsdivanabout} container`}>
     <h1>About Us</h1>

     <div className={` ${Styles.bedsrow} row`}>
        <div className="col-4">
            <Image 
            src="/assets/images/image/Black-Velvet-2000-edt-1 (1).png" 
            width={500} 
            height={300} />
        </div>
        <div className="col-4">
            <Image 
            src="/assets/images/image/Ice-Velvet-Divan-Etd.png" 
            width={500} 
            height={300} />
        </div>
        <div className={` ${Styles.col4text} col-4`}>
            <h3>The significance of buying the right divan bed</h3>
            <p>Beds divans believe the importance that each person has their own taste in style and design. At beds divans we are always improving on style and we will never compromise on quality of our selective range.

From the simple yet elegant house range, to the vibrant crushed velvet range, you’ll find a Divan bed that perfectly matches your room decor and design preferences.
All our exclusive beds come with oak wood storage facilities, so why not add this feature to your bed. The storage ranges from 1 -4 draws depending on your taste and where you want them on the bed.</p>
        </div>
        <div className={` ${Styles.col4text} col-4`}>
            <h3>A huge selection of divan beds</h3>
            <p>When choosing the type of bed depending on size and colour here at beds divans, we can help you along the way in designing the right bed for you.

Here at Beds divans we specialise in the perfect divan bed selection. All our pictures have not been photo’d edited because we feel its important what you see is what you get.

Our selective range of divan beds has been carefully selected keeping in mind the taste and sleeping requirement of the customer.

When choosing a divan bed our friendly team are always here to help you choose the right bed for you.</p>
        </div>

        <div className="col-4">
            <Image 
            src="/assets/images/image/Black-Velvet-2000-edt-1 (1).png" 
            width={500} 
            height={300} />
        </div>
        <div className="col-4">
            <Image 
            src="/assets/images/image/Ice-Velvet-Divan-Etd.png" 
            width={500} 
            height={300} />
        </div>


{/* third sectionl start */}
<div className={` ${Styles.thirdsection} row`}>

        <div className="col-3">
            <Image 
            src="/assets/images/image/About-aspire-store-fan-design.jpg" 
            width={500} 
            height={500} />
        </div>
        <div className="col-3">
            <Image 
            src="/assets/images/image/About-aspire-store-design-CU.jpg" 
            width={500} 
            height={500} />
        </div>
        <div className={` ${Styles.col4text} col-6`}>
            <h3>
Our Design Team</h3>
            <p>Every element of our design process is thoroughly considered, from fabric to stitch to finish.

At Aspire, we lovingly handcraft every one of our beds. We look to lead the way by developing inspiring designs to fit any bedroom. Our design team work in harmony with our master crafts men to ensure traditional quality goes hand in hand with innovation.

Our combination of traditional techniques mixed with on trend designs, means you can not only rest with ease but wake with ease to admire your home.</p>
        </div>
        </div>
        {/* third sectionl end */}
     </div>
 </div>
 <Footer/>
  </div>
  
  )
}

export default about