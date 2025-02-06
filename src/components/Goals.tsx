import React from 'react';
import { Select } from '../ui/Select';

interface GoalsProps {
  onNext: () => void;
  onPrev: () => void;
}

const Goals: React.FC<GoalsProps> = ({ onNext, onPrev }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Academic and Career Goals</h2>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Why do you want to pursue higher education?
            <span className="text-red-500 ml-1">*</span>
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Describe your motivation for pursuing higher education..."
            rows={4}
            required
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Short-term Goals (2-5 years)
            <span className="text-red-500 ml-1">*</span>
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Describe your short-term goals..."
            rows={3}
            required
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Long-term Goals (5-10 years)
            <span className="text-red-500 ml-1">*</span>
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Describe your long-term goals..."
            rows={3}
            required
          />
        </div>
        
        <Select
          label="Preferred Career Path"
          options={[
            'Research',
            'Industry',
            'Academia',
            'Startups',
            'Consulting',
            'Other'
          ]}
          required
        />
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Do you plan to pursue a PhD later?
          </label>
          <div className="flex space-x-4">
            {['Yes', 'No', 'Undecided'].map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="phd"
                  value={option.toLowerCase()}
                  className="form-radio text-indigo-600"
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

export default Goals;