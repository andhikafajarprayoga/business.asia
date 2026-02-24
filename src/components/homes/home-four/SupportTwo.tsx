import Image from "next/image"
import Link from "next/link";

import aboutImg_1 from "@/assets/img/about/h4-4.webp";
import aboutImg_2 from "@/assets/img/about/01.webp";
import aboutIcon from "@/assets/img/icon/4.webp";

const SupportTwo = () => {
   return (
      <div className="about-area pd-top-120 bg-white">
         <div className="container pd-top-90">
            <div className="row">
               <div className="col-lg-6 col-md-9 order-lg-last">
                  <div className="thumb right-collapse-img">
                     <Image src={aboutImg_1} alt="img" />
                  </div>
               </div>
               <div className="col-lg-6 align-self-center order-lg-first">
                  <div className="section-title px-lg-5 mb-0">
                     <h2 className="title mb-4">
                        <span>Ramadan Campaign: Website Gratis</span>
                        <Image src={aboutImg_2} alt="img" />
                     </h2>
                     <p className="content mb-lg-5">
                        Komitmen kami menghadirkan solusi digital untuk UMKM & company profile.<br />
                        Selama Ramadan, dapatkan website template, domain, dan hosting gratis (kuota 20 orang).
                     </p>
                     <div className="choose-wrap mt-4 pe-xl-5">
                        <div className="media single-choose-inner">
                           <div className="media-left">
                              <div className="icon-img me-3">
                                 <Image src={aboutIcon} alt="img" />
                              </div>
                           </div>
                           <div className="media-body">
                              <h4>Komitmen Kami</h4>
                              <p>Kami ingin UMKM & compro bisa go digital dengan mudah, tanpa biaya, dan didampingi partner terpercaya.</p>
                           </div>
                        </div>
                        <div className="media single-choose-inner">
                           <div className="media-left">
                              <div className="icon-img me-3">
                                 <Image src={aboutIcon} alt="img" />
                              </div>
                           </div>
                           <div className="media-body">
                              <h4>Misi Ramadan</h4>
                              <p>Memberikan akses website gratis, domain & hosting, serta desain siap pakai untuk 20 UMKM/compro selama Ramadan.</p>
                           </div>
                        </div>
                     </div>
                     <div className="btn-wrap pt-4">
                        <Link className="it-btn btn-base mr-space mb-2 mb-md-0" href="/contact">Daftar Campaign</Link>
                        <Link className="it-btn btn-border-base me-2" href="https://inticode.store" target="_blank">Tentang Partner</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SupportTwo;
