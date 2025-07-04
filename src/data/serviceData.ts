export interface ServiceFilter {
  id: string;
  name: string;
}

export interface Company {
  name: string;
  rating: number;
  reviews: number;
  location: string;
  phone: string;
  services: Record<string, string>;
  activeServices: string[];
}

export interface CategoryData {
  title: string;
  filters: ServiceFilter[];
  companies: Company[];
}

export const serviceData: Record<string, CategoryData> = {
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
          deposits: "до 7% годовых",
        },
        activeServices: ["acquiring", "rko", "credit", "deposits"],
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
        name: "Альфа-Банк",
        rating: 4.6,
        reviews: 2100,
        location: "Москва",
        phone: "+7 495 788-88-78",
        services: {
          acquiring: "от 1,4% с оборота",
          rko: "0₽ при обороте от 300 000₽",
          credit: "от 8,9% годовых",
          deposits: "до 6,5% годовых",
        },
        activeServices: ["acquiring", "rko", "credit", "deposits"],
      },
      {
        name: "Газпромбанк",
        rating: 4.1,
        reviews: 1567,
        location: "Москва",
        phone: "+7 495 913-74-74",
        services: {
          acquiring: "от 1,7% с оборота",
          rko: "от 1200₽/месяц",
          credit: "от 11% годовых",
          deposits: "до 7,8% годовых",
        },
        activeServices: ["acquiring", "rko", "credit", "deposits"],
      },
      {
        name: "Райффайзенбанк",
        rating: 4.4,
        reviews: 998,
        location: "Москва",
        phone: "+7 495 721-99-00",
        services: {
          acquiring: "от 1,9% с оборота",
          rko: "от 1500₽/месяц",
          credit: "от 10,8% годовых",
          deposits: "до 6% годовых",
        },
        activeServices: ["acquiring", "rko", "credit", "deposits"],
      },
      {
        name: "Росбанк",
        rating: 4.2,
        reviews: 1234,
        location: "Москва",
        phone: "+7 495 777-22-99",
        services: {
          acquiring: "от 1,6% с оборота",
          rko: "от 890₽/месяц",
          credit: "от 10,2% годовых",
          deposits: "до 7,2% годовых",
        },
        activeServices: ["acquiring", "rko", "credit", "deposits"],
      },
      {
        name: "МТС Банк",
        rating: 4.3,
        reviews: 876,
        location: "Москва",
        phone: "+7 495 766-01-11",
        services: {
          acquiring: "от 1,5% с оборота",
          rko: "0₽ первые 6 месяцев",
          credit: "от 9,5% годовых",
          deposits: "до 6,8% годовых",
        },
        activeServices: ["acquiring", "rko", "credit", "deposits"],
      },
      {
        name: "Промсвязьбанк",
        rating: 4.0,
        reviews: 745,
        location: "Москва",
        phone: "+7 495 777-77-77",
        services: {
          acquiring: "от 1,8% с оборота",
          rko: "от 1100₽/месяц",
          credit: "от 11,5% годовых",
          deposits: "до 7,5% годовых",
        },
        activeServices: ["acquiring", "rko", "credit", "deposits"],
      },
      {
        name: "Открытие",
        rating: 4.1,
        reviews: 1089,
        location: "Москва",
        phone: "+7 495 797-54-54",
        services: {
          acquiring: "от 1,7% с оборота",
          rko: "от 990₽/месяц",
          credit: "от 10,9% годовых",
          deposits: "до 7% годовых",
        },
        activeServices: ["acquiring", "rko", "credit", "deposits"],
      },
      {
        name: "Модульбанк",
        rating: 4.7,
        reviews: 654,
        location: "Москва",
        phone: "+7 495 215-15-15",
        services: {
          acquiring: "от 1,3% с оборота",
          rko: "0₽ при обороте от 100 000₽",
          credit: "от 8,5% годовых",
          deposits: "до 5,5% годовых",
        },
        activeServices: ["acquiring", "rko", "credit", "deposits"],
      },
      {
        name: "Точка Банк",
        rating: 4.5,
        reviews: 923,
        location: "Москва",
        phone: "+7 495 648-10-10",
        services: {
          acquiring: "от 1,4% с оборота",
          rko: "0₽ первые 3 месяца",
          credit: "от 9,2% годовых",
          deposits: "до 6,2% годовых",
        },
        activeServices: ["acquiring", "rko", "credit", "deposits"],
      },
      {
        name: "Локо-Банк",
        rating: 4.2,
        reviews: 567,
        location: "Москва",
        phone: "+7 495 777-75-75",
        services: {
          acquiring: "от 1,9% с оборота",
          rko: "от 1200₽/месяц",
          credit: "от 12% годовых",
          deposits: "до 8,5% годовых",
        },
        activeServices: ["acquiring", "rko", "credit", "deposits"],
      },
      {
        name: "Совкомбанк",
        rating: 4.1,
        reviews: 834,
        location: "Москва",
        phone: "+7 495 777-77-22",
        services: {
          acquiring: "от 1,6% с оборота",
          rko: "от 950₽/месяц",
          credit: "от 10,7% годовых",
          deposits: "до 7,3% годовых",
        },
        activeServices: ["acquiring", "rko", "credit", "deposits"],
      },
      {
        name: "УБРиР",
        rating: 4.0,
        reviews: 456,
        location: "Екатеринбург",
        phone: "+7 343 251-71-71",
        services: {
          acquiring: "от 1,8% с оборота",
          rko: "от 1300₽/месяц",
          credit: "от 11,2% годовых",
          deposits: "до 7,8% годовых",
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
    ],
  },
};
