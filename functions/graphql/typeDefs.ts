import candidateTypeDefs from './types/Candidate/typeDefs';
import committeeTypeDefs from './types/Committee/typeDefs';
import committeeMemberTypeDefs from './types/CommitteeMember/typeDefs';
import departmentTypeDefs from './types/Department/typeDefs';
import electionTypeDefs from './types/Election/typeDefs';
import electionResultTypeDefs from './types/ElectionResult/typeDefs';
import motionTypeDefs from './types/Motion/typeDefs';
import officeTypeDefs from './types/Office/typeDefs';
import personTypeDefs from './types/Person/typeDefs';
import petitionerTypeDefs from './types/Petitioner/typeDefs';
import precinctTypeDefs from './types/Precinct/typeDefs';
import raceTypeDefs from './types/Race/typeDefs';
import termTypeDefs from './types/Term/typeDefs';
import townMeetingSessionTypeDefs from './types/TownMeetingSession/typeDefs';
import townMeetingVoteTypeDefs from './types/TownMeetingVote/typeDefs';
import townMeetingVoteResultTypeDefs from './types/TownMeetingVoteResult/typeDefs';
import townMeetingVoteTallyTypeDefs from './types/TownMeetingVoteTally/typeDefs';
import voteTypeTypeDefs from './types/VoteType/typeDefs';
import warrantArticleTypeDefs from './types/WarrantArticle/typeDefs';

export default [
  precinctTypeDefs, // this needs to go first because it sets the base Query type (the rest extend it)
  electionTypeDefs,
  townMeetingSessionTypeDefs,
  voteTypeTypeDefs,
  personTypeDefs,
  committeeTypeDefs,
  departmentTypeDefs,
  committeeMemberTypeDefs,
  officeTypeDefs,
  raceTypeDefs,
  candidateTypeDefs,
  electionResultTypeDefs,
  termTypeDefs,
  warrantArticleTypeDefs,
  motionTypeDefs,
  petitionerTypeDefs,
  townMeetingVoteTypeDefs,
  townMeetingVoteTallyTypeDefs,
  townMeetingVoteResultTypeDefs,
];
