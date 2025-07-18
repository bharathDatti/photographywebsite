import React from 'react';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AdminSettings = () => {
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
          Settings
        </h3>
      </div>
      <div className="p-6">
        <div className="text-center py-12">
          <Settings className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-[var(--text-gray)] mb-4">Settings panel will be available here</p>
          <Button
            className="bg-gradient-gold text-white hover:opacity-90"
            onClick={() => handleFeatureClick('settings')}
          >
            Configure Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;