import "./App.css";
import svg from "./icon-star.svg";
import svgThanks from "./illustration-thank-you.svg";
function App() {
    return (
        <div className="App">
            <div className="container">
                <span id="star" className="circle-btn">
                    <img src={svg} alt="Star Icon" />
                </span>
                <h2 className="h1">How did we do?</h2>
                <p className="p">
                    Please let us know how we did with your support request. All
                    feedback is appreciated to help us improve our offering!
                </p>
                <div className="circle-btn-wrapper">
                    <span className="circle-btn">1</span>
                    <span className="circle-btn">2</span>
                    <span className="circle-btn">3</span>
                    <span className="circle-btn">4</span>
                    <span className="circle-btn">5</span>
                </div>

                <button className="btn">SUBMIT </button>
            </div>
            {/* <div className="container">
                <div className="thanksWrapper">
                    <div className="img-holder">
                        <img src={svgThanks} alt="Star Icon" />
                    </div>
                    <p className="star-selected">You selected 4 out of 5</p>
                    <h2 className="h1">Thank you!</h2>
                    <p className="p">
                        We appreciate you taking the time to give a rating. If
                        you ever need more support, don't hesitate to get in
                        touch!
                    </p>
                </div>
            </div> */}
        </div>
    );
}

export default App;
