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

  function handleClick() {
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

  function handleClickMinus() {
    setCards(cards.filter((card) => card.id !== cards.length));
  }

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
            <img src="images/person-portal.png" alt="Person Portal" />
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
              title="Title"
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
            <StepTwo cards={cards} />
            <CardTilePlus
              icon="plus-icon.png"
              body="Add Registration Workflow"
              handleClick={handleClick}
            />
            <CardTileMinus
              body="Remove Registration Workflow"
              handleClickMinus={handleClickMinus}
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
        <button onClick={() => alert("Start editing event now...")}>
          Edit Event
        </button>
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

function CardTilePlus({ icon, body, handleClick }) {
  return (
    <>
      <div className="tile-plus">
        <img
          src={`images/${icon}`}
          alt="plus icon"
          width="24px"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
        <p>{body}</p>
      </div>
    </>
  );
}

function CardTileMinus({ body, handleClickMinus }) {
  return (
    <div className="tile-plus">
      <span
        onClick={handleClickMinus}
        style={{ cursor: "pointer" }}
        width="24px"
        alt="minus icon"
      >
        ➖
      </span>
      <p>{body}</p>
    </div>
  );
}

function StepTwo({ cards }) {
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

export default App;
