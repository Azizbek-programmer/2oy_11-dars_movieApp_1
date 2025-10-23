import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { memo } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-200 dark:bg-black dark:text-white">
      {/* Header */}
      <Header />

      {/* Content */}
      <main className="flex-grow px-4 py-6 pb-16">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default memo(MainLayout);
