
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WorkflowVisualization } from "@/components/workflow/WorkflowVisualization";
import { GoogleMapsSearchForm } from "@/components/forms/GoogleMapsSearchForm";
import { EmailTemplateForm } from "@/components/forms/EmailTemplateForm";
import { N8nSetupGuide } from "@/components/setup/N8nSetupGuide";
import { ResultsPreview } from "@/components/results/ResultsPreview";
import { StatCards } from "@/components/dashboard/StatCards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-bold gradient-text mb-4">
            Google Haritalar İşletme Verilerinden Otomatik E-posta
          </h1>
          <p className="text-lg text-muted-foreground">
            n8n ile güçlendirilmiş otomasyon platformu sayesinde Google Haritalar'dan işletme 
            bilgilerini çekip otomatik e-postalar hazırlayın.
          </p>
        </div>
        
        <StatCards />
        
        <div className="my-8">
          <WorkflowVisualization />
        </div>
        
        <Tabs defaultValue="search" className="mt-10">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="search">İşletme Ara</TabsTrigger>
            <TabsTrigger value="email">E-posta Şablonu</TabsTrigger>
            <TabsTrigger value="setup">n8n Kurulumu</TabsTrigger>
            <TabsTrigger value="results">Sonuçlar</TabsTrigger>
          </TabsList>
          
          <TabsContent value="search">
            <GoogleMapsSearchForm />
          </TabsContent>
          
          <TabsContent value="email">
            <EmailTemplateForm />
          </TabsContent>
          
          <TabsContent value="setup">
            <N8nSetupGuide />
          </TabsContent>
          
          <TabsContent value="results">
            <ResultsPreview />
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 border border-border">
          <h2 className="text-2xl font-bold mb-4 text-center gradient-text">
            n8n Entegrasyonu Nasıl Çalışır?
          </h2>
          <div className="space-y-6 mt-8">
            <div className="flex gap-4">
              <div className="bg-bizmap-100 rounded-full h-8 w-8 flex items-center justify-center font-bold text-bizmap-700 shrink-0">
                1
              </div>
              <div>
                <h3 className="font-medium mb-1">Google Haritalar Arama Kriterleri</h3>
                <p className="text-sm text-muted-foreground">
                  İstediğiniz işletme tipini ve konumu belirterek arama yapın. Sistem bu kriterleri n8n iş akışına gönderir.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-bizmap-100 rounded-full h-8 w-8 flex items-center justify-center font-bold text-bizmap-700 shrink-0">
                2
              </div>
              <div>
                <h3 className="font-medium mb-1">n8n Google Maps Entegrasyonu</h3>
                <p className="text-sm text-muted-foreground">
                  n8n, Google Maps API kullanarak belirttiğiniz kriterlere uygun işletmeleri bulur ve bilgilerini çeker.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-bizmap-100 rounded-full h-8 w-8 flex items-center justify-center font-bold text-bizmap-700 shrink-0">
                3
              </div>
              <div>
                <h3 className="font-medium mb-1">Veri İşleme ve Filtreleme</h3>
                <p className="text-sm text-muted-foreground">
                  Elde edilen işletme verileri, n8n'de işlenir, filtrelenir ve e-posta gönderimine hazırlanır.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-bizmap-100 rounded-full h-8 w-8 flex items-center justify-center font-bold text-bizmap-700 shrink-0">
                4
              </div>
              <div>
                <h3 className="font-medium mb-1">Otomatik E-posta Oluşturma</h3>
                <p className="text-sm text-muted-foreground">
                  Hazırladığınız şablona göre, her işletme için kişiselleştirilmiş e-postalar oluşturulur ve gönderilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
