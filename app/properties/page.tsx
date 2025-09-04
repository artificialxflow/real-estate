'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import { 
  BiSearch, 
  BiFilter,
  BiPlus,
  BiEdit,
  BiTrash,
  BiShow,
  BiRefresh,
  BiMapPin,
  BiMoney,
  BiCalendar
} from 'react-icons/bi';

interface Property {
  id: number;
  title: string;
  price: string;
  area: number;
  rooms: number;
  type: 'apartment' | 'house' | 'land' | 'commercial';
  status: 'sale' | 'rent';
  location: string;
  description: string;
  images: string[];
  features: string[];
  createdAt: string;
  updatedAt: string;
}

export default function Properties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingProperty, setEditingProperty] = useState<Property | null>(null);

  useEffect(() => {
    // Simulate loading properties
    setProperties([
      {
        id: 1,
        title: 'آپارتمان 3 خوابه در تهرانپارس',
        price: '2,500,000,000',
        area: 120,
        rooms: 3,
        type: 'apartment',
        status: 'sale',
        location: 'تهران، تهرانپارس',
        description: 'آپارتمان 3 خوابه با امکانات کامل در منطقه تهرانپارس',
        images: ['/api/placeholder/300/200', '/api/placeholder/300/200'],
        features: ['پارکینگ', 'انباری', 'آسانسور', 'بالکن'],
        createdAt: '2 روز پیش',
        updatedAt: '1 روز پیش'
      },
      {
        id: 2,
        title: 'خانه ویلایی 4 خوابه در شمال',
        price: '8,000,000,000',
        area: 250,
        rooms: 4,
        type: 'house',
        status: 'sale',
        location: 'تهران، شمال',
        description: 'خانه ویلایی 4 خوابه با حیاط بزرگ و استخر',
        images: ['/api/placeholder/300/200'],
        features: ['حیاط', 'استخر', 'پارکینگ', 'باغ'],
        createdAt: '1 هفته پیش',
        updatedAt: '3 روز پیش'
      },
      {
        id: 3,
        title: 'زمین 500 متری در کرج',
        price: '1,200,000,000',
        area: 500,
        rooms: 0,
        type: 'land',
        status: 'sale',
        location: 'کرج، مرکز',
        description: 'زمین 500 متری مناسب برای ساخت و ساز',
        images: ['/api/placeholder/300/200'],
        features: ['دسترسی آسان', 'نزدیک به مرکز شهر'],
        createdAt: '3 روز پیش',
        updatedAt: 'امروز'
      }
    ]);
  }, []);

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || property.type === selectedType;
    const matchesStatus = !selectedStatus || property.status === selectedStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const handleEdit = (property: Property) => {
    setEditingProperty(property);
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('آیا مطمئن هستید که می‌خواهید این ملک را حذف کنید؟')) {
      setProperties(properties.filter(property => property.id !== id));
    }
  };

  const handleSaveProperty = (propertyData: Partial<Property>) => {
    if (editingProperty) {
      setProperties(properties.map(property => 
        property.id === editingProperty.id 
          ? { ...property, ...propertyData }
          : property
      ));
    } else {
      const newProperty: Property = {
        id: Date.now(),
        title: propertyData.title || '',
        price: propertyData.price || '',
        area: propertyData.area || 0,
        rooms: propertyData.rooms || 0,
        type: propertyData.type || 'apartment',
        status: propertyData.status || 'sale',
        location: propertyData.location || '',
        description: propertyData.description || '',
        images: propertyData.images || [],
        features: propertyData.features || [],
        createdAt: 'امروز',
        updatedAt: 'امروز',
        ...propertyData
      };
      setProperties([...properties, newProperty]);
    }
    setShowModal(false);
    setEditingProperty(null);
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'apartment':
        return <span className="badge bg-primary">آپارتمان</span>;
      case 'house':
        return <span className="badge bg-success">خانه</span>;
      case 'land':
        return <span className="badge bg-warning">زمین</span>;
      case 'commercial':
        return <span className="badge bg-info">تجاری</span>;
      default:
        return <span className="badge bg-secondary">نامشخص</span>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'sale':
        return <span className="badge bg-danger">فروش</span>;
      case 'rent':
        return <span className="badge bg-info">اجاره</span>;
      default:
        return <span className="badge bg-secondary">نامشخص</span>;
    }
  };

  return (
    <Layout title="مدیریت املاک">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary">
            <BiRefresh className="me-2" />
            بروزرسانی
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            <BiPlus className="me-2" />
            ملک جدید
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
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="">همه انواع</option>
                <option value="apartment">آپارتمان</option>
                <option value="house">خانه</option>
                <option value="land">زمین</option>
                <option value="commercial">تجاری</option>
              </select>
            </div>
            <div className="col-md-3">
              <select 
                className="form-select"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="">همه وضعیت‌ها</option>
                <option value="sale">فروش</option>
                <option value="rent">اجاره</option>
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

      {/* Properties Grid */}
      <div className="row">
        {filteredProperties.map((property) => (
          <div key={property.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <div className="position-relative">
                <Image 
                  src={property.images[0] || '/api/placeholder/300/200'} 
                  className="card-img-top" 
                  alt={property.title}
                  width={300}
                  height={200}
                  style={{height: '200px', objectFit: 'cover'}}
                />
                <div className="position-absolute top-0 start-0 m-2">
                  {getTypeBadge(property.type)}
                </div>
                <div className="position-absolute top-0 end-0 m-2">
                  {getStatusBadge(property.status)}
                </div>
              </div>
              
              <div className="card-body">
                <h5 className="card-title">{property.title}</h5>
                
                <div className="mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <BiMoney className="me-2 text-success" />
                    <span className="fw-bold text-success">
                      {property.price.toLocaleString()} تومان
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <BiMapPin className="me-2 text-primary" />
                    <span className="text-muted">{property.location}</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <BiCalendar className="me-2 text-info" />
                    <span className="text-muted">{property.createdAt}</span>
                  </div>
                </div>

                <div className="row text-center mb-3">
                  <div className="col-6">
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="fw-bold">{property.area}</span>
                      <small className="text-muted ms-1">متر</small>
                    </div>
                    <small className="text-muted">مساحت</small>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="fw-bold">{property.rooms}</span>
                      <small className="text-muted ms-1">خواب</small>
                    </div>
                    <small className="text-muted">تعداد خواب</small>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex flex-wrap gap-1">
                    {property.features.map((feature, index) => (
                      <span key={index} className="badge bg-light text-dark">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="card-text text-muted small">
                  {property.description}
                </p>

                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-outline-primary btn-sm">
                    <BiShow className="me-1" />
                    مشاهده
                  </button>
                  
                  <div className="btn-group" role="group">
                    <button 
                      className="btn btn-outline-warning btn-sm"
                      onClick={() => handleEdit(property)}
                      title="ویرایش"
                    >
                      <BiEdit />
                    </button>
                    <button 
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleDelete(property.id)}
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

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {editingProperty ? 'ویرایش ملک' : 'ملک جدید'}
                </h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  handleSaveProperty({
                    title: formData.get('title') as string,
                    price: formData.get('price') as string,
                    area: parseInt(formData.get('area') as string),
                    rooms: parseInt(formData.get('rooms') as string),
                    type: formData.get('type') as 'apartment' | 'house' | 'land' | 'commercial',
                    status: formData.get('status') as 'sale' | 'rent',
                    location: formData.get('location') as string,
                    description: formData.get('description') as string,
                    features: (formData.get('features') as string).split(',').map(f => f.trim()).filter(f => f)
                  });
                }}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">عنوان ملک</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="title"
                          defaultValue={editingProperty?.title || ''}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">قیمت (تومان)</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="price"
                          defaultValue={editingProperty?.price || ''}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">مساحت (متر مربع)</label>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="area"
                          defaultValue={editingProperty?.area || ''}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">تعداد خواب</label>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="rooms"
                          defaultValue={editingProperty?.rooms || ''}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">نوع ملک</label>
                        <select 
                          className="form-select" 
                          name="type"
                          defaultValue={editingProperty?.type || 'apartment'}
                        >
                          <option value="apartment">آپارتمان</option>
                          <option value="house">خانه</option>
                          <option value="land">زمین</option>
                          <option value="commercial">تجاری</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">وضعیت</label>
                        <select 
                          className="form-select" 
                          name="status"
                          defaultValue={editingProperty?.status || 'sale'}
                        >
                          <option value="sale">فروش</option>
                          <option value="rent">اجاره</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">مکان</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="location"
                          defaultValue={editingProperty?.location || ''}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">توضیحات</label>
                    <textarea 
                      className="form-control" 
                      name="description"
                      rows={3}
                      defaultValue={editingProperty?.description || ''}
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">ویژگی‌ها (با کاما جدا کنید)</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="features"
                      placeholder="پارکینگ، انباری، آسانسور، بالکن"
                      defaultValue={editingProperty?.features.join(', ') || ''}
                    />
                  </div>

                  <div className="d-flex justify-content-end gap-2">
                    <button 
                      type="button" 
                      className="btn btn-secondary"
                      onClick={() => setShowModal(false)}
                    >
                      انصراف
                    </button>
                    <button type="submit" className="btn btn-primary">
                      {editingProperty ? 'ویرایش' : 'ایجاد'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}