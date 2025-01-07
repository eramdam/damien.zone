---
title: New year, new site!
slug: new-year-new-site
date: 2025-01-01T20:55:59.154Z
tags: []
description: ''
image: '/img/blog/damienzone25/damien-zone-2025.webp'
---

<picture>
<source srcset="/img/blog/damienzone25/damien-zone-2025-dark.webp" media="(prefers-color-scheme: dark)">
<img srcset="/img/blog/damienzone25/damien-zone-2025.webp"  />
</picture>


Here it is, the new year. I can't say I'm especially overhyped about it, but I'm also fine with leaving 2024 behind, so...you know.  

At any rate, like you (maybe) can see, this website is new! Sort of.   
I spent a few days during my winter break re-implementing it using [Eleventy](https://www.11ty.dev/).   

[Bearblog](https://bearblog.dev/) served me well for the past few months, but I knew that, at some point, I'd want to control everything, so I went ahead and did it. 

While the goal of this migration was to have a 1:1 copy of the way the site looked on Bear, I could not help myself and still did a few tweaks here and there.

## damien.zone January 2025 Release Notes

### Design changes

<center>
<picture>
  <source srcset="/avatar/avatar-border.png" media="(prefers-color-scheme: dark)" />
  <source srcset="/avatar/avatar.png" type="image/png" />
  <img alt="A black cat with a red bandana, holding a baguette and looking to the left">
</picture>
</center>

[Sage](https://www.wavebeem.com/) drew a lovely pixel-art version of my avatar! We spent a lot of time making sure it looks _sharp as hell_ everywhere. The favicon shows up ~fine~ in RSS readers as well. I'll try making a post to document how all of this was done because some of the tricks I used are nutty.

I also changed a bunch of little things in the main design around contrast and colors. Here's a little comparison:

![](/img/blog/damienzone25/damienzone2025-before-dark.webp "Before, in dark mode")

![](/img/blog/damienzone25/damienzone2025-after-dark.webp "After, in dark mode")

![](/img/blog/damienzone25/damienzone2025-before-light.webp "Before, in light mode")

![](/img/blog/damienzone25/damienzone2025-after-light.webp "After, in light mode")


### Misc

- The [feed](/feed.xml) is now an Atom feed instead of being Atom-or-RSS. The actual feed is on [/feed.xml](/feed.xml), but I have redirects setup to make sure that RSS clients that try to query `/feed` still get something. As far as I can tell, RSS readers[^1] seem to be fine with a given feed changing format like that, I guess we will see!
- That's kind of it



[^1]: I've only tried with Inoreader and Reeder.