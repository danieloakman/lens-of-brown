{
  description = "Lens of Brown development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        # buildFHSEnv + direnv/nix develop recurse when runScript matches the login shell
        hostLibs = with pkgs; [
          glib
          libffi
          ffmpeg
          libsmf
          libGL
          zlib
          libzip
          libgcc
          pango
          fontconfig
          pixman
          cairo
          libjpeg
          giflib
          librsvg
          libX11
          libXext
          libSM
        ];
        pkgConfigLibs = with pkgs; [
          glib
          libffi
          fontconfig
          pixman
          cairo
          libjpeg
          giflib
          librsvg
          libX11
          libXext
        ];
      in
      {
        devShells.default = pkgs.mkShell {
          name = "lens-of-brown";
          buildInputs = with pkgs; [
            # Required for node sharp:
            swig
            glib
            libffi
            ffmpeg
            libsmf
            libGL
            zlib
            libzip
            libgcc
            pango
            fontconfig
            cmake
            pixman
            cairo
            libjpeg
            giflib
            librsvg
            pkg-config
            libX11
            libXext
            libSM

            # instaloader # Needed for downloading recent posts for lens.ofbrown
            gallery-dl

            bun
          ];

          shellHook = ''
            export LD_LIBRARY_PATH="${pkgs.lib.makeLibraryPath hostLibs}''${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}"
            export PKG_CONFIG_PATH="${pkgs.lib.makeSearchPath "lib/pkgconfig" (map pkgs.lib.getDev pkgConfigLibs)}''${PKG_CONFIG_PATH:+:$PKG_CONFIG_PATH}"
          '';
        };
      });
}
