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

export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BooleanFilterNullable = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
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

export type CandidateCreateInput = {
  candidateId?: InputMaybe<Scalars['ID']['input']>;
  personId: Scalars['ID']['input'];
  raceId: Scalars['ID']['input'];
};

export type CandidateFilter = {
  candidateId?: InputMaybe<IdFilter>;
  createdAt?: InputMaybe<NumberFilter>;
  personId?: InputMaybe<IdFilter>;
  raceId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<NumberFilter>;
};

export type CandidateUpdateInput = {
  personId?: InputMaybe<Scalars['ID']['input']>;
  raceId?: InputMaybe<Scalars['ID']['input']>;
};

export type CandidatesWithPagination = {
  __typename?: 'CandidatesWithPagination';
  items: Array<Candidate>;
  pageInfo?: Maybe<PageInfo>;
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

export type CommitteeCreateInput = {
  committeeDescription?: InputMaybe<Scalars['String']['input']>;
  committeeId?: InputMaybe<Scalars['ID']['input']>;
  committeeName: Scalars['String']['input'];
  committeeUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CommitteeFilter = {
  committeeDescription?: InputMaybe<StringFilterNullable>;
  committeeId?: InputMaybe<IdFilter>;
  committeeName?: InputMaybe<StringFilter>;
  committeeUrl?: InputMaybe<StringFilterNullable>;
  createdAt?: InputMaybe<NumberFilter>;
  updatedAt?: InputMaybe<NumberFilter>;
};

export type CommitteeMember = {
  __typename?: 'CommitteeMember';
  appointingAuthority?: Maybe<Scalars['String']['output']>;
  committee: Committee;
  committeeMemberId: Scalars['ID']['output'];
  createdAt: Scalars['Int']['output'];
  endDate?: Maybe<Scalars['String']['output']>;
  person: Person;
  position?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Int']['output'];
};

export type CommitteeMemberCreateInput = {
  appointingAuthority?: InputMaybe<Scalars['String']['input']>;
  committeeId: Scalars['ID']['input'];
  committeeMemberId?: InputMaybe<Scalars['ID']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  personId: Scalars['ID']['input'];
  position?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};

export type CommitteeMemberFilter = {
  appointingAuthority?: InputMaybe<StringFilterNullable>;
  committeeId?: InputMaybe<IdFilter>;
  committeeMemberId?: InputMaybe<IdFilter>;
  createdAt?: InputMaybe<NumberFilter>;
  endDate?: InputMaybe<DateFilterNullable>;
  personId?: InputMaybe<IdFilter>;
  position?: InputMaybe<StringFilterNullable>;
  startDate?: InputMaybe<DateFilterNullable>;
  updatedAt?: InputMaybe<NumberFilter>;
};

export type CommitteeMemberUpdateInput = {
  appointingAuthority?: InputMaybe<Scalars['String']['input']>;
  committeeId?: InputMaybe<Scalars['ID']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  personId?: InputMaybe<Scalars['ID']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};

export type CommitteeMembersWithPagination = {
  __typename?: 'CommitteeMembersWithPagination';
  items: Array<CommitteeMember>;
  pageInfo?: Maybe<PageInfo>;
};

export type CommitteeUpdateInput = {
  committeeDescription?: InputMaybe<Scalars['String']['input']>;
  committeeName?: InputMaybe<Scalars['String']['input']>;
  committeeUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CommitteesWithPagination = {
  __typename?: 'CommitteesWithPagination';
  items: Array<Committee>;
  pageInfo?: Maybe<PageInfo>;
};

export type DateFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
};

export type DateFilterNullable = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
};

export type Department = {
  __typename?: 'Department';
  createdAt: Scalars['Int']['output'];
  departmentId: Scalars['ID']['output'];
  departmentName: Scalars['String']['output'];
  departmentUrl?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Int']['output'];
};

export type DepartmentCreateInput = {
  departmentId?: InputMaybe<Scalars['ID']['input']>;
  departmentName: Scalars['String']['input'];
  departmentUrl?: InputMaybe<Scalars['String']['input']>;
};

export type DepartmentFilter = {
  createdAt?: InputMaybe<NumberFilter>;
  departmentId?: InputMaybe<IdFilter>;
  departmentName?: InputMaybe<StringFilter>;
  departmentUrl?: InputMaybe<StringFilterNullable>;
  updatedAt?: InputMaybe<NumberFilter>;
};

export type DepartmentUpdateInput = {
  departmentName?: InputMaybe<Scalars['String']['input']>;
  departmentUrl?: InputMaybe<Scalars['String']['input']>;
};

export type DepartmentsWithPagination = {
  __typename?: 'DepartmentsWithPagination';
  items: Array<Department>;
  pageInfo?: Maybe<PageInfo>;
};

export type Election = {
  __typename?: 'Election';
  createdAt: Scalars['Int']['output'];
  electionDate: Scalars['String']['output'];
  electionId: Scalars['ID']['output'];
  races?: Maybe<Array<Maybe<Race>>>;
  updatedAt: Scalars['Int']['output'];
};

export type ElectionCreateInput = {
  electionDate: Scalars['String']['input'];
  electionId?: InputMaybe<Scalars['ID']['input']>;
};

export type ElectionFilter = {
  createdAt?: InputMaybe<NumberFilter>;
  electionDate?: InputMaybe<DateFilter>;
  electionId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<NumberFilter>;
};

export type ElectionResult = {
  __typename?: 'ElectionResult';
  candidate: Candidate;
  createdAt: Scalars['Int']['output'];
  electionResultId: Scalars['ID']['output'];
  updatedAt: Scalars['Int']['output'];
  voteCount?: Maybe<Scalars['Int']['output']>;
};

export type ElectionResultCreateInput = {
  candidateId: Scalars['ID']['input'];
  electionResultId?: InputMaybe<Scalars['ID']['input']>;
  voteCount?: InputMaybe<Scalars['Int']['input']>;
};

export type ElectionResultFilter = {
  candidateId?: InputMaybe<IdFilter>;
  createdAt?: InputMaybe<NumberFilter>;
  electionResultId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<NumberFilter>;
  voteCount?: InputMaybe<NumberFilterNullable>;
};

export type ElectionResultUpdateInput = {
  candidateId?: InputMaybe<Scalars['ID']['input']>;
  voteCount?: InputMaybe<Scalars['Int']['input']>;
};

export type ElectionResultsWithPagination = {
  __typename?: 'ElectionResultsWithPagination';
  items: Array<ElectionResult>;
  pageInfo?: Maybe<PageInfo>;
};

export type ElectionUpdateInput = {
  electionDate?: InputMaybe<Scalars['String']['input']>;
};

export type ElectionsWithPagination = {
  __typename?: 'ElectionsWithPagination';
  items: Array<Election>;
  pageInfo?: Maybe<PageInfo>;
};

export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
};

