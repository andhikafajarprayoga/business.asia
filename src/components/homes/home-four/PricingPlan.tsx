import Image, { StaticImageData } from "next/image";

import pricingIcon_1 from "@/assets/img/icon/pricing-1.webp"
import pricingShape from "@/assets/img/about/01.webp"
import Link from "next/link";

interface DataType {
   id: number;
   icon: StaticImageData;
   title: string;
   price: number;
   price_list: string[];
}[];

const pricing_data: DataType[] = [
   {
      id: 1,
      icon: pricingIcon_1,
      title: "Business Classic",
      price: 5750000,
      price_list: [
         "Website custom sesuai kebutuhan",
         "Domain & hosting 1 tahun",
         "Desain modern & responsif",
         "Konsultasi gratis",
         "Support after sales"
      ],
   },
   {
      id: 2,
      icon: pricingIcon_1,
      title: "Business Premium",
      price: 15000000, 
      price_list: [
         "Website premium dengan fitur lengkap",
         "Domain & hosting 1 tahun",
         "Desain custom sesuai brand",
         "SEO & optimasi kecepatan",
         "Support after sales"
      ],
   },
   {
      id: 3,
      icon: pricingIcon_1,
      title: "Ramadan Campaign (Kuota 20)",
      price: 0,
      price_list: [
         "Website template siap pakai",
         "Domain & hosting gratis 1 tahun",
         "Desain website disediakan",
         "Proses mudah, langsung online",
         "Kuota hanya untuk 20 UMKM/Compro"
      ],
   },
]
const PricingPlan = () => {
   return (
      <div className="pricing-area pd-top-100">
         <div className="container">
            <div className="section-title text-center">
               <div className="row justify-content-center">
                  <div className="col-lg-7">
                     <h2 className="title">
                        Pilihan Paket Website & Ramadan Campaign
                        <span> <Image src={pricingShape} alt="img" /></span>
                     </h2>
                     <p className="content mt-2">
                        Pilih paket website sesuai kebutuhan bisnis Anda.<br />
                        Khusus Ramadan, tersedia website template gratis domain & hosting untuk 20 UMKM/Compro.<br />
                        Kolaborasi <b>inticode.store</b> & <b>businesssupport.asia</b>.
                     </p>
                  </div>
               </div>
            </div>
            <div className="row justify-content-center">
               {pricing_data.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-pricing-inner style-4 text-center">
                        <div className="icon text-center">
                           <Image src={item.icon} alt="img" />
                        </div>
                        <div className="header">
                           <h3 className="text-center">{item.title}</h3>
                           <div className="price">
                              <h2 className="d-inline-block">{item.price === 0 ? 'Gratis' : item.price.toLocaleString('id-ID')}</h2>
                              <sub>{item.price === 0 ? '' : ''}</sub>
                           </div>
                        </div>
                        <div className="details">
                           <ul className="single-list-inner">
                              {item.price_list.map((list, i) => (<li key={i}>{list}</li>))}
                           </ul>
                           <Link className="it-btn btn-black" href="/contact">{item.price === 0 ? 'Daftar Campaign' : 'Pesan Sekarang'}</Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default PricingPlan
