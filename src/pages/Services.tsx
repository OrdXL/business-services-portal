import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Clock, CheckCircle } from "lucide-react";

const Services = () => {
  const categories = [
    {
      title: "Бухгалтерия и учёт",
      services: [
        {
          id: "bookkeeping",
          name: "Ведение бухучёта",
          price: "от 15 000 ₽",
          rating: 4.8,
          reviews: 124,
        },
        {
          id: "tax-reporting",
          name: "Налоговая отчётность",
          price: "от 8 000 ₽",
          rating: 4.9,
          reviews: 89,
        },
        {
          id: "payroll",
          name: "Расчёт зарплаты",
          price: "от 5 000 ₽",
          rating: 4.7,
          reviews: 156,
        },
      ],
    },
    {
      title: "Финансирование",
      services: [
        {
          id: "business-loans",
          name: "Бизнес-кредитование",
          price: "от 10% годовых",
          rating: 4.6,
          reviews: 189,
        },
        {
          id: "leasing",
          name: "Лизинг оборудования",
          price: "от 8% годовых",
          rating: 4.7,
          reviews: 134,
        },
        {
          id: "factoring",
          name: "Факторинг",
          price: "от 12% годовых",
          rating: 4.5,
          reviews: 76,
        },
      ],
    },
    {
      title: "Юридические услуги",
      services: [
        {
          id: "company-registration",
          name: "Регистрация ООО",
          price: "от 3 000 ₽",
          rating: 4.9,
          reviews: 203,
        },
        {
          id: "contracts",
          name: "Составление договоров",
          price: "от 2 500 ₽",
          rating: 4.8,
          reviews: 178,
        },
        {
          id: "legal-support",
          name: "Юридическое сопровождение",
          price: "от 20 000 ₽",
          rating: 4.9,
          reviews: 67,
        },
      ],
    },
    {
      title: "ИТ и автоматизация",
      services: [
        {
          id: "crm-systems",
          name: "Внедрение CRM систем",
          price: "от 30 000 ₽",
          rating: 4.6,
          reviews: 98,
        },
        {
          id: "1c-implementation",
          name: "Настройка 1С",
          price: "от 15 000 ₽",
          rating: 4.8,
          reviews: 167,
        },
        {
          id: "website-development",
          name: "Создание сайтов",
          price: "от 25 000 ₽",
          rating: 4.8,
          reviews: 145,
        },
      ],
    },
    {
      title: "Маркетинг и реклама",
      services: [
        {
          id: "contextual-ads",
          name: "Контекстная реклама",
          price: "от 10 000 ₽",
          rating: 4.6,
          reviews: 234,
        },
        {
          id: "smm",
          name: "SMM продвижение",
          price: "от 8 000 ₽",
          rating: 4.7,
          reviews: 189,
        },
        {
          id: "seo",
          name: "SEO продвижение",
          price: "от 12 000 ₽",
          rating: 4.5,
          reviews: 156,
        },
      ],
    },
    {
      title: "Страхование и безопасность",
      services: [
        {
          id: "business-insurance",
          name: "Страхование бизнеса",
          price: "от 5 000 ₽",
          rating: 4.7,
          reviews: 123,
        },
        {
          id: "security-audit",
          name: "Аудит безопасности",
          price: "от 25 000 ₽",
          rating: 4.8,
          reviews: 67,
        },
        {
          id: "cyber-insurance",
          name: "Киберстрахование",
          price: "от 8 000 ₽",
          rating: 4.6,
          reviews: 45,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Все услуги для бизнеса
          </h1>
          <p className="text-gray-600">
            Найдите профессиональные услуги для развития вашего бизнеса
          </p>
        </div>

        <div className="flex gap-4 mb-8">
          <Badge variant="secondary">Популярные</Badge>
          <Badge variant="outline">Новые</Badge>
          <Badge variant="outline">Бюджетные</Badge>
          <Badge variant="outline">Премиум</Badge>
        </div>

        <div className="space-y-8">
          {categories.map((category, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Card
                    key={serviceIndex}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">
                          {service.name}
                        </CardTitle>
                        <Badge variant="outline">{service.price}</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium ml-1">
                            {service.rating}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          ({service.reviews} отзывов)
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>1-3 дня</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-4 h-4" />
                          <span>Гарантия</span>
                        </div>
                      </div>
                      <Button
                        className="w-full"
                        onClick={() =>
                          window.open(`/service/${service.id}`, "_blank")
                        }
                      >
                        Подробнее
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
