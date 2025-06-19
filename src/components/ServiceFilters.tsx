import { Badge } from "@/components/ui/badge";
import { ServiceFilter } from "@/data/serviceData";

interface ServiceFiltersProps {
  filters: ServiceFilter[];
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
}

const ServiceFilters = ({
  filters,
  activeFilter,
  onFilterChange,
}: ServiceFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {filters.map((filter) => (
        <Badge
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "outline"}
          className="cursor-pointer px-4 py-2"
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.name}
        </Badge>
      ))}
    </div>
  );
};

export default ServiceFilters;
