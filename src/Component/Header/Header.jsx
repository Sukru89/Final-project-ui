import React, { useState } from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Talk & Learn</Navbar.Brand>
          <Nav className="me-auto">
            {!isAuthenticated ? (
              <Nav.Link href="/">Home</Nav.Link>
            ) : (
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            )}
            <Nav.Link href="/community">Community</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            
            {isAuthenticated && <Nav.Link href="/profile">Profile</Nav.Link>}
          </Nav>
          <Nav>
            {!isAuthenticated && (
              <a
                href="#home"
                className="btn btn-sm btn-outline-secondary text-light"
                onClick={() => loginWithRedirect()}
              >
                Sign In
              </a>
            )}
            {isAuthenticated && (
              <>
                <Badge
                  bg="secondary"
                  className="text-light px-2 mx-2 d-flex align-items-center"
                >
                  {user.name}
                </Badge>
                <a
                  href="#home"
                  className="btn btn-sm btn-outline-secondary text-light"
                  onClick={() => logoutWithRedirect()}
                >
                  Sign Out
                </a>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
