import { BiUser, BiBuilding, BiSearch, BiTrendingUp } from 'react-icons/bi';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">داشبورد</h1>
          <p className="text-gray-600 mt-1">خلاصه‌ای از عملکرد سیستم</p>
        </div>
        <div className="text-sm text-gray-500">
          آخرین به‌روزرسانی: {new Date().toLocaleDateString('fa-IR')}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <BiUser className="w-6 h-6" />
            </div>
            <div className="mr-4">
              <p className="text-sm font-medium text-gray-600">کل مشتریان</p>
              <p className="text-2xl font-bold text-gray-900">1,234</p>
              <p className="text-sm text-green-600">+12% از ماه گذشته</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <BiBuilding className="w-6 h-6" />
            </div>
            <div className="mr-4">
              <p className="text-sm font-medium text-gray-600">فایل‌های ملکی</p>
              <p className="text-2xl font-bold text-gray-900">896</p>
              <p className="text-sm text-green-600">+8% از ماه گذشته</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <BiSearch className="w-6 h-6" />
            </div>
            <div className="mr-4">
              <p className="text-sm font-medium text-gray-600">آگهی‌های اسکریپ شده</p>
              <p className="text-2xl font-bold text-gray-900">2,567</p>
              <p className="text-sm text-green-600">+25% از ماه گذشته</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-orange-100 text-orange-600">
              <BiTrendingUp className="w-6 h-6" />
            </div>
            <div className="mr-4">
              <p className="text-sm font-medium text-gray-600">معاملات این ماه</p>
              <p className="text-2xl font-bold text-gray-900">45</p>
              <p className="text-sm text-green-600">+15% از ماه گذشته</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">روند فروش</h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            نمودار روند فروش
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">انواع ملک</h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            نمودار انواع ملک
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">درآمد ماهانه</h3>
            <div className="h-64 flex items-center justify-center text-gray-500">
              نمودار درآمد ماهانه
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">عملیات سریع</h3>
            <div className="space-y-2">
              <button className="w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                افزودن مشتری جدید
              </button>
              <button className="w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                ثبت فایل ملکی
              </button>
              <button className="w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                اجرای اسکریپینگ
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">آخرین فعالیت‌ها</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="text-gray-900">مشتری جدید اضافه شد</p>
                <p className="text-gray-500">2 ساعت پیش</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-900">فایل ملکی به‌روزرسانی شد</p>
                <p className="text-gray-500">4 ساعت پیش</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-900">اسکریپینگ انجام شد</p>
                <p className="text-gray-500">6 ساعت پیش</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}