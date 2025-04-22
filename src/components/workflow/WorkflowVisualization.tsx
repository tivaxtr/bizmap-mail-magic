
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, Map, Workflow } from "lucide-react";

export const WorkflowVisualization = () => {
  return (
    <Card className="bg-white shadow-md">
      <CardContent className="p-6">
        <h3 className="text-lg font-medium mb-4">n8n İş Akışı Görselleştirmesi</h3>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
          <WorkflowNode 
            icon={<Map className="h-10 w-10 text-bizmap-500" />}
            title="Google Maps Veri Çekme"
            description="İşletme bilgileri otomatik olarak çekilir"
          />
          
          <ArrowRight className="hidden md:block h-8 w-8 text-bizmap-300" />
          
          <WorkflowNode 
            icon={<Workflow className="h-10 w-10 text-bizmap-500" />}
            title="Veri İşleme"
            description="Veriler filtrelenir ve düzenlenir"
          />
          
          <ArrowRight className="hidden md:block h-8 w-8 text-bizmap-300" />
          
          <WorkflowNode 
            icon={<Mail className="h-10 w-10 text-bizmap-500" />}
            title="E-posta Oluşturma"
            description="Şablona göre otomatik e-postalar hazırlanır"
          />
        </div>
      </CardContent>
    </Card>
  );
};

interface WorkflowNodeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WorkflowNode = ({ icon, title, description }: WorkflowNodeProps) => {
  return (
    <div className="flex flex-col items-center text-center bg-secondary p-6 rounded-lg w-full md:w-64">
      <div className="mb-3">{icon}</div>
      <h4 className="font-medium mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
