// recharts-config.js
// Comprehensive Recharts configuration for NGO Dashboard

import React from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  AreaChart, Area, ComposedChart, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar
} from 'recharts';

// Sample Data Sets for NGO Dashboard
export const chartData = {
  // Monthly donation data
  donationTrends: [
    { month: 'Jan', amount: 45000, donors: 120, recurring: 25000 },
    { month: 'Feb', amount: 52000, donors: 135, recurring: 28000 },
    { month: 'Mar', amount: 48000, donors: 128, recurring: 26000 },
    { month: 'Apr', amount: 58000, donors: 142, recurring: 32000 },
    { month: 'May', amount: 62000, donors: 156, recurring: 35000 },
    { month: 'Jun', amount: 55000, donors: 148, recurring: 33000 },
    { month: 'Jul', amount: 67000, donors: 165, recurring: 38000 },
    { month: 'Aug', amount: 71000, donors: 178, recurring: 42000 },
    { month: 'Sep', amount: 64000, donors: 155, recurring: 39000 },
    { month: 'Oct', amount: 69000, donors: 172, recurring: 45000 },
    { month: 'Nov', amount: 75000, donors: 189, recurring: 48000 },
    { month: 'Dec', amount: 82000, donors: 201, recurring: 52000 }
  ],

  // Program distribution data
  programDistribution: [
    { name: 'Education', value: 35, amount: 112000, color: '#3B82F6' },
    { name: 'Healthcare', value: 28, amount: 89600, color: '#EF4444' },
    { name: 'Environment', value: 20, amount: 64000, color: '#10B981' },
    { name: 'Community Dev', value: 17, amount: 54400, color: '#F59E0B' }
  ],

  // Volunteer engagement data
  volunteerEngagement: [
    { month: 'Jan', active: 150, new: 25, hours: 1200 },
    { month: 'Feb', active: 170, new: 35, hours: 1350 },
    { month: 'Mar', active: 165, new: 20, hours: 1280 },
    { month: 'Apr', active: 190, new: 45, hours: 1520 },
    { month: 'May', active: 210, new: 40, hours: 1680 },
    { month: 'Jun', active: 205, new: 30, hours: 1640 }
  ],

  // Impact metrics over time
  impactMetrics: [
    { quarter: 'Q1 2023', beneficiaries: 2500, programs: 18, locations: 8 },
    { quarter: 'Q2 2023', beneficiaries: 3200, programs: 22, locations: 10 },
    { quarter: 'Q3 2023', beneficiaries: 4100, programs: 24, locations: 12 },
    { quarter: 'Q4 2023', beneficiaries: 4800, programs: 26, locations: 14 },
    { quarter: 'Q1 2024', beneficiaries: 5500, programs: 28, locations: 16 }
  ],

  // Funding sources
  fundingSources: [
    { source: 'Individual Donors', amount: 320000, percentage: 45 },
    { source: 'Corporate Grants', amount: 180000, percentage: 25 },
    { source: 'Government', amount: 142000, percentage: 20 },
    { source: 'Foundations', amount: 71000, percentage: 10 }
  ],

  // Program performance
  programPerformance: [
    { name: 'Rural Education', budget: 45000, spent: 33750, impact: 85, beneficiaries: 450 },
    { name: 'Mobile Health', budget: 32000, spent: 19200, impact: 78, beneficiaries: 320 },
    { name: 'Clean Water', budget: 28000, spent: 25200, impact: 92, beneficiaries: 280 },
    { name: 'Women Empowerment', budget: 24000, spent: 16800, impact: 88, beneficiaries: 150 },
    { name: 'Child Nutrition', budget: 35000, spent: 28000, impact: 95, beneficiaries: 600 }
  ]
};

// Custom Colors Palette
export const colors = {
  primary: '#3B82F6',
  secondary: '#10B981', 
  accent: '#F59E0B',
  danger: '#EF4444',
  purple: '#8B5CF6',
  pink: '#EC4899',
  indigo: '#6366F1',
  teal: '#14B8A6'
};

