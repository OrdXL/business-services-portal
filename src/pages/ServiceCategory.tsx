import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, MapPin, Phone, ExternalLink } from "lucide-react";

const ServiceCategory = () => {
  const { category } = useParams();
  const [activeFilter, setActiveFilter] = useState("all");

  const categoryData = {
    banking: {
      title: "Банковские услуги",
      filters: [
        { id: "all", name: "Все услуги" },
        { id: "acquiring", name: "Эквайринг" },
        { id: "rko", name: "РКО" },
        { id: "credit", name: "Кредитование" },
        { id: "deposits", name: "Депозиты" },
      ],
      companies: [
        {
          name: "Тинькофф Банк",
          rating: 4.8,
          reviews: 1247,
          location: "Москва",
          phone: "+7 495 123-45-67",
          services: {
            acquiring: "от 1,5% с оборота",
            rko: "0₽ обслуживание первые 3 месяца",
            credit: "от 9,9% годовых",
          },
          activeServices: ["acquiring", "rko", "credit"],
        },
        {
          name: "Сбербанк",
          rating: 4.5,
          reviews: 2340,
          location: "Москва",
          phone: "+7 495 234-56-78",
          services: {
            acquiring: "от 1,8% с оборота",
            rko: "от 790₽/месяц",
            credit: "от 10,5% годовых",
            deposits: "до 8% годовых",
          },
          activeServices: ["acquiring", "rko", "credit", "deposits"],
        },
        {
          name: "ВТБ",
          rating: 4.3,
          reviews: 1890,
          location: "Москва",
          phone: "+7 495 777-24-24",
          services: {
            acquiring: "от 1,6% с оборота",
            rko: "от 990₽/месяц",
            credit: "от 9,5% годовых",
            deposits: "до 7,5% годовых",
          },
          activeServices: ["acquiring", "rko", "credit", "deposits"],
        },
        {
          name: "Газпромбанк",
          rating: 4.2,
          reviews: 1456,
          location: "Москва",
          phone: "+7 495 913-74-74",
          services: {
            acquiring: "от 1,7% с оборота",
            rko: "от 1200₽/месяц",
            credit: "от 10,9% годовых",
            deposits: "до 8,2% годовых",
          },
          activeServices: ["acquiring", "rko", "credit", "deposits"],
        },
        {
          name: "Альфа-Банк",
          rating: 4.6,
          reviews: 2100,
          location: "Москва",
          phone: "+7 495 788-88-78",
          services: {
            acquiring: "от 1,4% с оборота",
            rko: "0₽ при обороте от 300 000₽",
            credit: "от 8,9% годовых",
          },
          activeServices: ["acquiring", "rko", "credit"],
        },
        {
          name: "Райффайзенбанк",
          rating: 4.4,
          reviews: 987,
          location: "Москва",
          phone: "+7 495 721-99-00",
          services: {
            acquiring: "от 1,9% с оборота",
            rko: "от 1500₽/месяц",
            credit: "от 11,5% годовых",
            deposits: "до 7% годовых",
          },
          activeServices: ["acquiring", "rko", "credit", "deposits"],
        },
        {
          name: "Росбанк",
          rating: 4.1,
          reviews: 734,
          location: "Москва",
          phone: "+7 495 777-19-19",
          services: {
            acquiring: "от 2,1% с оборота",
            rko: "от 990₽/месяц",
            credit: "от 12,9% годовых",
            deposits: "до 6,8% годовых",
          },
          activeServices: ["acquiring", "rko", "credit", "deposits"],
        },
        {
          name: "Банк Открытие",
          rating: 4.0,
          reviews: 856,
          location: "Москва",
          phone: "+7 495 777-77-75",
          services: {
            acquiring: "от 1,8% с оборота",
            rko: "от 790₽/месяц",
            credit: "от 11,9% годовых",
            deposits: "до 7,8% годовых",
          },
          activeServices: ["acquiring", "rko", "credit", "deposits"],
        },
        {
          name: "Промсвязьбанк",
          rating: 3.9,
          reviews: 623,
          location: "Москва",
          phone: "+7 495 995-30-30",
          services: {
            acquiring: "от 2,2% с оборота",
            rko: "от 1200₽/месяц",
            credit: "от 13,5% годовых",
            deposits: "до 6,5% годовых",
          },
          activeServices: ["acquiring", "rko", "credit", "deposits"],
        },
        {
          name: "Россельхозбанк",
          rating: 4.0,
          reviews: 945,
          location: "Москва",
          phone: "+7 495 363-25-25",
          services: {
            acquiring: "от 2,0% с оборота",
            rko: "от 690₽/месяц",
            credit: "от 10,9% годовых",
            deposits: "до 8,5% годовых",
          },
          activeServices: ["acquiring", "rko", "credit", "deposits"],
        },
        {
          name: "МТС Банк",
          rating: 4.3,
          reviews: 567,
          location: "Москва",
          phone: "+7 495 777-0-777",
          services: {
            acquiring: "от 1,6% с оборота",
            rko: "от 490₽/месяц",
            credit: "от 12,5% годовых",
          },
          activeServices: ["acquiring", "rko", "credit"],
        },
        {
          name: "УБРиР",
          rating: 4.1,
          reviews: 423,
          location: "Екатеринбург",
          phone: "+7 343 2-55-000",
          services: {
            acquiring: "от 1,9% с оборота",
            rko: "от 590₽/месяц",
            credit: "от 11,9% годовых",
            deposits: "до 7,2% годовых",
          },
          activeServices: ["acquiring", "rko", "credit", "deposits"],
        },
        {
          name: "Совкомбанк",
          rating: 3.8,
          reviews: 789,
          location: "Москва",
          phone: "+7 495 788-77-88",
          services: {
            acquiring: "от 2,3% с оборота",
            rko: "от 990₽/месяц",
            credit: "от 14,9% годовых",
          },
          activeServices: ["acquiring", "rko", "credit"],
        },
        {
          name: "Почта Банк",
          rating: 3.7,
          reviews: 912,
          location: "Москва",
          phone: "+7 800 550-07-70",
          services: {
            acquiring: "от 2,5% с оборота",
            rko: "от 390₽/месяц",
            credit: "от 15,9% годовых",
            deposits: "до 6% годовых",
          },
          activeServices: ["acquiring", "rko", "credit", "deposits"],
        },
        {
          name: "ЮниКредит Банк",
          rating: 4.2,
          reviews: 345,
          location: "Москва",
          phone: "+7 495 777-12-12",
          services: {
            acquiring: "от 1,8% с оборота",
            rko: "от 1490₽/месяц",
            credit: "от 10,5% годовых",
            deposits: "до 7,3% годовых",
          },
          activeServices: ["acquiring", "rko", "credit", "deposits"],
        },
        {
          name: "Ак Барс Банк",
          rating: 4.0,
          reviews: 456,
          location: "Казань",
          phone: "+7 843 526-00-00",
          services: {
            acquiring: "от 2,0% с оборота",
            rko: "от 690₽/месяц",
            credit: "от 12,9% годовых",
            deposits: "до 8% годовых",
          },
          activeServices: ["acquiring", "rko", "credit", "deposits"],
        },
      ],
    },
    marketing: {
      title: "Маркетинг и реклама",
      filters: [
        { id: "all", name: "Все услуги" },
        { id: "context", name: "Контекстная реклама" },
        { id: "seo", name: "SEO продвижение" },
        { id: "smm", name: "SMM" },
        { id: "design", name: "Дизайн" },
      ],
      companies: [
        {
          name: "Яндекс.Директ",
          rating: 4.7,
          reviews: 3450,
          location: "Москва",
          phone: "+7 495 456-78-90",
          services: {
            context: "от 15 000₽/месяц",
            seo: "от 25 000₽/месяц",
          },
          activeServices: ["context", "seo"],
        },
        {
          name: "Google Ads",
          rating: 4.5,
          reviews: 2890,
          location: "Москва",
          phone: "+7 495 567-89-01",
          services: {
            context: "от 20 000₽/месяц",
            design: "от 5 000₽ за макет",
          },
          activeServices: ["context", "design"],
        },
      ],
    },
  };

  const currentCategory = categoryData[category as keyof typeof categoryData];

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold">Категория не найдена</h1>
        </div>
      </div>
    );
  }

  const filteredCompanies = currentCategory.companies.filter((company) =>
    activeFilter === "all"
      ? true
      : company.activeServices.includes(activeFilter),
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {currentCategory.title}
          </h1>
          <p className="text-gray-600">
            Сравните предложения и выберите лучшие условия
          </p>
        </div>

        {/* Фильтры */}
        <div className="flex flex-wrap gap-3 mb-8">
          {currentCategory.filters.map((filter) => (
            <Badge
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className="cursor-pointer px-4 py-2"
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </Badge>
          ))}
        </div>

        {/* Список компаний */}
        <div className="grid gap-6">
          {filteredCompanies.map((company, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">
                      {company.name}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-medium">{company.rating}</span>
                        <span>({company.reviews} отзывов)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{company.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        <span>{company.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-3 mb-6">
                  {Object.entries(company.services).map(
                    ([serviceType, conditions]) => {
                      const filterName = currentCategory.filters.find(
                        (f) => f.id === serviceType,
                      )?.name;
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
                    },
                  )}
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1">Подать заявку</Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    Подробнее
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              По выбранному фильтру компании не найдены
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCategory;
