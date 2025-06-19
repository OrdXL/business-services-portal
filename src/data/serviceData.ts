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
        },
        activeServices: ["acquiring", "rko", "credit"],
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
        },
        activeServices: ["acquiring", "rko", "credit"],
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
