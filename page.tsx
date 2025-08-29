// src/app/page.tsx
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { AccountProgressCard } from "./components/AccountProgressCard";
import { FranchiseesOnboardCard } from "./components/FranchiseesOnboardCard";
import { KeyInsightsCard } from "./components/KeyInsightsCard";
import { FinancialWellbeingCard } from "./components/FinancialWellbeingCard";
import { ProspectLeadsSection } from "./components/ProspectLeadsSection";
import { MyUploadsTable } from "./components/MyUploadsTable";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 md:p-8 space-y-6">
          {/* Main Dashboard Grid: Account Progress spans 2 rows, others fill the remaining 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
            {/* Account Progress Card - spans 2 rows on medium and larger screens */}
            {/* This will make its height roughly equal to two cards stacked on the right */}
            <div className="md:row-span-2"> {/* Changed from md:row-span-4 to md:row-span-2 */}
              <AccountProgressCard />
            </div>

            {/* Total Franchisees Onboard Card - fills first spot in right columns */}
            <FranchiseesOnboardCard />

            {/* Key Insights Card - fills second spot in right columns */}
            <KeyInsightsCard />

            {/* Financial Wellbeing Card - fills third spot (first in second row of right columns) */}
            <FinancialWellbeingCard />

            {/* Prospect Leads Section - fills fourth spot (second in second row of right columns) */}
            <ProspectLeadsSection />
          </div>

          {/* My Uploads Table - this remains full width below the main card grid */}
          <MyUploadsTable />
        </main>
      </div>
    </div>
  );
}
