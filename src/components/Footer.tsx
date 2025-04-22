
import { Logo } from "@/components/Logo";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-white py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo className="mb-2 md:mb-0" />
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>© {new Date().getFullYear()} BizMap Mail Magic. Tüm hakları saklıdır.</p>
            <p>Google Haritalar işletme verilerinden otomatik e-posta oluşturan n8n otomasyon platformu</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
