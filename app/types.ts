export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Candidate = {
  __typename?: 'Candidate';
  candidateId: Scalars['ID']['output'];
  createdAt: Scalars['Int']['output'];
  electionResults?: Maybe<Array<Maybe<ElectionResult>>>;
  person: Person;
  race: Race;
  updatedAt: Scalars['Int']['output'];
};

export type CandidateInput = {
  candidateId?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  personId?: InputMaybe<Scalars['ID']['input']>;
  raceId?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
};

export type Committee = {
  __typename?: 'Committee';
  committeeDescription?: Maybe<Scalars['String']['output']>;
  committeeId: Scalars['ID']['output'];
  committeeMembers?: Maybe<Array<Maybe<CommitteeMember>>>;
  committeeName: Scalars['String']['output'];
  committeeUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type CommitteeInput = {
  committeeDescription?: InputMaybe<Scalars['String']['input']>;
  committeeId?: InputMaybe<Scalars['ID']['input']>;
  committeeName?: InputMaybe<Scalars['String']['input']>;
  committeeUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
};

export type CommitteeMember = {
  __typename?: 'CommitteeMember';
  appointingAuthority?: Maybe<Scalars['String']['output']>;
  committee?: Maybe<Committee>;
  committeeMemberId: Scalars['ID']['output'];
  createdAt: Scalars['Int']['output'];
  endDate?: Maybe<Scalars['String']['output']>;
  person?: Maybe<Person>;
  position?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Int']['output'];
};

export type CommitteeMemberInput = {
  appointingAuthority?: InputMaybe<Scalars['String']['input']>;
  committeeId?: InputMaybe<Scalars['ID']['input']>;
  committeeMemberId?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  personId?: InputMaybe<Scalars['ID']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
};

export type Department = {
  __typename?: 'Department';
  createdAt: Scalars['Int']['output'];
  departmentId: Scalars['ID']['output'];
  departmentName: Scalars['String']['output'];
  departmentUrl?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Int']['output'];
};

export type DepartmentInput = {
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  departmentId?: InputMaybe<Scalars['ID']['input']>;
  departmentName?: InputMaybe<Scalars['String']['input']>;
  departmentUrl?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
};

export type Election = {
  __typename?: 'Election';
  createdAt: Scalars['Int']['output'];
  electionDate: Scalars['String']['output'];
  electionId: Scalars['ID']['output'];
  races?: Maybe<Array<Maybe<Race>>>;
  updatedAt: Scalars['Int']['output'];
};

export type ElectionInput = {
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  electionDate?: InputMaybe<Scalars['String']['input']>;
  electionId?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
};

export type ElectionResult = {
  __typename?: 'ElectionResult';
  candidate: Candidate;
  createdAt: Scalars['Int']['output'];
  electionResultId: Scalars['ID']['output'];
  updatedAt: Scalars['Int']['output'];
  voteCount?: Maybe<Scalars['Int']['output']>;
};

export type ElectionResultInput = {
  candidateId?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  electionResultId?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
  voteCount?: InputMaybe<Scalars['Int']['input']>;
};

export type Motion = {
  __typename?: 'Motion';
  createdAt: Scalars['Int']['output'];
  motionDescription?: Maybe<Scalars['String']['output']>;
  motionId: Scalars['ID']['output'];
  motionTitle: Scalars['String']['output'];
  motionType: Scalars['String']['output'];
  petitioners?: Maybe<Array<Maybe<Petitioner>>>;
  threshold?: Maybe<Scalars['String']['output']>;
  townMeetingVoteResults?: Maybe<Array<Maybe<TownMeetingVoteResult>>>;
  townMeetingVoteTallies?: Maybe<Array<Maybe<TownMeetingVoteTally>>>;
  townMeetingVotes?: Maybe<Array<Maybe<TownMeetingVote>>>;
  updatedAt: Scalars['Int']['output'];
  warrantArticle: WarrantArticle;
};

export type MotionInput = {
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  motionDescription?: InputMaybe<Scalars['String']['input']>;
  motionId?: InputMaybe<Scalars['ID']['input']>;
  motionTitle?: InputMaybe<Scalars['String']['input']>;
  motionType?: InputMaybe<Scalars['String']['input']>;
  threshold?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
  warrantArticleId?: InputMaybe<Scalars['ID']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCandidate?: Maybe<Candidate>;
  createCommittee?: Maybe<Committee>;
  createCommitteeMember?: Maybe<CommitteeMember>;
  createDepartment?: Maybe<Department>;
  createElection?: Maybe<Election>;
  createElectionResult?: Maybe<ElectionResult>;
  createMotion?: Maybe<Motion>;
  createOffice?: Maybe<Office>;
  createPerson?: Maybe<Person>;
  createPetitioner?: Maybe<Petitioner>;
  createPrecinct?: Maybe<Precinct>;
  createRace?: Maybe<Race>;
  createTerm?: Maybe<Term>;
  createTownMeetingSession?: Maybe<TownMeetingSession>;
  createTownMeetingVote?: Maybe<TownMeetingVote>;
  createTownMeetingVoteResult?: Maybe<TownMeetingVoteResult>;
  createTownMeetingVoteTally?: Maybe<TownMeetingVoteTally>;
  createVoteType?: Maybe<VoteType>;
  createWarrantArticle?: Maybe<WarrantArticle>;
  deleteCandidate?: Maybe<Candidate>;
  deleteCommittee?: Maybe<Committee>;
  deleteCommitteeMember?: Maybe<CommitteeMember>;
  deleteDepartment?: Maybe<Department>;
  deleteElection?: Maybe<Election>;
  deleteElectionResult?: Maybe<ElectionResult>;
  deleteMotion?: Maybe<Motion>;
  deleteOffice?: Maybe<Office>;
  deletePerson?: Maybe<Person>;
  deletePetitioner?: Maybe<Petitioner>;
  deletePrecinct?: Maybe<Precinct>;
  deleteRace?: Maybe<Race>;
  deleteTerm?: Maybe<Term>;
  deleteTownMeetingSession?: Maybe<TownMeetingSession>;
  deleteTownMeetingVote?: Maybe<TownMeetingVote>;
  deleteTownMeetingVoteResult?: Maybe<TownMeetingVoteResult>;
  deleteTownMeetingVoteTally?: Maybe<TownMeetingVoteTally>;
  deleteVoteType?: Maybe<VoteType>;
  deleteWarrantArticle?: Maybe<WarrantArticle>;
  updateCandidate?: Maybe<Candidate>;
  updateCommittee?: Maybe<Committee>;
  updateCommitteeMember?: Maybe<CommitteeMember>;
  updateDepartment?: Maybe<Department>;
  updateElection?: Maybe<Election>;
  updateElectionResult?: Maybe<ElectionResult>;
  updateMotion?: Maybe<Motion>;
  updateOffice?: Maybe<Office>;
  updatePerson?: Maybe<Person>;
  updatePetitioner?: Maybe<Petitioner>;
  updatePrecinct?: Maybe<Precinct>;
  updateRace?: Maybe<Race>;
  updateTerm?: Maybe<Term>;
  updateTownMeetingSession?: Maybe<TownMeetingSession>;
  updateTownMeetingVote?: Maybe<TownMeetingVote>;
  updateTownMeetingVoteResult?: Maybe<TownMeetingVoteResult>;
  updateTownMeetingVoteTally?: Maybe<TownMeetingVoteTally>;
  updateVoteType?: Maybe<VoteType>;
  updateWarrantArticle?: Maybe<WarrantArticle>;
};


export type MutationCreateCandidateArgs = {
  input: CandidateInput;
};


export type MutationCreateCommitteeArgs = {
  input: CommitteeInput;
};


export type MutationCreateCommitteeMemberArgs = {
  input: CommitteeMemberInput;
};


export type MutationCreateDepartmentArgs = {
  input: DepartmentInput;
};


export type MutationCreateElectionArgs = {
  input: ElectionInput;
};


export type MutationCreateElectionResultArgs = {
  input: ElectionResultInput;
};


export type MutationCreateMotionArgs = {
  input: MotionInput;
};


export type MutationCreateOfficeArgs = {
  input: OfficeInput;
};


export type MutationCreatePersonArgs = {
  input: PersonInput;
};


export type MutationCreatePetitionerArgs = {
  input: PetitionerInput;
};


export type MutationCreatePrecinctArgs = {
  input: PrecinctInput;
};


export type MutationCreateRaceArgs = {
  input: RaceInput;
};


export type MutationCreateTermArgs = {
  input: TermInput;
};


export type MutationCreateTownMeetingSessionArgs = {
  input: TownMeetingSessionInput;
};


export type MutationCreateTownMeetingVoteArgs = {
  input: TownMeetingVoteInput;
};


export type MutationCreateTownMeetingVoteResultArgs = {
  input: TownMeetingVoteResultInput;
};


export type MutationCreateTownMeetingVoteTallyArgs = {
  input: TownMeetingVoteTallyInput;
};


export type MutationCreateVoteTypeArgs = {
  input: VoteTypeInput;
};


export type MutationCreateWarrantArticleArgs = {
  input: WarrantArticleInput;
};


export type MutationDeleteCandidateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommitteeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommitteeMemberArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDepartmentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteElectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteElectionResultArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMotionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOfficeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePersonArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePetitionerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePrecinctArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRaceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTermArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTownMeetingSessionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTownMeetingVoteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTownMeetingVoteResultArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTownMeetingVoteTallyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteVoteTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteWarrantArticleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateCandidateArgs = {
  id: Scalars['ID']['input'];
  input: CandidateInput;
};


export type MutationUpdateCommitteeArgs = {
  id: Scalars['ID']['input'];
  input: CommitteeInput;
};


export type MutationUpdateCommitteeMemberArgs = {
  id: Scalars['ID']['input'];
  input: CommitteeMemberInput;
};


export type MutationUpdateDepartmentArgs = {
  id: Scalars['ID']['input'];
  input: DepartmentInput;
};


export type MutationUpdateElectionArgs = {
  id: Scalars['ID']['input'];
  input: ElectionInput;
};


export type MutationUpdateElectionResultArgs = {
  id: Scalars['ID']['input'];
  input: ElectionResultInput;
};


export type MutationUpdateMotionArgs = {
  id: Scalars['ID']['input'];
  input: MotionInput;
};


export type MutationUpdateOfficeArgs = {
  id: Scalars['ID']['input'];
  input: OfficeInput;
};


export type MutationUpdatePersonArgs = {
  id: Scalars['ID']['input'];
  input: PersonInput;
};


export type MutationUpdatePetitionerArgs = {
  id: Scalars['ID']['input'];
  input: PetitionerInput;
};


export type MutationUpdatePrecinctArgs = {
  id: Scalars['ID']['input'];
  input: PrecinctInput;
};


export type MutationUpdateRaceArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<RaceInput>;
};


