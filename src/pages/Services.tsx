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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  Users,
  Clock,
  CheckCircle,
  ArrowLeft,
  MapPin,
  Phone,
  ExternalLink,
  Filter,
} from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [ratingFilter, setRatingFilter] = useState<string>("all");
  const [locationFilter, setLocationFilter] = useState<string>("all");

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
          priceValue: 15000,
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
          priceValue: 12000,
          features: [
            "Учёт доходов-расходов",
            "Подготовка отчётов",
            "Поддержка 24/7",
          ],
        },
      ],
    },
    "tax-reporting": {
      title: "Налоговая отчётность",
      description: "Подготовка и подача налоговых деклараций",
      companies: [
        {
          name: "НалогСервис",
          rating: 4.8,
          reviews: 234,
          location: "Москва",
          phone: "+7 495 333-33-33",
          price: "от 8 000 ₽",
          priceValue: 8000,
          features: ["Все виды отчётов", "Электронная подача", "Сопровождение"],
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
          priceValue: 10,
          features: ["До 50 млн ₽", "Без залога до 3 млн", "Быстрое решение"],
        },
        {
          name: "Альфа-Банк",
          rating: 4.6,
          reviews: 1876,
          location: "Москва",
          phone: "+7 495 788-88-78",
          price: "от 9.9% годовых",
          priceValue: 9.9,
          features: [
            "Онлайн-заявка",
            "Гибкие условия",
            "Персональный менеджер",
          ],
        },
      ],
    },
  };

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
          rating: 4.5,
          reviews: 78,
        },
        {
          id: "investment",
          name: "Инвестиции",
          price: "от 100 000 ₽",
          rating: 4.4,
          reviews: 92,
        },
      ],
    },
  ];

  const filterCompanies = (companies: any[]) => {
    return companies.filter((company) => {
      const priceMatch =
        priceFilter === "all" ||
        (priceFilter === "low" && company.priceValue <= 10000) ||
        (priceFilter === "medium" &&
          company.priceValue > 10000 &&
          company.priceValue <= 50000) ||
        (priceFilter === "high" && company.priceValue > 50000);

      const ratingMatch =
        ratingFilter === "all" ||
        (ratingFilter === "4+" && company.rating >= 4.0) ||
        (ratingFilter === "4.5+" && company.rating >= 4.5) ||
        (ratingFilter === "4.8+" && company.rating >= 4.8);

      const locationMatch =
        locationFilter === "all" || company.location === locationFilter;

      return priceMatch && ratingMatch && locationMatch;
    });
  };

  if (
    selectedService &&
    serviceData[selectedService as keyof typeof serviceData]
  ) {
    const currentService =
      serviceData[selectedService as keyof typeof serviceData];
    const filteredCompanies = filterCompanies(currentService.companies);

    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            onClick={() => setSelectedService(null)}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к услугам
          </Button>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {currentService.title}
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              {currentService.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                <span className="font-medium">Фильтры:</span>
              </div>

              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Цена" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любая цена</SelectItem>
                  <SelectItem value="low">До 10 тыс.</SelectItem>
                  <SelectItem value="medium">10-50 тыс.</SelectItem>
                  <SelectItem value="high">Свыше 50 тыс.</SelectItem>
                </SelectContent>
              </Select>

              <Select value={ratingFilter} onValueChange={setRatingFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Рейтинг" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любой рейтинг</SelectItem>
                  <SelectItem value="4+">От 4.0</SelectItem>
                  <SelectItem value="4.5+">От 4.5</SelectItem>
                  <SelectItem value="4.8+">От 4.8</SelectItem>
                </SelectContent>
              </Select>

              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Город" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любой город</SelectItem>
                  <SelectItem value="Москва">Москва</SelectItem>
                  <SelectItem value="Санкт-Петербург">СПб</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredCompanies.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">
                Нет компаний, соответствующих выбранным фильтрам
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {filteredCompanies.map((company, index) => (
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
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Услуги для бизнеса
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Найдите надёжных партнёров и сервисы для развития вашего бизнеса
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {category.title}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <Card
                    key={service.id}
                    className="hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <CardDescription className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-green-600">
                          {service.price}
                        </span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 font-medium">
                            {service.rating}
                          </span>
                          <span className="text-gray-500 ml-1">
                            ({service.reviews})
                          </span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-3">
                        <Button
                          className="flex-1"
                          onClick={() => setSelectedService(service.id)}
                        >
                          Подробнее
                        </Button>
                        <Button variant="outline" size="icon">
                          <CheckCircle className="w-4 h-4" />
                        </Button>
                      </div>
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
