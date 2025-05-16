import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';

const Sidebar = () => {
    return (
        <div className="bg-success bg-opacity-25 vh-100 p-3" style={{ width: '200px' }}>
            <div className="text-center mb-5 mt-5">
                <FontAwesomeIcon icon={faUser} size="2x" />
                <h6>Welcome Admin</h6>
            </div>
            <hr />
            <Nav className="flex-column">
                {/* <Nav.Link as={NavLink} to="/dashboard" activeClassName="active">Dashboard</Nav.Link> */}
                <Nav.Link
                    as={NavLink}
                    to="/admin-dashboard/dashboard"
                    className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}
                >
                    Dashboard
                </Nav.Link>
                <Nav.Link
                    as={NavLink}
                    to="/admin-dashboard/breed"
                    className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}
                >
                    Breeds
                </Nav.Link>
                {/* <Nav.Link
                    as={NavLink}
                    to="/admin-dashboard/feedings"
                    className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}
                >
                    Feedings
                </Nav.Link>
                <Nav.Link
                    as={NavLink}
                    to="/admin-dashboard/quarantine"
                    className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}
                >
                    Quarantine
                </Nav.Link>
                <Nav.Link
                    as={NavLink}
                    to="/admin-dashboard/invoice"
                    className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}
                >
                    Invoice
                </Nav.Link> */}
                <Nav.Link
                    as={NavLink}
                    to="/admin-dashboard/shop"
                    className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}
                >
                    Shop
                </Nav.Link>
                <Nav.Link
                    as={NavLink}
                    to="/admin-dashboard/logout"
                    className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}
                >
                    Logout
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;
