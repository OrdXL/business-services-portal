
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Phone, Mail, Clock, Search, HelpCircle } from "lucide-react";

const Support = () => {
  const faqItems = [
    {
      question: "Как создать заказ на платформе?",
      answer: "Выберите нужную услугу, заполните техническое задание, укажите бюджет и сроки. После этого исполнители смогут откликнуться на ваш заказ."
    },
    {
      question: "Как происходит оплата услуг?",
      answer: "Оплата происходит через безопасную систему эскроу. Деньги переводятся исполнителю только после выполнения работы и вашего подтверждения."
    },
    {
      question: "Что делать, если возникли проблемы с исполнителем?",
      answer: "Обратитесь в службу поддержки через чат или по телефону. Мы поможем решить любые спорные ситуации в течение 24 часов."
    },
    {
      question: "Как выбрать надёжного исполнителя?",
      answer: "Обращайте внимание на рейтинг, отзывы, портфолио и статус 'Проверенный исполнитель'. Также рекомендуем общаться с исполнителем перед началом работы."
    },
    {
      question: "Можно ли вернуть деньги, если работа не выполнена?",
      answer: "Да, если исполнитель не выполнил работу согласно техническому заданию, вы можете вернуть деньги через службу поддержки."
    },
    {
      question: "Как стать исполнителем на платформе?",
      answer: "Зарегистрируйтесь, заполните профиль, подтвердите документы и пройдите верификацию. После этого вы сможете откликаться на заказы."
    }
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Онлайн-чат",
      description: "Ответим в течение 5 минут",
      action: "Открыть чат",
      available: "24/7"
    },
    {
      icon: Phone,
      title: "Телефон",
      description: "+7 (800) 123-45-67",
      action: "Позвонить",
      available: "Пн-Пт 9:00-21:00"
    },
    {
      icon: Mail,
      title: "Email",
      description: "support@biznesservice.ru",
      action: "Написать",
      available: "Ответ в течение 2 часов"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Центр поддержки</h1>
          <p className="text-gray-600">Мы готовы помочь вам в любое время</p>
        </div>

        {/* Способы связи */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <method.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <CardTitle className="text-lg">{method.title}</CardTitle>
                <p className="text-gray-600">{method.description}</p>
              </CardHeader>
              <CardContent>
                <Button className="w-full mb-2">{method.action}</Button>
                <div className="flex items-center justify-center gap-1 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{method.available}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* FAQ */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-semibold">Часто задаваемые вопросы</h2>
            </div>
            
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Поиск по вопросам..."
                  className="pl-10"
                />
              </div>
            </div>

            <Accordion type="single" collapsible className="space-y-2">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Форма обратной связи */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h2>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="email@example.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Тема обращения</label>
                    <Input placeholder="Кратко опишите суть вопроса" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Опишите вашу проблему или вопрос подробнее..."
                      rows={5}
                    />
                  </div>
                  
                  <Button className="w-full">Отправить сообщение</Button>
                </form>
              </CardContent>
            </Card>

            {/* Статистика поддержки */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Card className="text-center p-4">
                <div className="text-2xl font-bold text-blue-600">< 5 мин</div>
                <div className="text-sm text-gray-600">Среднее время ответа</div>
              </Card>
              <Card className="text-center p-4">
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Довольных клиентов</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
