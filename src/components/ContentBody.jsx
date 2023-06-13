import React from "react";
import ReactDOM from "react-dom/client";

export default function ContentBody(){
    return (
      <section>
        <aside className="profile-info">
          <h1>Emily Awele</h1>
          <p className="role">Frontend Developer</p>
          <p className="site">emilyawele.website</p>
          <button className="btn">
            <ion-icon name="mail" className="email-icon"></ion-icon>
            <span className="email-text">Email</span>
          </button>
        </aside>

        <article className="content">
          <div>
            <h3 className="content-header about">About</h3>
            <p className="paragraph-text one">
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practicles, and am always looking for new thing
              to learn.
            </p>
          </div>

          <div>
            <h3 className="content-header interests">Interests</h3>
            <p className="paragraph-text two">
              Food export. Music scholar. Reader. Internet fanatic. Bacon buff.
              Enterpreneur. Travel geek. Pop culture ninja. Coffee fanatic
            </p>
          </div>
        </article>
      </section>
    );
}