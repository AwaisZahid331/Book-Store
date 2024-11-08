import React from "react";
import "./About.css";

function About() {
  return (
    <>
    <div className="about-box">
      <h2 className="about-title">About the Library</h2>
     
      <div className="about-data">
        <div className="about-img">
          <img
            src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80"
            alt=""
          />
        </div>
        <div>
          <p className="about-text">
            Imagine a space where every book you've read, wish to read, or
            currently borrow is organized and easy to access. With this web app,
            managing your personal library becomes a breeze. <br /> <br />
            Effortlessly search for books, explore categories tailored to your
            interests, and keep track of your borrowing history—all in one
            place. Whether you’re a casual reader or an avid collector, this
            library app brings your collection to life. <br /> <br /> Experience
            the joy of having your favorite books at your fingertips, as you
            build and manage a library that grows with you.
            <br />
            <br />
            Every reader deserves a space for their stories, and this is
            yours—crafted for convenience, enriched with detail, and built for
            the love of books. <br />
            <br /> Your suggestions for improvement are always welcome!
          </p>
        </div>
      </div>
    </div>
    
            </>
  );
}

export default About;