export type MutationUpdateTermArgs = {
  id: Scalars['ID']['input'];
  input: TermInput;
};


export type MutationUpdateTownMeetingSessionArgs = {
  id: Scalars['ID']['input'];
  input: TownMeetingSessionInput;
};


export type MutationUpdateTownMeetingVoteArgs = {
  id: Scalars['ID']['input'];
  input: TownMeetingVoteInput;
};


export type MutationUpdateTownMeetingVoteResultArgs = {
  id: Scalars['ID']['input'];
  input: TownMeetingVoteResultInput;
};


export type MutationUpdateTownMeetingVoteTallyArgs = {
  id: Scalars['ID']['input'];
  input: TownMeetingVoteTallyInput;
};


export type MutationUpdateVoteTypeArgs = {
  id: Scalars['ID']['input'];
  input: VoteTypeInput;
};


export type MutationUpdateWarrantArticleArgs = {
  id: Scalars['ID']['input'];
  input: WarrantArticleInput;
};

export type Office = {
  __typename?: 'Office';
  createdAt: Scalars['Int']['output'];
  officeId: Scalars['ID']['output'];
  officeName: Scalars['String']['output'];
  precinct?: Maybe<Precinct>;
  races?: Maybe<Array<Maybe<Race>>>;
  terms?: Maybe<Array<Maybe<Term>>>;
  updatedAt: Scalars['Int']['output'];
};

