{ pkgs ? import <nixpkgs> {}
}:
pkgs.mkShell {
  name = "taski.app_react-environment";
  buildInputs = [
    pkgs.glibcLocales
    pkgs.nodejs-15_x
    pkgs.postgresql_13
    pkgs.pgcli
  ];
  shellHook = ''
  '';
}
