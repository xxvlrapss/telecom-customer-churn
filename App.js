import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { User, DollarSign, Clock, Wifi } from 'lucide-react';

// Hardcoded data sample based on the GitHub repository's dataset
const sampleData = [
  { tenure: 1, monthly_charges: 29.85, total_charges: 29.85, internet_service: 'DSL', contract: 'Month-to-month', churn: 'No' },
  { tenure: 34, monthly_charges: 56.95, total_charges: 1889.5, internet_service: 'DSL', contract: 'One year', churn: 'No' },
  { tenure: 2, monthly_charges: 53.85, total_charges: 108.15, internet_service: 'DSL', contract: 'Month-to-month', churn: 'Yes' },
  { tenure: 45, monthly_charges: 42.3, total_charges: 1840.75, internet_service: 'DSL', contract: 'One year', churn: 'No' },
  { tenure: 8, monthly_charges: 70.7, total_charges: 512.25, internet_service: 'Fiber optic', contract: 'Month-to-month', churn: 'Yes' },
];

const App = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    tenure: '',
    monthlyCharges: '',
    internetService: 'Fiber optic',
    contract: 'Month-to-month',
  });

  // State for prediction result
  const [prediction, setPrediction] = useState(null);

  // Data for the Pie Chart based on the sample data
  const churnCount = sampleData.filter(d => d.churn === 'Yes').length;
  const noChurnCount = sampleData.filter(d => d.churn === 'No').length;
  const pieChartData = [
    { name: 'Churn (Berhenti)', value: churnCount },
    { name: 'Non-Churn (Bertahan)', value: noChurnCount },
  ];
  const COLORS = ['#FF6B6B', '#5A67D8'];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Simple rule-based prediction logic
  const handlePredict = (e) => {
    e.preventDefault();
    const tenure = parseFloat(formData.tenure);
    const monthlyCharges = parseFloat(formData.monthlyCharges);

    let isChurn = false;

    // Simple rule: high monthly charges and short tenure are high-risk
    if (monthlyCharges > 70 && tenure < 12) {
      isChurn = true;
    }
    // Another rule: fiber optic and month-to-month contract are higher risk
    if (formData.internetService === 'Fiber optic' && formData.contract === 'Month-to-month') {
      isChurn = true;
    }
    // Combination rule
    if (monthlyCharges > 50 && tenure < 6 && formData.internetService === 'Fiber optic') {
        isChurn = true;
    }

    setPrediction(isChurn ? 'Yes' : 'No');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans antialiased text-gray-800">
      <div className="container mx-auto max-w-4xl bg-white rounded-xl shadow-lg p-8 space-y-8">
        {/* Header Section */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold text-blue-800">Analisis Churn Pelanggan Telekomunikasi</h1>
          <p className="text-lg text-gray-600">
            Dashboard interaktif ini dibuat berdasarkan studi kasus dari proyek analisis churn pelanggan.
          </p>
        </header>

        {/* Data Visualization Section */}
        <section className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Visualisasi Churn</h2>
          <div className="flex flex-col items-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
            <p className="mt-4 text-center text-sm text-gray-500">
              Persentase Churn dan Non-Churn berdasarkan data sampel.
            </p>
          </div>
        </section>

        {/* Prediction Form Section */}
        <section className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Prediksi Sederhana</h2>
          <p className="text-gray-600 mb-4">
            Masukkan data pelanggan untuk melihat prediksi churn berdasarkan aturan sederhana.
          </p>
          <form onSubmit={handlePredict} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tenure Input */}
            <div className="flex flex-col">
              <label htmlFor="tenure" className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                <Clock size={16} className="mr-2" />
                Lama Berlangganan (bulan)
              </label>
              <input
                type="number"
                id="tenure"
                name="tenure"
                value={formData.tenure}
                onChange={handleChange}
                min="0"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Monthly Charges Input */}
            <div className="flex flex-col">
              <label htmlFor="monthlyCharges" className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                <DollarSign size={16} className="mr-2" />
                Biaya Bulanan
              </label>
              <input
                type="number"
                id="monthlyCharges"
                name="monthlyCharges"
                value={formData.monthlyCharges}
                onChange={handleChange}
                step="0.01"
                min="0"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Internet Service Select */}
            <div className="flex flex-col">
              <label htmlFor="internetService" className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                <Wifi size={16} className="mr-2" />
                Layanan Internet
              </label>
              <select
                id="internetService"
                name="internetService"
                value={formData.internetService}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="Fiber optic">Fiber optic</option>
                <option value="DSL">DSL</option>
                <option value="No">Tidak Ada</option>
              </select>
            </div>
            
            {/* Contract Select */}
            <div className="flex flex-col">
              <label htmlFor="contract" className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                <User size={16} className="mr-2" />
                Kontrak
              </label>
              <select
                id="contract"
                name="contract"
                value={formData.contract}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="Month-to-month">Bulanan</option>
                <option value="One year">Satu Tahun</option>
                <option value="Two year">Dua Tahun</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-transform transform hover:scale-105"
              >
                Prediksi Churn
              </button>
            </div>
          </form>

          {/* Prediction Result Display */}
          {prediction !== null && (
            <div className="mt-8 text-center p-4 rounded-lg bg-gray-100 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-700">Hasil Prediksi:</h3>
              <p className="mt-2 text-3xl font-extrabold">
                {prediction === 'Yes' ? (
                  <span className="text-red-500">Berpotensi Churn</span>
                ) : (
                  <span className="text-green-600">Tidak Berpotensi Churn</span>
                )}
              </p>
            </div>
          )}
        </section>
        
        {/* Footer section for attribution */}
        <footer className="text-center text-xs text-gray-400 mt-8 pt-4 border-t border-gray-200">
          <p>Dibuat berdasarkan proyek analisis data dari repositori GitHub.</p>
        </footer>

      </div>
    </div>
  );
};

export default App;
