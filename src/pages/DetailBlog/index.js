import React from "react";
import { RegisterBg } from "../../assets";
import "./DetailBlog.scss";
import { useNavigate } from "react-router-dom";
import { Link, Gap } from "../../components";

const DetailBlog = () => {
  const navigate = useNavigate();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="thumb" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        {" "}
        Selamat datang di blog MERN kami! Di sini, kami berbagi pengetahuan,
        pengalaman, dan inspirasi tentang pengembangan web menggunakan teknologi
        MERN (MongoDB, Express, React, dan Node.js). Dalam perjalanan ini, kami
        mengajak Anda untuk menjelajahi dunia yang menarik dan terus berkembang
        dari pemrograman web. Bersama-sama, kita akan menjelajahi konsep-konsep
        dasar, mempelajari tips dan trik, serta berbagi pandangan tentang tren
        terkini dalam industri ini. Kami berharap blog kami dapat memberi Anda
        wawasan baru, menginspirasi Anda untuk mencoba hal-hal baru, dan
        membantu Anda tumbuh sebagai pengembang web. Selamat membaca dan semoga
        Anda menemukan konten yang bermanfaat di sini!
      </p>
      <Gap height={20} />
      <Link title="Kembali Ke Home" onClick={() => navigate("/")} />
    </div>
  );
};

export default DetailBlog;
