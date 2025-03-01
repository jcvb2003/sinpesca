
import React from "react";
import { Link } from "react-router-dom";
import { Users, FileText } from "lucide-react";

const Reports = () => {
  return (
    <div className="container py-6">
      <h1 className="text-2xl font-bold mb-6">Relatórios</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sócios Card */}
        <Link 
          to="/reports/members"
          className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg"
        >
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Users className="text-blue-600" size={24} />
            </div>
            <h2 className="text-xl font-medium">Sócios</h2>
          </div>
          <p className="text-gray-600">
            Gerar relatórios sobre os sócios da associação, incluindo dados demográficos, status, e distribuição regional.
          </p>
        </Link>

        {/* Requerimentos Card */}
        <Link 
          to="/reports/requests"
          className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg"
        >
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <FileText className="text-green-600" size={24} />
            </div>
            <h2 className="text-xl font-medium">Requerimentos</h2>
          </div>
          <p className="text-gray-600">
            Gerar relatórios sobre os requerimentos submetidos, aprovações, rejeições e tempo médio de processamento.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Reports;
