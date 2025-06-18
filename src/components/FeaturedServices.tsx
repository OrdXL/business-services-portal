import { Star, ArrowRight, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturedServices = () => {
  const services = [
    {
      category: "Банковские услуги",
      title: "Тинькофф Бизнес",
      description: "Расчетный счет для ИП и ООО без комиссий за ведение",
      rating: 4.8,
      reviews: 1247,
      features: ["Бесплатное ведение", "30 операций в месяц", "Интернет-банк"],
      price: "От 0 ₽/мес",
      badge: "Рекомендуем",
      logo: "🏦",
    },
    {
      category: "IT-решения",
      title: "amoCRM",
      description: "CRM-система для автоматизации продаж и работы с клиентами",
      rating: 4.6,
      reviews: 892,
      features: ["Воронка продаж", "Интеграции", "Мобильное приложение"],
      price: "От 998 ₽/мес",
      badge: "Популярно",
      logo: "📊",
    },
    {
      category: "Бухгалтерия",
      title: "МойСклад",
      description:
        "Облачная система для учета товаров и автоматизации торговли",
      rating: 4.7,
      reviews: 623,
      features: ["Складской учет", "Кассовые операции", "Отчетность"],
      price: "От 2490 ₽/мес",
      badge: "Выбор редакции",
      logo: "📦",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Рекомендуемые услуги
          </h2>
          <p className="text-lg text-gray-600">
            Проверенные решения с высокими рейтингами
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                  {service.badge}
                </span>
                <span className="text-sm text-gray-500">
                  {service.category}
                </span>
              </div>

              {/* Service Info */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-2xl">{service.logo}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700 ml-1">
                        {service.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      ({service.reviews} отзывов)
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4 text-sm">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <Shield className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Price and CTA */}
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="text-lg font-bold text-gray-900">
                  {service.price}
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600 text-sm">
                  Подробнее
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-3">
            Посмотреть все рекомендации
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
