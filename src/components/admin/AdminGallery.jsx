import React from 'react';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AdminGallery = () => {
  const { toast } = useToast();

  const handleFeatureClick = (feature) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="p-6 border-b border-gray-200">
        <h3 className="font-serif text-xl font-semibold text-[var(--primary-charcoal)]">
          Manage Gallery
        </h3>
      </div>
      <div className="p-6">
        <div className="text-center py-12">
          <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-[var(--text-gray)] mb-4">Gallery management will be available here</p>
          <Button
            className="bg-gradient-gold text-white hover:opacity-90"
            onClick={() => handleFeatureClick('gallery management')}
          >
            Upload Photos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminGallery;