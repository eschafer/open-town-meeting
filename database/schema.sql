CREATE TABLE IF NOT EXISTS precincts (
    precinct_id INTEGER PRIMARY KEY,

    precinct_number INTEGER NOT NULL,
    census_year INTEGER NOT NULL,
    polling_place TEXT,

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,

    UNIQUE (precinct_number, census_year)
);

CREATE TABLE IF NOT EXISTS elections (
    election_id INTEGER PRIMARY KEY,

    election_date TEXT NOT NULL UNIQUE, -- ISO 8601 format (YYYY-MM-DD)

    created_at INTEGER NOT NULL, -- UNIX timestamp
    updated_at INTEGER NOT NULL -- UNIX timestamp
);

CREATE TABLE IF NOT EXISTS town_meeting_sessions (
    session_id INTEGER PRIMARY KEY,

    start_date TEXT NOT NULL,
    session_name TEXT NOT NULL,

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,

    UNIQUE (start_date, session_name)
);

CREATE TABLE IF NOT EXISTS vote_types (
    vote_type_id INTEGER PRIMARY KEY,

    vote_type_name TEXT NOT NULL UNIQUE, -- yes, no, abstain

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS people (
    person_id INTEGER PRIMARY KEY,

    first_name TEXT NOT NULL,
    middle_name TEXT,
    last_name TEXT NOT NULL,
    name_suffix TEXT,
    precinct_id INTEGER,
    address TEXT,
    phone TEXT,
    email TEXT,

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,

    FOREIGN KEY (precinct_id) REFERENCES precincts(precinct_id)
);

CREATE TABLE IF NOT EXISTS offices (
    office_id INTEGER PRIMARY KEY,

    office_name TEXT NOT NULL, --
    precinct_id INTEGER, -- NULL if town-wide

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,

    FOREIGN KEY (precinct_id) REFERENCES precincts(precinct_id),
    UNIQUE (office_name, precinct_id),
    CHECK ((office_name = 'town meeting' AND precinct_id IS NOT NULL) OR (office_name != 'town meeting' AND precinct_id IS NULL))
);

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

CREATE TABLE IF NOT EXISTS election_results (
    result_id INTEGER PRIMARY KEY,

    candidate_id INTEGER NOT NULL,

    vote_count INTEGER,

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,

    FOREIGN KEY (candidate_id) REFERENCES candidates(candidate_id)
);

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

CREATE TABLE IF NOT EXISTS warrant_articles (
    article_id INTEGER PRIMARY KEY,

    session_id INTEGER NOT NULL,

    article_number INTEGER NOT NULL,
    article_title TEXT NOT NULL,
    article_description TEXT,

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,

    FOREIGN KEY (session_id) REFERENCES town_meeting_sessions(session_id)
    UNIQUE (session_id, article_id)
);

CREATE TABLE IF NOT EXISTS motions (
    motion_id INTEGER PRIMARY KEY,

    article_id INTEGER,

    motion_title TEXT NOT NULL,
    motion_description TEXT,

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,

    FOREIGN KEY (article_id) REFERENCES warrant_articles(article_id)
);

CREATE TABLE IF NOT EXISTS petitioners (
    person_id INTEGER NOT NULL,
    motion_id INTEGER NOT NULL,

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,

    PRIMARY KEY (person_id, motion_id),

    FOREIGN KEY (person_id) REFERENCES people(person_id),
    FOREIGN KEY (motion_id) REFERENCES motions(motion_id)
);

CREATE TABLE IF NOT EXISTS votes (
    person_id INTEGER,
    motion_id INTEGER,

    vote_type INTEGER NOT NULL,

    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,

    PRIMARY KEY (person_id, motion_id),

    FOREIGN KEY (person_id) REFERENCES people(person_id),
    FOREIGN KEY (motion_id) REFERENCES motions(motion_id),
    FOREIGN KEY (vote_type) REFERENCES vote_types(vote_type_id)
);
