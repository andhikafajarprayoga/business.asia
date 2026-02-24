import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import footer_data from "@/data/FooterData";
import rc_blog_data from "@/data/RcBlogData";

import footerLogo from "@/assets/img/logo-3.webp";
import footerGallery_1 from "@/assets/img/gallery/1.webp";
import footerGallery_2 from "@/assets/img/gallery/2.webp";
import footerGallery_3 from "@/assets/img/gallery/3.webp";
import footerGallery_4 from "@/assets/img/gallery/4.webp";
import footerGallery_5 from "@/assets/img/gallery/5.webp";
import footerGallery_6 from "@/assets/img/gallery/6.webp";

const gallery_data: StaticImageData[] = [footerGallery_1, footerGallery_2, footerGallery_3, footerGallery_4, footerGallery_5, footerGallery_6,];

const FooterTwo = () => {
   return (
      <footer className="footer-area bg-cover bg-base footer-area-3">
         <div className="container">
            <div className="row">
               <div className="col-lg-3 col-md-6">
                  <div className="widget widget_about">
                     <h4 className="widget-title">
                        <Link href="#"><Image src={footerLogo} alt="img" /></Link>
                     </h4>
                     <div className="details">
                        <p>
                           Ramadan Campaign: Website, domain, dan hosting <b>GRATIS</b> untuk UMKM & company profile.<br />
                           Kolaborasi <b>inticode.store</b> & <b>businesssupport.asia</b>.<br />
                           Kuota terbatas, daftar sekarang!
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="footer-bottom text-center">
            <div className="container">
               <div className="row">
                  <div className="col-md-12 align-self-center">
                     <p>© 2025. businesssupport.asia. All Rights Reserved</p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterTwo
