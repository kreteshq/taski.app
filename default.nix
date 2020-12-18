{ pkgs ? import <nixpkgs> {}
}:
pkgs.mkShell {
  name = "taski.app_react-environment";
  buildInputs = [
    pkgs.glibcLocales
    pkgs.nodejs-14_x
    pkgs.postgresql_13
    pkgs.pgcli
  ];
  shellHook = ''
    export PGHOST=/tmp
    export PGDATA=./db/content
    export PGDATABASE=taski.app_react
    export PGPORT=5454
    export PGSSLMODE=disable
  '';
}