export type IdFilterNullable = {
  eq?: InputMaybe<Scalars['ID']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
};

export type Motion = {
  __typename?: 'Motion';
  createdAt: Scalars['Int']['output'];
  motionDescription?: Maybe<Scalars['String']['output']>;
  motionId: Scalars['ID']['output'];
  motionTitle: Scalars['String']['output'];
  motionType?: Maybe<Scalars['String']['output']>;
  petitioners?: Maybe<Array<Maybe<Petitioner>>>;
  threshold?: Maybe<Scalars['String']['output']>;
  townMeetingVoteResults?: Maybe<Array<Maybe<TownMeetingVoteResult>>>;
  townMeetingVoteTallies?: Maybe<Array<Maybe<TownMeetingVoteTally>>>;
  townMeetingVotes?: Maybe<Array<Maybe<TownMeetingVote>>>;
  updatedAt: Scalars['Int']['output'];
  warrantArticle: WarrantArticle;
};

export type MotionCreateInput = {
  motionDescription?: InputMaybe<Scalars['String']['input']>;
  motionTitle: Scalars['String']['input'];
  motionType?: InputMaybe<Scalars['String']['input']>;
  motion_id?: InputMaybe<Scalars['ID']['input']>;
  threshold?: InputMaybe<Scalars['String']['input']>;
  warrantArticleId: Scalars['ID']['input'];
};

export type MotionFilter = {
  createdAt?: InputMaybe<NumberFilter>;
  motionDescription?: InputMaybe<StringFilterNullable>;
  motionId?: InputMaybe<IdFilter>;
  motionTitle?: InputMaybe<StringFilter>;
  motionType?: InputMaybe<StringFilterNullable>;
  threshold?: InputMaybe<StringFilterNullable>;
  updatedAt?: InputMaybe<NumberFilter>;
  warrantArticleId?: InputMaybe<IdFilter>;
};

