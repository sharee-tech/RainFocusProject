import { useState } from "react";
import "./App.scss";

const origData = [
  {
    id: 1,
    icon: "logic-arrow.png",
    title: "Attendee Registration",
    content: "Start by creating a general registration workflow",
  },
  {
    id: 2,
    icon: "logic-arrow.png",
    title: "Attendee Registration",
    content: "Start by creating a general registration workflow",
  },
  {
    id: 3,
    icon: "logic-arrow.png",
    title: "Attendee Registration",
    content: "Start by creating a general registration workflow",
  },
];

function App() {
  const [cards, setCards] = useState(origData);

  function handleAddTile() {
    setCards([
      ...cards,
      {
        id: cards.length + 1,
        icon: "logic-arrow.png",
        title: "Attendee Registration",
        content: "Start by creating a general registration workflow",
      },
    ]);
  }
  function handleRefresh() {
    setCards(origData);
  }
  return (
    <>
      <main>
        <Header />
        <SubHeader />
        <PersonPortal />
        <StepOne />
        <StepTwo
          cards={cards}
          onAddTile={handleAddTile}
          onRefresh={handleRefresh}
        />
        <StepThree />
        <StepFour />
      </main>
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="event-brand">
        <img src="images/rain-focus-logo.png" alt="RainFocus Logo" />
        <div className="details">
          <h1>RainFocus Summit</h1>
          <h4>
            December 15th<br></br>Lehi, Utah
          </h4>
        </div>
      </div>
      <button onClick={() => alert("Start editing event now...")}>
        Edit Event
      </button>
    </header>
  );
}

function SubHeader() {
  return (
    <section className="header-two">
      <h2>Event setup guide</h2>
      <h4>
        See the available list of modules below. We suggest that you start with
        the attendee module.
      </h4>
      <hr style={{ marginTop: "24px" }}></hr>
    </section>
  );
}

function PersonPortal() {
  return (
    <section className="person-portal">
      <div>
        <img src="images/person-portal.png" alt="Person Portal" />
      </div>
      <div>
        <h3>Org Settings</h3>
      </div>
    </section>
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

function CardTile({ icon, title, body }) {
  return (
    <>
      <div>
        <div className="card-title">
          <img src={`images/${icon}`} alt="icon" width="24px" />
          <h6>{title}</h6>
        </div>
        <div>
          <p>{body}</p>
        </div>
      </div>
    </>
  );
}

function CardTilePlus({ icon, body, onAddTile }) {
  return (
    <>
      <div className="tile-plus">
        <img
          src={`images/${icon}`}
          alt="icon"
          width="24px"
          onClick={onAddTile}
          style={{ cursor: "pointer" }}
        />
        <p>{body}</p>
      </div>
    </>
  );
}

function StepOne() {
  return (
    <section className="step-one">
      <h5>
        <b>Step: 1 </b>Base settings.
      </h5>
      <div className="tiles">
        <BaseTile title="General" body="Define Attendee types & attributes" />
        <BaseTile
          title="Title"
          body="Description that explains the value goes here. Description that
      explains the value goes here."
        />
        <BaseTile
          title="Title"
          body="Description that explains the value goes here. Description that
      explains the value goes here."
        />
        <BaseTile title="" body="" />
      </div>
    </section>
  );
}

function StepTwo({ cards, onAddTile, onRefresh }) {
  return (
    <section className="step-two">
      <div style={{ display: "flex" }}>
        <h5>
          <b>Step: 2 </b>Build registration workflows.
        </h5>
        <span className="refresh" onClick={onRefresh}>
          ⟳
        </span>
      </div>
      <div className="card-tile tile--2">
        <StepTwoCards cards={cards} />
        <CardTilePlus
          icon="plus-icon.png"
          body="Add Registration Workflow"
          onAddTile={onAddTile}
        />
      </div>
    </section>
  );
}

function StepTwoCards({ cards }) {
  return (
    <>
      {cards.map((card) => (
        <CardTile
          key={card.id}
          icon={card.icon}
          title={card.title}
          body={card.content}
        />
      ))}
    </>
  );
}

function StepThree() {
  return (
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
  );
}

function StepFour() {
  return (
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
  );
}

export default App;
