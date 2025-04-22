
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export const GoogleMapsSearchForm = () => {
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
        <CardTitle>Google Maps Arama Kriterleri</CardTitle>
        <CardDescription>
          İşletme verilerini çekmek için arama kriterlerini belirleyin
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="search-term">Arama Terimi</Label>
              <Input 
                id="search-term" 
                placeholder="Örn: restoran, avukat, kuaför"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Konum</Label>
              <Input 
                id="location" 
                placeholder="Örn: İstanbul, Kadıköy"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="radius">Arama Yarıçapı</Label>
              <Select defaultValue="5">
                <SelectTrigger id="radius">
                  <SelectValue placeholder="Yarıçap seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 km</SelectItem>
                  <SelectItem value="5">5 km</SelectItem>
                  <SelectItem value="10">10 km</SelectItem>
                  <SelectItem value="20">20 km</SelectItem>
                  <SelectItem value="50">50 km</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="max-results">Maksimum Sonuç Sayısı</Label>
              <Select defaultValue="50">
                <SelectTrigger id="max-results">
                  <SelectValue placeholder="Maksimum sonuç sayısı seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10 sonuç</SelectItem>
                  <SelectItem value="25">25 sonuç</SelectItem>
                  <SelectItem value="50">50 sonuç</SelectItem>
                  <SelectItem value="100">100 sonuç</SelectItem>
                  <SelectItem value="200">200 sonuç</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="additional-filters">Ek Filtreler</Label>
            <Textarea 
              id="additional-filters" 
              placeholder="Örn: minimum 4 yıldız, en az 50 değerlendirme"
            />
          </div>
          
          <div className="flex items-start space-x-2">
            <Checkbox id="save-search" />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="save-search"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Bu aramayı kaydet
              </Label>
              <p className="text-sm text-muted-foreground">
                Bu arama kriterlerini daha sonra tekrar kullanmak üzere kaydedin
              </p>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-bizmap-500 hover:bg-bizmap-600"
            disabled={loading}
          >
            {loading ? "Aranıyor..." : "Ara ve Verileri Çek"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
