import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import ServiceFilters from "@/components/ServiceFilters";
import CompanyList from "@/components/CompanyList";
import { serviceData } from "@/data/serviceData";

const ServiceCategory = () => {
  const { category } = useParams();
  const [activeFilter, setActiveFilter] = useState("all");

  const currentCategory = serviceData[category as keyof typeof serviceData];

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold">Категория не найдена</h1>
        </div>
      </div>
    );
  }

  const filteredCompanies = currentCategory.companies.filter((company) =>
    activeFilter === "all"
      ? true
      : company.activeServices.includes(activeFilter),
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {currentCategory.title}
          </h1>
          <p className="text-gray-600">
            Сравните предложения и выберите лучшие условия
          </p>
        </div>

        <ServiceFilters
          filters={currentCategory.filters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <CompanyList
          companies={filteredCompanies}
          filters={currentCategory.filters}
        />
      </div>
    </div>
  );
};

export default ServiceCategory;
