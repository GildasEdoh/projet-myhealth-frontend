import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Calendar, 
  BarChart2,
  Droplet,
  Check 
} from "lucide-react";

interface ServiceFeatureProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceFeature({ 
  icon, 
  title, 
  description, 
  features 
}: ServiceFeatureProps) {
  const getIcon = () => {
    switch (icon) {
      case 'users':
        return <Users className="h-8 w-8 text-blue-500" />;
      case 'calendar':
        return <Calendar className="h-8 w-8 text-blue-500" />;
      case 'bar-chart':
        return <BarChart2 className="h-8 w-8 text-blue-500" />;
      case 'droplet':
        return <Droplet className="h-8 w-8 text-blue-500" />;
      default:
        return <Users className="h-8 w-8 text-blue-500" />;
    }
  };
  
  return (
    <Card className="bg-white hover:shadow-md transition-shadow border">
      <CardHeader className="pb-2">
        <div className="mb-4">
          {getIcon()}
        </div>
        <CardTitle className="text-xl font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-2 mt-0.5">
                <Check className="h-4 w-4 text-green-500" />
              </div>
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}