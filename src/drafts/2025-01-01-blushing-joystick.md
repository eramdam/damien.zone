---
title: New year, new site!
slug: new-year-new-site
date: 2025-01-01T20:55:59.154Z
tags: []
description: ''
image: '/img/blog/damienzone25/damien-zone-2025.webp'
---

Here it is, the new year! I can't say I'm especially overjoyed about it, but I'm also fine with leaving 2024 behind, so...you know.  

At any rate, like you (maybe) can see, this website got a bit of an overhaul!   
I spent a few days during my winter break re-implementing it using [Eleventy](https://www.11ty.dev/).   

[Bearblog](https://bearblog.dev/) served me well for the past few months, but I knew that, at some point, I'd want to control everything... so here we are.

While the goal of this migration was to have a 1:1 copy of the way the site looked on Bear, I could not help myself and still did a few tweaks here and there.

## damien.zone January 2025 Release Notes

### new favicon / avatar

<center>
<img src="/avatar/avatar-border.png" alt="A black cat with a red bandana, holding a baguette and looking to the left">
</center>

[Sage](https://www.wavebeem.com/) drew a lovely pixel-art version of my avatar! We spent a lot of time making sure it looks _sharp as hell_ everywhere. The favicon shows up ~fine~ in RSS readers as well. I'll try making a post to document how all of this was done because some of the tricks I used are a little bit silly.

### color palette changes

I also changed a bunch of things in the main design around contrast and colors. There would be too many to list, so enjoy a comparison below:

![](/img/blog/damienzone25/damienzone2025-before-dark.webp "Before, in dark mode")

![](/img/blog/damienzone25/damienzone2025-after-dark.webp "After, in dark mode")

![](/img/blog/damienzone25/damienzone2025-before-light.webp "Before, in light mode")

![](/img/blog/damienzone25/damienzone2025-after-light.webp "After, in light mode")

Hopefully, these changes make the site a bit nicer to look at and read. I will continue iterating on it over time because these things are never finished.

### layout / content changes

The layout is still very much based off the "Terminal" theme that Bearblog provides, but I tweaked the layout of a few pages:

- the homepage now has a shorter description, the list of recent posts and that's it.
  - I might try to experiment with the homepage a bunch, at some point I'd like to retire [erambert.me](https://erambert.me/) in favor of this current site.
- the links page has been re-organized / redesigned
- the footer is minimal now with only a link to the [links](/links) and [credits](/credits) page. The webring widget now lives in the links page.


### other changes

The [feed](/feed.xml) is now an Atom feed instead of being Atom or RSS. The actual feed is on [/feed.xml](/feed.xml), but I have redirects setup to make sure that RSS clients that try to query `/feed` still get something. As far as I can tell, RSS readers[^1] seem to be fine with a given feed changing format like that...so hopefully nothing breaks? We'll see!

The code is/will be available on [GitHub](https://github.com/eramdam/damien.zone).

## happy new year everyone

And that's it. I hope and wish for 2025 to serve you and all of us well.

See ya,  
\- damien



[^1]: I've only tried with Inoreader and Reeder.