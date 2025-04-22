
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="h-8 w-8 rounded-md bg-gradient-to-br from-bizmap-400 to-bizmap-700 flex items-center justify-center text-white font-bold shadow-md">
        BM
      </div>
      <div className="font-bold text-lg">
        <span className="text-bizmap-700">Biz</span>
        <span className="text-bizmap-500">Map</span>
      </div>
    </div>
  );
};
