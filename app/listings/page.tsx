'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import { 
  BiSearch, 
  BiFilter,
  BiSave,
  BiTrash,
  BiHide,
  BiRefresh,
  BiLinkExternal,
  BiCalendar,
  BiMapPin,
  BiMoney
} from 'react-icons/bi';

interface Listing {
  id: number;
  title: string;
  price: string;
  area: number;
  rooms: number;
  location: string;
  source: 'divar' | 'sheypoor';
  url: string;
  image: string;
  description: string;
  scrapedAt: string;
  status: 'new' | 'saved' | 'ignored';
}

export default function Listings() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  useEffect(() => {
    // Simulate loading scraped listings
    setListings([
      {
        id: 1,
        title: 'آپارتمان 3 خوابه در تهرانپارس',
        price: '2,500,000,000',
        area: 120,
        rooms: 3,
        location: 'تهران، تهرانپارس',
        source: 'divar',
        url: 'https://divar.ir/v/123456',
        image: '/api/placeholder/300/200',
        description: 'آپارتمان 3 خوابه با امکانات کامل در منطقه تهرانپارس',
        scrapedAt: '2 ساعت پیش',
        status: 'new'
      },
      {
        id: 2,
        title: 'خانه ویلایی 4 خوابه در شمال',
        price: '8,000,000,000',
        area: 250,
        rooms: 4,
        location: 'تهران، شمال',
        source: 'sheypoor',
        url: 'https://sheypoor.com/v/789012',
        image: '/api/placeholder/300/200',
        description: 'خانه ویلایی 4 خوابه با حیاط بزرگ و استخر',
        scrapedAt: '4 ساعت پیش',
        status: 'saved'
      },
      {
        id: 3,
        title: 'زمین 500 متری در کرج',
        price: '1,200,000,000',
        area: 500,
        rooms: 0,
        location: 'کرج، مرکز',
        source: 'divar',
        url: 'https://divar.ir/v/345678',
        image: '/api/placeholder/300/200',
        description: 'زمین 500 متری مناسب برای ساخت و ساز',
        scrapedAt: '6 ساعت پیش',
        status: 'ignored'
      }
    ]);
  }, []);

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSource = !selectedSource || listing.source === selectedSource;
    const matchesStatus = !selectedStatus || listing.status === selectedStatus;
    
    return matchesSearch && matchesSource && matchesStatus;
  });

  const handleSave = (id: number) => {
    setListings(listings.map(listing => 
      listing.id === id 
        ? { ...listing, status: 'saved' }
        : listing
    ));
  };

  const handleIgnore = (id: number) => {
    setListings(listings.map(listing => 
      listing.id === id 
        ? { ...listing, status: 'ignored' }
        : listing
    ));
  };

  const handleDelete = (id: number) => {
    if (window.confirm('آیا مطمئن هستید که می‌خواهید این آگهی را حذف کنید؟')) {
      setListings(listings.filter(listing => listing.id !== id));
    }
  };

  const getSourceBadge = (source: string) => {
    switch (source) {
      case 'divar':
        return <span className="badge bg-primary">دیوار</span>;
      case 'sheypoor':
        return <span className="badge bg-success">شیپور</span>;
      default:
        return <span className="badge bg-secondary">نامشخص</span>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <span className="badge bg-warning">جدید</span>;
      case 'saved':
        return <span className="badge bg-success">ذخیره شده</span>;
      case 'ignored':
        return <span className="badge bg-secondary">نادیده گرفته شده</span>;
      default:
        return <span className="badge bg-secondary">نامشخص</span>;
    }
  };

  return (
    <Layout title="آگهی‌های اسکریپ شده">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary">
            <BiRefresh className="me-2" />
            بروزرسانی
          </button>
          <button className="btn btn-primary">
            <BiSearch className="me-2" />
            اسکریپ جدید
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <div className="input-group">
                <span className="input-group-text">
                  <BiSearch />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="جستجو در عنوان یا مکان..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-3">
              <select 
                className="form-select"
                value={selectedSource}
                onChange={(e) => setSelectedSource(e.target.value)}
              >
                <option value="">همه منابع</option>
                <option value="divar">دیوار</option>
                <option value="sheypoor">شیپور</option>
              </select>
            </div>
            <div className="col-md-3">
              <select 
                className="form-select"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="">همه وضعیت‌ها</option>
                <option value="new">جدید</option>
                <option value="saved">ذخیره شده</option>
                <option value="ignored">نادیده گرفته شده</option>
              </select>
            </div>
            <div className="col-md-2">
              <button className="btn btn-outline-secondary w-100">
                <BiFilter className="me-2" />
                فیلتر
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="row">
        {filteredListings.map((listing) => (
          <div key={listing.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <div className="position-relative">
                <Image 
                  src={listing.image} 
                  className="card-img-top" 
                  alt={listing.title}
                  width={300}
                  height={200}
                  style={{height: '200px', objectFit: 'cover'}}
                />
                <div className="position-absolute top-0 start-0 m-2">
                  {getSourceBadge(listing.source)}
                </div>
                <div className="position-absolute top-0 end-0 m-2">
                  {getStatusBadge(listing.status)}
                </div>
              </div>
              
              <div className="card-body">
                <h5 className="card-title">{listing.title}</h5>
                
                <div className="mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <BiMoney className="me-2 text-success" />
                    <span className="fw-bold text-success">
                      {listing.price.toLocaleString()} تومان
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <BiMapPin className="me-2 text-primary" />
                    <span className="text-muted">{listing.location}</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <BiCalendar className="me-2 text-info" />
                    <span className="text-muted">{listing.scrapedAt}</span>
                  </div>
                </div>

                <div className="row text-center mb-3">
                  <div className="col-6">
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="fw-bold">{listing.area}</span>
                      <small className="text-muted ms-1">متر</small>
                    </div>
                    <small className="text-muted">مساحت</small>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="fw-bold">{listing.rooms}</span>
                      <small className="text-muted ms-1">خواب</small>
                    </div>
                    <small className="text-muted">تعداد خواب</small>
                  </div>
                </div>

                <p className="card-text text-muted small">
                  {listing.description}
                </p>

                <div className="d-flex justify-content-between align-items-center">
                  <a 
                    href={listing.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm"
                  >
                    <BiLinkExternal className="me-1" />
                    مشاهده
                  </a>
                  
                  <div className="btn-group" role="group">
                    <button 
                      className="btn btn-outline-success btn-sm"
                      onClick={() => handleSave(listing.id)}
                      title="ذخیره"
                    >
                      <BiSave />
                    </button>
                    <button 
                      className="btn btn-outline-warning btn-sm"
                      onClick={() => handleIgnore(listing.id)}
                      title="نادیده بگیر"
                    >
                      <BiHide />
                    </button>
                    <button 
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleDelete(listing.id)}
                      title="حذف"
                    >
                      <BiTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex={-1}>قبلی</a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">1</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">2</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">3</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">بعدی</a>
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  );
}