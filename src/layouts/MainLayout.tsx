import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Side from '../layouts/Sidebar';
import Te from '../pages/TemplatesPage';
import './Main.css';

function MainLayout() {
  return (
    <div>
      <Navbar />
      
      <div className="SideMenuAndPageContent">
      <Side></Side>
        <Outlet></Outlet>
      </div>
     
    </div>
  );
}

export default MainLayout;