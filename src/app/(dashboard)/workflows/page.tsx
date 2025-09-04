import { Play, Pause, Settings, Activity, Clock, CheckCircle, XCircle } from 'lucide-react';

const workflows = [
  {
    id: 1,
    name: 'اسکریپینگ دیوار',
    description: 'دریافت خودکار آگهی‌های جدید از دیوار',
    status: 'active',
    lastRun: '۱۴۰۳/۰۶/۱۵ - ۱۴:۳۰',
    nextRun: '۱۴۰۳/۰۶/۱۶ - ۰۸:۰۰',
    executions: 156,
    successRate: 98,
    avgDuration: '۲ دقیقه'
  },
  {
    id: 2,
    name: 'اسکریپینگ شیپور',
    description: 'دریافت خودکار آگهی‌های جدید از شیپور',
    status: 'active',
    lastRun: '۱۴۰۳/۰۶/۱۵ - ۱۴:۲۵',
    nextRun: '۱۴۰۳/۰۶/۱۶ - ۰۸:۰۰',
    executions: 142,
    successRate: 95,
    avgDuration: '۳ دقیقه'
  },
  {
    id: 3,
    name: 'مچ کردن ملک با مشتری',
    description: 'تطبیق خودکار فایل‌های ملکی با نیاز مشتریان',
    status: 'inactive',
    lastRun: '۱۴۰۳/۰۶/۱۴ - ۲۰:۰۰',
    nextRun: '-',
    executions: 89,
    successRate: 87,
    avgDuration: '۵ دقیقه'
  },
  {
    id: 4,
    name: 'ارسال پیام به مشتریان',
    description: 'ارسال خودکار پیام‌های اطلاع‌رسانی',
    status: 'error',
    lastRun: '۱۴۰۳/۰۶/۱۵ - ۱۲:۰۰',
    nextRun: 'خطا در اجرا',
    executions: 67,
    successRate: 92,
    avgDuration: '۱ دقیقه'
  }
];

export default function WorkflowsPage() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'inactive':
        return <Pause className="w-5 h-5 text-gray-500" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-gray-100 text-gray-800',
      error: 'bg-red-100 text-red-800'
    };
    
    const labels = {
      active: 'فعال',
      inactive: 'غیرفعال',
      error: 'خطا'
    };

    return (
      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${badges[status as keyof typeof badges]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">ورک‌فلوهای اتوماسیون</h1>
          <p className="text-gray-600 mt-1">مدیریت و نظارت بر فرآیندهای خودکار</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Play className="w-5 h-5" />
            اجرای همه
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Settings className="w-5 h-5" />
            تنظیمات
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">۲</p>
              <p className="text-sm text-gray-600">ورک‌فلو فعال</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">۱</p>
              <p className="text-sm text-gray-600">ورک‌فلو با خطا</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">۴۵۴</p>
              <p className="text-sm text-gray-600">اجرای امروز</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">۹۳%</p>
              <p className="text-sm text-gray-600">نرخ موفقیت</p>
            </div>
          </div>
        </div>
      </div>

      {/* Workflows Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">لیست ورک‌فلوها</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  نام ورک‌فلو
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  وضعیت
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  آخرین اجرا
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  اجرای بعدی
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  آمار
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  عملیات
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {workflows.map((workflow) => (
                <tr key={workflow.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(workflow.status)}
                      <div>
                        <div className="text-sm font-medium text-gray-900">{workflow.name}</div>
                        <div className="text-sm text-gray-500">{workflow.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(workflow.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {workflow.lastRun}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {workflow.nextRun}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="space-y-1">
                      <div>اجرا: {workflow.executions}</div>
                      <div>موفقیت: {workflow.successRate}%</div>
                      <div>مدت: {workflow.avgDuration}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex gap-2">
                      {workflow.status === 'active' ? (
                        <button className="text-red-600 hover:text-red-900 transition-colors p-1">
                          <Pause className="w-4 h-4" />
                        </button>
                      ) : (
                        <button className="text-green-600 hover:text-green-900 transition-colors p-1">
                          <Play className="w-4 h-4" />
                        </button>
                      )}
                      <button className="text-blue-600 hover:text-blue-900 transition-colors p-1">
                        <Settings className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900 transition-colors p-1">
                        <Activity className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}