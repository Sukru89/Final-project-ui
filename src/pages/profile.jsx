import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Header from "../Component/Header/Header";


export const Profile = () => {
  const { user } = useAuth0();

  return (
    <>
      <Header />
      <div className="m-5 p-5 bg-secondary">
        <Col className=" mb-5 text-center ">
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-4"
          />
          <Col>
            <h2>{user.name}</h2>
            <h4 className="text-muted">Name: {user.name}</h4>
            <h4 className="text-muted">Email: {user.email}</h4>
            <h4 className="text-muted">Updated: {user.updated_at}</h4>
            <h4 className="text-muted">
              Verified: {user.email_verified ? "Yes" : "No"}
            </h4>
          </Col>
        </Col>
      </div>
    </>
  );
};
