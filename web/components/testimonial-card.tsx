import { Card, CardContent } from "@/components/ui/card";
import { Star, StarHalf } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

export default function TestimonialCard({
  name,
  role,
  quote,
  rating,
  image
}: TestimonialCardProps) {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`star-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half-star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      );
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-star-${i}`} className="h-4 w-4 text-gray-300" />
      );
    }
    
    return stars;
  };
  
  return (
    <Card className="bg-white hover:shadow-md transition-shadow border overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <div className="flex items-center mb-1">
              {renderStars()}
            </div>
            
            <h3 className="font-medium text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500 mb-3">{role}</p>
            
            <blockquote className="text-sm text-gray-600 italic">
              "{quote}"
            </blockquote>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}