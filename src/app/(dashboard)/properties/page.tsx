import { Search, Plus, Filter, MapPin, Home, DollarSign } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'آپارتمان ۱۲۰ متری در سعادت‌آباد',
    type: 'آپارتمان',
    area: '۱۲۰',
    price: '۲,۵۰۰,۰۰۰,۰۰۰',
    location: 'تهران - سعادت‌آباد',
    rooms: '۳',
    status: 'موجود',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=300',
    owner: 'احمد محمدی',
    addedDate: '۱۴۰۳/۰۶/۱۵'
  },
  {
    id: 2,
    title: 'ویلا ۲۵۰ متری در کرج',
    type: 'ویلا',
    area: '۲۵۰',
    price: '۴,۰۰۰,۰۰۰,۰۰۰',
    location: 'کرج - مهرشهر',
    rooms: '۴',
    status: 'رزرو شده',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=300',
    owner: 'فاطمه احمدی',
    addedDate: '۱۴۰۳/۰۶/۱۲'
  },
  {
    id: 3,
    title: 'زمین ۵۰۰ متری در شهریار',
    type: 'زمین',
    area: '۵۰۰',
    price: '۱,۸۰۰,۰۰۰,۰۰۰',
    location: 'شهریار - مرکز شهر',
    rooms: '-',
    status: 'موجود',
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=300',
    owner: 'علی رضایی',
    addedDate: '۱۴۰۳/۰۶/۱۰'
  }
];

export default function PropertiesPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">فایل‌های ملکی</h1>
          <p className="text-gray-600 mt-1">مدیریت و نمایش فایل‌های ملکی موجود</p>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="w-5 h-5" />
          فایل جدید
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="جستجو در فایل‌ها..."
              className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
            <option value="">همه انواع</option>
            <option value="apartment">آپارتمان</option>
            <option value="villa">ویلا</option>
            <option value="land">زمین</option>
            <option value="shop">مغازه</option>
          </select>
          
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
            <option value="">محدوده قیمت</option>
            <option value="0-1">تا ۱ میلیارد</option>
            <option value="1-2">۱ تا ۲ میلیارد</option>
            <option value="2-5">۲ تا ۵ میلیارد</option>
            <option value="5+">بالای ۵ میلیارد</option>
          </select>
          
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
            <option value="">همه مناطق</option>
            <option value="tehran">تهران</option>
            <option value="karaj">کرج</option>
            <option value="shahriyar">شهریار</option>
          </select>
          
          <div className="flex gap-2">
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
              <Filter className="w-4 h-4" />
              فیلتر
            </button>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 right-3">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  property.status === 'موجود' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {property.status}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{property.title}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Home className="w-4 h-4" />
                  <span>{property.type} - {property.area} متر</span>
                  {property.rooms !== '-' && <span>- {property.rooms} خواب</span>}
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{property.location}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <DollarSign className="w-4 h-4" />
                  <span className="font-semibold text-green-600">{property.price} تومان</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>مالک: {property.owner}</span>
                <span>{property.addedDate}</span>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-lg text-sm transition-colors">
                  مشاهده
                </button>
                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm transition-colors">
                  ویرایش
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg border border-gray-300 transition-colors">
          نمایش بیشتر
        </button>
      </div>
    </div>
  );
}