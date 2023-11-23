import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function NavigationBar() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login')
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Students</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Link to="/add-student">
            <Button className="mx-2" variant="primary">
              Add Student
            </Button>
          </Link>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
