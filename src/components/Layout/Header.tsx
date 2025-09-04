'use client';

import { BiBell, BiMenu, BiSearch, BiUser } from 'react-icons/bi';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-3 sm:px-4 py-2 sm:py-3">
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        {/* Menu Button - Mobile & Desktop */}
        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0 menu-button"
        >
          <BiMenu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
        </button>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-2 sm:mx-4">
          <div className="relative">
            <BiSearch className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              placeholder="جستجو در سیستم..."
              className="w-full pr-8 sm:pr-10 pl-3 sm:pl-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-1 sm:gap-3">
          {/* Notifications */}
          <div className="relative">
            <button className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
              <BiBell className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600" />
              <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-1 sm:gap-2 p-1 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <BiUser className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
            </div>
            <span className="text-gray-700 font-medium text-sm sm:text-base hidden sm:block">کاربر مدیر</span>
          </div>
        </div>
      </div>
    </header>
  );
}