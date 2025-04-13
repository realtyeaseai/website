import Link from "next/link";

const Pricing = () => {
  return (
    <section className="w-full bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <img src="/assets/img/bale.png" alt="img" className="w-8 h-8 mr-2" />
            <span className="text-sm font-semibold uppercase text-gray-500">Pricing Package</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200">
            Popular Pricing Packages For You 
          </h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          {[
            {
              title: "Basic Plan",
              price: 19,
              features: [
                "Property Management Support",
                "Lead Generation & Marketing",
                "Client Relations",
                "Automation templates",
                "Great Customer Support"
              ],
            },
            {
              title: "Premium Plan",
              price: 53,
              active: true,
              features: [
                "Project Coordination",
                "Vendor & Subcontractor Management",
                "Time & Budget Tracking",
                "Automation templates",
                "Great Customer Support"
              ],
            },
            {
              title: "Customized Plan",
              price: 99,
              features: [
                "Administrative Support",
                "Customer Service",
                "Sales & Marketing",
                "Automation templates",
                "Great Customer Support"
              ],
            },
          ].map(({ title, price, features, active }, i) => (
            <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8" key={i}>
              <div className={`rounded-2xl shadow-2xl p-6 relative bg-gray-800 ${active ? "border-2 border-gray-200" : ""}`}>
                <div className="absolute top-0 right-0">
                  <img src={`/assets/img/${i === 1 ? "pricing-shape-2" : "pricing-shape"}.png`} alt="shape" className="w-12" />
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-sm text-blue-200">For Small Businesses</p>
                </div>
                <ul className="mb-6 space-y-2 text-green-300">
                  {features.map((feat, j) => (
                    <li key={j} className={["Automation templates", "Great Customer Support"].includes(feat) ? "text-red-200" : ""}>
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="mb-4">
                  <h2 className="text-2xl font-extrabold text-white">
                    ${price} <span className="text-sm font-medium">/month</span>
                  </h2>
                  <p className="text-sm text-gray-500">For Small Businesses</p>
                </div>
                <Link href="/contact" className="inline-block mt-2 bg-transparent border-2  border-black text-gray-100 px-4 py-2 rounded-2xl hover:bg-blue-500 hover:text-white transition">
                  Choose Package
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Pricing2 = ({ priceingClass = "", paddingTop = "0" }) => {
  return (
    <section className={`py-${paddingTop} ${priceingClass} bg-gray-100`} id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-blue-500 block mb-2">Pricing Package</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            We Offer Amazing Pricing Package <br />
            Keep Under Budget
          </h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          {[
            {
              title: "Basic Plan",
              price: 12,
              desc: "Sed ut perspiciatis unde omnis istewse natus sit voluptatem accusa",
              arrow: "arrow.png",
            },
            {
              title: "Premium Plan",
              price: 45,
              desc: "Sed ut perspiciatis unde omnis istewse natus sit voluptatem accusa",
              arrow: "arrow-2.png",
              active: true,
            },
            {
              title: "Customized Plan",
              price: 98,
              desc: "Sed ut perspiciatis unde omnis istewse natus sit voluptatem accusa",
              arrow: "arrow.png",
            },
          ].map(({ title, price, desc, arrow, active }, i) => (
            <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8" key={i}>
              <div className={`rounded-lg shadow-lg p-6 bg-white relative ${active ? "border-2 border-blue-500" : ""}`}>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-sm text-gray-500">{desc}</p>
                </div>
                <Link href="/contact" className="inline-block mt-4 mb-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Choose Package
                </Link>
                <div className="flex items-center mb-4">
                  <h2 className="text-3xl font-bold text-gray-800 mr-4">
                    <sub className="text-xl">$</sub>{price}<span className="text-sm">/month</span>
                  </h2>
                  <div className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                    23% OFF
                  </div>
                </div>
                <img src={`/assets/img/${arrow}`} alt="arrow" className="w-8 mb-4" />
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Blog & Article Copy",
                    "eCommerce Copy",
                    "Social Media Copy",
                    "Content Writing",
                    "Ad Providing",
                  ].map((feature, j) => (
                    <li key={j} className="flex items-center">
                      <i className="far fa-check text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
