import { HashLink } from 'react-router-hash-link';
import moment from 'moment';
import configData from '../config/config.json';
import { getPaper, getSession } from '../utils/index';

function Bios() {
  const speakerBios = configData.speakers
    .sort(function (a, b) {
      if (a.last_name < b.last_name) {
        return -1;
      }
      if (a.last_name > b.last_name) {
        return 1;
      }
      return 0;
    })
    .map((speaker) => {
      let paper = getPaper(speaker.paper);
      let session = getSession(speaker.session);
      return (
        <div
          key={`author-bio-${speaker.id}`}
          id={`author-bio-${speaker.id}`}
          className="bio"
        >
          <img
            key={`${speaker.image}`}
            src={require(`../assets/${speaker.image}`).default}
            alt=""
          />
          <h1>
            {speaker.first_name} {speaker.last_name}
          </h1>
          <h2>{speaker.institution}</h2>
          <div dangerouslySetInnerHTML={{ __html: speaker.bio }} />
          {session && (
            <p>
              <strong>Session:</strong>{' '}
              <HashLink to={`/schedule#session-${session.id}`}>
                {session.title}
              </HashLink>{' '}
              (
              {moment.unix(session.start_time).format('MMMM D, YYYY')}
              )
            </p>
          )}
          {paper && (
            <p>
              <strong>Abstract:</strong>{' '}
              <HashLink to={`/abstracts#paper-${paper.id}`}>
                {paper.title}
              </HashLink>
            </p>
          )}
          {speaker.image_credit && (
            <p>
              <strong>Image Credit</strong>: {speaker.image_credit}
            </p>
          )}
          {speaker.image_description && (
            <p>
              <strong>Image Description</strong>:{' '}
              {speaker.image_description}
            </p>
          )}
        </div>
      );
    });
  let { organizer } = configData;
  return (
    <div className="bio-container">
      <h1>About the Organizer</h1>
      <div className="bio">
        <img
          key={`${organizer.image}`}
          src={require(`../assets/${organizer.image}`).default}
          alt=""
        />
        <h1>
          {organizer.first_name} {organizer.last_name}
        </h1>
        <h2>{organizer.institution}</h2>
        <div dangerouslySetInnerHTML={{ __html: organizer.bio }} />
        {organizer.image_description && (
          <p>
            <strong>Image Description</strong>:{' '}
            {organizer.image_description}
          </p>
        )}
      </div>
      <h1>About the Speakers</h1>
      {speakerBios}
    </div>
  );
}

export default Bios;