export type MotionUpdateInput = {
  motionDescription?: InputMaybe<Scalars['String']['input']>;
  motionTitle?: InputMaybe<Scalars['String']['input']>;
  motionType?: InputMaybe<Scalars['String']['input']>;
  threshold?: InputMaybe<Scalars['String']['input']>;
  warrantArticleId?: InputMaybe<Scalars['ID']['input']>;
};

export type MotionsWithPagination = {
  __typename?: 'MotionsWithPagination';
  items: Array<Motion>;
  pageInfo?: Maybe<PageInfo>;
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
  input: CandidateCreateInput;
};


export type MutationCreateCommitteeArgs = {
  input: CommitteeCreateInput;
};


export type MutationCreateCommitteeMemberArgs = {
  input: CommitteeMemberCreateInput;
};


export type MutationCreateDepartmentArgs = {
  input: DepartmentCreateInput;
};


export type MutationCreateElectionArgs = {
  input: ElectionCreateInput;
};


export type MutationCreateElectionResultArgs = {
  input: ElectionResultCreateInput;
};


export type MutationCreateMotionArgs = {
  input: MotionCreateInput;
};


export type MutationCreateOfficeArgs = {
  input: OfficeCreateInput;
};


export type MutationCreatePersonArgs = {
  input: PersonCreateInput;
};


export type MutationCreatePetitionerArgs = {
  input: PetitionerCreateInput;
};


export type MutationCreatePrecinctArgs = {
  input: PrecinctCreateInput;
};


export type MutationCreateRaceArgs = {
  input: RaceCreateInput;
};


export type MutationCreateTermArgs = {
  input: TermCreateInput;
};


export type MutationCreateTownMeetingSessionArgs = {
  input: TownMeetingSessionCreateInput;
};


export type MutationCreateTownMeetingVoteArgs = {
  input: TownMeetingVoteCreateInput;
};


export type MutationCreateTownMeetingVoteResultArgs = {
  input: TownMeetingVoteResultCreateInput;
};


export type MutationCreateTownMeetingVoteTallyArgs = {
  input: TownMeetingVoteTallyCreateInput;
};


export type MutationCreateVoteTypeArgs = {
  input: VoteTypeCreateInput;
};


export type MutationCreateWarrantArticleArgs = {
  input: WarrantArticleCreateInput;
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
  input: CandidateUpdateInput;
};


export type MutationUpdateCommitteeArgs = {
  id: Scalars['ID']['input'];
  input: CommitteeUpdateInput;
};


export type MutationUpdateCommitteeMemberArgs = {
  id: Scalars['ID']['input'];
  input: CommitteeMemberUpdateInput;
};


export type MutationUpdateDepartmentArgs = {
  id: Scalars['ID']['input'];
  input: DepartmentUpdateInput;
};


export type MutationUpdateElectionArgs = {
  id: Scalars['ID']['input'];
  input: ElectionUpdateInput;
};


export type MutationUpdateElectionResultArgs = {
  id: Scalars['ID']['input'];
  input: ElectionResultUpdateInput;
};


export type MutationUpdateMotionArgs = {
  id: Scalars['ID']['input'];
  input: MotionUpdateInput;
};


export type MutationUpdateOfficeArgs = {
  id: Scalars['ID']['input'];
  input: OfficeUpdateInput;
};


export type MutationUpdatePersonArgs = {
  id: Scalars['ID']['input'];
  input: PersonUpdateInput;
};


export type MutationUpdatePetitionerArgs = {
  id: Scalars['ID']['input'];
  input: PetitionerUpdateInput;
};


export type MutationUpdatePrecinctArgs = {
  id: Scalars['ID']['input'];
  input: PrecinctUpdateInput;
};


export type MutationUpdateRaceArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<RaceUpdateInput>;
};


export type MutationUpdateTermArgs = {
  id: Scalars['ID']['input'];
  input: TermUpdateInput;
};


export type MutationUpdateTownMeetingSessionArgs = {
  id: Scalars['ID']['input'];
  input: TownMeetingSessionUpdateInput;
};


export type MutationUpdateTownMeetingVoteArgs = {
  id: Scalars['ID']['input'];
  input: TownMeetingVoteUpdateInput;
};


export type MutationUpdateTownMeetingVoteResultArgs = {
  id: Scalars['ID']['input'];
  input: TownMeetingVoteResultUpdateInput;
};


export type MutationUpdateTownMeetingVoteTallyArgs = {
  id: Scalars['ID']['input'];
  input: TownMeetingVoteTallyUpdateInput;
};


