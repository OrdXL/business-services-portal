import Header from "@/components/Header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, TrendingUp, Award, Users } from "lucide-react";

const Ratings = () => {
  const topServices = [
    {
      rank: 1,
      name: "Ведение бухучёта от АудитПлюс",
      rating: 4.9,
      reviews: 245,
      category: "Бухгалтерия",
      price: "от 15 000 ₽",
    },
    {
      rank: 2,
      name: "Регистрация ООО за 1 день",
      rating: 4.9,
      reviews: 203,
      category: "Юридические услуги",
      price: "от 3 000 ₽",
    },
    {
      rank: 3,
      name: "Контекстная реклама Pro",
      rating: 4.8,
      reviews: 189,
      category: "Маркетинг",
      price: "от 12 000 ₽",
    },
  ];

  const topProviders = [
    {
      name: 'ООО "БизнесПартнёр"',
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&h=64&fit=crop&crop=face",
      rating: 4.9,
      completedOrders: 1247,
      specialization: "Бухгалтерские услуги",
    },
    {
      name: "ИП Иванов А.С.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      rating: 4.8,
      completedOrders: 856,
      specialization: "Юридические услуги",
    },
    {
      name: 'Агентство "РекламаПро"',
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&h=64&fit=crop&crop=face",
      rating: 4.8,
      completedOrders: 634,
      specialization: "Маркетинг и реклама",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Рейтинги и отзывы
          </h1>
          <p className="text-gray-600">
            Лучшие услуги и исполнители по оценкам клиентов
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Топ услуг */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-semibold">Топ услуг</h2>
            </div>

            <div className="space-y-4">
              {topServices.map((service, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full font-bold">
                        {service.rank}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">
                          {service.name}
                        </h3>
                        <div className="flex items-center gap-4 mb-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">
                              {service.rating}
                            </span>
                            <span className="text-gray-500">
                              ({service.reviews})
                            </span>
                          </div>
                          <Badge variant="secondary">{service.category}</Badge>
                        </div>
                        <p className="text-blue-600 font-medium">
                          {service.price}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Топ исполнителей */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-semibold">Топ исполнителей</h2>
            </div>

            <div className="space-y-4">
              {topProviders.map((provider, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={provider.avatar} />
                        <AvatarFallback>
                          {provider.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold">{provider.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {provider.specialization}
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">
                              {provider.rating}
                            </span>
                          </div>
                          <span className="text-gray-500">
                            {provider.completedOrders} заказов
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Статистика */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Статистика платформы</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <CardTitle className="text-2xl">4.8</CardTitle>
                <CardDescription>Средний рейтинг услуг</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-2xl">2,847</CardTitle>
                <CardDescription>Довольных клиентов</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <CardTitle className="text-2xl">567</CardTitle>
                <CardDescription>Проверенных исполнителей</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