// Chart Components

// 1. Donation Trends Line Chart
export const DonationTrendsChart = ({ data = chartData.donationTrends, height = 300 }) => (
  <ResponsiveContainer width="100%" height={height}>
    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
      <XAxis 
        dataKey="month" 
        tick={{ fontSize: 12 }}
        axisLine={{ stroke: '#E5E7EB' }}
      />
      <YAxis 
        tick={{ fontSize: 12 }}
        axisLine={{ stroke: '#E5E7EB' }}
        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
      />
      <Tooltip 
        formatter={(value, name) => [
          name === 'amount' ? `$${value.toLocaleString()}` : value,
          name === 'amount' ? 'Total Amount' : 'Donors'
        ]}
        labelStyle={{ color: '#374151' }}
        contentStyle={{ 
          backgroundColor: '#FFFFFF', 
          border: '1px solid #E5E7EB',
          borderRadius: '8px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}
      />
      <Legend />
      <Line 
        type="monotone" 
        dataKey="amount" 
        stroke={colors.primary} 
        strokeWidth={3}
        dot={{ fill: colors.primary, strokeWidth: 2, r: 4 }}
        activeDot={{ r: 6, stroke: colors.primary, strokeWidth: 2 }}
      />
      <Line 
        type="monotone" 
        dataKey="donors" 
        stroke={colors.secondary} 
        strokeWidth={2}
        dot={{ fill: colors.secondary, strokeWidth: 2, r: 3 }}
      />
    </LineChart>
  </ResponsiveContainer>
);

// 2. Program Distribution Pie Chart
export const ProgramDistributionChart = ({ data = chartData.programDistribution, height = 300 }) => (
  <ResponsiveContainer width="100%" height={height}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={({ name, value }) => `${name}: ${value}%`}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip 
        formatter={(value, name) => [`${value}%`, 'Allocation']}
        contentStyle={{ 
          backgroundColor: '#FFFFFF', 
          border: '1px solid #E5E7EB',
          borderRadius: '8px' 
        }}
      />
    </PieChart>
  </ResponsiveContainer>
);

// 3. Volunteer Engagement Area Chart
export const VolunteerEngagementChart = ({ data = chartData.volunteerEngagement, height = 300 }) => (
  <ResponsiveContainer width="100%" height={height}>
    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
      <XAxis dataKey="month" tick={{ fontSize: 12 }} />
      <YAxis tick={{ fontSize: 12 }} />
      <Tooltip 
        contentStyle={{ 
          backgroundColor: '#FFFFFF', 
          border: '1px solid #E5E7EB',
          borderRadius: '8px' 
        }}
      />
      <Legend />
      <Area 
        type="monotone" 
        dataKey="active" 
        stackId="1" 
        stroke={colors.primary} 
        fill={colors.primary}
        fillOpacity={0.6}
      />
      <Area 
        type="monotone" 
        dataKey="new" 
        stackId="1" 
        stroke={colors.secondary} 
        fill={colors.secondary}
        fillOpacity={0.8}
      />
    </AreaChart>
  </ResponsiveContainer>
);

// 4. Impact Metrics Bar Chart
export const ImpactMetricsChart = ({ data = chartData.impactMetrics, height = 300 }) => (
  <ResponsiveContainer width="100%" height={height}>
    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
      <XAxis dataKey="quarter" tick={{ fontSize: 12 }} />
      <YAxis tick={{ fontSize: 12 }} />
      <Tooltip 
        contentStyle={{ 
          backgroundColor: '#FFFFFF', 
          border: '1px solid #E5E7EB',
          borderRadius: '8px' 
        }}
      />
      <Legend />
      <Bar dataKey="beneficiaries" fill={colors.primary} radius={[4, 4, 0, 0]} />
      <Bar dataKey="programs" fill={colors.secondary} radius={[4, 4, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
);

// 5. Funding Sources Horizontal Bar Chart
export const FundingSourcesChart = ({ data = chartData.fundingSources, height = 300 }) => (
  <ResponsiveContainer width="100%" height={height}>
    <BarChart 
      layout="horizontal"
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
      <XAxis 
        type="number" 
        tick={{ fontSize: 12 }}
        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
      />
      <YAxis dataKey="source" type="category" tick={{ fontSize: 12 }} width={100} />
      <Tooltip 
        formatter={(value) => [`$${value.toLocaleString()}`, 'Amount']}
        contentStyle={{ 
          backgroundColor: '#FFFFFF', 
          border: '1px solid #E5E7EB',
          borderRadius: '8px' 
        }}
      />
      <Bar dataKey="amount" fill={colors.accent} radius={[0, 4, 4, 0]} />
    </BarChart>
  </ResponsiveContainer>
);

// 6. Program Performance Composed Chart
export const ProgramPerformanceChart = ({ data = chartData.programPerformance, height = 300 }) => (
  <ResponsiveContainer width="100%" height={height}>
    <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
      <XAxis dataKey="name" tick={{ fontSize: 10 }} angle={-45} textAnchor="end" height={80} />
      <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
      <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
      <Tooltip 
        contentStyle={{ 
          backgroundColor: '#FFFFFF', 
          border: '1px solid #E5E7EB',
          borderRadius: '8px' 
        }}
      />
      <Legend />
      <Bar yAxisId="left" dataKey="budget" fill={colors.primary} name="Budget" opacity={0.7} />
      <Bar yAxisId="left" dataKey="spent" fill={colors.secondary} name="Spent" />
      <Line yAxisId="right" type="monotone" dataKey="impact" stroke={colors.danger} strokeWidth={2} name="Impact %" />
    </ComposedChart>
  </ResponsiveContainer>
);

// 7. Radial Progress Chart (for goals)
export const RadialProgressChart = ({ data, height = 250 }) => {
  const progressData = [
    { name: 'Progress', value: data?.progress || 75, fill: colors.primary },
    { name: 'Remaining', value: 100 - (data?.progress || 75), fill: '#E5E7EB' }
  ];

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RadialBarChart 
        cx="50%" 
        cy="50%" 
        innerRadius="60%" 
        outerRadius="90%" 
        barSize={20} 
        data={progressData}
        startAngle={90}
        endAngle={-270}
      >
        <RadialBar 
          minAngle={15} 
          label={{ position: 'insideStart', fill: '#fff' }} 
          background 
          clockWise 
          dataKey="value" 
        />
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-2xl font-bold">
          {data?.progress || 75}%
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

// Custom Chart Wrapper Component
export const ChartContainer = ({ title, children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
    {title && (
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    )}
    {children}
  </div>
);

// Export all chart configurations
export const chartConfigs = {
  donationTrends: {
    component: DonationTrendsChart,
    title: "Donation Trends",
    description: "Monthly donation amounts and donor count trends"
  },
  programDistribution: {
    component: ProgramDistributionChart,
    title: "Program Distribution",
    description: "Budget allocation across different programs"
  },
  volunteerEngagement: {
    component: VolunteerEngagementChart,
    title: "Volunteer Engagement",
    description: "Active volunteers and new registrations"
  },
  impactMetrics: {
    component: ImpactMetricsChart,
    title: "Impact Metrics",
    description: "Quarterly beneficiaries and programs growth"
  },
  fundingSources: {
    component: FundingSourcesChart,
    title: "Funding Sources",
    description: "Revenue breakdown by funding source"
  },
  programPerformance: {
    component: ProgramPerformanceChart,
    title: "Program Performance",
    description: "Budget vs spending with impact percentage"
  }
};

// Usage Example:
/*
import { DonationTrendsChart, ChartContainer, chartData } from './recharts-config';

function Dashboard() {
  return (
    <ChartContainer title="Monthly Donations">
      <DonationTrendsChart data={chartData.donationTrends} height={400} />
    </ChartContainer>
  );
}
*/