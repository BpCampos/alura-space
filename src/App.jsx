import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import "./styles/globalStyles.scss";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Popular from "./components/Popular";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Banner />
        <div className="galeria">
          <Gallery />
          <Popular />
        </div>
      </main>
      <Footer />
    </div>
  );
}
