/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Link from 'next/link';
// import PropTypes from 'prop-types';
import { Navbar, Container, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { signOut } from '../utils/auth';
// import { getEvent } from '../api/eventAPI';

export default function NavBar() {
  const [searchQuery, setSearchQuery] = useState('');

  /* const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload
    getEvents(searchQuery).then((filteredEvents) => {
      onUpdate(filteredEvents); // Update the parent component with filtered events
    });
  }; */
  return (
    <Navbar collapseOnSelect expand="lg" style={{ background: ' #7C4C21' }}>
      <Container>
        <img src="https://i.imgur.com/CY7xcWk.png" alt="GiveHub Logo" width="50" height="50" className="d-inline-block align-top me-2" />
        <Link passHref href="/" className="navbar-brand">
          GiveHub
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link className="nav-link" href="/">
              Home
            </Link>
            <Link className="nav-link" href="/charities">
              All Charities
            </Link>
            <Link className="nav-link" href="/myCharities">
              My Charities
            </Link>
          </Nav>

          {/* Search Bar */}
          <Form className="d-flex me-3">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
            />
          </Form>

          <Button variant="danger" onClick={signOut}>
            Sign Out
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
