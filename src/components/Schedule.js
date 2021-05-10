import moment from 'moment';
import configData from '../config/config.json';
import { getPaper, getSpeaker } from '../utils/index';
import { HashLink } from 'react-router-hash-link';

function Schedule() {
  const sessions = configData.sessions.map((session) => {
    let sessionPapers = session.papers.map((paperId) => {
      let foundPaper = getPaper(paperId);
      let foundSpeakers = [];
      if (foundPaper) {
        foundPaper.speakers.forEach((speakerId) => {
          let foundSpeaker = getSpeaker(speakerId);
          if (foundSpeaker)
            foundSpeakers.push({
              id: foundSpeaker.id,
              name: `${foundSpeaker.first_name} ${foundSpeaker.last_name}`,
            });
        });
      }

      let speakers = foundSpeakers
        .map((speaker) => {
          return (
            <HashLink to={`/bios#author-bio-${speaker.id}`}>
              {speaker.name}
            </HashLink>
          );
        })
        .reduce((prev, curr) => [prev, ' and ', curr]);
      return (
        <div>
          <p>
            <strong>
              <HashLink to={`/abstracts#paper-${foundPaper.id}`}>
                {foundPaper.title}
              </HashLink>
            </strong>
          </p>
          <div>{speakers}</div>
          <br />
        </div>
      );
    });

    return (
      <div
        key={`session-${session.id}`}
        id={`session-${session.id}`}
        className="session"
      >
        <div className="session-date">
          {moment.unix(session.start_time).format('MM/DD/YYYY')}
        </div>
        <a
          href="https://www.eventbrite.ca/e/sex-and-the-pandemic-a-monthly-speaker-series-tickets-152449800457"
          target="blank"
        >
          <button>Register</button>
        </a>
        <div className="session-time">{`${moment
          .unix(session.start_time)
          .format('HH:mm')} - ${moment
          .unix(session.end_time)
          .format('HH:mm')}`}</div>
        <h2>{session.title}</h2>
        {sessionPapers}
      </div>
    );
  });

  return <div className="session-container">{sessions}</div>;
}

export default Schedule;
