import { BiPlus, BiUpload, BiDownload, BiRefresh } from 'react-icons/bi';

const actions = [
  {
    title: 'مشتری جدید',
    description: 'ثبت مشتری جدید در سیستم',
    icon: BiPlus,
    color: 'bg-blue-500 hover:bg-blue-600',
    href: '/customers/new'
  },
  {
    title: 'فایل ملکی جدید',
    description: 'اضافه کردن ملک جدید',
    icon: BiUpload,
    color: 'bg-green-500 hover:bg-green-600',
    href: '/properties/new'
  },
  {
    title: 'اجرای اسکریپینگ',
    description: 'دریافت آگهی‌های جدید',
    icon: BiRefresh,
    color: 'bg-purple-500 hover:bg-purple-600',
    href: '/scraping/run'
  },
  {
    title: 'گزارش‌گیری',
    description: 'تولید گزارش‌های مدیریتی',
    icon: BiDownload,
    color: 'bg-orange-500 hover:bg-orange-600',
    href: '/reports'
  }
];

export default function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">عملیات سریع</h3>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.title}
                className={`
                  ${action.color} text-white p-4 rounded-lg 
                  transition-all duration-200 hover:transform hover:scale-105
                  text-right
                `}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6" />
                  <div>
                    <h4 className="font-semibold">{action.title}</h4>
                    <p className="text-sm opacity-90 mt-1">{action.description}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}