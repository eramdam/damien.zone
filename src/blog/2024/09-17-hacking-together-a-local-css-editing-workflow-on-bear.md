---
title: hacking together a local CSS editing workflow on bear
slug: hacking-together-a-local-css-editing-workflow-on-bear
date: 2024-09-17T05:38:00.000Z
updated: 2024-09-21T08:33:17.565Z
tags:
  - bear
  - javascript
  - meta
  - typescript
description: "if you're being stupid enough about it, you can do some cool stuff"
---

#now playing: [Pictures of Purple Skies by Memorex Memories](https://memorexmemories.bandcamp.com/album/pictures-of-purple-skies)

I have been enjoying the "no frills" aspect of running a blog on bear so far. the one thing I am missing from my previous blog setup, however, is a way to quickly experiment with the CSS of my blog.

while bear's dashboard has been pretty convenient to quickly edit some CSS variables, I feel if I want to do deeper edits the "tweak -> publish -> refresh" loop will feel like a slow to me.

so I did what I usually do in those situations: I write some JavaScript[^1] about it.

The code is on [https://github.com/eramdam/files.damien.zone](https://github.com/eramdam/files.damien.zone) but the logic is pretty straightforward:

- run a web server running on `localhost:3000` (I'm using fastify but i'm sure any web server thing for Node would work)
- run an instance of [live-server](https://github.com/tapio/live-server) in parallel (this one is key!)
- on every route, take the request's URL, transform the URL such that `localhost:3000/foobar` becomes `damien.zone/foobar`
- download the HTML from `damien.zone/foobar`, parse it, remove every stylesheets from it, and inject my own from the repo
- and lastly, inject a modified version of the [injected.html file](https://github.com/tapio/live-server/blob/master/injected.html) from the [live-server](https://github.com/tapio/live-server/) repo, which will make the live reloading of stylesheets work

then the whole thing runs with a simple `npm run start`, I open `localhost:3000` in my browser and.. it just works! I can edit my CSS freely and with instant feedback.

it feels like a very stupid solution but as I often like to say: "If it's stupid and it works, it's not stupid".

see ya,  
\- damien

[^1]: or rather, TypeScript these days, I'm not a fool
