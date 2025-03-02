import React from 'react';
import { Activity, Weight, Ruler, Heart, Moon, Settings as Lungs } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';
import { format } from 'date-fns';
import './Tracker.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const healthData = {
  weight: [75, 74.5, 74, 73.8, 73.5, 73.2, 73],
  height: 175,
  bmi: [24.5, 24.3, 24.2, 24.1, 24.0, 23.9, 23.8],
  spo2: [98, 97, 98, 99, 98, 97, 98],
  sleepHours: [7.5, 8, 6.5, 7, 8.5, 7.8, 8],
  dates: Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return format(date, 'MMM dd');
  }),
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#fff',
      },
    },
  },
  scales: {
    y: {
      grid: {
        color: '#ffffff20',
      },
      ticks: {
        color: '#fff',
      },
    },
    x: {
      grid: {
        color: '#ffffff20',
      },
      ticks: {
        color: '#fff',
      },
    },
  },
};

function App() {
  const calculateBMIStatus = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };

  const sleepQualityData = {
    labels: ['Deep Sleep', 'Light Sleep', 'REM', 'Awake'],
    datasets: [
      {
        data: [35, 40, 15, 10],
        backgroundColor: ['#6366f1', '#8b5cf6', '#d946ef', '#f43f5e'],
      },
    ],
  };

  const weightData = {
    labels: healthData.dates,
    datasets: [
      {
        label: 'Weight (kg)',
        data: healthData.weight,
        borderColor: '#6366f1',
        tension: 0.4,
      },
    ],
  };

  const spo2Data = {
    labels: healthData.dates,
    datasets: [
      {
        label: 'SpO2 (%)',
        data: healthData.spo2,
        borderColor: '#10b981',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <Activity className="text-indigo-500" />
        Health Trackers
      </h1>

      <div className="space-y-8">
        {/* Weight Tracker */}
        <div className="bg-gray-800 p-6 rounded-xl">
          <div className="flex items-center gap-2 mb-6">
            <Weight className="text-indigo-500" />
            <h2 className="text-2xl font-semibold">Weight Tracker</h2>
          </div>
          <div className="mb-4">
            <p className="text-3xl font-bold mb-2">{healthData.weight[6]} kg</p>
            <p className="text-green-500">
              {(healthData.weight[6] - healthData.weight[0]).toFixed(1)} kg change in last week
            </p>
          </div>
          <Line options={chartOptions} data={weightData} />
        </div>

        {/* Height & BMI */}
        

        {/* SpO2 Tracker */}
        <div className="bg-gray-800 p-6 rounded-xl">
          <div className="flex items-center gap-2 mb-6">
            <Lungs className="text-emerald-500" />
            <h2 className="text-2xl font-semibold">SpO2 Tracker</h2>
          </div>
          <div className="mb-4">
            <p className="text-3xl font-bold mb-2">{healthData.spo2[6]}%</p>
            <p className="text-emerald-400">Excellent oxygen saturation</p>
          </div>
          <Line options={chartOptions} data={spo2Data} />
        </div>

        {/* Sleep Tracker */}
        <div className="bg-gray-800 p-6 rounded-xl">
          <div className="flex items-center gap-2 mb-6">
            <Moon className="text-purple-500" />
            <h2 className="text-2xl font-semibold">Sleep Tracker</h2>
          </div>
          <div className="mb-6">
            <p className="text-3xl font-bold mb-2">
              {healthData.sleepHours[6]} hours
            </p>
            <p className="text-purple-400">Last night's sleep</p>
          </div>
          <div className="h-[300px] flex items-center justify-center">
            <Pie
              data={sleepQualityData}
              options={{
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      color: '#fff',
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;