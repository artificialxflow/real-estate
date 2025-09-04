import { BiPlay, BiPause, BiCog, BiBarChart, BiTime, BiCheckCircle, BiXCircle, BiInfoCircle, BiX } from 'react-icons/bi';
import { useState } from 'react';

const workflows = [
  {
    id: 1,
    name: 'اسکریپینگ دیوار',
    description: 'دریافت خودکار آگهی‌های جدید از دیوار',
    detailedDescription: 'این ورک‌فلو هر ساعت به صورت خودکار به سایت دیوار متصل شده و آگهی‌های جدید املاک را دریافت می‌کند. اطلاعات شامل قیمت، موقعیت، متراژ، نوع ملک و تصاویر است. سپس این داده‌ها در پایگاه داده ذخیره شده و برای تحلیل و مچ کردن با نیاز مشتریان استفاده می‌شود.',
    status: 'active',
    lastRun: '۱۴۰۳/۰۶/۱۵ - ۱۴:۳۰',
    nextRun: '۱۴۰۳/۰۶/۱۶ - ۰۸:۰۰',
    executions: 156,
    successRate: 98,
    avgDuration: '۲ دقیقه',
    category: 'جمع‌آوری داده',
    frequency: 'هر ساعت',
    dataSource: 'divar.ir',
    output: 'آگهی‌های جدید املاک'
  },
  {
    id: 2,
    name: 'اسکریپینگ شیپور',
    description: 'دریافت خودکار آگهی‌های جدید از شیپور',
    detailedDescription: 'این ورک‌فلو مشابه دیوار عمل می‌کند اما از سایت شیپور داده دریافت می‌کند. شیپور یکی از بزرگترین پلتفرم‌های خرید و فروش املاک در ایران است و این ورک‌فلو اطمینان می‌دهد که هیچ آگهی مهمی از دست نرود.',
    status: 'active',
    lastRun: '۱۴۰۳/۰۶/۱۵ - ۱۴:۲۵',
    nextRun: '۱۴۰۳/۰۶/۱۶ - ۰۸:۰۰',
    executions: 142,
    successRate: 95,
    avgDuration: '۳ دقیقه',
    category: 'جمع‌آوری داده',
    frequency: 'هر ساعت',
    dataSource: 'sheypoor.com',
    output: 'آگهی‌های جدید املاک'
  },
  {
    id: 3,
    name: 'مچ کردن ملک با مشتری',
    description: 'تطبیق خودکار فایل‌های ملکی با نیاز مشتریان',
    detailedDescription: 'این ورک‌فلو هوشمند از الگوریتم‌های یادگیری ماشین استفاده می‌کند تا آگهی‌های املاک را با نیازهای ثبت شده مشتریان تطبیق دهد. فاکتورهای مهم شامل قیمت، موقعیت جغرافیایی، متراژ، نوع ملک، امکانات و اولویت‌های مشتری است.',
    status: 'inactive',
    lastRun: '۱۴۰۳/۰۶/۱۴ - ۲۰:۰۰',
    nextRun: '-',
    executions: 89,
    successRate: 87,
    avgDuration: '۵ دقیقه',
    category: 'هوش مصنوعی',
    frequency: 'روزانه',
    dataSource: 'پایگاه داده داخلی',
    output: 'لیست ملک‌های مناسب برای هر مشتری'
  },
  {
    id: 4,
    name: 'ارسال پیام به مشتریان',
    description: 'ارسال خودکار پیام‌های اطلاع‌رسانی',
    detailedDescription: 'این ورک‌فلو پس از مچ کردن ملک با مشتری، به صورت خودکار پیام‌های شخصی‌سازی شده به مشتریان ارسال می‌کند. پیام‌ها شامل جزئیات ملک، تصاویر، قیمت و اطلاعات تماس است. از طریق واتساپ، تلگرام و پیامک ارسال می‌شود.',
    status: 'error',
    lastRun: '۱۴۰۳/۰۶/۱۵ - ۱۲:۰۰',
    nextRun: 'خطا در اجرا',
    executions: 67,
    successRate: 92,
    avgDuration: '۱ دقیقه',
    category: 'ارتباطات',
    frequency: 'فوری',
    dataSource: 'سیستم مچ کردن',
    output: 'پیام‌های ارسالی به مشتریان'
  },
  {
    id: 5,
    name: 'تحلیل بازار املاک',
    description: 'بررسی روند قیمت‌ها و تحلیل بازار',
    detailedDescription: 'این ورک‌فلو روزانه داده‌های جمع‌آوری شده را تحلیل کرده و گزارش‌های جامعی از وضعیت بازار املاک ارائه می‌دهد. شامل روند قیمت‌ها، مناطق پرطرفدار، پیش‌بینی آینده و توصیه‌های سرمایه‌گذاری است.',
    status: 'active',
    lastRun: '۱۴۰۳/۰۶/۱۵ - ۰۶:۰۰',
    nextRun: '۱۴۰۳/۰۶/۱۶ - ۰۶:۰۰',
    executions: 45,
    successRate: 96,
    avgDuration: '۱۵ دقیقه',
    category: 'تحلیل داده',
    frequency: 'روزانه',
    dataSource: 'داده‌های جمع‌آوری شده',
    output: 'گزارش‌های تحلیلی بازار'
  },
  {
    id: 6,
    name: 'بروزرسانی قیمت‌ها',
    description: 'بروزرسانی خودکار قیمت‌های آگهی‌ها',
    detailedDescription: 'این ورک‌فلو قیمت‌های آگهی‌های موجود را با قیمت‌های جدید مقایسه کرده و در صورت تغییر قابل توجه، آگهی را بروزرسانی می‌کند. همچنین آگهی‌های منقضی شده را شناسایی و حذف می‌کند.',
    status: 'active',
    lastRun: '۱۴۰۳/۰۶/۱۵ - ۱۶:۰۰',
    nextRun: '۱۴۰۳/۰۶/۱۵ - ۱۸:۰۰',
    executions: 78,
    successRate: 94,
    avgDuration: '۸ دقیقه',
    category: 'مدیریت محتوا',
    frequency: 'هر ۲ ساعت',
    dataSource: 'آگهی‌های موجود',
    output: 'آگهی‌های بروزرسانی شده'
  }
];

