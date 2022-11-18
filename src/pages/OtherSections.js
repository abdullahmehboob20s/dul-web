import History from "sections/OtherSections/History";
import InvestingProcess from "sections/OtherSections/InvestingProcess";
import InvestmentStrategy from "sections/OtherSections/InvestmentStrategy";
import InvetmentProperty from "sections/OtherSections/InvetmentProperty";
import PropertyManagement from "sections/OtherSections/PropertyManagement";
import Quote from "sections/OtherSections/Quote";
import SmartInvestment from "sections/OtherSections/SmartInvestment";
import Story from "sections/OtherSections/Story";
import TailoredOpportunities from "sections/OtherSections/TailoredOpportunities";
import Team from "sections/OtherSections/Team";

function OtherSections() {
  return (
    <div className="py-8 lg:py-6vw">
      <div className="mb-16 lg:mb-10vw">
        <Team />
      </div>
      <div className="mb-16 lg:mb-10vw">
        <InvestmentStrategy />
      </div>
      <div className="mb-16 lg:mb-10vw">
        <InvetmentProperty />
      </div>
      <div className="mb-16 lg:mb-10vw">
        <SmartInvestment />
      </div>
      <div className="mb-16 lg:mb-10vw">
        <InvestingProcess />
      </div>
      <div className="mb-16 lg:mb-10vw">
        <TailoredOpportunities />
      </div>
      <div className="mb-16 lg:mb-10vw">
        <History />
      </div>
      <div className="mb-16 lg:mb-10vw">
        <Quote />
      </div>
      <div className="mb-16 lg:mb-10vw">
        <Story />
      </div>
      <PropertyManagement />
    </div>
  );
}

export default OtherSections;
