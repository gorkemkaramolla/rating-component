import React, { useState, useEffect, useRef } from "react";
type Props = {
  setActiveButton: React.Dispatch<React.SetStateAction<Number>>;
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>;
  activeButton: Number;
};

const RateForm = (props: Props) => {
  const [number, setNumber] = useState(0);
  useEffect(() => {}, [number]);

  const handleRate = (i: number) => {
    props.setActiveButton(i);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.setIsSubmit(true);
  };

  const circlerBtn = (i: number, activeString: string) => {
    return (
      <button
        type="button"
        key={i}
        onClick={() => handleRate(i)}
        className={`circle-btn ${activeString}`}
      >
        {i}
      </button>
    );
  };

  return (
    <form onSubmit={handleSubmit} action="" className="container">
      <button type="button" id="star">
        <img src={"../icon-star.svg"} alt="Star Icon" />
      </button>
      <h2 className="h1">How did we do?</h2>
      <p className="p">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="circle-btn-wrapper">
        {[1, 2, 3, 4, 5].map((i) => {
          return circlerBtn(i, i == props.activeButton ? "active" : "");
        })}
      </div>

      <input type="submit" className="btn" />
    </form>
  );
};

export default RateForm;
