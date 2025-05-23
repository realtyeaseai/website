// components/AgentTag.tsx

interface AgentTagProps {
    type: 'property-owner' | 'agent' | 'service-provider';
  }
  
  const bgClasses = {
    'property-owner': 'bg-[#1ca2dc50]',
    'agent': 'bg-[#1ca2dc50]',
    'service-provider': 'bg-[#1ca2dc50]',
  };
  
  const labelTexts = {
    'property-owner': '#PROPERTY OWNER',
    'agent': '#AGENT',
    'service-provider': '#SERVICE PROVIDER',
  };
  
  export default function AgentTag({ type }: AgentTagProps) {
    const bgColor = bgClasses[type];
    const label = labelTexts[type];
  
    return (
      <span
        className={`text-sm text-gray-900 ${bgColor} px-3 py-2 rounded-md font-extrabold text-center w-fit min-w-[80px]`}
      >
        {label}
      </span>
    );
  }
  