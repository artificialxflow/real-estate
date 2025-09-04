'use client';

import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { BiUser, BiBuilding, BiSearch, BiCog } from 'react-icons/bi';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalCustomers: 0,
    totalProperties: 0,
    activeWorkflows: 0,
    newListings: 0
  });

  useEffect(() => {
    // Simulate loading stats
    setStats({
      totalCustomers: 156,
      totalProperties: 89,
      activeWorkflows: 12,
      newListings: 23
    });
  }, []);

  return (
    <Layout title="داشبورد مدیریتی">
      {/* Stats Cards */}
      <div className="row mb-4">
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="stats-card">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="text-muted mb-1">کل مشتریان</h6>
                <h3 className="mb-0 text-primary">{stats.totalCustomers}</h3>
              </div>
              <div className="bg-primary text-white rounded-circle p-3">
                <BiUser size={24} />
              </div>
            </div>
            <small className="text-success">
              <i className="bi bi-arrow-up"></i> +12% از ماه گذشته
            </small>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <div className="stats-card">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="text-muted mb-1">فایل‌های ملکی</h6>
                <h3 className="mb-0 text-success">{stats.totalProperties}</h3>
              </div>
              <div className="bg-success text-white rounded-circle p-3">
                <BiBuilding size={24} />
              </div>
            </div>
            <small className="text-success">
              <i className="bi bi-arrow-up"></i> +8% از ماه گذشته
            </small>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <div className="stats-card">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="text-muted mb-1">ورک‌فلوهای فعال</h6>
                <h3 className="mb-0 text-warning">{stats.activeWorkflows}</h3>
              </div>
              <div className="bg-warning text-white rounded-circle p-3">
                <BiCog size={24} />
              </div>
            </div>
            <small className="text-success">
              <i className="bi bi-arrow-up"></i> +3 از هفته گذشته
            </small>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-3">
          <div className="stats-card">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="text-muted mb-1">آگهی‌های جدید</h6>
                <h3 className="mb-0 text-info">{stats.newListings}</h3>
              </div>
              <div className="bg-info text-white rounded-circle p-3">
                <BiSearch size={24} />
              </div>
            </div>
            <small className="text-success">
              <i className="bi bi-arrow-up"></i> +15 از دیروز
            </small>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="row">
        <div className="col-lg-8 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">آخرین فعالیت‌ها</h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>نوع فعالیت</th>
                      <th>توضیحات</th>
                      <th>زمان</th>
                      <th>وضعیت</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ثبت مشتری جدید</td>
                      <td>احمد محمدی</td>
                      <td>2 ساعت پیش</td>
                      <td><span className="badge bg-success">تکمیل شده</span></td>
                    </tr>
                    <tr>
                      <td>اسکریپینگ آگهی‌ها</td>
                      <td>دیوار - 15 آگهی جدید</td>
                      <td>4 ساعت پیش</td>
                      <td><span className="badge bg-success">تکمیل شده</span></td>
                    </tr>
                    <tr>
                      <td>ثبت فایل ملکی</td>
                      <td>آپارتمان 3 خوابه - تهران</td>
                      <td>6 ساعت پیش</td>
                      <td><span className="badge bg-warning">در انتظار</span></td>
                    </tr>
                    <tr>
                      <td>ارسال پیام</td>
                      <td>5 مشتری</td>
                      <td>8 ساعت پیش</td>
                      <td><span className="badge bg-success">ارسال شده</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">ورک‌فلوهای فعال</h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span>اسکریپینگ دیوار</span>
                <span className="badge bg-success">فعال</span>
              </div>
              <div className="progress mb-3">
                <div className="progress-bar" style={{width: '75%'}}></div>
              </div>
              
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span>اسکریپینگ شیپور</span>
                <span className="badge bg-success">فعال</span>
              </div>
              <div className="progress mb-3">
                <div className="progress-bar bg-success" style={{width: '90%'}}></div>
              </div>
              
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span>ارسال پیام‌ها</span>
                <span className="badge bg-warning">در انتظار</span>
              </div>
              <div className="progress mb-3">
                <div className="progress-bar bg-warning" style={{width: '45%'}}></div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </Layout>
  );
}