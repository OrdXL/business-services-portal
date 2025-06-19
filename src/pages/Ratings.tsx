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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Star,
  Award,
  Building,
  Users,
  Calculator,
  Megaphone,
  Code,
  Truck,
} from "lucide-react";
import { useState } from "react";

const Ratings = () => {
  const [sortBy, setSortBy] = useState("rating");

  const categories = [
    {
      id: "banks",
      name: "Банки",
      icon: Building,
      companies: [
        {
          name: "СберБанк Бизнес",
          rating: 4.9,
          avgPrice: "от 5 000 ₽",
          tags: ["Кредиты", "Расчетный счет", "Эквайринг"],
          avatar:
            "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop",
        },
        {
          name: "Альфа-Банк",
          rating: 4.8,
          avgPrice: "от 3 000 ₽",
          tags: ["Интернет-банкинг", "Кредиты", "Валютные операции"],
          avatar:
            "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=64&h=64&fit=crop",
        },
        {
          name: "Тинькофф Банк",
          rating: 4.7,
          avgPrice: "от 0 ₽",
          tags: ["Бесплатное обслуживание", "API", "Автоматизация"],
          avatar:
            "https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=64&h=64&fit=crop",
        },
      ],
    },
    {
      id: "hr",
      name: "HR агентства",
      icon: Users,
      companies: [
        {
          name: "HeadHunter Pro",
          rating: 4.9,
          avgPrice: "от 50 000 ₽",
          tags: ["Подбор персонала", "Executive Search", "HR-консалтинг"],
          avatar:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&h=64&fit=crop",
        },
        {
          name: "Агентство Кадры+",
          rating: 4.8,
          avgPrice: "от 30 000 ₽",
          tags: ["Массовый подбор", "Аутсорсинг", "Временный персонал"],
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop",
        },
        {
          name: "Талант Хантер",
          rating: 4.7,
          avgPrice: "от 70 000 ₽",
          tags: ["IT-рекрутинг", "Редкие специальности", "Международный поиск"],
          avatar:
            "https://images.unsplash.com/photo-1494790108755-2616c6589685?w=64&h=64&fit=crop",
        },
      ],
    },
    {
      id: "accounting",
      name: "Бухгалтерские услуги",
      icon: Calculator,
      companies: [
        {
          name: "АудитПлюс",
          rating: 4.9,
          avgPrice: "от 15 000 ₽",
          tags: ["Ведение учета", "Налоговое планирование", "Аудит"],
          avatar:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&h=64&fit=crop",
        },
        {
          name: "БухЭксперт",
          rating: 4.8,
          avgPrice: "от 12 000 ₽",
          tags: ["1С", "Отчетность", "Консультации"],
          avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop",
        },
        {
          name: "Финанс-Сервис",
          rating: 4.7,
          avgPrice: "от 20 000 ₽",
          tags: ["Управленческий учет", "МСФО", "Автоматизация"],
          avatar:
            "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=64&h=64&fit=crop",
        },
      ],
    },
    {
      id: "marketing",
      name: "Маркетинг",
      icon: Megaphone,
      companies: [
        {
          name: "РекламаПро",
          rating: 4.8,
          avgPrice: "от 25 000 ₽",
          tags: ["Контекстная реклама", "SMM", "Аналитика"],
          avatar:
            "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=64&h=64&fit=crop",
        },
        {
          name: "Диджитал Агентство",
          rating: 4.7,
          avgPrice: "от 40 000 ₽",
          tags: ["Performance-маркетинг", "Креатив", "Стратегия"],
          avatar:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=64&h=64&fit=crop",
        },
        {
          name: "МаркетМастер",
          rating: 4.6,
          avgPrice: "от 18 000 ₽",
          tags: ["Email-маркетинг", "SEO", "Контент"],
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop",
        },
      ],
    },
    {
      id: "it",
      name: "IT",
      icon: Code,
      companies: [
        {
          name: "DevStudio",
          rating: 4.9,
          avgPrice: "от 80 000 ₽",
          tags: ["Веб-разработка", "Мобильные приложения", "UX/UI"],
          avatar:
            "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=64&h=64&fit=crop",
        },
        {
          name: "ТехСервис",
          rating: 4.8,
          avgPrice: "от 50 000 ₽",
          tags: [
            "Системное администрирование",
            "Облачные решения",
            "Безопасность",
          ],
          avatar:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=64&h=64&fit=crop",
        },
        {
          name: "CodeFactory",
          rating: 4.7,
          avgPrice: "от 120 000 ₽",
          tags: ["Enterprise решения", "Интеграции", "DevOps"],
          avatar:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=64&h=64&fit=crop",
        },
      ],
    },
    {
      id: "logistics",
      name: "Логистика",
      icon: Truck,
      companies: [
        {
          name: "ЛогистикПро",
          rating: 4.8,
          avgPrice: "от 10 000 ₽",
          tags: ["Складская логистика", "Доставка", "Таможенное оформление"],
          avatar:
            "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=64&h=64&fit=crop",
        },
        {
          name: "ТрансСервис",
          rating: 4.7,
          avgPrice: "от 8 000 ₽",
          tags: ["Грузоперевозки", "Экспедирование", "Страхование грузов"],
          avatar:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=64&h=64&fit=crop",
        },
        {
          name: "СкладМастер",
          rating: 4.6,
          avgPrice: "от 15 000 ₽",
          tags: ["Складские услуги", "Фулфилмент", "WMS системы"],
          avatar:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=64&h=64&fit=crop",
        },
      ],
    },
  ];

  const sortCompanies = (companies: any[]) => {
    return [...companies].sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "price") {
        const priceA = parseInt(a.avgPrice.replace(/\D/g, ""));
        const priceB = parseInt(b.avgPrice.replace(/\D/g, ""));
        return priceA - priceB;
      }
      return 0;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Рейтинги компаний по категориям
          </h1>
          <p className="text-gray-600">
            Лучшие компании в каждой сфере услуг по оценкам клиентов
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium">Сортировать по:</label>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Рейтингу</SelectItem>
                <SelectItem value="price">Цене</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="banks" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2"
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <category.icon className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-semibold">
                    Топ-3 в категории "{category.name}"
                  </h2>
                </div>
                <p className="text-gray-600">
                  Лучшие компании по рейтингу клиентов
                </p>
              </div>

              <div className="grid gap-6">
                {sortCompanies(category.companies).map((company, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full font-bold text-lg">
                          {index + 1}
                        </div>
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={company.avatar} />
                          <AvatarFallback>
                            {company.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-semibold mb-2">
                                {company.name}
                              </h3>
                              <div className="flex items-center gap-4 mb-3">
                                <div className="flex items-center gap-1">
                                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                  <span className="font-semibold text-lg">
                                    {company.rating}
                                  </span>
                                </div>
                                <div className="text-lg font-medium text-blue-600">
                                  {company.avgPrice}
                                </div>
                              </div>
                            </div>
                            {index === 0 && (
                              <Award className="w-6 h-6 text-yellow-500" />
                            )}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {company.tags.map((tag, tagIndex) => (
                              <Badge
                                key={tagIndex}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Общая статистика */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Общая статистика</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <CardTitle className="text-2xl">4.8</CardTitle>
                <CardDescription>Средний рейтинг компаний</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Building className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <CardTitle className="text-2xl">150+</CardTitle>
                <CardDescription>Проверенных компаний</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-2xl">3,200+</CardTitle>
                <CardDescription>Довольных клиентов</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
