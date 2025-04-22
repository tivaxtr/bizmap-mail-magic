
import { Logo } from "@/components/Logo";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-white py-8 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Google Haritalar'dan işletme verilerini çekip otomatik mail hazırlayan
              n8n tabanlı otomasyon platformu.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-bizmap-500">Anasayfa</a></li>
              <li><a href="#" className="text-sm hover:text-bizmap-500">Nasıl Çalışır</a></li>
              <li><a href="#" className="text-sm hover:text-bizmap-500">SSS</a></li>
              <li><a href="#" className="text-sm hover:text-bizmap-500">İletişim</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Destek</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-bizmap-500">Yardım Merkezi</a></li>
              <li><a href="#" className="text-sm hover:text-bizmap-500">Dökümanlar</a></li>
              <li><a href="#" className="text-sm hover:text-bizmap-500">API</a></li>
              <li><a href="#" className="text-sm hover:text-bizmap-500">n8n Entegrasyonu</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">İletişim</h3>
            <ul className="space-y-2 text-sm">
              <li>info@bizmapmagic.com</li>
              <li>+90 212 123 45 67</li>
              <li>İstanbul, Türkiye</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 BizMap Mail Magic. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-bizmap-500">Gizlilik Politikası</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-bizmap-500">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
