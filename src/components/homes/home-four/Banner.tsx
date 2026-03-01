import Image from "next/image";
import Link from "next/link";

import bannerImg_1 from "@/assets/img/banner/10.webp";
import bannerImg_2 from "@/assets/img/banner/8.webp";

const Banner = () => {
  return (
    <div className="banner-area banner-area-4">
      <div
        className="bg-cover"
        style={{ backgroundImage: `url(/assets/img/banner/9.webp)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-10">
              <div className="banner-inner style-white">
                <h2 className="title s-animate-2">
                  <Image className="title-line" src={bannerImg_1} alt="img" />
                  Website Gratis untuk UMKM !
                </h2>
                <p
                  style={{
                    marginTop: "16px",
                    fontSize: "18px",
                    color: "#fff",
                    lineHeight: "1.6",
                  }}
                >
                  Dapatkan website, domain, dan hosting <b>gratis</b> untuk
                  bisnis Anda. Program khusus UMKM dan perusahaan yang didukung
                  oleh <b>inticode.store</b> dan <b>businesssupport.asia</b>.
                </p>
                <div className="btn-wrap s-animate-4">
                  <a
                    className="it-btn btn-white mr-space"
                    href="https://forms.gle/T2mtURQHWsVbXX3S9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Daftar Sekarang
                  </a>
                  <Link
                    className="it-btn btn-border-white"
                    href="https://inticode.store"
                    target="_blank"
                  >
                    Tentang Partner
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 align-self-center">
              <div className="thumb top_image_bounce">
                <Image src={bannerImg_2} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
