import React from "react";

type Props = {
  activeButton: Number;
};

const Thanks: React.FC<Props> = (props: Props) => {
  return (
    <div className="container">
      <div className="thanksWrapper">
        <div className="img-holder">
          <img src="illustration-thank-you.svg" alt="Star Icon" />
        </div>
        <p className="star-selected">
          You selected {props.activeButton.toString()} out of 5
        </p>
        <h2 className="h1">Thank you!</h2>
        <div className="p" id="thanks-p">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </div>
      </div>
    </div>
  );
};
export default Thanks;