export type MutationUpdateVoteTypeArgs = {
  id: Scalars['ID']['input'];
  input: VoteTypeUpdateInput;
};


export type MutationUpdateWarrantArticleArgs = {
  id: Scalars['ID']['input'];
  input: WarrantArticleUpdateInput;
};

export type NumberFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
};

export type NumberFilterNullable = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
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

export type OfficeCreateInput = {
  officeId?: InputMaybe<Scalars['ID']['input']>;
  officeName: Scalars['String']['input'];
  precinctId?: InputMaybe<Scalars['ID']['input']>;
};

export type OfficeFilter = {
  createdAt?: InputMaybe<NumberFilter>;
  officeId?: InputMaybe<IdFilter>;
  officeName?: InputMaybe<StringFilter>;
  precinctId?: InputMaybe<IdFilterNullable>;
  updatedAt?: InputMaybe<NumberFilter>;
};

export type OfficeUpdateInput = {
  officeName?: InputMaybe<Scalars['String']['input']>;
  precinctId?: InputMaybe<Scalars['ID']['input']>;
};

export type OfficesWithPagination = {
  __typename?: 'OfficesWithPagination';
  items: Array<Office>;
  pageInfo?: Maybe<PageInfo>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PeopleWithPagination = {
  __typename?: 'PeopleWithPagination';
  items: Array<Person>;
  pageInfo?: Maybe<PageInfo>;
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

export type PersonCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  middleName?: InputMaybe<Scalars['String']['input']>;
  nameSuffix?: InputMaybe<Scalars['String']['input']>;
  personId?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type PersonFilter = {
  address?: InputMaybe<StringFilterNullable>;
  createdAt?: InputMaybe<NumberFilter>;
  email?: InputMaybe<StringFilterNullable>;
  firstName?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  middleName?: InputMaybe<StringFilterNullable>;
  nameSuffix?: InputMaybe<StringFilterNullable>;
  personId?: InputMaybe<IdFilter>;
  phone?: InputMaybe<StringFilterNullable>;
  updatedAt?: InputMaybe<NumberFilter>;
};

export type PersonUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  nameSuffix?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
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

export type PetitionerCreateInput = {
  committeeId?: InputMaybe<Scalars['ID']['input']>;
  departmentId?: InputMaybe<Scalars['ID']['input']>;
  motionId: Scalars['ID']['input'];
  personId?: InputMaybe<Scalars['ID']['input']>;
  petitionerId?: InputMaybe<Scalars['ID']['input']>;
};

export type PetitionerFilter = {
  committeeId?: InputMaybe<IdFilterNullable>;
  createdAt?: InputMaybe<NumberFilter>;
  departmentId?: InputMaybe<IdFilterNullable>;
  motionId?: InputMaybe<IdFilter>;
  personId?: InputMaybe<IdFilterNullable>;
  petitionerId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<NumberFilter>;
};

export type PetitionerUpdateInput = {
  committeeId?: InputMaybe<Scalars['ID']['input']>;
  departmentId?: InputMaybe<Scalars['ID']['input']>;
  motionId?: InputMaybe<Scalars['ID']['input']>;
  personId?: InputMaybe<Scalars['ID']['input']>;
};

export type PetitionersWithPagination = {
  __typename?: 'PetitionersWithPagination';
  items: Array<Petitioner>;
  pageInfo?: Maybe<PageInfo>;
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

export type PrecinctCreateInput = {
  censusYear: Scalars['Int']['input'];
  pollingPlace?: InputMaybe<Scalars['String']['input']>;
  precinctId?: InputMaybe<Scalars['ID']['input']>;
  precinctNumber: Scalars['Int']['input'];
};

export type PrecinctFilter = {
  censusYear?: InputMaybe<NumberFilter>;
  createdAt?: InputMaybe<NumberFilter>;
  pollingPlace?: InputMaybe<StringFilterNullable>;
  precinctId?: InputMaybe<IdFilter>;
  precinctNumber?: InputMaybe<NumberFilter>;
  updatedAt?: InputMaybe<NumberFilter>;
};

export type PrecinctUpdateInput = {
  censusYear?: InputMaybe<Scalars['Int']['input']>;
  pollingPlace?: InputMaybe<Scalars['String']['input']>;
  precinctNumber?: InputMaybe<Scalars['Int']['input']>;
};

export type PrecinctsWithPagination = {
  __typename?: 'PrecinctsWithPagination';
  items: Array<Precinct>;
  pageInfo?: Maybe<PageInfo>;
};

export type Query = {
  __typename?: 'Query';
  allCandidates: CandidatesWithPagination;
  allCommitteeMembers: CommitteeMembersWithPagination;
  allCommittees: CommitteesWithPagination;
  allDepartments: DepartmentsWithPagination;
  allElectionResults: ElectionResultsWithPagination;
  allElections: ElectionsWithPagination;
  allMotions: MotionsWithPagination;
  allOffices: OfficesWithPagination;
  allPeople: PeopleWithPagination;
  allPetitioners: PetitionersWithPagination;
  allPrecincts: PrecinctsWithPagination;
  allRaces: RacesWithPagination;
  allTerms: TermsWithPagination;
  allTownMeetingSessions: TownMeetingSessionsWithPagination;
  allTownMeetingVoteResults: TownMeetingVotesWithPagination;
  allTownMeetingVoteTallies: TownMeetingVoteTalliesWithPagination;
  allTownMeetingVotes: TownMeetingVotesWithPagination;
  allVoteTypes: VoteTypesWithPagination;
  allWarrantArticles: WarrantArticlesWithPagination;
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
  filter?: InputMaybe<CandidateFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
};


export type QueryAllCommitteeMembersArgs = {
  filter?: InputMaybe<CommitteeMemberFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
};


export type QueryAllCommitteesArgs = {
  filter?: InputMaybe<CommitteeFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
};


export type QueryAllDepartmentsArgs = {
  filter?: InputMaybe<DepartmentFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
};


export type QueryAllElectionResultsArgs = {
  filter?: InputMaybe<ElectionResultFilter>;
};


export type QueryAllElectionsArgs = {
  filter?: InputMaybe<ElectionFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
};


export type QueryAllMotionsArgs = {
  filter?: InputMaybe<MotionFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
};


export type QueryAllOfficesArgs = {
  filter?: InputMaybe<OfficeFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
};


export type QueryAllPeopleArgs = {
  filter?: InputMaybe<PersonFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
};


export type QueryAllPetitionersArgs = {
  filter?: InputMaybe<PetitionerFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
};


export type QueryAllPrecinctsArgs = {
  filter?: InputMaybe<PrecinctFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
};


export type QueryAllRacesArgs = {
  filter?: InputMaybe<RaceFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
};


export type QueryAllTermsArgs = {
  filter?: InputMaybe<TermFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
};


export type QueryAllTownMeetingSessionsArgs = {
  filter?: InputMaybe<TownMeetingSessionFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
};


export type QueryAllTownMeetingVoteResultsArgs = {
  filter?: InputMaybe<TownMeetingVoteResultFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
};


export type QueryAllTownMeetingVoteTalliesArgs = {
  filter?: InputMaybe<TownMeetingVoteTallyFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
};


export type QueryAllTownMeetingVotesArgs = {
  filter?: InputMaybe<TownMeetingVoteFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
};


export type QueryAllVoteTypesArgs = {
  filter?: InputMaybe<VoteTypeFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
};


export type QueryAllWarrantArticlesArgs = {
  filter?: InputMaybe<WarrantArticleFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
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

export type RaceCreateInput = {
  electionId: Scalars['ID']['input'];
  officeId: Scalars['ID']['input'];
  raceId?: InputMaybe<Scalars['ID']['input']>;
  seatsOpen: Scalars['Int']['input'];
  termLength: Scalars['Int']['input'];
};

export type RaceFilter = {
  createdAt?: InputMaybe<NumberFilter>;
  electionId?: InputMaybe<IdFilter>;
  officeId?: InputMaybe<IdFilter>;
  raceId?: InputMaybe<IdFilter>;
  seatsOpen?: InputMaybe<NumberFilter>;
  termLength?: InputMaybe<NumberFilter>;
  updatedAt?: InputMaybe<NumberFilter>;
};

export type RaceUpdateInput = {
  electionId?: InputMaybe<Scalars['ID']['input']>;
  officeId?: InputMaybe<Scalars['ID']['input']>;
  seatsOpen?: InputMaybe<Scalars['Int']['input']>;
  termLength?: InputMaybe<Scalars['Int']['input']>;
};

export type RacesWithPagination = {
  __typename?: 'RacesWithPagination';
  items: Array<Race>;
  pageInfo?: Maybe<PageInfo>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type SortInput = {
  direction?: InputMaybe<SortDirection>;
  field: Scalars['String']['input'];
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  exact?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilterNullable = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  exact?: InputMaybe<Scalars['String']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
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

export type TermCreateInput = {
  endDate: Scalars['String']['input'];
  officeId: Scalars['ID']['input'];
  personId: Scalars['ID']['input'];
  startDate: Scalars['String']['input'];
  termId?: InputMaybe<Scalars['ID']['input']>;
};

export type TermFilter = {
  createdAt?: InputMaybe<NumberFilter>;
  endDate?: InputMaybe<DateFilter>;
  officeId?: InputMaybe<IdFilter>;
  personId?: InputMaybe<IdFilter>;
  startDate?: InputMaybe<DateFilter>;
  termId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<NumberFilter>;
};

export type TermUpdateInput = {
  endDate?: InputMaybe<Scalars['String']['input']>;
  officeId?: InputMaybe<Scalars['ID']['input']>;
  personId?: InputMaybe<Scalars['ID']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};

export type TermsWithPagination = {
  __typename?: 'TermsWithPagination';
  items: Array<Term>;
  pageInfo?: Maybe<PageInfo>;
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

export type TownMeetingSessionCreateInput = {
  sessionName: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
  townMeetingSessionId?: InputMaybe<Scalars['ID']['input']>;
};

export type TownMeetingSessionFilter = {
  createdAt?: InputMaybe<NumberFilter>;
  sessionName?: InputMaybe<StringFilter>;
  startDate?: InputMaybe<DateFilter>;
  townMeetingSessionId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<NumberFilter>;
};

export type TownMeetingSessionUpdateInput = {
  sessionName?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};

export type TownMeetingSessionsWithPagination = {
  __typename?: 'TownMeetingSessionsWithPagination';
  items: Array<TownMeetingSession>;
  pageInfo?: Maybe<PageInfo>;
};

export type TownMeetingVote = {
  __typename?: 'TownMeetingVote';
  createdAt: Scalars['Int']['output'];
  motion: Motion;
  person: Person;
  townMeetingVoteId: Scalars['ID']['output'];
  updatedAt: Scalars['Int']['output'];
  voteType: VoteType;
};

export type TownMeetingVoteCreateInput = {
  motionId: Scalars['ID']['input'];
  personId: Scalars['ID']['input'];
  townMeetingVoteId?: InputMaybe<Scalars['ID']['input']>;
  voteTypeId: Scalars['ID']['input'];
};

export type TownMeetingVoteFilter = {
  createdAt?: InputMaybe<NumberFilter>;
  motionId?: InputMaybe<IdFilter>;
  personId?: InputMaybe<IdFilter>;
  townMeetingVoteId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<NumberFilter>;
  voteTypeId?: InputMaybe<IdFilter>;
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

export type TownMeetingVoteResultCreateInput = {
  isPassed?: InputMaybe<Scalars['Boolean']['input']>;
  motionId: Scalars['ID']['input'];
  noVotes?: InputMaybe<Scalars['Int']['input']>;
  threshold?: InputMaybe<Scalars['String']['input']>;
  townMeetingVoteResultId?: InputMaybe<Scalars['ID']['input']>;
  voiceVotePassed?: InputMaybe<Scalars['Boolean']['input']>;
  yesVotes?: InputMaybe<Scalars['Int']['input']>;
};

export type TownMeetingVoteResultFilter = {
  isPassed?: InputMaybe<BooleanFilterNullable>;
  motionId?: InputMaybe<IdFilter>;
  noVotes?: InputMaybe<NumberFilterNullable>;
  threshold?: InputMaybe<StringFilterNullable>;
  townMeetingVoteResultId?: InputMaybe<IdFilter>;
  voiceVotePassed?: InputMaybe<BooleanFilterNullable>;
  yesVotes?: InputMaybe<NumberFilterNullable>;
};

export type TownMeetingVoteResultUpdateInput = {
  isPassed?: InputMaybe<Scalars['Boolean']['input']>;
  motionId?: InputMaybe<Scalars['ID']['input']>;
  noVotes?: InputMaybe<Scalars['Int']['input']>;
  threshold?: InputMaybe<Scalars['String']['input']>;
  voiceVotePassed?: InputMaybe<Scalars['Boolean']['input']>;
  yesVotes?: InputMaybe<Scalars['Int']['input']>;
};

export type TownMeetingVoteResultsWithPagination = {
  __typename?: 'TownMeetingVoteResultsWithPagination';
  items: Array<TownMeetingVoteResult>;
  pageInfo?: Maybe<PageInfo>;
};

export type TownMeetingVoteTalliesWithPagination = {
  __typename?: 'TownMeetingVoteTalliesWithPagination';
  items: Array<TownMeetingVoteTally>;
  pageInfo?: Maybe<PageInfo>;
};

export type TownMeetingVoteTally = {
  __typename?: 'TownMeetingVoteTally';
  motion: Motion;
  townMeetingVoteTallyId: Scalars['ID']['output'];
  voteCount: Scalars['Int']['output'];
  voteType: VoteType;
};

export type TownMeetingVoteTallyCreateInput = {
  motionId: Scalars['ID']['input'];
  townMeetingVoteTallyId?: InputMaybe<Scalars['ID']['input']>;
  voteCount: Scalars['Int']['input'];
  voteTypeId: Scalars['ID']['input'];
};

export type TownMeetingVoteTallyFilter = {
  motionId?: InputMaybe<IdFilter>;
  townMeetingVoteTallyId?: InputMaybe<IdFilter>;
  voteCount?: InputMaybe<NumberFilter>;
  voteTypeId?: InputMaybe<IdFilter>;
};

export type TownMeetingVoteTallyUpdateInput = {
  motionId?: InputMaybe<Scalars['ID']['input']>;
  voteCount?: InputMaybe<Scalars['Int']['input']>;
  voteTypeId?: InputMaybe<Scalars['ID']['input']>;
};

export type TownMeetingVoteUpdateInput = {
  motionId?: InputMaybe<Scalars['ID']['input']>;
  personId?: InputMaybe<Scalars['ID']['input']>;
  voteTypeId?: InputMaybe<Scalars['ID']['input']>;
};

export type TownMeetingVotesWithPagination = {
  __typename?: 'TownMeetingVotesWithPagination';
  items: Array<TownMeetingVote>;
  pageInfo?: Maybe<PageInfo>;
};

export type VoteType = {
  __typename?: 'VoteType';
  createdAt: Scalars['Int']['output'];
  townMeetingVotes?: Maybe<Array<Maybe<TownMeetingVote>>>;
  updatedAt: Scalars['Int']['output'];
  voteTypeId: Scalars['ID']['output'];
  voteTypeName: Scalars['String']['output'];
};

export type VoteTypeCreateInput = {
  voteTypeId?: InputMaybe<Scalars['ID']['input']>;
  voteTypeName: Scalars['String']['input'];
};

export type VoteTypeFilter = {
  createdAt?: InputMaybe<NumberFilter>;
  updatedAt?: InputMaybe<NumberFilter>;
  voteTypeId?: InputMaybe<IdFilter>;
  voteTypeName?: InputMaybe<StringFilter>;
};

export type VoteTypeUpdateInput = {
  voteTypeName?: InputMaybe<Scalars['String']['input']>;
};

export type VoteTypesWithPagination = {
  __typename?: 'VoteTypesWithPagination';
  items: Array<VoteType>;
  pageInfo?: Maybe<PageInfo>;
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

export type WarrantArticleCreateInput = {
  articleDescription?: InputMaybe<Scalars['String']['input']>;
  articleNumber: Scalars['Int']['input'];
  articleTitle: Scalars['String']['input'];
  townMeetingSessionId: Scalars['ID']['input'];
  warrantArticleId?: InputMaybe<Scalars['ID']['input']>;
};

export type WarrantArticleFilter = {
  articleDescription?: InputMaybe<StringFilterNullable>;
  articleNumber?: InputMaybe<NumberFilter>;
  articleTitle?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<NumberFilter>;
  townMeetingSessionId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<NumberFilter>;
  warrantArticleId?: InputMaybe<IdFilter>;
};

export type WarrantArticleUpdateInput = {
  articleDescription?: InputMaybe<Scalars['String']['input']>;
  articleNumber?: InputMaybe<Scalars['Int']['input']>;
  articleTitle?: InputMaybe<Scalars['String']['input']>;
  townMeetingSessionId?: InputMaybe<Scalars['ID']['input']>;
};

export type WarrantArticlesWithPagination = {
  __typename?: 'WarrantArticlesWithPagination';
  items: Array<WarrantArticle>;
  pageInfo?: Maybe<PageInfo>;
};
