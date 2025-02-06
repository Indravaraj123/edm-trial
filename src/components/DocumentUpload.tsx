import React from 'react';

interface DocumentUploadProps {
  onPrev: () => void;
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({ onPrev }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Document Upload</h2>
      
      <div className="space-y-6">
        {[
          { label: 'Resume/CV', format: 'PDF', required: true },
          { label: 'Test Score Reports', format: 'PDF', required: true },
          { label: 'Statement of Purpose', format: 'PDF', required: true },
          { label: 'Transcripts', format: 'PDF', required: true }
        ].map((doc) => (
          <div key={doc.label} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {doc.label}
              {doc.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-gray-700 rounded-lg border-2 border-dashed border-gray-300 cursor-pointer hover:border-indigo-500 hover:bg-gray-50">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span className="mt-2 text-sm">Drop your file here, or click to select</span>
                <span className="mt-1 text-xs text-gray-500">({doc.format} only)</span>
                <input type="file" className="hidden" accept=".pdf" required={doc.required} />
              </label>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between mt-8">
        <button
          onClick={onPrev}
          className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Previous
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Submit Application
        </button>
      </div>
    </div>
  );
};

export default DocumentUpload;