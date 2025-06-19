import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, MapPin, Phone, ExternalLink, ArrowLeft } from "lucide-react";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const serviceData = {
    bookkeeping: {
      title: "Ведение бухучёта",
      description:
        "Профессиональное ведение бухгалтерского учёта для вашего бизнеса",
      companies: [
        {
          name: "БухЭксперт",
          rating: 4.9,
          reviews: 156,
          location: "Москва",
          phone: "+7 495 123-45-67",
          price: "от 15 000 ₽/месяц",
          features: [
            "Полное ведение учёта",
            "Налоговая отчётность",
            "Консультации",
          ],
        },
        {
          name: "Бизнес-Учёт",
          rating: 4.7,
          reviews: 89,
          location: "Санкт-Петербург",
          phone: "+7 812 234-56-78",
          price: "от 12 000 ₽/месяц",
          features: [
            "Учёт доходов-расходов",
            "Подготовка отчётов",
            "Поддержка 24/7",
          ],
        },
      ],
    },
    "business-loans": {
      title: "Бизнес-кредитование",
      description: "Кредиты для развития и поддержки вашего бизнеса",
      companies: [
        {
          name: "Сбербанк",
          rating: 4.5,
          reviews: 2340,
          location: "Москва",
          phone: "+7 495 500-55-50",
          price: "от 10% годовых",
          features: ["До 50 млн ₽", "Без залога до 3 млн", "Быстрое решение"],
        },
        {
          name: "Альфа-Банк",
          rating: 4.6,
          reviews: 1876,
          location: "Москва",
          phone: "+7 495 788-88-78",
          price: "от 9.9% годовых",
          features: [
            "Онлайн-заявка",
            "Гибкие условия",
            "Персональный менеджер",
          ],
        },
      ],
    },
    leasing: {
      title: "Лизинг оборудования",
      description: "Финансовая аренда оборудования для бизнеса",
      companies: [
        {
          name: "Сбер Лизинг",
          rating: 4.8,
          reviews: 234,
          location: "Москва",
          phone: "+7 495 665-55-55",
          price: "от 8% годовых",
          features: ["Любое оборудование", "Первый взнос от 0%", "До 7 лет"],
        },
        {
          name: "ВЭБ Лизинг",
          rating: 4.6,
          reviews: 178,
          location: "Москва",
          phone: "+7 495 777-77-77",
          price: "от 8.5% годовых",
          features: ["Спецтехника", "Транспорт", "Промышленное оборудование"],
        },
      ],
    },
  };

  const currentService = serviceData[serviceId as keyof typeof serviceData];

  if (!currentService) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <p>Услуга не найдена</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {currentService.title}
          </h1>
          <p className="text-gray-600 text-lg">{currentService.description}</p>
        </div>

        <div className="grid gap-6">
          {currentService.companies.map((company, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">
                      {company.name}
                    </CardTitle>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium ml-1">
                          {company.rating}
                        </span>
                        <span className="text-gray-500 ml-1">
                          ({company.reviews} отзывов)
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
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
                  <Badge variant="outline" className="text-lg px-3 py-1">
                    {company.price}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Особенности:</h4>
                  <div className="flex flex-wrap gap-2">
                    {company.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button className="flex-1">Подать заявку</Button>
                  <Button variant="outline" size="icon">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
