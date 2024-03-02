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
          <p>
            <b>Step: 1 </b>Base settings.
          </p>
          <div>
            <StepOne />
          </div>
          <p>
            <b>Step: 2 </b>Build registration workflows.
          </p>
          <div className="card-tile" style={{ border: "1px solid purple" }}>
            <CardTile /> <CardTile /> <CardTile /> <CardTile />
          </div>
          <p>
            <b>Step: 3 </b>Design attendee experiences.
          </p>
          <div className="card-tile" style={{ border: "1px solid purple" }}>
            <CardTile />
          </div>
          <p>
            <b>Step: 4 </b>Build your exhibitor platform.
          </p>
          <div className="step-four-1">
            <div className="card-tile-2">
              <CardTile /> <CardTile />
            </div>
          </div>
          <div className="step-four-2">
            <div className="card-tile">
              <CardTile /> <CardTile /> <CardTile />
            </div>
          </div>

          {/* <StepTwo /> */}
          {/* <StepThree /> */}
          {/* <StepFour /> */}
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

function CardTile() {
  return (
    <>
      <div>
        <div className="card-title">
          <img src={logo} width="20px" />
          <h5>Attendee Registration</h5>
        </div>
        <div>
          <p>Start by creating a general registration workflow</p>
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

// function StepTwo() {
//   return (
//     <>
//       <p>
//         <b>Step: 2 </b>Build registration workflows.
//       </p>
//       <div className="step-two">
//         <div>1</div>
//         <div>2</div>
//         <div>3</div>
//         <div>4</div>
//       </div>
//     </>
//   );
// }

function StepThree() {
  return (
    <>
      <p>
        <b>Step: 3 </b>Design attendee experiences.
      </p>
      <div className="step-three">
        <div>Clara is so happy to go outside and play</div>
      </div>
    </>
  );
}
function StepFour() {
  return (
    <>
      <p>
        <b>Step: 4 </b>Build your exhibitor platform.
      </p>
      <div className="step-four">
        <div class="item item--1">
          <div>Red</div>
        </div>
        <div class="item item--2">
          <div>Orange</div>
        </div>
        <div class="item item--3">
          <div>Yellow</div>
        </div>
        <div class="item item--4">
          <div>Green</div>
        </div>
        <div class="item item--5">
          <div>Blue</div>
        </div>
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
