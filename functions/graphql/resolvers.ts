import candidateResolvers from './types/Candidate/resolvers';
import committeeResolvers from './types/Committee/resolvers';
import committeeMemberResolvers from './types/CommitteeMember/resolvers';
import departmentResolvers from './types/Department/resolvers';
import electionResolvers from './types/Election/resolvers';
import electionResultResolvers from './types/ElectionResult/resolvers';
import motionResolvers from './types/Motion/resolvers';
import officeResolvers from './types/Office/resolvers';
import personResolvers from './types/Person/resolvers';
import petitionerResolvers from './types/Petitioner/resolvers';
import precinctResolvers from './types/Precinct/resolvers';
import raceResolvers from './types/Race/resolvers';
import termResolvers from './types/Term/resolvers';
import townMeetingSessionResolvers from './types/TownMeetingSession/resolvers';
import townMeetingVoteResolvers from './types/TownMeetingVote/resolvers';
import townMeetingVoteResultResolvers from './types/TownMeetingVoteResult/resolvers';
import townMeetingVoteTallyResolvers from './types/TownMeetingVoteTally/resolvers';
import voteTypeResolvers from './types/VoteType/resolvers';
import warrantArticleResolvers from './types/WarrantArticle/resolvers';

import { merge } from 'lodash';

export default merge(
  precinctResolvers,
  electionResolvers,
  townMeetingSessionResolvers,
  voteTypeResolvers,
  personResolvers,
  committeeResolvers,
  departmentResolvers,
  committeeMemberResolvers,
  officeResolvers,
  raceResolvers,
  candidateResolvers,
  electionResultResolvers,
  termResolvers,
  warrantArticleResolvers,
  motionResolvers,
  petitionerResolvers,
  townMeetingVoteResolvers,
  townMeetingVoteTallyResolvers,
  townMeetingVoteResultResolvers,
);
