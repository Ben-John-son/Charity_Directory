/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { signOut } from '../utils/auth';
import SearchBar from './searchBar';

// import { getEvent } from '../api/eventAPI';

export default function NavBar({ onUpdate }) {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ background: ' #7C4C21', opacity: '0.78' }}>
      <Container>
        <img src="https://i.imgur.com/CY7xcWk.png" alt="GiveHub Logo" width="50" height="50" className="d-inline-block align-top me-2" />
        <Link passHref href="/" className="navbar-brand" style={{ color: 'lightblue' }}>
          GiveHub
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}

            <Link className="nav-link" href="/charities">
              Home

            <Link className="nav-link" href="/charities" style={{ color: 'lightblue' }}>
              All Charities

            </Link>
            <Link className="nav-link" href="/myCharities" style={{ color: 'lightblue' }}>
              My Charities
            </Link>

            <Link className="nav-link" href="/categories" style={{ color: 'lightblue' }}>
              Categories
            </Link>

          </Nav>

          <SearchBar onUpdate={onUpdate} />
          <Button variant="danger" onClick={signOut}>
            Sign Out
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBar.propTypes = {
  onUpdate: PropTypes.func.isRequired,
};
