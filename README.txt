# Slow Roads - Standalone (v2.4.2)

## Run it
Upload all files to your web server / CDN root. Visit index.html. Done.
Local: python3 -m http.server 8080 -> open http://localhost:8080/
File:// won't work (ES modules need http).

All assets (3D models, textures, audio, fonts, UI) are bundled. No external requests.

## Deploy on GitHub Pages
1. Create a new repository (e.g. "slowroads").
2. Push ALL files in this folder to the repository root (main branch).
3. In the repo: Settings -> Pages -> Source: "Deploy from a branch" -> Branch: main, folder: / (root).
4. Play at: https://YOURNAME.github.io/slowroads/

## Play straight from the jsDelivr CDN
Works right after the push, no Pages setup needed:
https://cdn.jsdelivr.net/gh/YOURNAME/REPO@main/index.html
(To force jsDelivr to refresh its cache after an update:
https://www.jsdelivr.com/tools/purge - paste the URL.)

## Notes
- Everything is relative-pathed: any host, any subfolder, any path works.
- The client router was patched to fall back to the game route when the
  page is opened at an arbitrary path (e.g. .../index.html on a CDN),
  instead of showing "Not found".
- Optional multiplayer/leaderboard sockets point at the original dev
  server and fail silently; single player is fully offline.
