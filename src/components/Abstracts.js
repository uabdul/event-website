import { HashLink } from 'react-router-hash-link';
import moment from 'moment';
import configData from '../config/config.json';
import { getSpeaker, getSession } from '../utils/index';

function Abstracts() {
  const abstracts = configData.papers
    .sort(function (a, b) {
      if (a.speaker_last_name < b.speaker_last_name) {
        return -1;
      }
      if (a.speaker_last_name > b.speaker_last_name) {
        return 1;
      }
      return 0;
    })
    .map((paper) => {
      let paperSpeakers = paper.speakers.map((speaker) => {
        let foundSpeaker = getSpeaker(speaker);
        return (
          foundSpeaker && (
            <h2>
              <HashLink to={`/bios#author-bio-${foundSpeaker.id}`}>
                {foundSpeaker.first_name} {foundSpeaker.last_name}
              </HashLink>
            </h2>
          )
        );
      });

      let foundSession = getSession(paper.session);

      return (
        <div
          key={`paper-${paper.id}`}
          id={`paper-${paper.id}`}
          className="abstract"
        >
          <h1>{paper.title}</h1>
          {paperSpeakers}
          {paper.abstract ? (
            <div
              dangerouslySetInnerHTML={{ __html: paper.abstract }}
            />
          ) : (
            <div>No abstract available. Please check back later.</div>
          )}
          {foundSession && (
            <p>
              <strong>Session</strong>:{' '}
              <HashLink to={`/schedule#session-${foundSession.id}`}>
                {foundSession.title}
              </HashLink>{' '}
              (
              {moment
                .unix(foundSession.start_time)
                .format('MMMM D, YYYY')}
              )
            </p>
          )}
        </div>
      );
    });

  return <div className="abstract-container">{abstracts}</div>;
}

export default Abstracts;
