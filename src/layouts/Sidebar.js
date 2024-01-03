import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import "./Sidebar.css";
import icon1 from './no_code_8.png';
import icon2 from './no_code_9.png';
import icon3 from './no_code_10.png';

const secmenu = () => {
    const [showOptions, setShowOptions] = useState(false);

    const handleIcon1Click = () => {
        setShowOptions(!showOptions);
    };

    return (
        <aside className="navbar navbar-expand-lg navbar-light ">
            <ul className="navbar-nav d-flex flex-column">
                <li className="nav-item">
                    <Dropdown show={showOptions} onToggle={handleIcon1Click}>
                        <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                            <img src={icon1} alt="Dashboard" className="nav-icon" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-right">
                            <Dropdown.Item href="#">Option 1</Dropdown.Item>
                            <Dropdown.Item href="#">Option 2</Dropdown.Item>
                            <Dropdown.Item href="#">Option 3</Dropdown.Item>
                        </Dropdown.Menu>
                           
                    </Dropdown>
                </li>
                <li className="nav-item"><a className="nav-link" href="#"><img src={icon2} alt="Dashboard" className="nav-icon" /></a></li>
                <li className="nav-item"><a className="nav-link" href="#"><img src={icon3} alt="Dashboard" className="nav-icon" /></a></li>
            </ul>
        </aside>
    );
};

export default secmenu;
