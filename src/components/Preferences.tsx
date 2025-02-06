import React from 'react';
import { Select } from '../ui/Select';

interface PreferencesProps {
  onNext: () => void;
  onPrev: () => void;
}

const Preferences: React.FC<PreferencesProps> = ({ onNext, onPrev }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Preferences</h2>
      
      <div className="space-y-6">
        <Select
          label="Preferred Countries for Study"
          options={[
            'USA',
            'UK',
            'Canada',
            'Australia',
            'Germany',
            'Netherlands',
            'Singapore',
            'Other'
          ]}
          multiple
          required
        />
        
        <Select
          label="Preferred Fields of Study"
          options={[
            'Artificial Intelligence',
            'Data Science',
            'Computer Networks',
            'Software Engineering',
            'Robotics',
            'Cybersecurity',
            'Other'
          ]}
          multiple
          required
        />
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Preferred Universities (if any)
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="List your preferred universities..."
            rows={3}
          />
        </div>
        
        <Select
          label="Intended Start Semester"
          options={[
            'Fall 2024',
            'Spring 2025',
            'Fall 2025',
            'Spring 2026'
          ]}
          required
        />
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Learning Mode Preferences
          </label>
          <div className="flex space-x-4">
            {['On-Campus', 'Online', 'Hybrid'].map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="learningMode"
                  value={option}
                  className="form-radio text-indigo-600"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Additional Factors
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Research-oriented universities',
              'Strong alumni network',
              'Proximity to home country',
              'High return on investment (ROI)'
            ].map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-indigo-600"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
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

export default Preferences;