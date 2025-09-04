import { BiSearch, BiPlus, BiFilter, BiDownload } from 'react-icons/bi';

const customers = [
  {
    id: 1,
    name: 'احمد محمدی',
    phone: '۰۹۱۲۳۴۵۶۷۸۹',
    email: 'ahmad@example.com',
    type: 'خریدار',
    budget: '۲ میلیارد',
    area: 'تهران - سعادت‌آباد',
    status: 'فعال',
    lastContact: '۱۴۰۳/۰۶/۱۵'
  },
  {
    id: 2,
    name: 'فاطمه احمدی',
    phone: '۰۹۱۲۳۴۵۶۷۸۰',
    email: 'fateme@example.com',
    type: 'فروشنده',
    budget: '۳ میلیارد',
    area: 'تهران - ولنجک',
    status: 'در انتظار',
    lastContact: '۱۴۰۳/۰۶/۱۲'
  },
  {
    id: 3,
    name: 'علی رضایی',
    phone: '۰۹۱۲۳۴۵۶۷۸۱',
    email: 'ali@example.com',
    type: 'خریدار',
    budget: '۱.۵ میلیارد',
    area: 'تهران - پونک',
    status: 'فعال',
    lastContact: '۱۴۰۳/۰۶/۱۰'
  }
];

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">مدیریت مشتریان</h1>
          <p className="text-gray-600 mt-1">مدیریت اطلاعات مشتریان و پیگیری آن‌ها</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <BiPlus className="w-5 h-5" />
          مشتری جدید
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <BiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="جستجو در مشتریان..."
              className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">همه انواع</option>
            <option value="buyer">خریدار</option>
            <option value="seller">فروشنده</option>
          </select>
          
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">همه وضعیت‌ها</option>
            <option value="active">فعال</option>
            <option value="pending">در انتظار</option>
            <option value="closed">بسته شده</option>
          </select>
          
          <div className="flex gap-2">
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
              <BiFilter className="w-4 h-4" />
              فیلتر
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
              <BiDownload className="w-4 h-4" />
              خروجی
            </button>
          </div>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  نام و نام خانوادگی
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  تماس
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  نوع
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  بودجه
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  منطقه
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  وضعیت
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  عملیات
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                      <div className="text-sm text-gray-500">{customer.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {customer.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      customer.type === 'خریدار' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {customer.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {customer.budget}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {customer.area}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      customer.status === 'فعال' 
                        ? 'bg-green-100 text-green-800' 
                        : customer.status === 'در انتظار'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-900 transition-colors">
                        مشاهده
                      </button>
                      <button className="text-green-600 hover:text-green-900 transition-colors">
                        ویرایش
                      </button>
                      <button className="text-red-600 hover:text-red-900 transition-colors">
                        حذف
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="bg-white px-6 py-3 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            نمایش ۱ تا ۳ از ۳ نتیجه
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors">
              قبلی
            </button>
            <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">
              ۱
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors">
              بعدی
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}