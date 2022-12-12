import "./App.css";
import { useState } from "react";
import { Switch, Link, Route } from "react-router-dom";
import Bilgiler from "./Bilgiler";
import Form from "./Form";

function App() {
  // const [isim, setIsim] = useState("");
  const [form, setForm] = useState({
    isim: "",
    sehir: "",
    dogum: "",
    renk: "",
    adres: "",
  });
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  };

  return (
    <div className="App">
      <h2>Bilgilerinizi Giriniz.</h2>

      <Switch>
        <Route path="/" exact>
          <Form form={form} handleChange={handleChange} />
        </Route>
        <Route path="/bilgiler">
          <Bilgiler form={form} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
