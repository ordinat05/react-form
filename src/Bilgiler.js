import React from "react";
import { Link } from "react-router-dom";

function Bilgiler({ form }) {
  return (
    <div
      style={{
        height: "250px",
        width: "300px",
        backgroundColor: "#1a237e",
        // borderRadius: "50%",
        color: "white",
        fontSize: "17px",
        margin: "5px auto",
        // lineHeight: "250px",
      }}
    >
      Bilgiler.Jsx Sayfası Görüntüleniyor.
      <h3>isim Soyisim : {form.isim}</h3>
      <h3>Şehir : {form.sehir}</h3>
      <h3>Dogum : {form.dogum}</h3>
      <h3>Renk : {form.renk}</h3>
      <h3>Adres : {form.adres}</h3>
      <Link to="/">
        <button>Geri Dön</button>
      </Link>
    </div>
  );
}

export default Bilgiler;
