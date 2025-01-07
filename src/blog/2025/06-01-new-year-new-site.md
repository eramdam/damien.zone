---
title: "New year, new site!"
slug: new-year-new-site
date: 2025-01-07T02:07:13.112Z
tags:
  - meta
image: /img/blog/damienzone25/damien-zone-2025.webp
---

<picture>
<source srcset="/img/blog/damienzone25/damien-zone-2025-dark.webp" media="(prefers-color-scheme: dark)">
<img srcset="/img/blog/damienzone25/damien-zone-2025.webp"  />
</picture>

Here it is, the new year! I can't say I'm especially overjoyed about it, but I'm also fine with leaving 2024 behind, so... you know.

At any rate, as you (maybe) can see, this website got a bit of an overhaul!  
I spent a few days during my winter break re-implementing it using [Eleventy](https://www.11ty.dev/).

[Bearblog](https://bearblog.dev/) served me well for the past few months, but I knew that, at some point, I'd want to control everything... so here we are.

While the goal of this migration was to make a 1:1 copy of the way the site looked on Bear, I couldn't help myself and made a few tweaks here and there.

## damien.zone January 2025 Release Notes

### new favicon / avatar

<center>
<img src="/avatar/avatar-border.png" alt="A black cat with a red bandana, holding a baguette and looking to the left">
</center>

[Sage](https://www.wavebeem.com/) drew a lovely pixel-art version of my avatar! We spent a lot of time making sure it looks _sharp as hell_ everywhere. The favicon shows up ~fine~ in RSS readers as well. I'll try to make a post documenting how all of this was done because some of the tricks I used are a little bit silly.

### color palette changes

I also changed several aspects of the main design regarding contrast and colors. There are too many to list, so enjoy a comparison below:

![](/img/blog/damienzone25/damienzone2025-before-dark.webp "Before, in dark mode")

![](/img/blog/damienzone25/damienzone2025-after-dark.webp "After, in dark mode")

![](/img/blog/damienzone25/damienzone2025-before-light.webp "Before, in light mode")

![](/img/blog/damienzone25/damienzone2025-after-light.webp "After, in light mode")

Hopefully, these changes make the site a bit nicer to look at and read. I will continue iterating on it over time because these things are never finished.

### layout / content changes

The layout is still very much based on the "Terminal" theme that Bearblog provides, but I tweaked the layout of a few pages:

- The homepage now has a shorter description, the list of recent posts, and that's it.
- I might experiment with the homepage a bit more; at some point, I'd like to retire [erambert.me](https://erambert.me/) in favor of this current site.
- The links page has been reorganized and redesigned.
- The footer is now minimal, with only links to the [links](/links) and [credits](/credits) pages. The webring widget now lives on the links page.

### other changes

The [feed](/feed.xml) is now an Atom feed instead of being either Atom or RSS. The actual feed is available at [/feed.xml](/feed.xml), but I have redirects set up to ensure that RSS clients querying `/feed` still receive something. As far as I can tell, RSS readers seem to be fine with a given feed changing format like that... so hopefully nothing breaks? We'll see!

The code is/will be available on [GitHub](https://github.com/eramdam/damien.zone).

## happy new year, everyone!

And that's it. I hope and wish for 2025 to serve you and all of us well.

See ya,  
\- damien
