
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-6xl font-bold text-bizmap-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Sayfa Bulunamadı</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Aradığınız sayfa mevcut değil veya taşınmış olabilir. Lütfen ana sayfaya dönün.
      </p>
      <Button asChild>
        <Link to="/">Ana Sayfaya Dön</Link>
      </Button>
    </div>
  );
};

export default NotFound;
