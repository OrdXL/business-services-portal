import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Company, ServiceFilter } from "@/data/serviceData";

interface CompanyCardProps {
  company: Company;
  filters: ServiceFilter[];
}

const CompanyCard = ({ company, filters }: CompanyCardProps) => {
  const getServiceIcon = (serviceType: string) => {
    switch (serviceType) {
      case "acquiring":
        return "CreditCard";
      case "rko":
        return "Building2";
      case "credit":
        return "TrendingUp";
      case "deposits":
        return "PiggyBank";
      default:
        return "DollarSign";
    }
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-xl mb-3 text-gray-800">
              {company.name}
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-gray-600 flex-wrap">
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
          <Badge
            variant={company.rating >= 4.5 ? "default" : "secondary"}
            className="text-xs"
          >
            {company.rating >= 4.5 ? "Топ банк" : "Популярный"}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {Object.entries(company.services).map(([serviceType, conditions]) => {
            const filterName = filters.find((f) => f.id === serviceType)?.name;
            return (
              <div
                key={serviceType}
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100 hover:shadow-sm transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Icon
                      name={getServiceIcon(serviceType)}
                      className="w-5 h-5 text-white"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-700 mb-1">
                    {filterName}
                  </div>
                  <div className="text-sm text-blue-600 font-semibold">
                    {conditions}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-3">
          <Button className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white">
            Подать заявку
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 border-blue-200 text-blue-600 hover:bg-blue-50"
          >
            Подробнее
            <Icon name="ExternalLink" className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
