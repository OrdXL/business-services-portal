import { Shield, Award, Users, Clock } from "lucide-react";

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Shield,
      title: "Проверенные компании",
      description: "Все партнеры проходят строгую модерацию",
      stat: "100%",
      color: "text-green-600",
    },
    {
      icon: Award,
      title: "Гарантия качества",
      description: "Возврат средств при неудовлетворительном сервисе",
      stat: "30 дней",
      color: "text-blue-600",
    },
    {
      icon: Users,
      title: "Довольные клиенты",
      description: "Средняя оценка сервисов на платформе",
      stat: "4.7/5",
      color: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Быстрый отклик",
      description: "Среднее время ответа поставщиков услуг",
      stat: "2 часа",
      color: "text-orange-600",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы создали надежную экосистему для поиска и сравнения бизнес-услуг
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator) => {
            const IconComponent = indicator.icon;
            return (
              <div key={indicator.title} className="text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center ${indicator.color}`}
                >
                  <IconComponent className="w-8 h-8" />
                </div>

                <div className={`text-3xl font-bold mb-2 ${indicator.color}`}>
                  {indicator.stat}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {indicator.title}
                </h3>

                <p className="text-gray-600 text-sm">{indicator.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional trust elements */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl mb-2">🏆</div>
              <div className="text-sm text-gray-600">
                Премия "Лучший B2B сервис"
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🔒</div>
              <div className="text-sm text-gray-600">SSL-шифрование данных</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-sm text-gray-600">Работаем 24/7</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📱</div>
              <div className="text-sm text-gray-600">Мобильное приложение</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
