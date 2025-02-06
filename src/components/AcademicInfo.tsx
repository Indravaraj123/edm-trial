import React from 'react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';

interface AcademicInfoProps {
  onNext: () => void;
  onPrev: () => void;
}

const AcademicInfo: React.FC<AcademicInfoProps> = ({ onNext, onPrev }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Academic Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Highest Qualification"
          options={[
            "Bachelor's",
            "Master's",
            "Diploma",
            "Other"
          ]}
          required
        />
        
        <Select
          label="Field of Study (Major)"
          options={[
            'Computer Science',
            'Electronics',
            'Mechanical Engineering',
            'Civil Engineering',
            'Chemical Engineering',
            'Electrical Engineering',
            'Other'
          ]}
          required
        />
        
        <Input
          label="Graduation Year"
          type="number"
          min="2000"
          max="2024"
          placeholder="YYYY"
          required
        />
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            GPA/Percentage
            <span className="text-red-500 ml-1">*</span>
          </label>
          <div className="flex space-x-4">
            <input
              type="number"
              step="0.01"
              placeholder="Score"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              <option value="4.0">4.0 Scale</option>
              <option value="10.0">10.0 Scale</option>
              <option value="100">100%</option>
            </select>
          </div>
        </div>
        
        <div className="col-span-2 space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Research Experience
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            onChange={(e) => {
              const textarea = document.getElementById('research-details');
              if (textarea) {
                textarea.style.display = e.target.value === 'yes' ? 'block' : 'none';
              }
            }}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
          <textarea
            id="research-details"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hidden"
            placeholder="Please describe your research experience..."
            rows={4}
          />
        </div>
        
        <div className="col-span-2 space-y-4">
          <h3 className="text-lg font-medium text-gray-800">Test Scores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="GRE Score"
              type="number"
              min="260"
              max="340"
              placeholder="Total Score (260-340)"
              required
            />
            <Input
              label="TOEFL/IELTS Score"
              type="number"
              placeholder="Enter score"
              required
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        <button
          onClick={onPrev}
          className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default AcademicInfo;