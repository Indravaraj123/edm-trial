import React from 'react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';

interface PersonalInfoProps {
  onNext: () => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ onNext }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Personal Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          required
        />
        
        <Input
          label="Email Address"
          type="email"
          placeholder="your.email@example.com"
          required
        />
        
        <Input
          label="Phone Number"
          type="tel"
          placeholder="+1 (555) 000-0000"
          required
        />
        
        <Input
          label="Date of Birth"
          type="date"
          required
        />
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <div className="flex space-x-4">
            {['Male', 'Female', 'Prefer not to say'].map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value={option}
                  className="form-radio text-indigo-600"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <Select
          label="Nationality"
          options={[
            'United States',
            'India',
            'United Kingdom',
            'Canada',
            'Australia',
            'Germany',
            'France',
            'Other'
          ]}
          required
        />
        
        <Input
          label="City"
          type="text"
          placeholder="Enter your city"
          required
        />
        
        <Select
          label="Languages Known"
          options={[
            'English',
            'Spanish',
            'French',
            'German',
            'Chinese',
            'Hindi',
            'Arabic',
            'Other'
          ]}
          multiple
          required
        />
      </div>
      
      <div className="flex justify-end mt-8">
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

export default PersonalInfo;