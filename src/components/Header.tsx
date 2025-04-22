
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

export const Header = () => {
  return (
    <header className="border-b border-border bg-white py-4">
      <div className="container flex items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-6">
          <Button variant="ghost">Anasayfa</Button>
          <Button variant="ghost">Nasıl Çalışır</Button>
          <Button variant="ghost">SSS</Button>
          <Button variant="default" className="bg-bizmap-500 hover:bg-bizmap-600">Başla</Button>
        </nav>
      </div>
    </header>
  );
};
