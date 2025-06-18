import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const location = useLocation();

  const tabs = [
    { name: "Главная", path: "/" },
    { name: "Все услуги", path: "/services" },
    { name: "Рейтинги", path: "/ratings" },
    { name: "Новости", path: "/news" },
    { name: "Поддержка", path: "/support" },
  ];

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Б</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                БизнесСервис
              </span>
            </Link>

            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Поиск услуг для бизнеса..."
                className="pl-10 bg-gray-50 border-0 focus:bg-white"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <User className="w-4 h-4 mr-2" />
              Войти
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600">
              Для бизнеса
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-8 border-t pt-4 pb-4">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.path}
              className={`text-sm font-medium transition-colors pb-2 border-b-2 ${
                location.pathname === tab.path
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-600 hover:text-gray-900 border-transparent hover:border-gray-300"
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
