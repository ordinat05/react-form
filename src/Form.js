import React from "react";
import { Link } from "react-router-dom";

function Form({ form, handleChange }) {
  return (
    <div>
      <form>
        {/* <h5>Form.Jsx Sayfası</h5> */}
        <input
          type="text"
          name="isim"
          value={form.isim}
          onChange={handleChange}
          placeholder="İsim soyisim giriniz."
        />
        <select name="sehir" value={form.sehir} onChange={handleChange}>
          <option value="">Lütfen Şehri Seçiniz</option>
          <option value="Kilis">Kilis</option>
          <option value="Ankara">Ankara</option>
          <option value="İstanbul">İstanbul</option>
        </select>
        <input
          type="date"
          value={form.dogum}
          onChange={handleChange}
          name="dogum"
        />
        <input
          type="color"
          value={form.renk}
          onChange={handleChange}
          name="renk"
        />
        <textarea
          cols="20"
          rows="5"
          onChange={handleChange}
          value={form.adres}
          name="adres"
          placeholder="Adresinizi Giriniz"
        />
        <Link to="/bilgiler">
          <button>Gönder</button>
        </Link>
      </form>
    </div>
  );
}

export default Form;
