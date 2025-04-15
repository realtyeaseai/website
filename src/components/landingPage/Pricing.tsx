'use client';
export default function Pricing() {
    return(
        <div className="min-h-[100vh] w-full bg-black flex flex-col justify-center items-center pt-10 pb-10">

            <h1 className="text-4xl font-bold text-center mt-10 mb-1 text-bold p-2">We offer great prices for our services</h1>
            <p className="text-neutral-400 mb-10 p-2 text-center">Select the pack that you need based on who you are</p>

            <PricingCard />
                
        </div>
    )
}

const content: { planName: string; description: string; price: string; features: string[]; handleClick?: () => void }[] = [
    {
        planName: "Freebie", 
        description: "This is a free plan for testing purposes.",
        price: "Free", 
        features: 
        [
            "1 active task at a time (e.g., “Schedule a visit”)",
            "Property listing assistance (up to 2 listings/month)", 
            "1 social media post/month",
            "Email support only",
            "Limited access to premium features",
            "Basic analytics and reporting",
            "Community forum access",
        ],
        handleClick: () => {
            console.log("Clicked on Choose Plan button!"); 
        },
    },
    {
        planName: "Standard Plan", 
        description: "This is a standard plan for regular users.",
        price: "$25.99", 
        features: 
        [
            "Unlimited task submissions (1 active at a time)", 
            "Up to 10 property listings/month", 
            "Lead generation + follow-ups (up to 30/month)",
            "Meeting scheduling & calendar sync",
            "Social media content planning (up to 5 posts/month)",
            "Basic email & chat support",
            "Monthly performance reports",
        ],
        handleClick: () => {
            console.log("Clicked on Choose Plan button!"); 
        },
    },
    {
        planName: "Premium Plan", 
        description: "This is a premium plan for advanced users.",
        price: "$99.99", 
        features: 
        [
            "Unlimited tasks + parallel task handling", 
            "Bulk listing & multi-account management", 
            "Client communication support (email, call, chat)",
            "Dedicated assistant team",
            "Social media content planning (up to 5 posts/month)",
            "24/7 priority support",
            "Team access + admin controls",
        ],
        handleClick: () => {
            console.log("Clicked on Choose Plan button!"); 
        },
    },
]

function PricingCard() {

    return (
        <div className="flex flex-col md:flex-row gap-10 items-center w-full justify-center p-4">
            {content.map((item, index) => (
                <div key={index} className="bg-[#20202015] shadow-lg rounded-[12px] p-6 max-w-sm flex-[.3] h-[600px] border border-neutral-700 hover:border-neutral-500 transition-all duration-300 ease-in-out">
    
                    <h2 className="text-2xl font-semibold mb-1">{item.planName}</h2>
                    <h4 className="text-neutral-400 mb-4">{item.description}</h4>
                    <span className="flex mb-4 gap-2 items-end justify-start">
                        <p className="text-neutral-200 text-2xl ">{item.price}</p>
                        <p className="text-neutral-400 ">/month</p>
                    </span>
                    
                    <span className="flex justify-center mb-6">
                        <button onClick={()=>item.handleClick} className="bg-white z-10 hover:bg-[#ffffffe3] transition-all duration-100 ease-in-out text-black w-[88%] px-4 py-2 rounded cursor-pointer">Choose Plan</button>
                    </span>
                    <ul className="list-disc list-outside mb-4 text-[14px] pl-4 md:flex md:flex-col md:justify-evenly h-[60%]">
                        {item.features.map((feature, index) => (
                            <li key={index} className="pl-2">{feature}</li>
                        ))}
                    </ul>
        
                </div>
            ))}
        </div>
    );
};