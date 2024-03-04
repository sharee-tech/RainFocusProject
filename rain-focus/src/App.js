// import "./App.css";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="header-two">
          <h2>Event setup guide</h2>
          <h4>
            See the available list of modules below. We suggest that you start
            with the attendee module.
          </h4>
        </section>
        <hr></hr>
        <section className="person-portal">
          <div>
            <img src="images/person-portal.png" alt="Person Portal Image" />
          </div>
          <div>
            <h3>Org Settings</h3>
          </div>
        </section>
        <section className="step-one">
          <h5>
            <b>Step: 1 </b>Base settings.
          </h5>
          <div className="tiles">
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
        </section>
        <section className="step-two">
          <h5>
            <b>Step: 2 </b>Build registration workflows.
          </h5>
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
        </section>
        <section className="step-three">
          <h5>
            <b>Step: 3 </b>Design attendee experiences.
          </h5>
          <div className="card-tile tile--3">
            <CardTile
              icon="computer.png"
              title="Attendee Portal"
              body="Manage the portal that attendees will see after they’ve register for your event."
            />
          </div>
        </section>
        <section className="step-four">
          <h5>
            <b>Step: 4 </b>Build your exhibitor platform.
          </h5>
          <div className="step-four-tiles">
            <div className="row-one">
              <div className="--tile">
                <CardTile
                  icon="computer-white.png"
                  title="Exhibitor Portal"
                  body="Manage the portal that attendees will see after they’ve register for your event."
                />
                <CardTile
                  icon="computer-white.png"
                  title="Exhibitor List"
                  body="Manage the portal that attendees will see after they’ve register for your event."
                />
              </div>
            </div>
            <div className="row-two">
              <div className="--tile">
                <CardTile
                  icon="computer-white.png"
                  title="Exhibitor Logos"
                  body="Manage the portal that attendees will see after they’ve register for your event."
                />
                <CardTile
                  icon="computer-white.png"
                  title="Exhibitor Tasks"
                  body="Manage the portal that attendees will see after they’ve register for your event."
                />
                <CardTile
                  icon="computer-white.png"
                  title="Exhibitor Forms"
                  body="Manage the portal that attendees will see after they’ve register for your event."
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function Header() {
  return (
    <>
      <div className="header">
        <div className="event-brand">
          <img src="images/rain-focus-logo.png" alt="RainFocus Logo" />
          <div className="details">
            <h1>RainFocus Summit</h1>
            <h4>
              December 15th<br></br>Lehi, Utah
            </h4>
          </div>
        </div>
        <button>Edit Event</button>
      </div>
    </>
  );
}
function BaseTile({ title, body }) {
  return (
    <>
      <div className="base-tile">
        <div>
          <h6>{title}</h6>
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
          <h6>{title}</h6>
        </div>
        <div>
          <p>{body}</p>
        </div>
      </div>
    </>
  );
}

export default App;
