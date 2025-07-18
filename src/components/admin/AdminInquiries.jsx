import React from 'react';
import { MessageSquare } from 'lucide-react';

const AdminInquiries = ({ inquiries }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="p-6 border-b border-gray-200">
        <h3 className="font-serif text-xl font-semibold text-[var(--primary-charcoal)]">
          Customer Inquiries
        </h3>
      </div>
      <div className="p-6">
        {inquiries.length > 0 ? (
          <div className="space-y-4">
            {inquiries.map((inquiry) => (
              <div key={inquiry.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-[var(--primary-charcoal)]">{inquiry.name}</h4>
                    <p className="text-sm text-[var(--text-gray)]">{inquiry.email} • {inquiry.phone}</p>
                  </div>
                  <span className="text-xs text-[var(--text-gray)]">
                    {new Date(inquiry.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm font-medium text-[var(--primary-charcoal)] mb-2">{inquiry.subject}</p>
                <p className="text-sm text-[var(--text-gray)]">{inquiry.message}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-[var(--text-gray)]">No inquiries yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminInquiries;