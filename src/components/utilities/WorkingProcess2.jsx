import Image from "next/image";

export const WorkingProcess2 = () => {
  const processSteps = [
    {
      step: "01",
      title: "Market Research",
      desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae",
    },
    {
      step: "02",
      title: "Process and Analysis",
      desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae",
    },
    {
      step: "03",
      title: "Successful Project",
      desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae",
    },
  ];

  return (
    <section className="p-3 py-20 bg-neutral-900 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-neutral-400 mb-2">Working Process</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            We Complete Our Work to Follow <br /> Some Easy Ways
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {processSteps.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="text-3xl font-bold text-white border border-neutral-700 w-16 h-16 flex items-center justify-center rounded-full">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-neutral-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src="/assets/img/business-mens-grsl.jpg"
              alt="Working Process"
              width={500}
              height={500}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