export default function WorkflowsPage() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const openWorkflowDetails = (workflow: any) => {
    setSelectedWorkflow(workflow);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedWorkflow(null);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <BiCheckCircle className="w-5 h-5 text-green-500" />;
      case 'inactive':
        return <BiPause className="w-5 h-5 text-gray-500" />;
      case 'error':
        return <BiXCircle className="w-5 h-5 text-red-500" />;
      default:
        return <BiTime className="w-5 h-5 text-yellow-500" />;
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
            <BiPlay className="w-5 h-5" />
            اجرای همه
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <BiCog className="w-5 h-5" />
            تنظیمات
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <BiCheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">۴</p>
              <p className="text-sm text-gray-600">ورک‌فلو فعال</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <BiXCircle className="w-6 h-6 text-red-600" />
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
              <BiBarChart className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">۵۶۷</p>
              <p className="text-sm text-gray-600">اجرای امروز</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <BiTime className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">۹۴%</p>
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
                  دسته‌بندی
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  وضعیت
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  فرکانس
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  آخرین اجرا
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
                        <div className="text-xs text-gray-400 mt-1" title={workflow.detailedDescription}>
                          {workflow.detailedDescription.substring(0, 80)}...
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {workflow.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(workflow.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {workflow.frequency}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {workflow.lastRun}
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
                        <button 
                          className="text-red-600 hover:text-red-900 transition-colors p-1"
                          title="متوقف کردن ورک‌فلو"
                        >
                          <BiPause className="w-4 h-4" />
                        </button>
                      ) : (
                        <button 
                          className="text-green-600 hover:text-green-900 transition-colors p-1"
                          title="شروع ورک‌فلو"
                        >
                          <BiPlay className="w-4 h-4" />
                        </button>
                      )}
                      <button 
                        className="text-blue-600 hover:text-blue-900 transition-colors p-1"
                        title="تنظیمات ورک‌فلو"
                      >
                        <BiCog className="w-4 h-4" />
                      </button>
                      <button 
                        className="text-gray-600 hover:text-gray-900 transition-colors p-1"
                        title="گزارش‌های تفصیلی"
                      >
                        <BiBarChart className="w-4 h-4" />
                      </button>
                      <button 
                        className="text-blue-600 hover:text-blue-900 transition-colors p-1"
                        title="مشاهده توضیحات کامل"
                        onClick={() => openWorkflowDetails(workflow)}
                      >
                        <BiInfoCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Workflow Details Modal */}
      {showModal && selectedWorkflow && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                {getStatusIcon(selectedWorkflow.status)}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{selectedWorkflow.name}</h3>
                  <p className="text-sm text-gray-500">{selectedWorkflow.description}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <BiX className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Detailed Description */}
              <div>
                <h4 className="text-md font-semibold text-gray-900 mb-3">توضیحات تفصیلی</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{selectedWorkflow.detailedDescription}</p>
              </div>

              {/* Workflow Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-900 mb-2">اطلاعات کلی</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">دسته‌بندی:</span>
                      <span className="font-medium">{selectedWorkflow.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">فرکانس اجرا:</span>
                      <span className="font-medium">{selectedWorkflow.frequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">منبع داده:</span>
                      <span className="font-medium">{selectedWorkflow.dataSource}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">خروجی:</span>
                      <span className="font-medium">{selectedWorkflow.output}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-900 mb-2">آمار عملکرد</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">تعداد اجرا:</span>
                      <span className="font-medium">{selectedWorkflow.executions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">نرخ موفقیت:</span>
                      <span className="font-medium text-green-600">{selectedWorkflow.successRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">مدت زمان متوسط:</span>
                      <span className="font-medium">{selectedWorkflow.avgDuration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">آخرین اجرا:</span>
                      <span className="font-medium">{selectedWorkflow.lastRun}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Information */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">وضعیت فعلی</h5>
                <div className="flex items-center gap-2">
                  {getStatusBadge(selectedWorkflow.status)}
                  <span className="text-sm text-gray-600">
                    {selectedWorkflow.status === 'active' && 'ورک‌فلو در حال اجرا است'}
                    {selectedWorkflow.status === 'inactive' && 'ورک‌فلو متوقف شده است'}
                    {selectedWorkflow.status === 'error' && 'ورک‌فلو با خطا مواجه شده است'}
                  </span>
                </div>
                {selectedWorkflow.nextRun && selectedWorkflow.nextRun !== '-' && (
                  <p className="text-sm text-gray-600 mt-2">
                    اجرای بعدی: {selectedWorkflow.nextRun}
                  </p>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                بستن
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                ویرایش ورک‌فلو
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}