export type OfficeInput = {
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  officeId?: InputMaybe<Scalars['ID']['input']>;
  officeName?: InputMaybe<Scalars['String']['input']>;
  precinct?: InputMaybe<PrecinctInput>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
};

export type Person = {
  __typename?: 'Person';
  address?: Maybe<Scalars['String']['output']>;
  candidates?: Maybe<Array<Maybe<Candidate>>>;
  committeeMembers?: Maybe<Array<Maybe<CommitteeMember>>>;
  createdAt: Scalars['Int']['output'];
  email?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  middleName?: Maybe<Scalars['String']['output']>;
  nameSuffix?: Maybe<Scalars['String']['output']>;
  personId: Scalars['ID']['output'];
  petitioners?: Maybe<Array<Maybe<Petitioner>>>;
  phone?: Maybe<Scalars['String']['output']>;
  terms?: Maybe<Array<Maybe<Term>>>;
  townMeetingVotes?: Maybe<Array<Maybe<TownMeetingVote>>>;
  updatedAt: Scalars['Int']['output'];
};

export type PersonInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  nameSuffix?: InputMaybe<Scalars['String']['input']>;
  personId?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
};

export type Petitioner = {
  __typename?: 'Petitioner';
  committee?: Maybe<Committee>;
  createdAt: Scalars['Int']['output'];
  department?: Maybe<Department>;
  motion: Motion;
  person?: Maybe<Person>;
  petitionerId: Scalars['ID']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type PetitionerInput = {
  committeeId?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  departmentId?: InputMaybe<Scalars['ID']['input']>;
  motionId?: InputMaybe<Scalars['ID']['input']>;
  personId?: InputMaybe<Scalars['ID']['input']>;
  petitionerId?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
};

/** A Brookline precinct based off a specific census year. */
export type Precinct = {
  __typename?: 'Precinct';
  /** The census year the precinct is based off of. */
  censusYear: Scalars['Int']['output'];
  /** The date the precinct was created (Unix time). */
  createdAt: Scalars['Int']['output'];
  /** The offices that are elected that are specific to the precinct. */
  offices?: Maybe<Array<Maybe<Office>>>;
  /** The polling place for the precinct. */
  pollingPlace?: Maybe<Scalars['String']['output']>;
  /** The unique identifier for the precinct. */
  precinctId: Scalars['ID']['output'];
  /** The precinct number. */
  precinctNumber: Scalars['Int']['output'];
  /** The date the precinct was last updated (Unix time). */
  updatedAt: Scalars['Int']['output'];
};

export type PrecinctInput = {
  censusYear?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  pollingPlace?: InputMaybe<Scalars['String']['input']>;
  precinctId?: InputMaybe<Scalars['ID']['input']>;
  precinctNumber?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  allCandidates: Array<Candidate>;
  allCommitteeMembers: Array<CommitteeMember>;
  allCommittees: Array<Committee>;
  allDepartments: Array<Department>;
  allElectionResults: Array<ElectionResult>;
  allElections: Array<Election>;
  allMotions: Array<Motion>;
  allOffices: Array<Office>;
  allPeople: Array<Person>;
  allPetitioners: Array<Petitioner>;
  allPrecincts: Array<Precinct>;
  allRaces: Array<Race>;
  allTerms: Array<Term>;
  allTownMeetingSessions: Array<TownMeetingSession>;
  allTownMeetingVoteResults: Array<TownMeetingVoteResult>;
  allTownMeetingVoteTallies: Array<TownMeetingVoteTally>;
  allTownMeetingVotes: Array<TownMeetingVote>;
  allVoteTypes: Array<VoteType>;
  allWarrantArticles: Array<WarrantArticle>;
  candidateById?: Maybe<Candidate>;
  committeeById?: Maybe<Committee>;
  committeeMemberById?: Maybe<CommitteeMember>;
  departmentById?: Maybe<Department>;
  electionById?: Maybe<Election>;
  electionResultById?: Maybe<ElectionResult>;
  motionById?: Maybe<Motion>;
  officeById?: Maybe<Office>;
  personById?: Maybe<Person>;
  petitionerById?: Maybe<Petitioner>;
  precinctById?: Maybe<Precinct>;
  raceById?: Maybe<Race>;
  termById?: Maybe<Term>;
  townMeetingSessionById?: Maybe<TownMeetingSession>;
  townMeetingVoteById?: Maybe<TownMeetingVote>;
  townMeetingVoteResultById?: Maybe<TownMeetingVoteResult>;
  townMeetingVoteTallyById?: Maybe<TownMeetingVoteTally>;
  voteTypeById?: Maybe<VoteType>;
  warrantArticleById?: Maybe<WarrantArticle>;
};


export type QueryAllCandidatesArgs = {
  filter?: InputMaybe<CandidateInput>;
};


export type QueryAllCommitteeMembersArgs = {
  filter?: InputMaybe<CommitteeMemberInput>;
};


export type QueryAllCommitteesArgs = {
  filter?: InputMaybe<CommitteeInput>;
};


export type QueryAllDepartmentsArgs = {
  filter?: InputMaybe<DepartmentInput>;
};


export type QueryAllElectionResultsArgs = {
  filter?: InputMaybe<ElectionResultInput>;
};


export type QueryAllElectionsArgs = {
  filter?: InputMaybe<ElectionInput>;
};


export type QueryAllMotionsArgs = {
  filter?: InputMaybe<MotionInput>;
};


export type QueryAllOfficesArgs = {
  filter?: InputMaybe<OfficeInput>;
};


export type QueryAllPeopleArgs = {
  filter?: InputMaybe<PersonInput>;
};


export type QueryAllPetitionersArgs = {
  filter?: InputMaybe<PetitionerInput>;
};


export type QueryAllPrecinctsArgs = {
  filter?: InputMaybe<PrecinctInput>;
};


export type QueryAllRacesArgs = {
  filter?: InputMaybe<RaceInput>;
};


export type QueryAllTermsArgs = {
  filter?: InputMaybe<TermInput>;
};


export type QueryAllTownMeetingSessionsArgs = {
  filter?: InputMaybe<TownMeetingSessionInput>;
};


export type QueryAllTownMeetingVoteResultsArgs = {
  filter?: InputMaybe<TownMeetingVoteResultInput>;
};


export type QueryAllTownMeetingVoteTalliesArgs = {
  filter?: InputMaybe<TownMeetingVoteTallyInput>;
};


export type QueryAllTownMeetingVotesArgs = {
  filter?: InputMaybe<TownMeetingVoteInput>;
};


export type QueryAllVoteTypesArgs = {
  filter?: InputMaybe<VoteTypeInput>;
};


export type QueryAllWarrantArticlesArgs = {
  filter?: InputMaybe<WarrantArticleInput>;
};


export type QueryCandidateByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCommitteeByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCommitteeMemberByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDepartmentByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryElectionByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryElectionResultByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMotionByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOfficeByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPersonByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPetitionerByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPrecinctByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRaceByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTermByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTownMeetingSessionByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTownMeetingVoteByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTownMeetingVoteResultByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTownMeetingVoteTallyByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVoteTypeByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWarrantArticleByIdArgs = {
  id: Scalars['ID']['input'];
};

export type Race = {
  __typename?: 'Race';
  createdAt: Scalars['Int']['output'];
  election: Election;
  office: Office;
  raceId: Scalars['ID']['output'];
  seatsOpen: Scalars['Int']['output'];
  termLength: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type RaceInput = {
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  electionId?: InputMaybe<Scalars['ID']['input']>;
  officeId?: InputMaybe<Scalars['ID']['input']>;
  raceId?: InputMaybe<Scalars['ID']['input']>;
  seatsOpen?: InputMaybe<Scalars['Int']['input']>;
  termLength?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
};

export type Term = {
  __typename?: 'Term';
  createdAt: Scalars['Int']['output'];
  endDate: Scalars['String']['output'];
  office: Office;
  person: Person;
  startDate: Scalars['String']['output'];
  termId: Scalars['ID']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type TermInput = {
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  officeId?: InputMaybe<Scalars['ID']['input']>;
  personId?: InputMaybe<Scalars['ID']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  termId?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
};

export type TownMeetingSession = {
  __typename?: 'TownMeetingSession';
  createdAt: Scalars['Int']['output'];
  sessionName: Scalars['String']['output'];
  startDate: Scalars['String']['output'];
  townMeetingSessionId: Scalars['ID']['output'];
  updatedAt: Scalars['Int']['output'];
  warrantArticles?: Maybe<Array<Maybe<WarrantArticle>>>;
};

export type TownMeetingSessionInput = {
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  sessionName?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  townMeetingSessionId?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
};

export type TownMeetingVote = {
  __typename?: 'TownMeetingVote';
  createdAt: Scalars['Int']['output'];
  motion: Motion;
  person: Person;
  townMeetingVoteId: Scalars['ID']['output'];
  updatedAt: Scalars['Int']['output'];
  voteType?: Maybe<VoteType>;
};

export type TownMeetingVoteInput = {
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  motionId?: InputMaybe<Scalars['ID']['input']>;
  personId?: InputMaybe<Scalars['ID']['input']>;
  townMeetingVoteId?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
  voteTypeID?: InputMaybe<Scalars['ID']['input']>;
};

export type TownMeetingVoteResult = {
  __typename?: 'TownMeetingVoteResult';
  isPassed?: Maybe<Scalars['Boolean']['output']>;
  motion: Motion;
  noVotes?: Maybe<Scalars['Int']['output']>;
  threshold?: Maybe<Scalars['String']['output']>;
  townMeetingVoteResultId: Scalars['ID']['output'];
  voiceVotePassed?: Maybe<Scalars['Boolean']['output']>;
  yesVotes?: Maybe<Scalars['Int']['output']>;
};

export type TownMeetingVoteResultInput = {
  isPassed?: InputMaybe<Scalars['Boolean']['input']>;
  motionId?: InputMaybe<Scalars['ID']['input']>;
  noVotes?: InputMaybe<Scalars['Int']['input']>;
  threshold?: InputMaybe<Scalars['String']['input']>;
  townMeetingVoteResultId?: InputMaybe<Scalars['ID']['input']>;
  voiceVotePassed?: InputMaybe<Scalars['Boolean']['input']>;
  yesVotes?: InputMaybe<Scalars['Int']['input']>;
};

export type TownMeetingVoteTally = {
  __typename?: 'TownMeetingVoteTally';
  motion?: Maybe<Motion>;
  townMeetingVoteTallyId: Scalars['ID']['output'];
  voteCount: Scalars['Int']['output'];
  voteType?: Maybe<VoteType>;
};

export type TownMeetingVoteTallyInput = {
  motionId?: InputMaybe<Scalars['ID']['input']>;
  townMeetingVoteTallyId?: InputMaybe<Scalars['ID']['input']>;
  voteCount?: InputMaybe<Scalars['Int']['input']>;
  voteTypeId?: InputMaybe<Scalars['ID']['input']>;
};

export type VoteType = {
  __typename?: 'VoteType';
  createdAt: Scalars['Int']['output'];
  townMeetingVotes?: Maybe<Array<Maybe<TownMeetingVote>>>;
  updatedAt: Scalars['Int']['output'];
  voteTypeId: Scalars['ID']['output'];
  voteTypeName: Scalars['String']['output'];
};

export type VoteTypeInput = {
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
  voteTypeId?: InputMaybe<Scalars['ID']['input']>;
  voteTypeName?: InputMaybe<Scalars['String']['input']>;
};

export type WarrantArticle = {
  __typename?: 'WarrantArticle';
  articleDescription?: Maybe<Scalars['String']['output']>;
  articleNumber: Scalars['Int']['output'];
  articleTitle: Scalars['String']['output'];
  createdAt: Scalars['Int']['output'];
  motions?: Maybe<Array<Maybe<Motion>>>;
  townMeetingSession: TownMeetingSession;
  updatedAt: Scalars['Int']['output'];
  warrantArticleId: Scalars['ID']['output'];
};

export type WarrantArticleInput = {
  articleDescription?: InputMaybe<Scalars['String']['input']>;
  articleNumber?: InputMaybe<Scalars['Int']['input']>;
  articleTitle?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  townMeetingSessionId?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
  warrantArticleId?: InputMaybe<Scalars['ID']['input']>;
};
