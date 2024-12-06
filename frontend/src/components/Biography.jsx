import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Life Loop Healthcare is a revolutionary platform dedicated to bridging the gap between patients and medical professionals. Founded in 2020, it aims to provide accessible, affordable, and reliable healthcare solutions to individuals worldwide. With a focus on innovation, Life Loop offers features like virtual consultations, health monitoring tools, and a vast repository of expert medical content.
          </p>
          {/* <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.</p> */}
          <p>
          Its user-friendly interface allows patients to schedule appointments, access prescriptions, and receive personalized care from certified doctors. Life Loop Healthcare envisions a world where quality healthcare is not a privilege but a fundamental right, empowering communities to lead healthier, happier lives...
          </p>
          {/* <p>Lorem ipsum dolor sit amet!</p>
          <p>Coding is fun!</p> */}
        </div>
      </div>
    </>
  );
};

export default Biography;
