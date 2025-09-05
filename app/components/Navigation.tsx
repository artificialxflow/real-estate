'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { 
  BiHome, 
  BiUser, 
  BiBuilding, 
  BiSearch, 
  BiCog, 
  BiBarChartAlt2,
  BiMenu
} from 'react-icons/bi';

export default function Navigation() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { id: 1, name: 'داشبورد', icon: BiHome, path: '/', active: pathname === '/' },
    { id: 2, name: 'مشتریان', icon: BiUser, path: '/customers', active: pathname === '/customers' },
    { id: 3, name: 'فایل‌های ملکی', icon: BiBuilding, path: '/properties', active: pathname === '/properties' },
    { id: 4, name: 'آگهی‌های اسکریپ شده', icon: BiSearch, path: '/listings', active: pathname === '/listings' },
    { id: 5, name: 'ورک‌فلوها', icon: BiCog, path: '/workflows', active: pathname === '/workflows' },
    { id: 6, name: 'گزارش‌گیری', icon: BiBarChartAlt2, path: '/reports', active: pathname === '/reports' },
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Top Bar - Mobile Only */}
      <div className="d-md-none top-bar">
        <div className="d-flex justify-content-between align-items-center px-3 py-2">
          <button 
            className="btn btn-outline-light"
            onClick={() => setSidebarOpen(true)}
          >
            <BiMenu />
          </button>
          <h5 className="text-white mb-0">بنگاه ملکی</h5>
          <div></div> {/* Empty div for spacing */}
        </div>
      </div>

      {/* Mobile Menu Button - Desktop Only */}
      <button 
        className="btn btn-outline-primary d-none d-md-block me-3"
        onClick={() => setSidebarOpen(true)}
      >
        <BiMenu />
      </button>

      {/* Sidebar */}
      <div className={`col-md-3 col-lg-2 sidebar ${sidebarOpen ? 'show' : ''}`}>
        <div className="d-flex justify-content-between align-items-center mb-4 px-3">
          <h4 className="text-white mb-0">بنگاه ملکی</h4>
          <button 
            className="btn btn-outline-light d-md-none"
            onClick={() => setSidebarOpen(false)}
          >
            <BiMenu />
          </button>
        </div>
        
        <nav className="nav flex-column">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.path)}
              className={`nav-link ${item.active ? 'active' : ''}`}
              style={{ background: 'none', border: 'none', width: '100%', textAlign: 'right' }}
            >
              <item.icon className="me-2" />
              {item.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Bottom Navigation - Mobile Only */}
      <div className="d-md-none bottom-nav">
        <div className="bottom-nav-content">
          <button 
            className={`bottom-nav-item ${pathname === '/' ? 'active' : ''}`}
            onClick={() => handleNavigation('/')}
          >
            <BiHome className="mb-1" />
            <span>خانه</span>
          </button>
          <button 
            className={`bottom-nav-item ${pathname === '/listings' ? 'active' : ''}`}
            onClick={() => handleNavigation('/listings')}
          >
            <BiSearch className="mb-1" />
            <span>جستجو</span>
          </button>
          <button 
            className={`bottom-nav-item ${pathname === '/workflows' ? 'active' : ''}`}
            onClick={() => handleNavigation('/workflows')}
          >
            <BiCog className="mb-1" />
            <span>ورک‌فلو</span>
          </button>
          <button 
            className={`bottom-nav-item ${pathname === '/customers' ? 'active' : ''}`}
            onClick={() => handleNavigation('/customers')}
          >
            <BiUser className="mb-1" />
            <span>مشتریان</span>
          </button>
          <button 
            className={`bottom-nav-item ${pathname === '/reports' ? 'active' : ''}`}
            onClick={() => handleNavigation('/reports')}
          >
            <BiBarChartAlt2 className="mb-1" />
            <span>گزارش</span>
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="d-md-none position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          style={{ zIndex: 1040 }}
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
