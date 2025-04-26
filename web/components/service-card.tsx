import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Calendar, 
  BarChart2, 
  Activity,
  Droplet
} from "lucide-react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case 'users':
        return <Users className="h-8 w-8 text-blue-500" />;
      case 'calendar':
        return <Calendar className="h-8 w-8 text-blue-500" />;
      case 'chart':
        return <BarChart2 className="h-8 w-8 text-blue-500" />;
      case 'activity':
        return <Activity className="h-8 w-8 text-blue-500" />;
      case 'droplet':
        return <Droplet className="h-8 w-8 text-blue-500" />;
      case 'bar-chart':
        return <BarChart2 className="h-8 w-8 text-blue-500" />;
      default:
        return <Activity className="h-8 w-8 text-blue-500" />;
    }
  };
  
  return (
    <Card className="bg-white hover:shadow-md transition-shadow border">
      <CardHeader className="pb-2">
        <div className="mb-4">
          {getIcon()}
        </div>
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}