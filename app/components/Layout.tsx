'use client';

import Navigation from './Navigation';
import { BiBell, BiUser } from 'react-icons/bi';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function Layout({ children, title }: LayoutProps) {

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <Navigation />

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 main-content">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex align-items-center">
              <h2 className="mb-0">{title}</h2>
            </div>
            
            <div className="d-flex align-items-center">
              <button className="btn btn-outline-primary me-2">
                <BiBell />
              </button>
              <div className="dropdown">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                  <BiUser className="me-2" />
                  مدیر سیستم
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">پروفایل</a></li>
                  <li><a className="dropdown-item" href="#">تنظیمات</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">خروج</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Page Content */}
          {children}
        </div>
      </div>
    </div>
  );
}
