"use client";
import CountUp from "react-countup";

const Counter = ({ end, decimals }) => {
  return (
    <CountUp
      end={end ? end : 100}
      duration={3}
      decimals={decimals ? decimals : 0}
    >
      {({ countUpRef, start }) => (
        <span className="count" data-from="0" data-to={end} ref={countUpRef}>
          0
        </span>
      )}
    </CountUp>
  );
};

export default Counter;
