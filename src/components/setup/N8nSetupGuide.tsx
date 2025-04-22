
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

export const N8nSetupGuide = () => {
  const [webhookUrl, setWebhookUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [testLoading, setTestLoading] = useState(false);
  
  const handleConnect = () => {
    if (!webhookUrl || !webhookUrl.includes("webhook")) {
      toast({
        title: "Hata",
        description: "Lütfen geçerli bir n8n webhook URL'si girin",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate connection
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Bağlantı Başarılı",
        description: "n8n webhook bağlantısı başarıyla kuruldu",
      });
    }, 1500);
  };
  
  const handleTestData = () => {
    if (!webhookUrl) {
      toast({
        title: "Hata",
        description: "Test verisi göndermek için önce webhook URL'si girmelisiniz",
        variant: "destructive"
      });
      return;
    }
    
    setTestLoading(true);
    
    // Simulated test data sending
    setTimeout(() => {
      setTestLoading(false);
      toast({
        title: "Test Verisi Gönderildi",
        description: "Örnek işletme verisi n8n iş akışına başarıyla gönderildi",
      });
    }, 2000);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>n8n Kurulum Rehberi</CardTitle>
        <CardDescription>
          n8n iş akışınızı oluşturmak ve bağlamak için adımları takip edin
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="workflow-step">
            <h3 className="font-medium mb-1">n8n Hesabı Oluşturun</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Eğer henüz bir n8n hesabınız yoksa, n8n.io adresinden ücretsiz olarak kaydolun veya kendi sunucunuza n8n kurun.
            </p>
            <Button variant="outline" className="text-sm" onClick={() => window.open("https://n8n.io", "_blank")}>
              n8n'e Git
            </Button>
          </div>
          
          <div className="workflow-step">
            <h3 className="font-medium mb-1">İş Akışı Oluşturun</h3>
            <p className="text-sm text-muted-foreground mb-2">
              n8n'de yeni bir iş akışı oluşturun. Webhook node'u ile başlayın ve Google Maps node'unu bağlayın.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="border rounded p-3 text-sm">
                <div className="font-medium">1. Webhook Node</div>
                <div className="text-muted-foreground mt-1">
                  Verilerinizi almak için bir HTTP giriş noktası oluşturur
                </div>
              </div>
              <div className="border rounded p-3 text-sm">
                <div className="font-medium">2. HTTP Request Node</div>
                <div className="text-muted-foreground mt-1">
                  Google Maps API'sine istek gönderir
                </div>
              </div>
              <div className="border rounded p-3 text-sm">
                <div className="font-medium">3. Function Node</div>
                <div className="text-muted-foreground mt-1">
                  Verileri işler ve formatlar
                </div>
              </div>
              <div className="border rounded p-3 text-sm">
                <div className="font-medium">4. Email Send Node</div>
                <div className="text-muted-foreground mt-1">
                  Şablona göre e-postaları gönderir
                </div>
              </div>
            </div>
          </div>
          
          <div className="workflow-step">
            <h3 className="font-medium mb-1">Webhook URL'sini Bağlayın</h3>
            <p className="text-sm text-muted-foreground mb-3">
              n8n'deki Webhook node'undan aldığınız URL'yi buraya yapıştırın:
            </p>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="webhook-url">n8n Webhook URL'si</Label>
              <div className="flex space-x-2">
                <Input
                  id="webhook-url"
                  placeholder="https://your-n8n.com/webhook/..."
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                />
                <Button 
                  onClick={handleConnect} 
                  disabled={loading}
                  className="bg-bizmap-500 hover:bg-bizmap-600 whitespace-nowrap"
                >
                  {loading ? "Bağlanıyor..." : "Bağlan"}
                </Button>
              </div>
            </div>
          </div>
          
          <div className="workflow-step">
            <h3 className="font-medium mb-1">Test Edin</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Webhook bağlantısı kurulduktan sonra test verilerle bir deneme yaparak sistemin doğru çalıştığını kontrol edin.
            </p>
            <Button 
              variant="outline" 
              className="text-sm"
              onClick={handleTestData}
              disabled={testLoading}
            >
              {testLoading ? "Gönderiliyor..." : "Test Verisi Gönder"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
