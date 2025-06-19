import { useState } from "react";
import {
  CreditCard,
  TrendingUp,
  Users,
  Calculator,
  Monitor,
  Scale,
  Building2,
  Truck,
  Star,
  MapPin,
  Phone,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ServiceCategories = () => {
  const [showAll, setShowAll] = useState(false);

  const companyData = {
    "Банковские услуги": [
      {
        name: "Тинькофф Банк",
        rating: 4.8,
        reviews: 1247,
        location: "Москва",
        phone: "+7 495 123-45-67",
        description: "Расчетные счета, кредиты, эквайринг",
      },
      {
        name: "Сбербанк",
        rating: 4.5,
        reviews: 2340,
        location: "Москва",
        phone: "+7 495 234-56-78",
        description: "Полный спектр банковских услуг",
      },
      {
        name: "Альфа-Банк",
        rating: 4.6,
        reviews: 1890,
        location: "Москва",
        phone: "+7 495 345-67-89",
        description: "Банк для бизнеса и частных лиц",
      },
    ],
    "Маркетинг и реклама": [
      {
        name: "Яндекс.Директ",
        rating: 4.7,
        reviews: 3450,
        location: "Москва",
        phone: "+7 495 456-78-90",
        description: "Контекстная реклама",
      },
      {
        name: "Google Ads",
        rating: 4.5,
        reviews: 2890,
        location: "Москва",
        phone: "+7 495 567-89-01",
        description: "Реклама в поиске Google",
      },
      {
        name: "VK Реклама",
        rating: 4.3,
        reviews: 1234,
        location: "СПб",
        phone: "+7 812 678-90-12",
        description: "Таргетированная реклама ВК",
      },
    ],
    "HR и кадровые услуги": [
      {
        name: "HeadHunter",
        rating: 4.6,
        reviews: 5670,
        location: "Москва",
        phone: "+7 495 789-01-23",
        description: "Поиск и подбор персонала",
      },
      {
        name: "Superjob",
        rating: 4.4,
        reviews: 3210,
        location: "Москва",
        phone: "+7 495 890-12-34",
        description: "Кадровое агентство",
      },
    ],
    "Бухгалтерия и учет": [
      {
        name: "1С:Предприятие",
        rating: 4.5,
        reviews: 4560,
        location: "Москва",
        phone: "+7 495 901-23-45",
        description: "Автоматизация учета",
      },
      {
        name: "МойСклад",
        rating: 4.7,
        reviews: 2340,
        location: "Москва",
        phone: "+7 495 012-34-56",
        description: "Облачная система учета",
      },
    ],
    "IT-решения": [
      {
        name: "amoCRM",
        rating: 4.8,
        reviews: 6780,
        location: "Москва",
        phone: "+7 495 123-45-67",
        description: "CRM для автоматизации продаж",
      },
      {
        name: "Битрикс24",
        rating: 4.4,
        reviews: 4320,
        location: "Москва",
        phone: "+7 495 234-56-78",
        description: "Корпоративный портал",
      },
      {
        name: "RetailCRM",
        rating: 4.6,
        reviews: 2890,
        location: "СПб",
        phone: "+7 812 345-67-89",
        description: "CRM для розничной торговли",
      },
    ],
    "Юридические услуги": [
      {
        name: "Право.ru",
        rating: 4.5,
        reviews: 1890,
        location: "Москва",
        phone: "+7 495 456-78-90",
        description: "Юридические консультации",
      },
      {
        name: "Консалт групп",
        rating: 4.3,
        reviews: 1234,
        location: "Москва",
        phone: "+7 495 567-89-01",
        description: "Корпоративное право",
      },
    ],
    Недвижимость: [
      {
        name: "ЦИАН",
        rating: 4.4,
        reviews: 7890,
        location: "Москва",
        phone: "+7 495 678-90-12",
        description: "Коммерческая недвижимость",
      },
      {
        name: "Авито Недвижимость",
        rating: 4.2,
        reviews: 5670,
        location: "Москва",
        phone: "+7 495 789-01-23",
        description: "Аренда и продажа офисов",
      },
    ],
    Логистика: [
      {
        name: "СДЭК",
        rating: 4.6,
        reviews: 8900,
        location: "Москва",
        phone: "+7 495 890-12-34",
        description: "Курьерская доставка",
      },
      {
        name: "Почта России",
        rating: 3.8,
        reviews: 12340,
        location: "Москва",
        phone: "+7 495 901-23-45",
        description: "Почтовые услуги",
      },
      {
        name: "DPD",
        rating: 4.4,
        reviews: 4560,
        location: "Москва",
        phone: "+7 495 012-34-56",
        description: "Экспресс-доставка",
      },
    ],
  };

  const categories = [
    {
      icon: CreditCard,
      title: "Банковские услуги",
      description: "Расчетные счета, кредиты, эквайринг",
      count: "45 предложений",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Маркетинг и реклама",
      description: "Digital-агентства, SEO, контекст",
      count: "78 предложений",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Users,
      title: "HR и кадровые услуги",
      description: "Подбор персонала, аутсорсинг",
      count: "32 предложения",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: Calculator,
      title: "Бухгалтерия и учет",
      description: "Ведение учета, налоговое планирование",
      count: "56 предложений",
      color: "bg-orange-50 text-orange-600",
    },
    {
      icon: Monitor,
      title: "IT-решения",
      description: "CRM, 1С, разработка ПО",
      count: "89 предложений",
      color: "bg-cyan-50 text-cyan-600",
    },
    {
      icon: Scale,
      title: "Юридические услуги",
      description: "Консультации, сопровождение сделок",
      count: "41 предложение",
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      icon: Building2,
      title: "Недвижимость",
      description: "Аренда офисов, коммерческая недвижимость",
      count: "23 предложения",
      color: "bg-pink-50 text-pink-600",
    },
    {
      icon: Truck,
      title: "Логистика",
      description: "Доставка, складские услуги",
      count: "34 предложения",
      color: "bg-yellow-50 text-yellow-600",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Категории услуг
          </h2>
          <p className="text-lg text-gray-600">
            Выберите нужную категорию и сравните предложения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(showAll ? categories : categories.slice(0, 6)).map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>

                <p className="text-gray-600 text-sm mb-3">
                  {category.description}
                </p>

                <p className="text-xs text-blue-600 font-medium">
                  <Dialog>
                    <DialogTrigger className="hover:underline cursor-pointer">
                      {category.count}
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-bold mb-2">
                          {category.title}
                        </DialogTitle>
                        <p className="text-gray-600 mb-4">
                          {category.description}
                        </p>
                      </DialogHeader>

                      <div className="space-y-4">
                        {companyData[category.title]?.map((company, index) => (
                          <div
                            key={index}
                            className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold text-lg">
                                {company.name}
                              </h4>
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm font-medium">
                                  {company.rating}
                                </span>
                                <span className="text-sm text-gray-500">
                                  ({company.reviews})
                                </span>
                              </div>
                            </div>

                            <p className="text-gray-600 mb-3">
                              {company.description}
                            </p>

                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>{company.location}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Phone className="w-4 h-4" />
                                  <span>{company.phone}</span>
                                </div>
                              </div>
                              <button className="text-blue-600 hover:text-blue-700 font-medium">
                                Связаться
                              </button>
                            </div>
                          </div>
                        )) || (
                          <p className="text-gray-500 text-center py-8">
                            Компании скоро появятся
                          </p>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Скрыть" : "Посмотреть все категории"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
