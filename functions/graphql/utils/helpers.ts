import { camelCase, mapKeys, snakeCase } from 'lodash';

export function mapKeysToCamelCase(
  obj: Record<string, unknown>,
): Record<string, unknown> {
  return mapKeys(obj, (value, key) => camelCase(key));
}

export function mapKeysToSnakeCase(
  obj: Record<string, unknown>,
): Record<string, unknown> {
  return mapKeys(obj, (value, key) => snakeCase(key));
}

export function getUnixTimestamp(): number {
  return Math.floor(Date.now() / 1000);
}

export const tables = {
  precincts: 'precinct_id',
  elections: 'election_id',
  town_meeting_sessions: 'town_meeting_session_id',
  vote_types: 'vote_type_id',
  people: 'person_id',
  committees: 'committee_id',
  departments: 'department_id',
  committee_members: 'committee_member_id',
  offices: 'office_id',
  races: 'race_id',
  candidates: 'candidate_id',
  election_results: 'election_result_id',
  terms: 'term_id',
  warrant_articles: 'warrant_article_id',
  motions: 'motion_id',
  petitioners: 'petitioner_id',
  town_meeting_votes: 'town_meeting_vote_id',
  town_meeting_vote_tallies: 'town_meeting_vote_tally_id',
  town_meeting_vote_results: 'town_meeting_vote_result_id',
};
