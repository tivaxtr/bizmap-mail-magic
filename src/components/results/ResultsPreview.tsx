
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Mail, RefreshCw } from "lucide-react";

type BusinessResult = {
  id: string;
  name: string;
  address: string;
  phone: string;
  category: string;
  rating: number;
  emailStatus: "queued" | "sent" | "failed" | "none";
};

const mockResults: BusinessResult[] = [
  {
    id: "1",
    name: "Cafe Istanbul",
    address: "Bağdat Caddesi No:123, Kadıköy",
    phone: "+90 212 123 45 67",
    category: "Kafe",
    rating: 4.7,
    emailStatus: "sent"
  },
  {
    id: "2",
    name: "Marmara Hukuk Bürosu",
    address: "İstiklal Caddesi No:45, Beyoğlu",
    phone: "+90 212 987 65 43",
    category: "Avukat",
    rating: 4.2,
    emailStatus: "queued"
  },
  {
    id: "3",
    name: "Boğaz Balık Restaurant",
    address: "Bebek Sahil Yolu No:22, Beşiktaş",
    phone: "+90 212 555 67 89",
    category: "Restoran",
    rating: 4.8,
    emailStatus: "none"
  },
  {
    id: "4",
    name: "Anadolu Berber Salonu",
    address: "Moda Caddesi No:78, Kadıköy",
    phone: "+90 216 333 22 11",
    category: "Kuaför",
    rating: 4.5,
    emailStatus: "failed"
  },
  {
    id: "5",
    name: "Deniz Kırtasiye",
    address: "Bağlarbaşı Caddesi No:56, Üsküdar",
    phone: "+90 216 444 55 66",
    category: "Kırtasiye",
    rating: 4.0,
    emailStatus: "none"
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "sent":
      return <Badge className="bg-green-500">Gönderildi</Badge>;
    case "queued":
      return <Badge className="bg-yellow-500">Sırada</Badge>;
    case "failed":
      return <Badge variant="destructive">Başarısız</Badge>;
    case "none":
      return <Badge variant="outline">Beklemede</Badge>;
    default:
      return null;
  }
};

export const ResultsPreview = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Sonuçlar ve E-posta Durumu</CardTitle>
            <CardDescription>
              Çekilen işletme verileri ve e-posta gönderim durumları
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Download className="h-4 w-4" /> CSV
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <RefreshCw className="h-4 w-4" /> Yenile
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="border rounded-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>İşletme Adı</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead>Değerlendirme</TableHead>
                <TableHead>Adres</TableHead>
                <TableHead>E-posta Durumu</TableHead>
                <TableHead>İşlem</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockResults.map((business) => (
                <TableRow key={business.id}>
                  <TableCell className="font-medium">{business.name}</TableCell>
                  <TableCell>{business.category}</TableCell>
                  <TableCell>⭐ {business.rating}</TableCell>
                  <TableCell className="max-w-xs truncate">{business.address}</TableCell>
                  <TableCell>{getStatusBadge(business.emailStatus)}</TableCell>
                  <TableCell>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="flex items-center gap-1 h-8"
                    >
                      <Mail className="h-4 w-4" /> 
                      {business.emailStatus === "sent" ? "Tekrar Gönder" : "Gönder"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-muted-foreground">
            Toplam 5 sonuç gösteriliyor
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">Önceki</Button>
            <Button variant="outline" size="sm" className="font-medium">1</Button>
            <Button variant="outline" size="sm">Sonraki</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
