'use client';

import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { 
  BiSearch, 
  BiFilter,
  BiPlay,
  BiStop,
  BiEdit,
  BiTrash,
  BiPlus,
  BiRefresh,
  BiTime,
  BiInfoCircle
} from 'react-icons/bi';

interface Workflow {
  id: number;
  name: string;
  description: string;
  detailedDescription?: string;
  status: 'active' | 'inactive' | 'error';
  lastRun: string;
  nextRun: string;
  successCount: number;
  errorCount: number;
  type: 'scraping' | 'notification' | 'matching' | 'report';
  category?: string;
  frequency?: string;
  dataSource?: string;
  output?: string;
}

export default function Workflows() {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingWorkflow, setEditingWorkflow] = useState<Workflow | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(null);

  useEffect(() => {
    // Simulate loading workflows
    setWorkflows([
      {
        id: 1,
        name: 'اسکریپ آگهی‌های دیوار',
        description: 'جمع‌آوری خودکار آگهی‌های جدید از سایت دیوار',
        detailedDescription: 'این ورک‌فلو هر ساعت به صورت خودکار به سایت دیوار متصل شده و آگهی‌های جدید املاک را دریافت می‌کند. اطلاعات شامل قیمت، موقعیت، متراژ، نوع ملک و تصاویر است. سپس این داده‌ها در پایگاه داده ذخیره شده و برای تحلیل و مچ کردن با نیاز مشتریان استفاده می‌شود.',
        status: 'active',
        lastRun: '2 ساعت پیش',
        nextRun: 'در 4 ساعت',
        successCount: 45,
        errorCount: 2,
        type: 'scraping',
        category: 'جمع‌آوری داده',
        frequency: 'هر ساعت',
        dataSource: 'divar.ir',
        output: 'آگهی‌های جدید املاک'
      },
      {
        id: 2,
        name: 'اسکریپ آگهی‌های شیپور',
        description: 'جمع‌آوری خودکار آگهی‌های جدید از سایت شیپور',
        detailedDescription: 'این ورک‌فلو مشابه دیوار عمل می‌کند اما از سایت شیپور داده دریافت می‌کند. شیپور یکی از بزرگترین پلتفرم‌های خرید و فروش املاک در ایران است و این ورک‌فلو اطمینان می‌دهد که هیچ آگهی مهمی از دست نرود.',
        status: 'active',
        lastRun: '1 ساعت پیش',
        nextRun: 'در 5 ساعت',
        successCount: 32,
        errorCount: 1,
        type: 'scraping',
        category: 'جمع‌آوری داده',
        frequency: 'هر ساعت',
        dataSource: 'sheypoor.com',
        output: 'آگهی‌های جدید املاک'
      },
      {
        id: 3,
        name: 'مچ کردن ملک با مشتری',
        description: 'بررسی نیازهای مشتریان و ارسال پیشنهادات',
        detailedDescription: 'این ورک‌فلو هوشمند از الگوریتم‌های یادگیری ماشین استفاده می‌کند تا آگهی‌های املاک را با نیازهای ثبت شده مشتریان تطبیق دهد. فاکتورهای مهم شامل قیمت، موقعیت جغرافیایی، متراژ، نوع ملک، امکانات و اولویت‌های مشتری است.',
        status: 'inactive',
        lastRun: '1 روز پیش',
        nextRun: 'غیرفعال',
        successCount: 12,
        errorCount: 0,
        type: 'matching',
        category: 'هوش مصنوعی',
        frequency: 'روزانه',
        dataSource: 'پایگاه داده داخلی',
        output: 'لیست ملک‌های مناسب برای هر مشتری'
      },
      {
        id: 4,
        name: 'ارسال پیام‌های خودکار',
        description: 'ارسال SMS و واتساپ به مشتریان',
        detailedDescription: 'این ورک‌فلو پس از مچ کردن ملک با مشتری، به صورت خودکار پیام‌های شخصی‌سازی شده به مشتریان ارسال می‌کند. پیام‌ها شامل جزئیات ملک، تصاویر، قیمت و اطلاعات تماس است. از طریق واتساپ، تلگرام و پیامک ارسال می‌شود.',
        status: 'error',
        lastRun: '3 ساعت پیش',
        nextRun: 'در 1 ساعت',
        successCount: 8,
        errorCount: 5,
        type: 'notification',
        category: 'ارتباطات',
        frequency: 'فوری',
        dataSource: 'سیستم مچ کردن',
        output: 'پیام‌های ارسالی به مشتریان'
      },
      {
        id: 5,
        name: 'گزارش روزانه',
        description: 'تهیه و ارسال گزارش روزانه به مدیر',
        detailedDescription: 'این ورک‌فلو روزانه داده‌های جمع‌آوری شده را تحلیل کرده و گزارش‌های جامعی از وضعیت بازار املاک ارائه می‌دهد. شامل روند قیمت‌ها، مناطق پرطرفدار، پیش‌بینی آینده و توصیه‌های سرمایه‌گذاری است.',
        status: 'active',
        lastRun: 'امروز 8:00',
        nextRun: 'فردا 8:00',
        successCount: 30,
        errorCount: 0,
        type: 'report',
        category: 'تحلیل داده',
        frequency: 'روزانه',
        dataSource: 'داده‌های جمع‌آوری شده',
        output: 'گزارش‌های تحلیلی بازار'
      }
    ]);
  }, []);

  const filteredWorkflows = workflows.filter(workflow => {
    const matchesSearch = workflow.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workflow.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !selectedStatus || workflow.status === selectedStatus;
    const matchesType = !selectedType || workflow.type === selectedType;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const handleToggleStatus = (id: number) => {
    setWorkflows(workflows.map(workflow => 
      workflow.id === id 
        ? { 
            ...workflow, 
            status: workflow.status === 'active' ? 'inactive' : 'active' 
          }
        : workflow
    ));
  };

  const handleEdit = (workflow: Workflow) => {
    setEditingWorkflow(workflow);
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('آیا مطمئن هستید که می‌خواهید این ورک‌فلو را حذف کنید؟')) {
      setWorkflows(workflows.filter(workflow => workflow.id !== id));
    }
  };

  const handleShowDetails = (workflow: Workflow) => {
    setSelectedWorkflow(workflow);
    setShowDetailsModal(true);
  };

  const closeDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedWorkflow(null);
  };

  const handleSaveWorkflow = (workflowData: Partial<Workflow>) => {
    if (editingWorkflow) {
      setWorkflows(workflows.map(workflow => 
        workflow.id === editingWorkflow.id 
          ? { ...workflow, ...workflowData }
          : workflow
      ));
    } else {
      const newWorkflow: Workflow = {
        id: Date.now(),
        name: workflowData.name || '',
        description: workflowData.description || '',
        status: 'inactive',
        lastRun: 'هرگز',
        nextRun: 'غیرفعال',
        successCount: 0,
        errorCount: 0,
        type: workflowData.type || 'scraping',
        ...workflowData
      };
      setWorkflows([...workflows, newWorkflow]);
    }
    setShowModal(false);
    setEditingWorkflow(null);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <span className="badge bg-success">فعال</span>;
      case 'inactive':
        return <span className="badge bg-secondary">غیرفعال</span>;
      case 'error':
        return <span className="badge bg-danger">خطا</span>;
      default:
        return <span className="badge bg-secondary">نامشخص</span>;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'scraping':
        return <span className="badge bg-primary">اسکریپینگ</span>;
      case 'notification':
        return <span className="badge bg-info">اطلاع‌رسانی</span>;
      case 'matching':
        return <span className="badge bg-warning">مچ کردن</span>;
      case 'report':
        return <span className="badge bg-success">گزارش</span>;
      default:
        return <span className="badge bg-secondary">نامشخص</span>;
    }
  };

  return (
    <Layout title="مدیریت ورک‌فلوها">
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
            ورک‌فلو جدید
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
                  placeholder="جستجو در نام یا توضیحات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-3">
              <select 
                className="form-select"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="">همه وضعیت‌ها</option>
                <option value="active">فعال</option>
                <option value="inactive">غیرفعال</option>
                <option value="error">خطا</option>
              </select>
            </div>
            <div className="col-md-3">
              <select 
                className="form-select"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="">همه انواع</option>
                <option value="scraping">اسکریپینگ</option>
                <option value="notification">اطلاع‌رسانی</option>
                <option value="matching">مچ کردن</option>
                <option value="report">گزارش</option>
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

      {/* Workflows Table */}
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>نام ورک‌فلو</th>
                  <th>نوع</th>
                  <th>وضعیت</th>
                  <th>آخرین اجرا</th>
                  <th>اجرای بعدی</th>
                  <th>آمار</th>
                  <th>عملیات</th>
                </tr>
              </thead>
              <tbody>
                {filteredWorkflows.map((workflow) => (
                  <tr key={workflow.id}>
                    <td>
                      <div>
                        <div className="fw-bold">{workflow.name}</div>
                        <small className="text-muted">{workflow.description}</small>
                      </div>
                    </td>
                    <td>{getTypeBadge(workflow.type)}</td>
                    <td>{getStatusBadge(workflow.status)}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <BiTime className="me-2 text-muted" />
                        {workflow.lastRun}
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <BiTime className="me-2 text-muted" />
                        {workflow.nextRun}
                      </div>
                    </td>
                    <td>
                      <div className="d-flex gap-3">
                        <div className="text-center">
                          <div className="fw-bold text-success">{workflow.successCount}</div>
                          <small className="text-muted">موفق</small>
                        </div>
                        <div className="text-center">
                          <div className="fw-bold text-danger">{workflow.errorCount}</div>
                          <small className="text-muted">خطا</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="btn-group" role="group">
                        <button 
                          className={`btn btn-sm ${workflow.status === 'active' ? 'btn-outline-danger' : 'btn-outline-success'}`}
                          onClick={() => handleToggleStatus(workflow.id)}
                          title={workflow.status === 'active' ? 'توقف' : 'شروع'}
                        >
                          {workflow.status === 'active' ? <BiStop /> : <BiPlay />}
                        </button>
                        <button 
                          className="btn btn-outline-primary btn-sm"
                          onClick={() => handleEdit(workflow)}
                          title="ویرایش"
                        >
                          <BiEdit />
                        </button>
                        <button 
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => handleDelete(workflow.id)}
                          title="حذف"
                        >
                          <BiTrash />
                        </button>
                        <button 
                          className="btn btn-outline-info btn-sm"
                          onClick={() => handleShowDetails(workflow)}
                          title="مشاهده توضیحات کامل"
                        >
                          <BiInfoCircle />
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
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {editingWorkflow ? 'ویرایش ورک‌فلو' : 'ورک‌فلو جدید'}
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
                  handleSaveWorkflow({
                    name: formData.get('name') as string,
                    description: formData.get('description') as string,
                    type: formData.get('type') as 'scraping' | 'notification' | 'matching' | 'report'
                  });
                }}>
                  <div className="mb-3">
                    <label className="form-label">نام ورک‌فلو</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="name"
                      defaultValue={editingWorkflow?.name || ''}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">توضیحات</label>
                    <textarea 
                      className="form-control" 
                      name="description"
                      rows={3}
                      defaultValue={editingWorkflow?.description || ''}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">نوع ورک‌فلو</label>
                    <select 
                      className="form-select" 
                      name="type"
                      defaultValue={editingWorkflow?.type || 'scraping'}
                    >
                      <option value="scraping">اسکریپینگ</option>
                      <option value="notification">اطلاع‌رسانی</option>
                      <option value="matching">مچ کردن</option>
                      <option value="report">گزارش</option>
                    </select>
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
                      {editingWorkflow ? 'ویرایش' : 'ایجاد'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Workflow Details Modal */}
      {showDetailsModal && selectedWorkflow && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title d-flex align-items-center gap-2">
                  <span className={`badge ${selectedWorkflow.status === 'active' ? 'bg-success' : selectedWorkflow.status === 'inactive' ? 'bg-secondary' : 'bg-danger'}`}>
                    {selectedWorkflow.status === 'active' ? 'فعال' : selectedWorkflow.status === 'inactive' ? 'غیرفعال' : 'خطا'}
                  </span>
                  {selectedWorkflow.name}
                </h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={closeDetailsModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-4">
                  <h6 className="fw-bold">توضیحات تفصیلی</h6>
                  <p className="text-muted">{selectedWorkflow.detailedDescription || selectedWorkflow.description}</p>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="card bg-light">
                      <div className="card-body">
                        <h6 className="card-title fw-bold">اطلاعات کلی</h6>
                        <div className="row g-2">
                          <div className="col-6">
                            <small className="text-muted">دسته‌بندی:</small>
                            <div className="fw-bold">{selectedWorkflow.category || 'نامشخص'}</div>
                          </div>
                          <div className="col-6">
                            <small className="text-muted">فرکانس اجرا:</small>
                            <div className="fw-bold">{selectedWorkflow.frequency || 'نامشخص'}</div>
                          </div>
                          <div className="col-6">
                            <small className="text-muted">منبع داده:</small>
                            <div className="fw-bold">{selectedWorkflow.dataSource || 'نامشخص'}</div>
                          </div>
                          <div className="col-6">
                            <small className="text-muted">خروجی:</small>
                            <div className="fw-bold">{selectedWorkflow.output || 'نامشخص'}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card bg-light">
                      <div className="card-body">
                        <h6 className="card-title fw-bold">آمار عملکرد</h6>
                        <div className="row g-2">
                          <div className="col-6">
                            <small className="text-muted">تعداد اجرا:</small>
                            <div className="fw-bold">{selectedWorkflow.successCount + selectedWorkflow.errorCount}</div>
                          </div>
                          <div className="col-6">
                            <small className="text-muted">نرخ موفقیت:</small>
                            <div className="fw-bold text-success">
                              {Math.round((selectedWorkflow.successCount / (selectedWorkflow.successCount + selectedWorkflow.errorCount)) * 100)}%
                            </div>
                          </div>
                          <div className="col-6">
                            <small className="text-muted">موفق:</small>
                            <div className="fw-bold text-success">{selectedWorkflow.successCount}</div>
                          </div>
                          <div className="col-6">
                            <small className="text-muted">خطا:</small>
                            <div className="fw-bold text-danger">{selectedWorkflow.errorCount}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="card bg-info bg-opacity-10">
                    <div className="card-body">
                      <h6 className="card-title fw-bold">وضعیت فعلی</h6>
                      <div className="d-flex align-items-center gap-2">
                        {getStatusBadge(selectedWorkflow.status)}
                        <span className="text-muted">
                          {selectedWorkflow.status === 'active' && 'ورک‌فلو در حال اجرا است'}
                          {selectedWorkflow.status === 'inactive' && 'ورک‌فلو متوقف شده است'}
                          {selectedWorkflow.status === 'error' && 'ورک‌فلو با خطا مواجه شده است'}
                        </span>
                      </div>
                      <div className="mt-2">
                        <small className="text-muted">آخرین اجرا: {selectedWorkflow.lastRun}</small>
                        {selectedWorkflow.nextRun && selectedWorkflow.nextRun !== 'غیرفعال' && (
                          <div>
                            <small className="text-muted">اجرای بعدی: {selectedWorkflow.nextRun}</small>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={closeDetailsModal}
                >
                  بستن
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => {
                    closeDetailsModal();
                    handleEdit(selectedWorkflow);
                  }}
                >
                  ویرایش ورک‌فلو
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}