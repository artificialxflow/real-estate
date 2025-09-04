'use client';

import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { 
  BiSearch, 
  BiFilter,
  BiDownload,
  BiRefresh,
  BiCalendar,
  BiBarChart,
  BiTrendingUp,
  BiUser,
  BiHome,
  BiDollar
} from 'react-icons/bi';

interface ReportData {
  id: number;
  title: string;
  type: 'daily' | 'weekly' | 'monthly' | 'custom';
  date: string;
  customers: number;
  properties: number;
  deals: number;
  revenue: number;
  status: 'completed' | 'pending' | 'error';
}

export default function Reports() {
  const [reports, setReports] = useState<ReportData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Simulate loading reports
    setReports([
      {
        id: 1,
        title: 'گزارش روزانه - 1403/01/15',
        type: 'daily',
        date: '1403/01/15',
        customers: 12,
        properties: 8,
        deals: 3,
        revenue: 7500000000,
        status: 'completed'
      },
      {
        id: 2,
        title: 'گزارش هفتگی - هفته اول فروردین',
        type: 'weekly',
        date: '1403/01/01 - 1403/01/07',
        customers: 45,
        properties: 32,
        deals: 12,
        revenue: 25000000000,
        status: 'completed'
      },
      {
        id: 3,
        title: 'گزارش ماهانه - فروردین 1403',
        type: 'monthly',
        date: 'فروردین 1403',
        customers: 180,
        properties: 125,
        deals: 45,
        revenue: 95000000000,
        status: 'completed'
      },
      {
        id: 4,
        title: 'گزارش سفارشی - آپارتمان‌های تهرانپارس',
        type: 'custom',
        date: '1403/01/10 - 1403/01/20',
        customers: 25,
        properties: 18,
        deals: 7,
        revenue: 12000000000,
        status: 'pending'
      }
    ]);
  }, []);

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || report.type === selectedType;
    const matchesDate = !selectedDate || report.date.includes(selectedDate);
    
    return matchesSearch && matchesType && matchesDate;
  });

  const handleDownload = (reportId: number) => {
    // Simulate download
    alert(`در حال دانلود گزارش ${reportId}...`);
  };

  const handleGenerateReport = () => {
    setShowModal(true);
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'daily':
        return <span className="badge bg-primary">روزانه</span>;
      case 'weekly':
        return <span className="badge bg-success">هفتگی</span>;
      case 'monthly':
        return <span className="badge bg-warning">ماهانه</span>;
      case 'custom':
        return <span className="badge bg-info">سفارشی</span>;
      default:
        return <span className="badge bg-secondary">نامشخص</span>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <span className="badge bg-success">تکمیل شده</span>;
      case 'pending':
        return <span className="badge bg-warning">در انتظار</span>;
      case 'error':
        return <span className="badge bg-danger">خطا</span>;
      default:
        return <span className="badge bg-secondary">نامشخص</span>;
    }
  };

  return (
    <Layout title="گزارش‌گیری">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary">
            <BiRefresh className="me-2" />
            بروزرسانی
          </button>
          <button 
            className="btn btn-primary"
            onClick={handleGenerateReport}
          >
            <BiBarChart className="me-2" />
            تولید گزارش جدید
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card stats-card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="stats-icon bg-primary">
                  <BiUser />
                </div>
                <div className="ms-3">
                  <h6 className="card-title">کل مشتریان</h6>
                  <h4 className="mb-0">1,234</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card stats-card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="stats-icon bg-success">
                  <BiHome />
                </div>
                <div className="ms-3">
                  <h6 className="card-title">کل املاک</h6>
                  <h4 className="mb-0">856</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card stats-card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="stats-icon bg-warning">
                  <BiTrendingUp />
                </div>
                <div className="ms-3">
                  <h6 className="card-title">قراردادهای بسته</h6>
                  <h4 className="mb-0">234</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card stats-card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="stats-icon bg-info">
                  <BiDollar />
                </div>
                <div className="ms-3">
                  <h6 className="card-title">درآمد کل</h6>
                  <h4 className="mb-0">125.5M</h4>
                </div>
              </div>
            </div>
          </div>
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
                  placeholder="جستجو در عنوان گزارش..."
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
                <option value="daily">روزانه</option>
                <option value="weekly">هفتگی</option>
                <option value="monthly">ماهانه</option>
                <option value="custom">سفارشی</option>
              </select>
            </div>
            <div className="col-md-3">
              <input 
                type="text"
                className="form-control"
                placeholder="جستجو در تاریخ..."
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
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

      {/* Reports Table */}
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>عنوان گزارش</th>
                  <th>نوع</th>
                  <th>تاریخ</th>
                  <th>مشتریان</th>
                  <th>املاک</th>
                  <th>قراردادها</th>
                  <th>درآمد</th>
                  <th>وضعیت</th>
                  <th>عملیات</th>
                </tr>
              </thead>
              <tbody>
                {filteredReports.map((report) => (
                  <tr key={report.id}>
                    <td>
                      <div className="fw-bold">{report.title}</div>
                    </td>
                    <td>{getTypeBadge(report.type)}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <BiCalendar className="me-2 text-muted" />
                        {report.date}
                      </div>
                    </td>
                    <td>
                      <span className="fw-bold text-primary">{report.customers}</span>
                    </td>
                    <td>
                      <span className="fw-bold text-success">{report.properties}</span>
                    </td>
                    <td>
                      <span className="fw-bold text-warning">{report.deals}</span>
                    </td>
                    <td>
                      <span className="fw-bold text-info">
                        {report.revenue.toLocaleString()} تومان
                      </span>
                    </td>
                    <td>{getStatusBadge(report.status)}</td>
                    <td>
                      <div className="btn-group" role="group">
                        <button 
                          className="btn btn-outline-primary btn-sm"
                          onClick={() => handleDownload(report.id)}
                          title="دانلود"
                        >
                          <BiDownload />
                        </button>
                        <button 
                          className="btn btn-outline-info btn-sm"
                          title="مشاهده"
                        >
                          <BiBarChart />
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

      {/* Generate Report Modal */}
      {showModal && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">تولید گزارش جدید</h5>
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
                  const newReport: ReportData = {
                    id: Date.now(),
                    title: `گزارش ${formData.get('type')} - ${formData.get('title')}`,
                    type: formData.get('type') as 'daily' | 'weekly' | 'monthly' | 'custom',
                    date: formData.get('date') as string,
                    customers: 0,
                    properties: 0,
                    deals: 0,
                    revenue: 0,
                    status: 'pending'
                  };
                  setReports([newReport, ...reports]);
                  setShowModal(false);
                }}>
                  <div className="mb-3">
                    <label className="form-label">عنوان گزارش</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="title"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">نوع گزارش</label>
                    <select 
                      className="form-select" 
                      name="type"
                      required
                    >
                      <option value="daily">روزانه</option>
                      <option value="weekly">هفتگی</option>
                      <option value="monthly">ماهانه</option>
                      <option value="custom">سفارشی</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">تاریخ</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="date"
                      placeholder="مثال: 1403/01/15"
                      required
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
                      تولید گزارش
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