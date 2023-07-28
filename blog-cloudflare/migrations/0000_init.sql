-- Migration number: 0000 	 2023-07-28T04:22:29.818Z

CREATE TABLE posts (
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  markdown TEXT NOT NULL
) STRICT;
