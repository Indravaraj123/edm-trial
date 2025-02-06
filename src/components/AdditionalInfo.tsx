import React from 'react';
import { Input } from '../ui/Input';

interface AdditionalInfoProps {
  onNext: () => void;
  onPrev: () => void;
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ onNext, onPrev }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Additional Information</h2>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-800">Family Details (Optional)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Parent/Guardian Occupation"
              type="text"
              placeholder="Enter occupation"
            />
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mt-7"
            >
              <option value="">Select Income Range</option>
              <option value="0-50000">$0 - $50,000</option>
              <option value="50001-100000">$50,001 - $100,000</option>
              <option value="100001-150000">$100,001 - $150,000</option>
              <option value="150001+">$150,001+</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Special Requirements
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter any special requirements (e.g., disability accommodations, visa support)..."
            rows={3}
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Specific University Queries
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter any specific questions about universities..."
            rows={3}
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

export default AdditionalInfo;