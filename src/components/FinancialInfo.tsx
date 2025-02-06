import React from 'react';
import { Input } from '../ui/Input';

interface FinancialInfoProps {
  onNext: () => void;
  onPrev: () => void;
}

const FinancialInfo: React.FC<FinancialInfoProps> = ({ onNext, onPrev }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Financial Information</h2>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Total Budget (USD)
            <span className="text-red-500 ml-1">*</span>
          </label>
          <div className="flex items-center space-x-4">
            <Input
              type="number"
              placeholder="Enter amount"
              required
            />
            <span className="text-sm text-gray-500">per year</span>
          </div>
          <p className="text-sm text-gray-500">
            Include tuition, living expenses, travel, and other costs
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="scholarship"
              className="form-checkbox text-indigo-600"
            />
            <label htmlFor="scholarship" className="text-sm font-medium text-gray-700">
              Interested in scholarships
            </label>
          </div>
          
          <div className="pl-6">
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              <option value="">Select scholarship type</option>
              <option value="need-based">Need-based</option>
              <option value="merit-based">Merit-based</option>
              <option value="government">Government funding</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="part-time"
              className="form-checkbox text-indigo-600"
            />
            <label htmlFor="part-time" className="text-sm font-medium text-gray-700">
              Plan to work part-time during studies
            </label>
          </div>
          
          <div className="pl-6">
            <Input
              type="number"
              label="Estimated work hours per week"
              min="0"
              max="40"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Funding Sources
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Family Support',
              'Loan',
              'Personal Savings',
              'Scholarships/Fellowships'
            ].map((source) => (
              <label key={source} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-indigo-600"
                />
                <span className="text-gray-700">{source}</span>
              </label>
            ))}
          </div>
          <Input
            label="Other funding sources"
            type="text"
            placeholder="Specify other funding sources"
          />
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

export default FinancialInfo;