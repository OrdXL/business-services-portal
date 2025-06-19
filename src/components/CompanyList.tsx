import CompanyCard from "@/components/CompanyCard";
import { Company, ServiceFilter } from "@/data/serviceData";

interface CompanyListProps {
  companies: Company[];
  filters: ServiceFilter[];
}

const CompanyList = ({ companies, filters }: CompanyListProps) => {
  if (companies.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">
          По выбранному фильтру компании не найдены
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {companies.map((company, index) => (
        <CompanyCard key={index} company={company} filters={filters} />
      ))}
    </div>
  );
};

export default CompanyList;
