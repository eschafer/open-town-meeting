-- precinct_id,precinct_number,census_year,polling_place,created_at,updated_at
CREATE TABLE IF NOT EXISTS precincts (
    precinct_id INTEGER PRIMARY KEY,

    precinct_number INTEGER NOT NULL,
    census_year INTEGER NOT NULL,
    polling_place TEXT,

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,

    UNIQUE (precinct_number, census_year)
);

-- election_id,election_date,created_at,updated_at
CREATE TABLE IF NOT EXISTS elections (
    election_id INTEGER PRIMARY KEY,

    election_date TEXT NOT NULL UNIQUE, -- ISO 8601 format (YYYY-MM-DD)

    created_at INTEGER NOT NULL, -- UNIX timestamp
    updated_at INTEGER NOT NULL -- UNIX timestamp
);

-- town_meeting_session_id,start_date,session_name,created_at,updated_at
CREATE TABLE IF NOT EXISTS town_meeting_sessions (
    town_meeting_session_id INTEGER PRIMARY KEY,

    start_date TEXT NOT NULL,
    session_name TEXT NOT NULL,

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,

    UNIQUE (start_date, session_name)
);

-- vote_type_id,vote_type_name,created_at,updated_at
CREATE TABLE IF NOT EXISTS vote_types (
    vote_type_id INTEGER PRIMARY KEY,

    vote_type_name TEXT NOT NULL UNIQUE, -- yes, no, abstain

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
);

-- person_id,first_name,middle_name,last_name,name_suffix,address,email,phone,created_at,updated_at
CREATE TABLE IF NOT EXISTS people (
    person_id INTEGER PRIMARY KEY,

    first_name TEXT NOT NULL,
    middle_name TEXT,
    last_name TEXT NOT NULL,
    name_suffix TEXT,
    address TEXT,
    email TEXT,
    phone TEXT,

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
);

-- committee_id,committee_name,committee_description,committee_url,created_at,updated_at
CREATE TABLE IF NOT EXISTS committees (
    committee_id INTEGER PRIMARY KEY,

    committee_name TEXT NOT NULL,
    committee_description TEXT,
    committee_url TEXT,

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
);

-- department_id,department_name,department_url,created_at,updated_at
CREATE TABLE IF NOT EXISTS departments (
    department_id INTEGER PRIMARY KEY,

    department_name TEXT NOT NULL,
    department_url TEXT,

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
);

-- committee_member_id,committee_id,person_id,start_date,end_date,position,appointing_authority,created_at,updated_at
CREATE TABLE IF NOT EXISTS committee_members (
    committee_member_id INTEGER PRIMARY KEY,

    committee_id INTEGER NOT NULL,
    person_id INTEGER NOT NULL,
    start_date TEXT,
    end_date TEXT,
    position TEXT,
    appointing_authority TEXT,

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,

    FOREIGN KEY (committee_id) REFERENCES committees(committee_id)
    FOREIGN KEY (person_id) REFERENCES people(person_id),
);

-- office_id,office_name,precinct_id,created_at,updated_at
CREATE TABLE IF NOT EXISTS offices (
    office_id INTEGER PRIMARY KEY,

    office_name TEXT NOT NULL,
    precinct_id INTEGER, -- NULL if town-wide

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,

    FOREIGN KEY (precinct_id) REFERENCES precincts(precinct_id),
    UNIQUE (office_name, precinct_id),
    CHECK ((office_name = 'town meeting' AND precinct_id IS NOT NULL) OR (office_name != 'town meeting' AND precinct_id IS NULL))
);

-- race_id,office_id,election_id,term_length,seats_open,created_at,updated_at
CREATE TABLE IF NOT EXISTS races (
    race_id INTEGER PRIMARY KEY,

    office_id INTEGER NOT NULL,
    election_id INTEGER NOT NULL,
    term_length INTEGER NOT NULL,
    seats_open INTEGER NOT NULL,

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,

    FOREIGN KEY (office_id) REFERENCES offices(office_id),
    FOREIGN KEY (election_id) REFERENCES elections(election_id),

    UNIQUE (office_id, election_id, term_length)
);

-- candidate_id,person_id,race_id,created_at,updated_at
CREATE TABLE IF NOT EXISTS candidates (
    candidate_id INTEGER PRIMARY KEY,

    person_id INTEGER NOT NULL,
    race_id INTEGER NOT NULL,

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,

    FOREIGN KEY (person_id) REFERENCES people(person_id),
    FOREIGN KEY (race_id) REFERENCES races(race_id),

    UNIQUE (person_id, race_id)
);

-- each row represents the votes for a single candidate in a single race
-- election_result_id,candidate_id,vote_count,created_at,updated_at
CREATE TABLE IF NOT EXISTS election_results (
    election_result_id INTEGER PRIMARY KEY,

    candidate_id INTEGER,

    vote_count INTEGER,

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,

    FOREIGN KEY (candidate_id) REFERENCES candidates(candidate_id)
);

