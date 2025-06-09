import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, Tooltip as ReTooltip, Legend
} from 'recharts';

const radarData = [
  { sector: 'Airforce', India: 85, Pakistan: 60 },
  { sector: 'Navy', India: 75, Pakistan: 40 },
  { sector: 'Army', India: 95, Pakistan: 70 },
  { sector: 'Cybersecurity', India: 60, Pakistan: 35 },
  { sector: 'Space Defense', India: 80, Pakistan: 25 },
  { sector: 'Missile Systems', India: 70, Pakistan: 45 },
  { sector: 'Special Forces', India: 65, Pakistan: 50 }
];

const RadarDashboard = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>India vs Pakistan Defense Capability Radar</h2>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" width={600} height={400} data={radarData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="sector" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar name="India" dataKey="India" stroke="#60a5fa" fill="#60a5fa" fillOpacity={0.6} />
        <Radar name="Pakistan" dataKey="Pakistan" stroke="#f87171" fill="#f87171" fillOpacity={0.4} />
        <ReTooltip />
        <Legend />
      </RadarChart>
    </div>
  );
};

export default RadarDashboard;
