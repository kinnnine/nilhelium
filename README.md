# NilHelium

Multi-instance launcher for Eaglercraft as an installable, fully offline [PWA](https://en.wikipedia.org/wiki/Progressive_web_app).

## Under heavy development, not ready for use yet

Here is the TO DO list so far...

### Features 

- [x] Basic instance management (add, remove)
- [x] Basic version management (add, remove)
- [ ] Complete instance management (add, remove, renaming, editing, settings and so on...)
- [ ] Complete version management (add, remove, renaming, editing, settings and so on...)
- [ ] Account management (Wispcraft integration)
- [ ] Settings management (global settings, import, export, reset and so on...)
- [ ] World management for instance (import, export, remove)
- [x] Able to launch and play the game by instance
- [ ] Complete PWA functionality

### Improvements

- [ ] UI Modals popups on confirmation and giving information
- [ ] Re-structure indexedDB
- [ ] Ultimately code cleaning and follow the coding guidelines

### Bugs

- [ ] 1.12.2 based clients ignoring indexedDB eaglercraftXOpts-options causing major problems for multi-instancing<br/>(duplicate indexedDB database)
- [ ] Some custom clients have their own embedded custom script, otherwise the game will crash and refuse to load (like Resent client)

## Notice

This project's source code doesn't host or contain any portion of Minecraft and Eaglercraft, nor host any copyrighted files.<br/>You need your own client file to play with this launcher by [compiling Eaglercraft](https://github.com/Eaglercraft-Archive/Eaglercraftx-1.8.8-src), and importantly LEGALLY own Minecraft yourself.

This launcher needs a `assets.epw` file in order to play because only WASM-GC version of Eaglercraft or any custom clients, for now.

## Technologies used

* [Mithril.js](https://mithril.js.org/): JavaScript framework
* [Beer CSS](https://www.beercss.com/): Material Design 3 CSS Framework
* [Workbox](https://web.dev/learn/pwa/workbox): Handling asset caching for offline use
* [Pako](https://github.com/nodeca/pako): Zlib compression & decompression
* [Vite](https://vite.dev/): Web Bundler

## Credits

* [lax1dude](https://github.com/lax1dude), [ayunami2000](https://github.com/ayunami2000): Creator and maintainer of Eaglercraft
* [Eaglercraft-Archive](https://github.com/Eaglercraft-Archive): Archiving the remains of Eaglercraft
* [MercuryWorkshop](https://github.com/MercuryWorkshop): Creator of Wispcraft
* [Notch](https://x.com/notch), [Jeb](https://x.com/jeb_) and [Mojang](https://mojang.com): Creator and developer of Minecraft

## Copyright and License

This software is created by Supphakit Duanghoy ([kinnnine](https://github.com/kinnnine)), copyright (c) 2026 under [GPLv2](LICENSE) license.
