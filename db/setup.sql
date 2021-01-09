create table task (
  id serial primary key,
  name text,
  done boolean default false
);

insert into task (name) values
  ('Learn React.js'),
  ('Create your first API using TypeScript'),
  ('Master the Kretes framework');
