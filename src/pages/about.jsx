import React from "react";
import Header from "../Component/Header/Header";
import { Footer } from "../Component/Footer/Footer";
import { Row, Col } from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";

const About = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <>
      <Header />
      <Row xs="3" className="about">
        <Col xs="2"></Col>
        <Col xs="8">
          <h3 className="text">About Us</h3>
          <p className="text">
            The Talk & Learn website aims to connect newcomers to Switzerland
            with Swiss individuals to better learn the local language spoken in
            Switzerland and Swiss culture.
          </p>
          <p className="text">
            Through this application, individuals will develop the local
            language more quickly and facilitate a faster integration process.
          </p>
          <p className="text">Learn by talking.</p>
          <p className="text">Happy Learning.</p>
        </Col>
        <Col xs="2"></Col>
      </Row>
      {!isAuthenticated && (
        <div className="text-center mt-3">
          <button className="btn btn-primary" onClick={loginWithRedirect}>
            Sign In to view more
          </button>
        </div>
      )}
      <Footer />
    </>
  );
};

export default About;
