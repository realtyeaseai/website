import Counter from "./Counter";

const FunFactCounter = ({ style }) => {
  const data = [
    {
      end: 98,
      suffix: "%",
      title: "Average Conversion Rate",
      desc: "Sed perspiciatis unde omnis este natus sit volupta",
    },
    {
      end: 35,
      suffix: "m+",
      title: "Traffic Generated",
      desc: "Sed perspiciatis unde omnis este natus sit volupta",
    },
    {
      end: 97,
      suffix: "%",
      title: "Positive Customer Review",
      desc: "Sed perspiciatis unde omnis este natus sit volupta",
    },
    {
      end: 92,
      suffix: "%",
      title: "Professional Team Members",
      desc: "Sed perspiciatis unde omnis este natus sit volupta",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-neutral-900 text-white text-center p-6 rounded-xl border border-neutral-700 hover:border-white transition-all duration-300"
        >
          <h2 className="text-4xl font-bold mb-2">
            <Counter end={item.end} />
            {item.suffix}
          </h2>
          <h6 className="text-lg font-semibold mb-2">{item.title}</h6>
          <p className="text-neutral-400 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default FunFactCounter;
