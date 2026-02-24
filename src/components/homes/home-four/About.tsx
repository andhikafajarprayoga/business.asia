import Image from "next/image"
import Link from "next/link"

import aboutImg_1 from "@/assets/img/about/h4-5.webp";
import aboutImg_2 from "@/assets/img/about/01.webp";

const About = () => {
   return (
      <div className="about-area pd-bottom-70 px-lg-0 px-md-5 px-4">
         <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-9">
               <div className="thumb">
                  <Image src={aboutImg_1} alt="img" />
               </div>
            </div>
            <div className="col-xl-5 col-lg-6 align-self-center">
               <div className="section-title px-lg-5 mb-0">
                  <h2 className="title mb-4">
                     <Image src={aboutImg_2} alt="img" />
                     Ramadan Berkah untuk UMKM & Compro<br /> Website, Domain, dan Hosting Gratis!
                  </h2>
                  <p className="content mb-lg-5">
                     Di bulan Ramadan ini, kami bersama <b>inticode.store</b> dan <b>businesssupport.asia</b> menghadirkan program spesial: <br />
                     Website profesional, domain, dan hosting <b>100% gratis</b> untuk UMKM & company profile.<br />
                     Daftar mudah, proses cepat, langsung online tanpa biaya!
                  </p>
                  <p className="mb-0 bottom-line-url">Tertarik ikut program ini? <Link href="/contact">Klik di sini</Link></p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
