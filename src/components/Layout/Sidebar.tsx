'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Users, 
  Building, 
  FileText, 
  Workflow, 
  BarChart3, 
  Settings,
  LogOut
} from 'lucide-react';

const menuItems = [
  { href: '/dashboard', icon: Home, label: 'داشبورد', color: 'text-blue-400' },
  { href: '/customers', icon: Users, label: 'مدیریت مشتریان', color: 'text-green-400' },
  { href: '/properties', icon: Building, label: 'فایل‌های ملکی', color: 'text-purple-400' },
  { href: '/listings', icon: FileText, label: 'آگهی‌های اسکریپ شده', color: 'text-orange-400' },
  { href: '/workflows', icon: Workflow, label: 'ورک‌فلوها', color: 'text-pink-400' },
  { href: '/reports', icon: BarChart3, label: 'گزارش‌گیری', color: 'text-cyan-400' },
  { href: '/settings', icon: Settings, label: 'تنظیمات', color: 'text-gray-400' },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
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
        fixed lg:static inset-y-0 right-0 z-50 w-64 
        bg-gradient-to-b from-blue-600 to-blue-800 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-blue-500">
            <h2 className="text-white text-xl font-bold text-center">
              بنگاه معاملات ملکی
            </h2>
            <p className="text-blue-200 text-sm text-center mt-1">
              سیستم اتوماسیون
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-lg
                        transition-all duration-200 group
                        ${isActive 
                          ? 'bg-white bg-opacity-20 text-white' 
                          : 'text-blue-100 hover:bg-white hover:bg-opacity-10 hover:text-white'
                        }
                      `}
                      onClick={onClose}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : item.color}`} />
                      <span className="font-medium">{item.label}</span>
                      {isActive && (
                        <div className="mr-auto w-2 h-2 bg-white rounded-full" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-blue-500">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white bg-opacity-10">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">ک</span>
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">کاربر مدیر</p>
                <p className="text-blue-200 text-sm">admin@example.com</p>
              </div>
              <button className="text-blue-200 hover:text-white transition-colors">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}