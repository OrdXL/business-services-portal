import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Company, ServiceFilter } from "@/data/serviceData";

interface CompanyCardProps {
  company: Company;
  filters: ServiceFilter[];
}

const CompanyCard = ({ company, filters }: CompanyCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-2">{company.name}</CardTitle>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Icon
                  name="Star"
                  className="w-4 h-4 text-yellow-400 fill-current"
                />
                <span className="font-medium">{company.rating}</span>
                <span>({company.reviews} отзывов)</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="MapPin" className="w-4 h-4" />
                <span>{company.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Phone" className="w-4 h-4" />
                <span>{company.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3 mb-6">
          {Object.entries(company.services).map(([serviceType, conditions]) => {
            const filterName = filters.find((f) => f.id === serviceType)?.name;
            return (
              <div
                key={serviceType}
                className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
              >
                <span className="font-medium">{filterName}</span>
                <span className="text-blue-600 font-semibold">
                  {conditions}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex gap-3">
          <Button className="flex-1">Подать заявку</Button>
          <Button variant="outline" className="flex items-center gap-2">
            Подробнее
            <Icon name="ExternalLink" className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
