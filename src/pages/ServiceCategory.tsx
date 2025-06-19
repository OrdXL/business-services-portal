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
    marketing: {
      title: "Маркетинг и реклама",
      filters: [
        { id: "all", name: "Все услуги" },
        { id: "context", name: "Контекстная реклама" },
        { id: "seo", name: "SEO продвижение" },
        { id: "smm", name: "SMM" },
        { id: "design", name: "Дизайн" },
        { id: "content", name: "Контент-маркетинг" },
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
          name: "WebPromoExperts",
          rating: 4.8,
          reviews: 1200,
          location: "Москва",
          phone: "+7 495 123-45-67",
          services: {
            context: "от 20 000₽/месяц",
            seo: "от 30 000₽/месяц",
            smm: "от 15 000₽/месяц",
            design: "от 8 000₽ за макет",
          },
          activeServices: ["context", "seo", "smm", "design"],
        },
        {
          name: "Netpeak",
          rating: 4.6,
          reviews: 850,
          location: "Москва",
          phone: "+7 495 789-12-34",
          services: {
            seo: "от 40 000₽/месяц",
            context: "от 25 000₽/месяц",
            content: "от 12 000₽/месяц",
          },
          activeServices: ["seo", "context", "content"],
        },
      ],
    },
    hr: {
      title: "HR и кадровые услуги",
      filters: [
        { id: "all", name: "Все услуги" },
        { id: "recruitment", name: "Подбор персонала" },
        { id: "outsourcing", name: "Кадровый аутсорсинг" },
        { id: "training", name: "Обучение" },
        { id: "consulting", name: "HR-консалтинг" },
      ],
      companies: [
        {
          name: "HeadHunter",
          rating: 4.5,
          reviews: 2100,
          location: "Москва",
          phone: "+7 495 974-64-27",
          services: {
            recruitment: "от 50 000₽ за позицию",
            consulting: "от 80 000₽/проект",
          },
          activeServices: ["recruitment", "consulting"],
        },
        {
          name: "Анкор",
          rating: 4.4,
          reviews: 780,
          location: "Москва",
          phone: "+7 495 663-60-00",
          services: {
            recruitment: "от 70 000₽ за позицию",
            outsourcing: "от 3 000₽/сотрудник в месяц",
            training: "от 25 000₽/программа",
          },
          activeServices: ["recruitment", "outsourcing", "training"],
        },
        {
          name: "Kelly Services",
          rating: 4.3,
          reviews: 560,
          location: "Москва",
          phone: "+7 495 937-00-63",
          services: {
            recruitment: "от 60 000₽ за позицию",
            outsourcing: "от 2 500₽/сотрудник в месяц",
            consulting: "от 100 000₽/проект",
          },
          activeServices: ["recruitment", "outsourcing", "consulting"],
        },
      ],
    },
    accounting: {
      title: "Бухгалтерия и учет",
      filters: [
        { id: "all", name: "Все услуги" },
        { id: "bookkeeping", name: "Ведение учета" },
        { id: "reports", name: "Отчетность" },
        { id: "tax", name: "Налоговое планирование" },
        { id: "audit", name: "Аудит" },
      ],
      companies: [
        {
          name: "1С:БухОбслуживание",
          rating: 4.6,
          reviews: 1800,
          location: "Москва",
          phone: "+7 495 681-92-32",
          services: {
            bookkeeping: "от 5 000₽/месяц",
            reports: "от 3 000₽/отчет",
            tax: "от 15 000₽/консультация",
          },
          activeServices: ["bookkeeping", "reports", "tax"],
        },
        {
          name: "БДО Юникон",
          rating: 4.7,
          reviews: 950,
          location: "Москва",
          phone: "+7 495 797-56-32",
          services: {
            bookkeeping: "от 8 000₽/месяц",
            audit: "от 80 000₽/проект",
            tax: "от 20 000₽/консультация",
            reports: "от 4 000₽/отчет",
          },
          activeServices: ["bookkeeping", "audit", "tax", "reports"],
        },
        {
          name: "Финансовый консультант",
          rating: 4.4,
          reviews: 670,
          location: "Москва",
          phone: "+7 495 258-78-90",
          services: {
            bookkeeping: "от 6 000₽/месяц",
            reports: "от 2 500₽/отчет",
            tax: "от 12 000₽/консультация",
          },
          activeServices: ["bookkeeping", "reports", "tax"],
        },
      ],
    },
    it: {
      title: "IT решения",
      filters: [
        { id: "all", name: "Все услуги" },
        { id: "development", name: "Разработка" },
        { id: "support", name: "IT-поддержка" },
        { id: "cloud", name: "Облачные решения" },
        { id: "security", name: "Кибербезопасность" },
      ],
      companies: [
        {
          name: "Ланит",
          rating: 4.5,
          reviews: 1400,
          location: "Москва",
          phone: "+7 495 232-02-02",
          services: {
            development: "от 150 000₽/проект",
            support: "от 50 000₽/месяц",
            cloud: "от 30 000₽/месяц",
            security: "от 80 000₽/проект",
          },
          activeServices: ["development", "support", "cloud", "security"],
        },
        {
          name: "Softline",
          rating: 4.3,
          reviews: 890,
          location: "Москва",
          phone: "+7 495 232-00-23",
          services: {
            development: "от 120 000₽/проект",
            support: "от 40 000₽/месяц",
            cloud: "от 25 000₽/месяц",
          },
          activeServices: ["development", "support", "cloud"],
        },
        {
          name: "Крок",
          rating: 4.4,
          reviews: 760,
          location: "Москва",
          phone: "+7 495 268-08-00",
          services: {
            development: "от 200 000₽/проект",
            support: "от 60 000₽/месяц",
            security: "от 100 000₽/проект",
          },
          activeServices: ["development", "support", "security"],
        },
      ],
    },
    legal: {
      title: "Юридические услуги",
      filters: [
        { id: "all", name: "Все услуги" },
        { id: "corporate", name: "Корпоративное право" },
        { id: "tax-law", name: "Налоговое право" },
        { id: "litigation", name: "Судебные споры" },
        { id: "contracts", name: "Договорное право" },
      ],
      companies: [
        {
          name: "Пепеляев Групп",
          rating: 4.8,
          reviews: 650,
          location: "Москва",
          phone: "+7 495 967-00-07",
          services: {
            corporate: "от 50 000₽/услуга",
            "tax-law": "от 80 000₽/консультация",
            litigation: "от 150 000₽/дело",
          },
          activeServices: ["corporate", "tax-law", "litigation"],
        },
        {
          name: "Юкос",
          rating: 4.6,
          reviews: 420,
          location: "Москва",
          phone: "+7 495 258-50-50",
          services: {
            corporate: "от 40 000₽/услуга",
            contracts: "от 15 000₽/договор",
            litigation: "от 120 000₽/дело",
          },
          activeServices: ["corporate", "contracts", "litigation"],
        },
        {
          name: "Клифф",
          rating: 4.5,
          reviews: 380,
          location: "Москва",
          phone: "+7 495 797-53-33",
          services: {
            corporate: "от 45 000₽/услуга",
            "tax-law": "от 60 000₽/консультация",
            contracts: "от 12 000₽/договор",
            litigation: "от 100 000₽/дело",
          },
          activeServices: ["corporate", "tax-law", "contracts", "litigation"],
        },
      ],
    },
    "real-estate": {
      title: "Недвижимость",
      filters: [
        { id: "all", name: "Все услуги" },
        { id: "buying", name: "Покупка" },
        { id: "selling", name: "Продажа" },
        { id: "rent", name: "Аренда" },
        { id: "valuation", name: "Оценка" },
      ],
      companies: [
        {
          name: "ЦИАН",
          rating: 4.4,
          reviews: 5600,
          location: "Москва",
          phone: "+7 495 777-99-77",
          services: {
            buying: "от 2% от стоимости",
            selling: "от 3% от стоимости",
            rent: "50% месячной платы",
          },
          activeServices: ["buying", "selling", "rent"],
        },
        {
          name: "Инком-Недвижимость",
          rating: 4.6,
          reviews: 2300,
          location: "Москва",
          phone: "+7 495 788-77-99",
          services: {
            buying: "от 1,5% от стоимости",
            selling: "от 2,5% от стоимости",
            valuation: "от 8 000₽/объект",
            rent: "50% месячной платы",
          },
          activeServices: ["buying", "selling", "valuation", "rent"],
        },
        {
          name: "Авито Недвижимость",
          rating: 4.2,
          reviews: 8900,
          location: "Москва",
          phone: "+7 495 134-56-78",
          services: {
            buying: "от 1% от стоимости",
            selling: "от 2% от стоимости",
            rent: "30% месячной платы",
          },
          activeServices: ["buying", "selling", "rent"],
        },
      ],
    },
    logistics: {
      title: "Логистика",
      filters: [
        { id: "all", name: "Все услуги" },
        { id: "delivery", name: "Доставка" },
        { id: "warehouse", name: "Складские услуги" },
        { id: "cargo", name: "Грузоперевозки" },
        { id: "customs", name: "Таможенное оформление" },
      ],
      companies: [
        {
          name: "СДЭК",
          rating: 4.3,
          reviews: 12000,
          location: "Москва",
          phone: "+7 495 134-34-34",
          services: {
            delivery: "от 150₽/посылка",
            warehouse: "от 50₽/м²/месяц",
          },
          activeServices: ["delivery", "warehouse"],
        },
        {
          name: "Boxberry",
          rating: 4.1,
          reviews: 8500,
          location: "Москва",
          phone: "+7 495 777-22-44",
          services: {
            delivery: "от 120₽/посылка",
            warehouse: "от 45₽/м²/месяц",
          },
          activeServices: ["delivery", "warehouse"],
        },
        {
          name: "ПЭК",
          rating: 4.4,
          reviews: 3400,
          location: "Москва",
          phone: "+7 495 665-55-88",
          services: {
            cargo: "от 25₽/кг",
            warehouse: "от 60₽/м²/месяц",
            customs: "от 15 000₽/декларация",
          },
          activeServices: ["cargo", "warehouse", "customs"],
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
