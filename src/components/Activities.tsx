import React from 'react';
import { Input } from '../ui/Input';

interface ActivitiesProps {
  onNext: () => void;
  onPrev: () => void;
}

const Activities: React.FC<ActivitiesProps> = ({ onNext, onPrev }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Professional and Extracurricular Activities</h2>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Professional Certifications
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="List your certifications (e.g., AWS Certified, Data Science with Python)"
            rows={3}
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Extracurricular Activities
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              'Sports',
              'Music',
              'Volunteering',
              'Student Clubs',
              'Cultural Activities',
              'Technical Clubs'
            ].map((activity) => (
              <label key={activity} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-indigo-600"
                />
                <span className="text-gray-700">{activity}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Hackathon/Project Participation
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            onChange={(e) => {
              const textarea = document.getElementById('hackathon-details');
              if (textarea) {
                textarea.style.display = e.target.value === 'yes' ? 'block' : 'none';
              }
            }}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
          <textarea
            id="hackathon-details"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hidden"
            placeholder="Describe your hackathon/project experiences..."
            rows={4}
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Awards or Recognitions
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="List your awards and recognitions..."
            rows={3}
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Leadership Roles
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Describe your leadership roles in clubs, societies, or organizations..."
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

export default Activities;