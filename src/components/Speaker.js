const Sessions = ({ sessions }) => {
  return (
    <div className="sessionBox card h-250">
      <Session {...sessions[0]} />
    </div>
  );
};

const Session = ({ title, room }) => {
  return (
    <span className="session w-100">
      {title} <strong>Room: {room.name}</strong>
    </span>
  );
};

const SpeakerImage = ({ id, first, last }) => {
  return (
    <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
      <img
        className="contain-fit"
        src={`/images/speaker-${id}.jpg`}
        width="300"
      />
    </div>
  );
};

const SpeakerDemographic = ({
  first,
  last,
  bio,
  company,
  twitterHandle,
  favorite,
}) => {
  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-between mb-3">
        <h3>
          {first} {last}
        </h3>
      </div>
      <div>
        <p>
          {bio} {company} {twitterHandle} {favorite}
        </p>
      </div>
    </div>
  );
};

const Speaker = ({ speaker }) => {
  const { id, first, last, sessions } = speaker;
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
      <div className="card card-height p-4 mt-4">
        <SpeakerImage id={id} first={first} last={last} />
        <SpeakerDemographic {...speaker} />
        <Sessions sessions={sessions} />
      </div>
    </div>
  );
};

export default Speaker;
