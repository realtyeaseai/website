'use client'; // Only include this if the component uses interactivity or state

// import Breadcrumb from "@/components/utilities/BreadCrumb";
import Pricing from "@/components/utilities/Pricing";


export default function PricingSection() {
  return (
    <div className="w-full text-white">
      {/* <Breadcrumb pageName="Pricing Plan" pageTitle={Pricing} /> */}
      {/* <Pricing2 priceingClass="pricing-section-2" paddingTop="9" /> */}

      <Pricing />

    </div>
  );
};

function TestimonialSection(){
  return(
    <div>

      <section className="testimonial-section fix section-padding">
        <div className="container">
          <div className="section-title text-center mb-0">
            <span className="sub-content wow fadeInUp inline-flex items-center gap-2">
              <img src="/assets/img/bale.png" alt="Client icon" />
              Clients Feedback
            </span>
            <h2 className="wow fadeInUp mt-2 text-2xl font-semibold" data-wow-delay=".3s">
              We&apos;ve 1250+ Global Clients Say Us
            </h2>
          </div>

          <div className="testimonial-wrapper pt-5">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="lg:w-1/3">
                <div className="testimonial-image">
                  <img src="/assets/img/testimonial/testimonial.png" alt="Testimonial" />
                </div>
              </div>
              <div className="lg:w-2/3 pl-0 lg:pl-5">
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
