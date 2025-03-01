import React from "react";
import { DevelopmentCard } from "@/components/common/DevelopmentCard";
import { PageLayout } from "@/components/layout/PageLayout";

export default function MembersReport() {
  return (
    <PageLayout>
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-8">Relatório de Membros</h1>
        <DevelopmentCard />
      </div>
    </PageLayout>
  );
}