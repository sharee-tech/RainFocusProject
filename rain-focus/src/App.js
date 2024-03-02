// import logo from "./logo.svg";
import "./App.css";
import logo from "./rain-focus-logo.png";
import person from "./person-portal.png";

function App() {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          crossorigin="anonymous"
        />
        <title>RainFocus Summit</title>
      </head>
      <body>
        {/* <Header>First Header</Header>
        <Header>Second Header</Header> */}
        <Header />
        <main>
          <section>
            <h2>Event setup guide</h2>
            <p>
              See the available list of modules below. We suggest that you start
              with the attendee module.
            </p>
          </section>
          <section>
            <hr></hr>
            <div style={{ display: "inline-block", verticalAlign: "middle" }}>
              <img
                src={person}
                alt="Person Portal Image"
                style={{ width: "35px", display: "inline-block" }}
              />
            </div>
            <div
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                marginLeft: "20px",
              }}
            >
              <h3
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  margin: 0,
                }}
              >
                Org Settings
              </h3>
            </div>
          </section>
          <section>
            <p>
              <b>Step: 1 </b>Base settings.
            </p>
          </section>
          <section>
            <StepOne />
          </section>
          <section>
            <StepTwo />
          </section>
        </main>
      </body>
    </>
  );
}

// function Header({ children }) {
//   return <header>{children}</header>;
// }

function Header() {
  return (
    <>
      <div className="header-row">
        <div className="left-sidebar">
          <img src={logo} alt="RainFocus Logo" style={{ width: "89px" }} />
        </div>
        <div className="main-content">
          <h1>RainFocus Summit</h1>
          <h5>
            December 15th<br></br>Lehi, Utah
          </h5>
        </div>
        <div className="right-sidebar">
          <button>Edit Event</button>
        </div>
      </div>
    </>
  );
}

function StepOne() {
  return (
    <>
      <div className="step-one" style={{ border: "1px solid purple" }}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </>
  );
}

function StepTwo() {
  return (
    <>
      <div className="step-two">
        <div>Clara is so happy to go outside and play</div>
        <div>Andrew is so happy to go outside and play</div>
        <div>David is so happy to go outside and play</div>
        <div>David is so happy to go outside and play</div>
      </div>
    </>
  );
}
{
  /* function Tile({ icon, title, content }) {
  return (
    <>
      <div></div>
    </>
  );
} */
}

export default App;
