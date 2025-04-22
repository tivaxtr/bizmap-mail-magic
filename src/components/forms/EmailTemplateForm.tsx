
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const EmailTemplateForm = () => {
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>E-posta Şablonu</CardTitle>
        <CardDescription>
          Gönderilecek e-postaların şablonunu oluşturun
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="editor">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="editor">Editör</TabsTrigger>
            <TabsTrigger value="preview">Önizleme</TabsTrigger>
          </TabsList>
          
          <TabsContent value="editor">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-subject">E-posta Konusu</Label>
                <Input 
                  id="email-subject" 
                  placeholder="Örn: {{işletme_adı}} ile İşbirliği Teklifi"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Değişkenler: {'{'}{'{'} işletme_adı {'}'}{'}'},  {'{'}{'{'} kategori {'}'}{'}'},  {'{'}{'{'} adres {'}'}{'}'},  {'{'}{'{'} telefon {'}'}{'}'},  {'{'}{'{'} yıldız_sayısı {'}'}{'}'} 
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email-content">E-posta İçeriği</Label>
                <Textarea 
                  id="email-content" 
                  placeholder="E-posta içeriğini yazın..."
                  rows={10}
                  required
                  defaultValue={`Merhaba {{işletme_adı}} Yetkilisi,

Ben [Adınız], [Şirketiniz]'den yazıyorum.

{{işletme_adı}} ile işbirliği yapmak istiyoruz. {{kategori}} alanındaki deneyiminiz ve {{yıldız_sayısı}} yıldızlı hizmet kalitenizle tanınıyorsunuz.

Size özel bir teklifimiz var ve detayları görüşmek isteriz.

Bana aşağıdaki iletişim bilgilerinden ulaşabilirsiniz:
Tel: [Telefon Numaranız]
E-posta: [E-posta Adresiniz]

Saygılarımla,
[Adınız]
[Pozisyonunuz]
[Şirketiniz]`}
                />
                <p className="text-xs text-muted-foreground">
                  HTML formatında yazabilirsiniz. Değişkenler için {'{'}{'{'} değişken_adı {'}'}{'}'}  formatını kullanın.
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="sender-name">Gönderen Adı</Label>
                <Input 
                  id="sender-name" 
                  placeholder="Örn: Ahmet Yılmaz veya Şirketinizin Adı"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="sender-email">Gönderen E-posta</Label>
                <Input 
                  id="sender-email" 
                  type="email"
                  placeholder="Örn: info@sirketiniz.com"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-bizmap-500 hover:bg-bizmap-600"
                disabled={loading}
              >
                {loading ? "Kaydediliyor..." : "Şablonu Kaydet"}
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="preview">
            <div className="border rounded-md p-4 space-y-4">
              <div className="border-b pb-2">
                <div className="text-sm font-medium">Konu: ABC Restaurant ile İşbirliği Teklifi</div>
                <div className="text-xs text-muted-foreground">Gönderen: Kullanıcı Adı &lt;kullanici@mail.com&gt;</div>
              </div>
              
              <div className="prose prose-sm max-w-none">
                <p>Merhaba ABC Restaurant Yetkilisi,</p>
                <p>Ben [Adınız], [Şirketiniz]'den yazıyorum.</p>
                <p>ABC Restaurant ile işbirliği yapmak istiyoruz. Restoran alanındaki deneyiminiz ve 4.5 yıldızlı hizmet kalitenizle tanınıyorsunuz.</p>
                <p>Size özel bir teklifimiz var ve detayları görüşmek isteriz.</p>
                <p>Bana aşağıdaki iletişim bilgilerinden ulaşabilirsiniz:<br />
                Tel: [Telefon Numaranız]<br />
                E-posta: [E-posta Adresiniz]</p>
                <p>Saygılarımla,<br />
                [Adınız]<br />
                [Pozisyonunuz]<br />
                [Şirketiniz]</p>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-muted-foreground">
              Bu bir önizlemedir. Gerçek e-posta, çekilen Google Maps verileriyle kişiselleştirilecektir.
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
