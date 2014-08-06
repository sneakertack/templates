# One-page HTML/Angular App

A single-page app powered by Angular and styled with Bootstrap. No routing - it is really (1) single page. Useful for internal calculators/tools/whatnot that need a GUI.

Doesn't liase with any database by default (usually overkill for internal tools). For data persistence, consider URL query parameters or files.

Includes NVD3 chart directives, because of the likelihood of needing charts.

CDN references explicitly declare https:// or http://, and file references use relative referencing, so that the compiled HTML can work when opened directly from a file browser (useful for non-technical colleagues).

Upon first use, consider doing the following:
1. Update CDN references to current versions.

# Usage

After cloning from repository, do the following to compile:

- `jade index.jade`
