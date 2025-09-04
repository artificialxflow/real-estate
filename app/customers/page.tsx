'use client';

import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { 
  BiSearch, 
  BiFilter,
  BiPlus,
  BiEdit,
  BiTrash,
  BiPhone,
  BiEnvelope,
  BiRefresh,
  BiUser,
  BiCalendar
} from 'react-icons/bi';

interface Customer {
  id: number;
  name: string;
  phone: string;
  email: string;
  requirements: string;
  budget: string;
  location: string;
  status: 'active' | 'inactive' | 'potential';
  createdAt: string;
  lastContact: string;
  notes: string;
}

export default function Customers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);

  useEffect(() => {
    // Simulate loading customers
    setCustomers([
      {
        id: 1,
        name: 'احمد محمدی',
        phone: '09123456789',
        email: 'ahmad@example.com',
        requirements: 'آپارتمان 3 خوابه در تهرانپارس',
        budget: '2,500,000,000',
        location: 'تهران، تهرانپارس',
        status: 'active',
        createdAt: '2 روز پیش',
        lastContact: 'امروز',
        notes: 'علاقه‌مند به آپارتمان با پارکینگ'
      },
      {
        id: 2,
        name: 'فاطمه احمدی',
        phone: '09987654321',
        email: 'fatemeh@example.com',
        requirements: 'خانه ویلایی 4 خوابه در شمال',
        budget: '8,000,000,000',
        location: 'تهران، شمال',
        status: 'potential',
        createdAt: '1 هفته پیش',
        lastContact: '3 روز پیش',
        notes: 'در حال بررسی گزینه‌های مختلف'
      },
      {
        id: 3,
        name: 'علی رضایی',
        phone: '09111111111',
        email: 'ali@example.com',
        requirements: 'زمین 500 متری در کرج',
        budget: '1,200,000,000',
        location: 'کرج، مرکز',
        status: 'inactive',
        createdAt: '2 هفته پیش',
        lastContact: '1 هفته پیش',
        notes: 'نیاز به پیگیری بیشتر'
      }
    ]);
  }, []);

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.phone.includes(searchTerm) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !selectedStatus || customer.status === selectedStatus;
    
    return matchesSearch && matchesStatus;
  });

  const handleEdit = (customer: Customer) => {
    setEditingCustomer(customer);
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('آیا مطمئن هستید که می‌خواهید این مشتری را حذف کنید؟')) {
      setCustomers(customers.filter(customer => customer.id !== id));
    }
  };

  const handleSaveCustomer = (customerData: Partial<Customer>) => {
    if (editingCustomer) {
      setCustomers(customers.map(customer => 
        customer.id === editingCustomer.id 
          ? { ...customer, ...customerData }
          : customer
      ));
    } else {
      const newCustomer: Customer = {
        id: Date.now(),
        name: customerData.name || '',
        phone: customerData.phone || '',
        email: customerData.email || '',
        requirements: customerData.requirements || '',
        budget: customerData.budget || '',
        location: customerData.location || '',
        status: customerData.status || 'potential',
        createdAt: 'امروز',
        lastContact: 'امروز',
        notes: customerData.notes || '',
        ...customerData
      };
      setCustomers([...customers, newCustomer]);
    }
    setShowModal(false);
    setEditingCustomer(null);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <span className="badge bg-success">فعال</span>;
      case 'inactive':
        return <span className="badge bg-secondary">غیرفعال</span>;
      case 'potential':
        return <span className="badge bg-warning">پتانسیل</span>;
      default:
        return <span className="badge bg-secondary">نامشخص</span>;
    }
  };

  return (
    <Layout title="مدیریت مشتریان">
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
            مشتری جدید
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text">
                  <BiSearch />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="جستجو در نام، تلفن یا ایمیل..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-4">
              <select 
                className="form-select"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="">همه وضعیت‌ها</option>
                <option value="active">فعال</option>
                <option value="inactive">غیرفعال</option>
                <option value="potential">پتانسیل</option>
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

      {/* Customers Table */}
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>نام مشتری</th>
                  <th>تماس</th>
                  <th>نیازمندی</th>
                  <th>بودجه</th>
                  <th>وضعیت</th>
                  <th>آخرین تماس</th>
                  <th>عملیات</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar bg-primary text-white rounded-circle me-3 d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                          <BiUser />
                        </div>
                        <div>
                          <div className="fw-bold">{customer.name}</div>
                          <small className="text-muted">{customer.location}</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="d-flex align-items-center mb-1">
                          <BiPhone className="me-2 text-primary" />
                          <span>{customer.phone}</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <BiEnvelope className="me-2 text-info" />
                          <span className="text-muted small">{customer.email}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="text-truncate" style={{maxWidth: '200px'}} title={customer.requirements}>
                        {customer.requirements}
                      </div>
                    </td>
                    <td>
                      <span className="fw-bold text-success">
                        {customer.budget.toLocaleString()} تومان
                      </span>
                    </td>
                    <td>{getStatusBadge(customer.status)}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <BiCalendar className="me-2 text-muted" />
                        {customer.lastContact}
                      </div>
                    </td>
                    <td>
                      <div className="btn-group" role="group">
                        <button 
                          className="btn btn-outline-primary btn-sm"
                          onClick={() => handleEdit(customer)}
                          title="ویرایش"
                        >
                          <BiEdit />
                        </button>
                        <button 
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => handleDelete(customer.id)}
                          title="حذف"
                        >
                          <BiTrash />
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

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {editingCustomer ? 'ویرایش مشتری' : 'مشتری جدید'}
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
                  handleSaveCustomer({
                    name: formData.get('name') as string,
                    phone: formData.get('phone') as string,
                    email: formData.get('email') as string,
                    requirements: formData.get('requirements') as string,
                    budget: formData.get('budget') as string,
                    location: formData.get('location') as string,
                    status: formData.get('status') as 'active' | 'inactive' | 'potential',
                    notes: formData.get('notes') as string
                  });
                }}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">نام و نام خانوادگی</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="name"
                          defaultValue={editingCustomer?.name || ''}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">شماره تلفن</label>
                        <input 
                          type="tel" 
                          className="form-control" 
                          name="phone"
                          defaultValue={editingCustomer?.phone || ''}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">ایمیل</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          name="email"
                          defaultValue={editingCustomer?.email || ''}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">بودجه (تومان)</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="budget"
                          defaultValue={editingCustomer?.budget || ''}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">مکان مورد نظر</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="location"
                          defaultValue={editingCustomer?.location || ''}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">وضعیت</label>
                        <select 
                          className="form-select" 
                          name="status"
                          defaultValue={editingCustomer?.status || 'potential'}
                        >
                          <option value="active">فعال</option>
                          <option value="inactive">غیرفعال</option>
                          <option value="potential">پتانسیل</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">نیازمندی‌ها</label>
                    <textarea 
                      className="form-control" 
                      name="requirements"
                      rows={3}
                      defaultValue={editingCustomer?.requirements || ''}
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">یادداشت‌ها</label>
                    <textarea 
                      className="form-control" 
                      name="notes"
                      rows={2}
                      defaultValue={editingCustomer?.notes || ''}
                    ></textarea>
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
                      {editingCustomer ? 'ویرایش' : 'ایجاد'}
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