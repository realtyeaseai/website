import { TopNavbar } from "@/components/TopNabbar";

export default function AboutUs() {
    return (
        <div className="min-h-[100dvh] pt-24 w-full flex items-center justify-center bg-black border">
            
            <TopNavbar/>
            
            <div className="flex flex-col items-center justify-center w-full h-full bg-black">
                <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
                <p className="text-neutral-400 text-lg text-center px-4">
                    RealtyEase is a leading real estate technology company dedicated to simplifying the home buying and selling process. Our innovative platform connects buyers, sellers, and agents, making real estate transactions seamless and efficient.
                </p>
                <p className="text-neutral-400 text-lg text-center px-4 mt-4">
                    With a focus on user experience and cutting-edge technology, we empower our users with the tools they need to make informed decisions in the real estate market.
                </p>
            </div>
        
        </div>   
    );
}