import StatsCard from '@/components/Dashboard/StatsCard';
import RecentActivity from '@/components/Dashboard/RecentActivity';
import QuickActions from '@/components/Dashboard/QuickActions';
import { SalesTrendChart, PropertyTypesChart, MonthlyRevenueChart } from '@/components/Dashboard/Charts';
import { Users, Building, FileText, TrendingUp } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">داشبورد</h1>
          <p className="text-gray-600 mt-1">خلاصه‌ای از عملکرد سیستم</p>
        </div>
        <div className="text-sm text-gray-500">
          آخرین به‌روزرسانی: {new Date().toLocaleDateString('fa-IR')}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="کل مشتریان"
          value="۱,۲۳۴"
          change="+۱۲%"
          changeType="increase"
          icon={Users}
          color="bg-blue-500"
        />
        <StatsCard
          title="فایل‌های ملکی"
          value="۸۹۶"
          change="+۸%"
          changeType="increase"
          icon={Building}
          color="bg-green-500"
        />
        <StatsCard
          title="آگهی‌های اسکریپ شده"
          value="۲,۵۶۷"
          change="+۲۵%"
          changeType="increase"
          icon={FileText}
          color="bg-purple-500"
        />
        <StatsCard
          title="معاملات این ماه"
          value="۴۵"
          change="+۱۵%"
          changeType="increase"
          icon={TrendingUp}
          color="bg-orange-500"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <SalesTrendChart />
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <PropertyTypesChart />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <MonthlyRevenueChart />
          </div>
        </div>
        <div className="space-y-6">
          <QuickActions />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}