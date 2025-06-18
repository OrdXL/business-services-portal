import Header from "@/components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Eye, MessageCircle } from "lucide-react";

const News = () => {
  const news = [
    {
      id: 1,
      title: "Новые возможности для малого бизнеса: льготы и субсидии 2024",
      description:
        "Правительство анонсировало расширение программы поддержки малого и среднего бизнеса. Рассказываем о новых возможностях.",
      category: "Законодательство",
      date: "15 июня 2024",
      views: 1234,
      comments: 23,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop",
    },
    {
      id: 2,
      title: "Цифровая трансформация: как технологии меняют бизнес",
      description:
        "Исследование показывает, что 78% компаний планируют увеличить инвестиции в цифровые технологии в 2024 году.",
      category: "Технологии",
      date: "12 июня 2024",
      views: 892,
      comments: 15,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop",
    },
    {
      id: 3,
      title: "Тренды в маркетинге: что работает в 2024 году",
      description:
        "Аналитики выделили пять ключевых трендов, которые определяют успех маркетинговых кампаний в текущем году.",
      category: "Маркетинг",
      date: "10 июня 2024",
      views: 1567,
      comments: 34,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
    },
    {
      id: 4,
      title: "Изменения в налоговом законодательстве для ИП",
      description:
        "С 1 июля вступают в силу новые правила налогообложения для индивидуальных предпринимателей. Что нужно знать каждому ИП.",
      category: "Налоги",
      date: "8 июня 2024",
      views: 2103,
      comments: 45,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop",
    },
    {
      id: 5,
      title: "Как автоматизация повышает эффективность бизнеса",
      description:
        "Разбираем конкретные примеры того, как автоматизация процессов помогает компаниям экономить время и деньги.",
      category: "Автоматизация",
      date: "5 июня 2024",
      views: 743,
      comments: 12,
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop",
    },
    {
      id: 6,
      title: "Экспертное мнение: прогнозы развития рынка услуг",
      description:
        "Ведущие эксперты делятся своими прогнозами относительно развития рынка бизнес-услуг в ближайшие годы.",
      category: "Аналитика",
      date: "3 июня 2024",
      views: 1089,
      comments: 28,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Законодательство: "bg-blue-100 text-blue-800",
      Технологии: "bg-purple-100 text-purple-800",
      Маркетинг: "bg-green-100 text-green-800",
      Налоги: "bg-red-100 text-red-800",
      Автоматизация: "bg-yellow-100 text-yellow-800",
      Аналитика: "bg-indigo-100 text-indigo-800",
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Новости и статьи
          </h1>
          <p className="text-gray-600">
            Актуальные новости мира бизнеса и полезные статьи для
            предпринимателей
          </p>
        </div>

        {/* Главная новость */}
        <Card className="mb-8 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={news[0].image}
                alt={news[0].title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <Badge className={getCategoryColor(news[0].category)}>
                {news[0].category}
              </Badge>
              <h2 className="text-2xl font-bold mt-4 mb-3">{news[0].title}</h2>
              <p className="text-gray-600 mb-4">{news[0].description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{news[0].date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{news[0].views}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{news[0].comments}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Остальные новости */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.slice(1).map((article) => (
            <Card
              key={article.id}
              className="hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <Badge
                  className={`${getCategoryColor(article.category)} w-fit`}
                >
                  {article.category}
                </Badge>
                <CardTitle className="text-lg leading-tight">
                  {article.title}
                </CardTitle>
                <CardDescription>{article.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{article.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{article.comments}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
