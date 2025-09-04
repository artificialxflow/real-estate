'use client';

import { useState } from 'react';
import { BiUser, BiLock, BiShow, BiHide } from 'react-icons/bi';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{
      background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <h3 className="text-primary mb-2">سیستم مدیریت بنگاه ملکی</h3>
                  <p className="text-muted">لطفاً وارد حساب کاربری خود شوید</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">ایمیل یا شماره موبایل</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <BiUser />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="ایمیل یا شماره موبایل خود را وارد کنید"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">رمز عبور</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <BiLock />
                      </span>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="form-control"
                        id="password"
                        placeholder="رمز عبور خود را وارد کنید"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        required
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <BiHide /> : <BiShow />}
                      </button>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="remember" />
                      <label className="form-check-label" htmlFor="remember">
                        مرا به خاطر بسپار
                      </label>
                    </div>
                    <a href="#" className="text-decoration-none">فراموشی رمز عبور؟</a>
                  </div>

                  <button type="submit" className="btn btn-primary w-100 mb-3">
                    ورود
                  </button>

                  <div className="text-center">
                    <span className="text-muted">حساب کاربری ندارید؟ </span>
                    <a href="#" className="text-decoration-none">ثبت‌نام کنید</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
