import configData from '../config/config.json';

const getSpeaker = (speakerId) => {
  let foundSpeaker = configData.speakers.find((speaker) => {
    return speakerId === speaker.id;
  });

  return foundSpeaker;
};

const getPaper = (paperId) => {
  let foundPaper = configData.papers.find((paper) => {
    return paperId === paper.id;
  });

  return foundPaper;
};

const getSession = (sessionId) => {
  let foundSession = configData.sessions.find((session) => {
    return sessionId === session.id;
  });

  return foundSession;
};

export { getSpeaker, getPaper, getSession };
