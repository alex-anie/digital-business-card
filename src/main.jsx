import React from "react";
import  ReactDOM  from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContentBody from "./components/ContentBody";
import stylesheet from "./main.css";

function Card(){
    return (
    <main className="card">
        <Header />
        <ContentBody />
        <Footer />
    </main>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Card />
)


