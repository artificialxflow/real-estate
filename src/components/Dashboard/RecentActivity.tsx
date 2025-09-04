import { Clock, User, Building, FileText } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'customer',
    title: 'مشتری جدید ثبت شد',
    description: 'احمد محمدی - جستجوی آپارتمان در تهران',
    time: '۱۰ دقیقه پیش',
    icon: User,
    color: 'bg-blue-500'
  },
  {
    id: 2,
    type: 'property',
    title: 'فایل ملکی جدید',
    description: 'آپارتمان ۱۲۰ متری در سعادت‌آباد',
    time: '۳۰ دقیقه پیش',
    icon: Building,
    color: 'bg-green-500'
  },
  {
    id: 3,
    type: 'listing',
    title: 'آگهی جدید اسکریپ شد',
    description: 'ویلا ۲۵۰ متری در کرج - دیوار',
    time: '۱ ساعت پیش',
    icon: FileText,
    color: 'bg-purple-500'
  },
  {
    id: 4,
    type: 'workflow',
    title: 'ورک‌فلو مچ کردن اجرا شد',
    description: '۵ مشتری با فایل‌های جدید مچ شدند',
    time: '۲ ساعت پیش',
    icon: Clock,
    color: 'bg-orange-500'
  }
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">آخرین فعالیت‌ها</h3>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full ${activity.color} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
            مشاهده همه فعالیت‌ها
          </button>
        </div>
      </div>
    </div>
  );
}