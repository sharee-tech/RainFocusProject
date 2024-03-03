// import "./App.css";
import "./App.scss";

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
                src="images/person-portal.png"
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
          <div className="step-one">
            <BaseTile
              title="General"
              body="Define Attendee types & attributes"
            />
            <BaseTile
              title="Title"
              body="Description that explains the value goes here. Description that
              explains the value goes here."
            />
            <BaseTile
              title="General"
              body="Description that explains the value goes here. Description that
              explains the value goes here."
            />
            <BaseTile title="" body="" />
          </div>
          <p>
            <b>Step: 2 </b>Build registration workflows.
          </p>
          <div className="card-tile tile--2">
            <CardTile
              icon="logic-arrow.png"
              title="Attendee Registration"
              body="Start by creating a general registration workflow"
            />
            <CardTile
              icon="logic-arrow.png"
              title="Attendee Registration"
              body="Start by creating a general registration workflow"
            />
            <CardTile
              icon="logic-arrow.png"
              title="Attendee Registration"
              body="Start by creating a general registration workflow"
            />
            <CardTile
              style1="center"
              icon="plus-icon.png"
              body="Start by creating a general registration workflow"
              style2="no-flex"
            />
          </div>

          <p>
            <b>Step: 3 </b>Design attendee experiences.
          </p>
          <div className="card-tile tile--3">
            <CardTile
              icon="computer.png"
              title="Attendee Portal"
              body="Manage the portal that attendees will see after they’ve register for your event."
            />
          </div>
          <p>
            <b>Step: 4 </b>Build your exhibitor platform.
          </p>
          <div className="step-four-1">
            <div className="card-tile-2">
              <CardTile
                icon="computer.png"
                title="Exhibitor Portal"
                body="Manage the portal that attendees will see after they’ve register for your event."
              />
              <CardTile
                icon="computer.png"
                title="Exhibitor List"
                body="Manage the portal that attendees will see after they’ve register for your event."
              />
            </div>
          </div>
          <div className="step-four-2">
            <div className="card-tile-3">
              <CardTile
                icon="computer.png"
                title="Exhibitor Logos"
                body="Manage the portal that attendees will see after they’ve register for your event."
              />
              <CardTile
                icon="computer.png"
                title="Exhibitor Tasks"
                body="Manage the portal that attendees will see after they’ve register for your event."
              />
              <CardTile
                icon="computer.png"
                title="Exhibitor Forms"
                body="Manage the portal that attendees will see after they’ve register for your event."
              />
            </div>
          </div>
        </main>
      </body>
    </>
  );
}

function Header() {
  return (
    <>
      <div className="header-row">
        <div className="left-sidebar">
          <img
            src="images/rain-focus-logo.png"
            alt="RainFocus Logo"
            style={{ width: "89px" }}
          />
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
function BaseTile({ title, body }) {
  return (
    <>
      <div>
        <div>
          <b>{title}</b>
        </div>
        <div>
          <p>{body}</p>
        </div>
      </div>
    </>
  );
}
function CardTile({ icon, title, body, style1, style2 }) {
  return (
    <>
      <div className={style1}>
        <div className={style2 ? `card-title ${style2}` : "card-title"}>
          <img src={`images/${icon}`} width="20px" />
          <h5>{title}</h5>
        </div>
        <div>
          <p>{body}</p>
        </div>
      </div>
    </>
  );
}

function StepOne() {
  return (
    <>
      <div className="step-one">
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