-- term_id,person_id,office_id,start_date,end_date,created_at,updated_at
CREATE TABLE IF NOT EXISTS terms (
    term_id INTEGER PRIMARY KEY,

    person_id INTEGER NOT NULL,
    office_id INTEGER NOT NULL,

    start_date TEXT NOT NULL,
    end_date TEXT NOT NULL,

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,

    FOREIGN KEY (person_id) REFERENCES people(person_id),
    FOREIGN KEY (office_id) REFERENCES offices(office_id)
);

-- warrant_article_id,town_meeting_session_id,article_number,article_title,article_description,created_at,updated_at
CREATE TABLE IF NOT EXISTS warrant_articles (
    warrant_article_id INTEGER PRIMARY KEY,

    town_meeting_session_id INTEGER NOT NULL,

    article_number INTEGER NOT NULL,
    article_title TEXT NOT NULL,
    article_description TEXT,

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,

    FOREIGN KEY (town_meeting_session_id) REFERENCES town_meeting_sessions(town_meeting_session_id)
    UNIQUE (town_meeting_session_id, warrant_article_id)
);

-- motion_id,warrant_article_id,motion_title,motion_description,created_at,updated_at
CREATE TABLE IF NOT EXISTS motions (
    motion_id INTEGER PRIMARY KEY,

    warrant_article_id INTEGER NOT NULL,

    motion_title TEXT NOT NULL,
    motion_description TEXT,
    motion_type TEXT, -- petitioner, amendment/substitute, referral
    threshold TEXT, -- majority, 2/3, etc.
    voice_vote_passed INTEGER, -- 1 if passed, 0 if failed
    order_within_article INTEGER,

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,

    FOREIGN KEY (warrant_article_id) REFERENCES warrant_articles(warrant_article_id)
);

-- petitioner_id,motion_id,person_id,department_id,committee_id,created_at,updated_at
CREATE TABLE IF NOT EXISTS petitioners (
    petitioner_id INTEGER PRIMARY KEY,

    motion_id INTEGER NOT NULL,
    person_id INTEGER,
    department_id INTEGER,
    committee_id INTEGER,

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,

    FOREIGN KEY (motion_id) REFERENCES motions(motion_id),
    FOREIGN KEY (person_id) REFERENCES people(person_id),
    FOREIGN KEY (department_id) REFERENCES departments(department_id),
    FOREIGN KEY (committee_id) REFERENCES committees(committee_id)
);

-- town_meeting_vote_id,person_id,motion_id,vote_type_id,created_at,updated_at
CREATE TABLE IF NOT EXISTS town_meeting_votes (
    town_meeting_vote_id INTEGER PRIMARY KEY,

    person_id INTEGER NOT NULL,
    motion_id INTEGER NOT NULL,
    vote_type_id INTEGER,

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,

    FOREIGN KEY (person_id) REFERENCES people(person_id),
    FOREIGN KEY (motion_id) REFERENCES motions(motion_id),
    FOREIGN KEY (vote_type_id) REFERENCES vote_types(vote_type_id)
);

CREATE VIEW IF NOT EXISTS town_meeting_vote_tallies AS
SELECT
    motion_id,
    vote_type_id,
    COUNT(*) as vote_count,
    motion_id || '-' || COALESCE(vote_type_id, '0') as town_meeting_vote_tally_id
FROM
    town_meeting_votes
GROUP BY
    motion_id,
    vote_type_id;

CREATE VIEW IF NOT EXISTS town_meeting_vote_results AS
SELECT
    m.motion_id,
    m.threshold,
    m.voice_vote_passed,
    t.yes_votes,
    t.no_votes,
    m.motion_id as town_meeting_vote_result_id,
    CASE
        WHEN m.voice_vote_passed IS NOT NULL THEN m.voice_vote_passed
        WHEN t.yes_votes IS NULL OR t.no_votes IS NULL THEN NULL
        WHEN m.threshold = 'majority' AND t.yes_votes > (t.yes_votes + t.no_votes) / 2 THEN 1
        WHEN m.threshold = '2/3' AND t.yes_votes > (t.yes_votes + t.no_votes) * 2 / 3 THEN 1
        ELSE 0
    END as is_passed
FROM
    motions m
LEFT JOIN (
    SELECT
        motion_id,
        SUM(CASE WHEN vote_type_id = (SELECT vote_type_id FROM vote_types WHERE vote_type_name = 'yes') THEN 1 ELSE 0 END) as yes_votes,
        SUM(CASE WHEN vote_type_id = (SELECT vote_type_id FROM vote_types WHERE vote_type_name = 'no') THEN 1 ELSE 0 END) as no_votes
    FROM
        town_meeting_votes
    GROUP BY
        motion_id
) t ON m.motion_id = t.motion_id;
