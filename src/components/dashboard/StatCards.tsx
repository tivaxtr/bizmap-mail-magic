
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building2, Mail, Search } from "lucide-react";

export const StatCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        icon={<Search className="h-5 w-5 text-bizmap-500" />}
        title="Yapılan Aramalar"
        value="28"
        trend="+12% bu hafta"
      />
      
      <StatCard
        icon={<Building2 className="h-5 w-5 text-bizmap-500" />}
        title="Bulunan İşletmeler"
        value="325"
        trend="+48 bu hafta"
      />
      
      <StatCard
        icon={<Mail className="h-5 w-5 text-bizmap-500" />}
        title="Gönderilen E-postalar"
        value="142"
        trend="+35 bu hafta"
      />
      
      <StatCard
        icon={<Users className="h-5 w-5 text-bizmap-500" />}
        title="Yanıt Oranı"
        value="24%"
        trend="+2% bu hafta"
        isPercentage
      />
    </div>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  trend: string;
  isPercentage?: boolean;
}

const StatCard = ({ icon, title, value, trend, isPercentage }: StatCardProps) => {
  const isTrendPositive = trend.includes("+");
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs ${isTrendPositive ? "text-green-500" : "text-red-500"}`}>
          {trend}
        </p>
      </CardContent>
    </Card>
  );
};
