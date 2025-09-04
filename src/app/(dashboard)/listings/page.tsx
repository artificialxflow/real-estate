import Image from 'next/image';
import { BiLinkExternal, BiDownload, BiTrash, BiShow, BiFilter } from 'react-icons/bi';

const listings = [
  {
    id: 1,
    title: 'آپارتمان ۹۵ متری در پونک',
    source: 'دیوار',
    price: '۲,۲۰۰,۰۰۰,۰۰۰',
    location: 'تهران - پونک',
    area: '۹۵',
    rooms: '۲',
    scrapedAt: '۱۴۰۳/۰۶/۱۵ - ۱۴:۳۰',
    url: 'https://divar.ir/v/example',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=300',
    matched: false,
    saved: false
  },
  {
    id: 2,
    title: 'ویلا ۲۰۰ متری در کرج',
    source: 'شیپور',
    price: '۳,۵۰۰,۰۰۰,۰۰۰',
    location: 'کرج - گوهردشت',
    area: '۲۰۰',
    rooms: '۳',
    scrapedAt: '۱۴۰۳/۰۶/۱۵ - ۱۴:۲۸',
    url: 'https://sheypoor.com/v/example',
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=300',
    matched: true,
    saved: true
  },
  {
    id: 3,
    title: 'مغازه ۴۰ متری در بازار',
    source: 'دیوار',
    price: '۱,۸۰۰,۰۰۰,۰۰۰',
    location: 'تهران - بازار',
    area: '۴۰',
    rooms: '-',
    scrapedAt: '۱۴۰۳/۰۶/۱۵ - ۱۴:۲۰',
    url: 'https://divar.ir/v/example2',
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=300',
    matched: false,
    saved: false
  }
];

export default function ListingsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">آگهی‌های اسکریپ شده</h1>
          <p className="text-gray-600 mt-1">آگهی‌های دریافت شده از دیوار و شیپور</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <BiDownload className="w-5 h-5" />
            اجرای اسکریپینگ
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
            <option value="">همه منابع</option>
            <option value="divar">دیوار</option>
            <option value="sheypoor">شیپور</option>
          </select>
          
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
            <option value="">همه انواع</option>
            <option value="apartment">آپارتمان</option>
            <option value="villa">ویلا</option>
            <option value="shop">مغازه</option>
          </select>
          
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
            <option value="">وضعیت مچ</option>
            <option value="matched">مچ شده</option>
            <option value="not-matched">مچ نشده</option>
          </select>
          
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
            <option value="">تاریخ اسکریپ</option>
            <option value="today">امروز</option>
            <option value="yesterday">دیروز</option>
            <option value="week">این هفته</option>
          </select>
          
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
            <BiFilter className="w-4 h-4" />
            اعمال فیلتر
          </button>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div key={listing.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <Image 
                src={listing.image} 
                alt={listing.title}
                width={400}
                height={192}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 right-3 flex gap-2">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  listing.source === 'دیوار' 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {listing.source}
                </span>
                {listing.matched && (
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    مچ شده
                  </span>
                )}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{listing.title}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">قیمت:</span>
                  <span className="font-semibold text-green-600">{listing.price} تومان</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">متراژ:</span>
                  <span>{listing.area} متر</span>
                </div>
                
                {listing.rooms !== '-' && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">اتاق:</span>
                    <span>{listing.rooms} خواب</span>
                  </div>
                )}
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">منطقه:</span>
                  <span>{listing.location}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">زمان اسکریپ:</span>
                  <span className="text-xs">{listing.scrapedAt}</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors">
                  <BiShow className="w-4 h-4" />
                  مشاهده
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm transition-colors">
                  <BiLinkExternal className="w-4 h-4" />
                </button>
                <button className={`py-2 px-3 rounded-lg text-sm transition-colors ${
                  listing.saved 
                    ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  <BiDownload className="w-4 h-4" />
                </button>
                <button className="bg-red-100 hover:bg-red-200 text-red-700 py-2 px-3 rounded-lg text-sm transition-colors">
                  <BiTrash className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg border border-gray-300 transition-colors">
          نمایش آگهی‌های بیشتر
        </button>
      </div>
    </div>
  );
}