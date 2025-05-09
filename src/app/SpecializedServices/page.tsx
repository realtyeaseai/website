import Link from "next/link";

interface Plan {
    name: string;
    description: string;
    features: string[];
    disabledFeatures?: string[];
    highlight: boolean;
    tag?: string;
  }
  
  export default function PricingCards() {
   const businessPlans = [
  {
    name: "Basic",
    description: "Essential support to get started with your business planning.",
    features: [
      "Assist in drafting detailed business plans",
      "Organize and format SWOT analysis",
      "Maintain documentation for funding and grants",
      "Email support only"
    ],
    disabledFeatures: ["Conduct market research and competitor analysis", // Not available in Basic
      "Gather financial data for projections and budgeting", // Not available in Basic
      "Outline business models (e.g., BMC templates)", // Not available in Basic
      "Help with licensing, compliance, and registration tracking", // Not available in Basic
      "Draft executive summaries and value propositions tailored to investors or partners", // Not available in Basic
      "Create pitch decks and investor presentations", // Not available in Basic
      "Support preparation for investor meetings and due diligence requests", // Not available in Basic
      "Track KPIs and operational goals", // Not available in Basic
      "Provide strategic insights and recommendations to improve scalability, profitability, and market positioning", // Not available in Basic
    ],
    highlight: false,
  },
  {
    name: "Pro",
    description: "Comprehensive support for growing businesses with strategic insights.",
    tag: "Most Popular",
    features: [
      "All Basic Features",      
      // Pro features
      "Conduct market research and competitor analysis",
      "Gather financial data for projections and budgeting",
      "Outline business models (e.g., BMC templates)",
      "Help with licensing, compliance, and registration tracking",
      "Draft executive summaries and value propositions tailored to investors or partners"
    ],
    disabledFeatures: [ "Create pitch decks and investor presentations", // Not available in Pro
      "Support preparation for investor meetings and due diligence requests", // Not available in Pro
      "Track KPIs and operational goals", // Not available in Pro
      "Provide strategic insights and recommendations to improve scalability, profitability, and market positioning" // Not available in Pro],
    ],
    highlight: true,
  },
  {
    name: "Elite",
    description: "Complete support for high-growth teams and enterprise-level projects.",
    features: [
     "All Basic and Pro Features",      
      // Elite features
      "Create pitch decks and investor presentations",
      "Support preparation for investor meetings and due diligence requests",
      "Track KPIs and operational goals",
      "Provide strategic insights and recommendations to improve scalability, profitability, and market positioning"
    ],
    disabledFeatures: [],
    highlight: false,
  }
];

  
             const marketingPlans = [
  {
    name: "Basic",
    description: "Social media essentials to build your online presence.",
    features: [
      "Write engaging captions for posts and stories",
      "Hashtag research & trend tracking",
      "Reply to comments and direct messages",
      "Write platform-appropriate content",
      "Create content for 3-5 posts weekly"
    ],
    disabledFeatures: [
      "Managing content calendars",
      "Analyzing performance reports",
      "Collaborating with influencers",
      "Visual content planning",
      "Paid ad support or strategy",
      "Custom campaigns"
    ],
    highlight: false,
  },
  {
    name: "Pro",
    description: "Broader support for managing and growing your social channels.",
    tag: "Most Popular",
    features: [
      "Manage and update content calendars",
      "Monitor brand mentions & reputation",
      "Analyze insights and performance data",
      "Coordinate with influencers & partners",
      "Suggest creative ideas (polls, quizzes, story formats)",
      "Ensure consistent posting: 3-5 static posts/week"
    ],
    disabledFeatures: [
      "Ad management",
      "Full campaign strategy",
      "Advanced video content",
      "Cross-platform consistency planning"
    ],
    highlight: true,
  },
  {
    name: "Elite",
    description: "Complete social media strategy, design, and execution support.",
    features: [
      "Everything in Basic & Pro",
      "Run and manage ads (on request)",
      "Develop full campaign strategies using analytics",
      "Create videos & static post content (4-5 per week)",
      "Design content aligned with brand guidelines",
      "Maintain & update content calendars weekly",
      "Ensure consistent posting across all platforms"
    ],
    disabledFeatures: [],
    highlight: false,
  }
];

    
              const webDevPlans = [
  {
    name: "Basic",
    description: "Essential support for keeping your website running smoothly.",
    features: [
      "Website updates & edits",
      "Use builders like WordPress or Wix",
      "Assist with simple page creation",
      "Basic layout & text improvements",
      "Team support for web tasks"
    ],
    disabledFeatures: [
      "Advanced design or features",
      "Device testing",
      "Performance tracking",
      "Custom workflows or tools",
      "API/automation setup",
      "Unlimited tasks (1 active at a time)",
      "Monthly reports"
    ],
    highlight: false,
  },
  {
    name: "Pro",
    description: "Advanced help for professionals who want more control and features.",
    tag: "Most Popular",
    features: [
      "Build and improve pages independently",
      "Mobile and cross-device testing",
      "Add interactive features",
      "Collaborate on content & design",
      "Streamlined content updates"
    ],
    disabledFeatures: [
      "Project management",
      "Custom integrations",
      "AI-based tools",
      "Team training or documentation"
    ],
    highlight: true,
  },
  {
    name: "Elite",
    description: "Complete website support for growing teams — all features included.",
    features: [
      "Everything in Basic & Pro",
      "AI-powered insights",
      "Full project & sprint management",
      "UX audits & improvements",
      "Custom workflows & publishing",
      "API integrations & automation",
      "Internal team training",
      
    ],
    disabledFeatures: [],
    highlight: false,
  }
];

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
      <div className="dark:bg-black text-white bg-white grid place-items-center pt-34">
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
              <Link href="/contact">
              <button className="bg-white text-black font-semibold py-2 px-6 w-full cursor-pointer rounded-md mb-6 hover:bg-gray-200 transition">
                Get started
              </button>
              </Link>
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