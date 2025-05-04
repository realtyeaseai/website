interface Plan {
    name: string;
    description: string;
    features: string[];
    disabledFeatures?: string[];
    highlight: boolean;
    tag?: string;
  }
  
  export default function PricingCards() {
    const businessPlans = [ {
                name: "Basic",
                description: "Try the essentials and see what a virtual assistant can do.",
                features: [
                  "Assist in drafting detailed business plans",
                  "Organize and format SWOT analysis",
                  "Maintain documentation for funding and grants",
                  "Email support only",
                ],
                disabledFeatures: [
                  "Basic email & chat support",
                  "Unlimited task submissions (1 active at a time)",
                  "Monthly performance reports",
                ],
                highlight: false,
              },
              {
                name: "Intermediate",
                description: "Ideal for individuals who need advanced features for professional works",
                tag: "Most Popular",
                features: [
                  "Conduct market research and competitor analysis",
                  "Gather financial data for projections and budgeting",
                  "Outline business models (e.g., BMC templates)",
                  "Help with licensing, compliance, and registration tracking",
                  "Draft executive summaries and value propositions tailored to investors or partners",
                ],
                disabledFeatures: [],
                highlight: true,
              },
              {
                name: "Advanced",
                description: "Tailored virtual support for growing teams and property networks.",
                features: [
                  "Create pitch decks and investor presentations",
                  "Compile performance reports for stakeholders",
                  "Track KPIs and operational goals",
                  "Provide strategic insights and recommendations for business model scalability and profitability",
                ],
                disabledFeatures: [],
                highlight: false,
              },];
  
              const marketingPlans = [ {
                name: "Basic",
                description: "Try the essentials and see what a virtual assistant can do.",
                features: [
                  "Assist in drafting detailed business plans",
                  "Organize and format SWOT analysis",
                  "Maintain documentation for funding and grants",
                  "Email support only",
                ],
                disabledFeatures: [
                  "Basic email & chat support",
                  "Unlimited task submissions (1 active at a time)",
                  "Monthly performance reports",
                ],
                highlight: false,
              },
              {
                name: "Intermediate",
                description: "Ideal for individuals who need advanced features for professional works",
                tag: "Most Popular",
                features: [
                  "Conduct market research and competitor analysis",
                  "Gather financial data for projections and budgeting",
                  "Outline business models (e.g., BMC templates)",
                  "Help with licensing, compliance, and registration tracking",
                  "Draft executive summaries and value propositions tailored to investors or partners",
                ],
                disabledFeatures: [],
                highlight: true,
              },
              {
                name: "Advanced",
                description: "Tailored virtual support for growing teams and property networks.",
                features: [
                  "Create pitch decks and investor presentations",
                  "Compile performance reports for stakeholders",
                  "Track KPIs and operational goals",
                  "Provide strategic insights and recommendations for business model scalability and profitability",
                ],
                disabledFeatures: [],
                highlight: false,
              },];
    
              const webDevPlans = [ {
                name: "Basic",
                description: "Try the essentials and see what a virtual assistant can do.",
                features: [
                  "Assist in drafting detailed business plans",
                  "Organize and format SWOT analysis",
                  "Maintain documentation for funding and grants",
                  "Email support only",
                ],
                disabledFeatures: [
                  "Basic email & chat support",
                  "Unlimited task submissions (1 active at a time)",
                  "Monthly performance reports",
                ],
                highlight: false,
              },
              {
                name: "Intermediate",
                description: "Ideal for individuals who need advanced features for professional works",
                tag: "Most Popular",
                features: [
                  "Conduct market research and competitor analysis",
                  "Gather financial data for projections and budgeting",
                  "Outline business models (e.g., BMC templates)",
                  "Help with licensing, compliance, and registration tracking",
                  "Draft executive summaries and value propositions tailored to investors or partners",
                ],
                disabledFeatures: [],
                highlight: true,
              },
              {
                name: "Advanced",
                description: "Tailored virtual support for growing teams and property networks.",
                features: [
                  "Create pitch decks and investor presentations",
                  "Compile performance reports for stakeholders",
                  "Track KPIs and operational goals",
                  "Provide strategic insights and recommendations for business model scalability and profitability",
                ],
                disabledFeatures: [],
                highlight: false,
              },];
    return (
      <>
        <PricingSection title="Business Plan Development" plans={businessPlans} />
        <PricingSection title="Marketing & Social Media Management" plans={marketingPlans} />
        <PricingSection title="Web Development" plans={webDevPlans} />
      
      </>
    );
  }
  
  
  function PricingSection({ title, plans }: { title: string; plans: Plan[] }) {
    return (
      <div className="dark:bg-black bg-white grid place-items-center pt-34">
        <h2 className="text-black dark:text-white text-center text-5xl w-[90%] mb-10 font-bold">
          {title}
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative p-8 rounded-2xl border border-[#ffffff] ${
                plan.highlight
                  ? "bg-gradient-to-b from-[#1ca2dc] to-blue-900 border-blue-500"
                  : "bg-neutral-900 border-neutral-800"
              }`}
            >
              {plan.tag && (
                <div className="absolute -top-3 right-4 bg-[#3d3994] text-white text-xs px-3 py-1 rounded-full shadow-md ">
                  {plan.tag}
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-neutral-300 mb-6">{plan.description}</p>
              <button className="bg-white text-black font-semibold py-2 px-6 w-full cursor-pointer rounded-md mb-6 hover:bg-gray-200 transition">
                Get started
              </button>
              <ul className="space-y-3 text-sm">
                {plan.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
                {plan.disabledFeatures?.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start text-neutral-500 line-through">
                    <span className="mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }