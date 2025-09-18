import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { downloadProjectAsZip } from '@/utils/downloadProject';

const DownloadButton = () => {
  const handleDownload = () => {
    downloadProjectAsZip();
  };

  return (
    <Button
      onClick={handleDownload}
      variant="outline"
      size="sm"
      className="gap-2 bg-card/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:border-primary/40 text-primary"
    >
      <Download className="h-4 w-4" />
      Download ZIP
    </Button>
  );
};

export default DownloadButton;