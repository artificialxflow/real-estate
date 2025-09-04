import Link from 'next/link';
import { BiHome, BiRightArrowAlt } from 'react-icons/bi';

export default function NotFound() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{
      background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 text-center">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                <h1 className="display-1 text-primary mb-4">404</h1>
                <h3 className="mb-3">صفحه مورد نظر یافت نشد</h3>
                <p className="text-muted mb-4">
                  متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است.
                </p>
                <Link href="/" className="btn btn-primary">
                  <BiHome className="me-2" />
                  بازگشت به داشبورد
                  <BiRightArrowAlt className="ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
