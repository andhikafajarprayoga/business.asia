import Image from "next/image"

import titleShape from "@/assets/img/about/01.webp"
import supportThumb from "@/assets/img/about/h2-6.webp"

const SupportOne = () => {
   return (
      <div className="about-area">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-md-9 mb-5 mb-lg-0 order-lg-last">
                  <div className="thumb right-collapse-img">
                     <Image src={supportThumb} alt="img" />
                  </div>
               </div>
               <div className="col-lg-6 align-self-center order-lg-first">
                  <div className="section-title px-lg-5 mb-0">
                     <h2 className="title mb-4">
                        <Image src={titleShape} alt="img" />
                        Dukungan Penuh untuk UMKM & Compro
                     </h2>
                     <p className="content mb-lg-5">
                        Program Ramadan: Website, domain, dan hosting gratis untuk UMKM & company profile.<br />
                        Didukung oleh <b>inticode.store</b> dan <b>businesssupport.asia</b>.
                     </p>
                     <div className="choose-wrap mt-4 pe-xl-5">
                        <div className="media single-choose-inner">
                           <div className="media-left">
                              <div className="icon-number">1</div>
                              <Image className="left-arrow-img" src="/assets/img/about/h4-3.webp" width={1} height={56} alt="" />
                           </div>
                           <div className="media-body">
                              <h4>Proses Mudah & Cepat</h4>
                              <p>Cukup daftar, tim kami akan membantu pembuatan website hingga online tanpa biaya.</p>
                           </div>
                        </div>
                        <div className="media single-choose-inner">
                           <div className="media-left">
                              <div className="icon-number">2</div>
                              <Image className="left-arrow-img" src="/assets/img/about/h4-3.webp" width={1} height={56} alt="" />
                           </div>
                           <div className="media-body">
                              <h4>Website Profesional</h4>
                              <p>Desain modern, responsif, dan mudah digunakan untuk meningkatkan citra usaha Anda.</p>
                           </div>
                        </div>
                        <div className="media single-choose-inner">
                           <div className="media-left">
                              <div className="icon-number">3</div>
                           </div>
                           <div className="media-body">
                              <h4>Dukungan Partner Terpercaya</h4>
                              <p>Kolaborasi inticode.store & businesssupport.asia memastikan layanan terbaik.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SupportOne
