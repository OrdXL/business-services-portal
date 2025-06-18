import {
  CreditCard,
  TrendingUp,
  Users,
  Calculator,
  Monitor,
  Scale,
  Building2,
  Truck,
} from "lucide-react";

const ServiceCategories = () => {
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
          {categories.map((category) => {
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
                  {category.count}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
            Посмотреть все категории
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
