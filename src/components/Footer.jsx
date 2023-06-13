import React from "react";
import ReactDOM from "react-dom/client";

export default function Footer(){
    return (
      <footer className="footer">
        <div className="footer-wrapper">
          {/* Twitter */}
          <ion-icon name="logo-twitter"></ion-icon>

          {/* Facebook */}
          <ion-icon name="logo-facebook"></ion-icon>

          {/* Instagram */}
          <ion-icon name="logo-instagram"></ion-icon>

          {/* Linkedin */}
          <ion-icon name="logo-linkedin"></ion-icon>

          {/* GitHub */}
          <ion-icon name="logo-octocat"></ion-icon>
        </div>
      </footer>
    );
}