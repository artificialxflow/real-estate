'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BiHome, 
  BiUser, 
  BiBuilding, 
  BiFile, 
  BiCog, 
  BiBarChart, 
  BiCog as BiSettings,
  BiLogOut
} from 'react-icons/bi';

const menuItems = [
  { href: '/dashboard', icon: BiHome, label: 'داشبورد', color: 'text-blue-400' },
  { href: '/customers', icon: BiUser, label: 'مدیریت مشتریان', color: 'text-green-400' },
  { href: '/properties', icon: BiBuilding, label: 'فایل‌های ملکی', color: 'text-purple-400' },
  { href: '/listings', icon: BiFile, label: 'آگهی‌های اسکریپ شده', color: 'text-orange-400' },
  { href: '/workflows', icon: BiCog, label: 'ورک‌فلوها', color: 'text-pink-400' },
  { href: '/reports', icon: BiBarChart, label: 'گزارش‌گیری', color: 'text-cyan-400' },
  { href: '/settings', icon: BiSettings, label: 'تنظیمات', color: 'text-gray-400' },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

export default function Sidebar({ isOpen, onClose, collapsed = false, onToggleCollapse }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        sidebar fixed lg:static inset-y-0 right-0 z-50 
        ${collapsed ? 'w-16' : 'w-72 sm:w-80 lg:w-64'}
        bg-gradient-to-b from-blue-600 to-blue-800 
        transform transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
        shadow-2xl lg:shadow-none
        ${isOpen ? 'block show' : 'hidden lg:block'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className={`${collapsed ? 'p-2' : 'p-4 sm:p-6'} border-b border-blue-500`}>
            <div className="flex items-center justify-between">
              {!collapsed && (
                <div className="flex-1">
                  <h2 className="text-white text-lg sm:text-xl font-bold text-center">
                    بنگاه معاملات ملکی
                  </h2>
                  <p className="text-blue-200 text-xs sm:text-sm text-center mt-1">
                    سیستم اتوماسیون
                  </p>
                </div>
              )}
              {collapsed && (
                <div className="flex-1 flex justify-center">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">ب</span>
                  </div>
                </div>
              )}
              {/* Close button for mobile */}
              <button
                onClick={onClose}
                className="lg:hidden p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {/* Collapse toggle button for desktop */}
              {onToggleCollapse && (
                <button
                  onClick={onToggleCollapse}
                  className="hidden lg:block p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
                  title={collapsed ? 'باز کردن منو' : 'بستن منو'}
                >
                  <svg className={`w-4 h-4 transform transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className={`flex-1 ${collapsed ? 'p-2' : 'p-3 sm:p-4'} overflow-y-auto`}>
            <ul className={`${collapsed ? 'space-y-2' : 'space-y-1 sm:space-y-2'}`}>
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`
                        flex items-center ${collapsed ? 'justify-center' : 'gap-3'} ${collapsed ? 'px-2 py-3' : 'px-3 sm:px-4 py-2.5 sm:py-3'} rounded-lg
                        transition-all duration-200 group
                        ${isActive 
                          ? 'bg-white bg-opacity-20 text-white shadow-lg' 
                          : 'text-blue-100 hover:bg-white hover:bg-opacity-10 hover:text-white'
                        }
                      `}
                      onClick={onClose}
                      title={collapsed ? item.label : undefined}
                    >
                      <Icon className={`${collapsed ? 'w-5 h-5' : 'w-4 h-4 sm:w-5 sm:h-5'} flex-shrink-0 ${isActive ? 'text-white' : item.color}`} />
                      {!collapsed && (
                        <>
                          <span className="font-medium text-sm sm:text-base truncate">{item.label}</span>
                          {isActive && (
                            <div className="mr-auto w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full flex-shrink-0" />
                          )}
                        </>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User Section */}
          <div className={`${collapsed ? 'p-2' : 'p-3 sm:p-4'} border-t border-blue-500`}>
            <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-2 sm:gap-3'} ${collapsed ? 'p-2' : 'p-2 sm:p-3'} rounded-lg bg-white bg-opacity-10`}>
              <div className={`${collapsed ? 'w-8 h-8' : 'w-8 h-8 sm:w-10 sm:h-10'} bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0`}>
                <span className="text-white font-bold text-sm sm:text-base">ک</span>
              </div>
              {!collapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm sm:text-base truncate">کاربر مدیر</p>
                  <p className="text-blue-200 text-xs sm:text-sm truncate">admin@example.com</p>
                </div>
              )}
              {!collapsed && (
                <button className="text-blue-200 hover:text-white transition-colors p-1 flex-shrink-0">
                  <BiLogOut className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}