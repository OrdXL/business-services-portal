import { Search, TrendingUp, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  const popularSearches = [
    "Расчетный счет",
    "Интернет-эквайринг",
    "HR-агентства",
    "Бухгалтерские услуги",
    "CRM системы",
    "Юридические услуги",
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Найдите лучшие услуги
            <span className="text-blue-600"> для вашего бизнеса</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Сравнивайте предложения от проверенных провайдеров. Экономьте время
            и деньги на поиске лучших решений.
          </p>

          {/* Main search */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Что нужно вашему бизнесу?"
              className="pl-12 pr-32 h-14 text-lg bg-white shadow-lg border-0"
            />
            <Button className="absolute right-2 top-2 h-10 bg-blue-500 hover:bg-blue-600">
              Найти
            </Button>
          </div>

          {/* Popular searches */}
          <div className="mb-12">
            <p className="text-sm text-gray-500 mb-3">Популярные запросы:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {popularSearches.map((search) => (
                <button
                  key={search}
                  className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors shadow-sm"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Услуг</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">1200+</div>
                <div className="text-sm text-gray-600">
                  Проверенных компаний
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">25K+</div>
                <div className="text-sm text-gray-600">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
