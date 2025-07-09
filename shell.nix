{ pkgs ? import <nixpkgs> {} }:
(pkgs.buildFHSEnv {
  name = "lens-of-brown";
  targetPkgs = pkgs: (with pkgs; [
    # Required for node sharp:
    swig
    glibc
    glib.dev
    libffi
    ffmpeg
    libsmf
    libGL
    libz
    libzip
    libgcc
    zlib
    pango
    fontconfig
    cmake
    pixman
    cairo
    libjpeg
    giflib
    librsvg
    pkg-config

    # instaloader # Needed for downloading recent posts for lens.ofbrown
    gallery-dl
  ]) ++ (with pkgs.xorg; [
    libX11
    libXext
    libSM
  ]);
  # profile = ''
  # '';
  runScript = "zsh";
}).env