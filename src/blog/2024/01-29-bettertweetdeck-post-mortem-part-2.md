---
title: "Better TweetDeck, a Post-Mortem, Part 2: A written history and credits"
slug: bettertweetdeck-post-mortem-part-2
date: 2024-01-29T08:00:00.000Z
last_modified: 2024-12-07T04:55:00.206Z
tags:
  - better tweetdeck
description: >-
  Recounting Better TweetDeck's history and crediting people who contributed to
  it.
---

This post will be the second —and last, I think— part of my "Better TweetDeck post-mortem" series.
In this part, I will try to recount the history of Better TweetDeck as well as shout out people who have helped me with the project. You might learn a thing or two even if you used it for years!

## A timeline of Better TweetDeck

As it turns out, trying to recall and tell 9 years of history of a project without prior notes is kinda hard! Who knew! And I think most of it would be boring, as the bulk of my changelogs aren't particularly interesting. So, rather than go through every single release, I will try to do a "best highlights" retelling of what the project went through. If you want to follow along, I have put together a copy of the full changelog of (almost) every tagged version of Better TweetDeck [right here](/btd-changelog).

### A bunch of JS and CSS put together

<small>December 2013</small>

I was a student at the time, finishing up my last year of university, living at my parents' place. Unfortunately, we lived in the countryside and that mean we had a <em>terribly</em> slow internet connection. I'm talking less than 1Mbps slow. It wasn't great! But it was manageable.

While I can't remember what prompted me to start using TweetDeck specifically (this was after the acquisition by Twitter). I do remember being extremely annoyed at having to wait for [t.co](t.co) (Twitter's URL shortener) when clicking on. Every. Single. Link. Somehow, this domain is still the slowest domain I regularly encounter, and it was slow at the time already!

At that point, I had been learning web development for a few years, which made me think that _surely_ there was a way to fix this with a userscript or browser extension, right? So I opened up my Chrome developer tools, looked around on my feed, and would you look at that!

```html
<a
  href="https://t.co/1234"
  target="_blank"
  class="url-ext"
  data-full-url="https://google.com"
  rel="url noopener noreferrer"
  title="https://google.com"
  >google.com</a
>
```

`data-full-url`! That's what I wanted! So off I went, putting together a first version of Better TweetDeck that added a "t.co removal" feature, alongside a few others, in [January 2014](https://github.com/eramdam/BetterTweetDeck/commit/a5e002f1).

The extension wasn't public at this point: it didn't even have an icon or anything. But a few friends of mine were testing it to provide feedback (and make sure I didn't break anything in a catastrophic way).[^3]

### 1st public release

<small>29 January 2014</small>

On January 29th 2014, I released the first version of Better TweetDeck to the public. Funnily enough, it was _not_ 1.0.0 but 0.0.7 😅

It had the following features (taken from the [README file](https://github.com/eramdam/BetterTweetDeck/blob/4bb210d4be6cc14843ded5f590859126789974df/README.md)):

> - Thumbnails for Imgur and Droplr images links
> - Allow to change the time formatting (Relative or Absolute)
> - Allow to change the username/full name formatting (Username only, Full name only, both or inverted (Username Full name))
> - Display fancy circled avatars (they're hipsters, but they're cute too!)
> - Remove that god-damn useless t.co redirection on links

<small>I used to swear a bit (too much) when writing code</small>  
And here it is running on modern Chrome on modern macOS 😄

<figure class="rehype-figure">
  <img src="/img/blog/btd-post-mortem2/btd-0.0.8.jpg" alt="The first public version of Better TweetDeck running in Chrome on macOS in 2023">
  <figcaption>The first public version of Better TweetDeck running in Chrome on macOS in 2023</figcaption>
</figure>

### Hitting 1.0

<small>February 2014</small>

A month later, Better TweetDeck hit 1.0! Yay! It now had a proper "welcome" ~~screen~~ banner and a [bunch of new features](/btd-changelog#100). Most of them were tweaks and improvements of existing features, but the biggest part of that changelog was the addition of more "providers" for the thumbnails feature, which made it so links from websites with not-so-great Open Graph support could look nicer and have more functionality inside TweetDeck. I would love to show how it looked back then, but I couldn't find a screenshot of that specific feature running on that specific version of TweetDeck 🙃. So, instead, enjoy a [screenshot of the options page in modern Chrome](/img/blog/btd-post-mortem2/btd-1.0.0.png).

The extension's user base was tiny at the time (around 200 weekly users), but it was fine by me. I was making this for myself _first_ and for others second. It was mostly spreading through word of mouth at that point.

### A twist?!

<small>February - April 2014</small>

But little did I know, the TweetDeck team had noticed it despite its small reach. That's when I got an email from [James Broadhead](https://twitter.com/jamesbroadhead), suggesting that I apply for a summer internship at Twitter UK in London!

!["Hi Damien! I'm a Software Engineer on the TweetDeck team. We came across Better TweetDeck, which I've used for the past day or so -- you've got some really neat ideas in there. I wonder if you'd be interested in coming to London for the summer as an intern to work on TweetDeck? The title says 'Software Engineer', but if you're interested in working closely with our design team on UI/UX work, I'm sure that we can arrange that. It's a paid position, which should cover a summer in the UK :) Although we don't have any full-time roles advertised at the moment, getting a position after a good internship should be easy to arrange, if you're interested. I'm not a recruiter, but if you're interested, I can pass your details along  (or just apply through the site directly). All the best - James Broadhead"](/img/blog/btd-post-mortem2/btd-email-james.png "The email I got from James back then (thanks to him for finding a copy of it, by the way)")

Thus began a months-long application process for this internship. I remember having maybe half a dozen interviews with various Twitter employees trying to gauge my front-end dev skills at the time. Even though I didn't get the spot in the end, it was incredibly flattering and enriching to go through the process. I genuinely couldn't believe folks at Twitter found my dinky little extension useful! It was completely wild to me.

### Emoji!

<small>1.4.0, April 2014</small>

The project cruised along. I was pushing updates regularly, working on it on my spare time. One of the big features I was proud of was the support of emoji in 1.4.0! It may sound silly nowadays but, at the time, support of emoji outside of macOS/iOS was pretty much non-existent and, from my recollection, Twitter was one of the first websites to support them _and_ have their own set of emoji.

Now, if you know about the [Twemoji project](https://github.com/twitter/twemoji/) (RIP), you might also know that Twitter didn't open-sourced it until [November 2014](https://blog.twitter.com/developer/en_us/a/2014/open-sourcing-twitter-emoji-for-everyone), so how did I support emoji before that?

The hard way! Most of the logic lives in this [file](https://github.com/eramdam/BetterTweetDeck/blob/eaf88f4775e74882b1de6c2ba3ff5ea6ed2a6075/source/js/emojiToImage.js), and how I got to that implementation is kind of funny in retrospect.
I remember asking around on an IRC channel I'd hang out on, and a [friend](https://github.com/Meroje) came up with a way to [list all the available URLs of Twitter's emoji](https://gist.github.com/Meroje/9994612). Since the Gist contains a 20,000-line long text file, it will take a while to load, so I'm embedding a copy of the README file here, which details the process Meroje went through:

> #### Purpose
>
> This was used to find all possible URLs of twitter's emojis.  
> The list is used for [BetterTweetDeck](https://github.com/eramdam/BetterTweetDeck)'s emojis replacement script.
>
> #### Do it at home
>
> First we export all characters from `/System/Library/Input Methods/CharacterPalette.app/Contents/Resources/CharacterDB.sqlite3` (column `uchr` from table `unihan_dict`) as CSV (could have used SQLite from Node.js). This file contains all Unicode characters (54072).
>
> Then this CSV is parsed with Node.js, which outputs corresponding URLs.
>
> To find all emojis from there, you _just_ have to test every URL ([example](https://gist.github.com/eramdam/dc05745f977f3fa18dd5), [another, with paralelism](http://stackoverflow.com/a/22379949/1478202)) (be gentle, use HEAD) to remove those that return 404.

From there, I had a final list of ~620 supported emoji[^6] and went on to replacing any emoji I'd find in tweets with their respective image file. The implementation was a bit crude but it worked! And, on top of that, it was completely immune to the [infamous XSS vulnerability](https://www.youtube.com/watch?v=zv0kZKC6GAM) TweetDeck ran into when they rolled out their own support of emoji 😄

After a few days, I had figured out how to inject an emoji picker. It was very [basic](https://github.com/eramdam/BetterTweetDeck/blob/40ad2b3585374677782a46888afcf5f16add2796/source/js/usefulFunctions.js/#L121-L173), but it did the job and was useful for anybody who wasn't on macOS (at the time it was the only desktop operating system with native emoji support).

Eventually, TweetDeck rolled out a (safe) implementation of emoji support, so I removed mine around May 2014 while keeping the picker. I tried my best, over the years, to keep the list of supported emoji in the picker up to date, and even managed to monkey patch the built-in emoji replacement code to update more often when Twitter couldn't be bothered to update TweetDeck more than a few times a year.

### Reaching 2.0

<small>August 2014</small>

In August 2014, I released [version 2.0](https://github.com/eramdam/BetterTweetDeck/tree/bacede58aaea3e86c44dbd74acc42e41a603f651) of Better TweetDeck. It had a lot of features!

- A translation and complete redesign of the settings
- A homemade emoji picker
- The ability to display thumbnails from a dozen services like Imgur, Instagram, SoundCloud, etc.
  - Some of those thumbnails relied on [Embed.ly](https://embed.ly/)'s API, which was very convenient, but that convenience came at a cost (more on that later).
- A "Share to TweetDeck" context menu (that couldn't be disabled, this came later as an external contribution)
- More granular control of the timestamp display
- And many more I forget

Here are the settings in action, along with their "dynamic preview" system I was so proud of at the time!

<figure class="rehype-figure">
<video src="/img/blog/btd-post-mortem2/btd-2.0-settings.mp4" poster="/img/blog/btd-post-mortem2/btd-2.0-settings.jpg" playsinline controls preload="none"></video>
<figcaption>
  The settings from Better TweetDeck 2.0, running on modern Chrome
</figcaption>
</figure>

On the technical side it was also quite a big release:

- I had _actual_ tooling instead of three JavaScript files that were ~700 lines long (although I was using some weird [`gulp`][gulp] plugin to "import" files to and from each other, it still wasn't great)
- I was using [Sass](https://sass-lang.com/) for styles, which let me get fancier with CSS customizations

This might not seem like much, but it meant that it was much easier for [external contributors](https://github.com/eramdam/BetterTweetDeck/graphs/contributors?from=2014-08-03&to=2017-12-23&type=c) to help on the project 😄

### 2.x and other things

<small>August 2014 - 2016</small>

I would love to go into lots of details on what I worked on and added to the project in that timespan, but it turns out I wasn't very smart and didn't write a single changelog between 2.0.0 and 3.0.0 🙃 Let this serve as a cautionary tale for anybody reading this: write changelogs!

What I do remember is that:

- The project gained quite a bit of steam! Going from ~1700 weekly users after 2.0.0's release to ~20,000 right before 3.x's release![^7]
- I started implementing localization for the settings, so people could translate BTD in their own language
- and surely other things I'm forgetting.

On a personal level, _a lot_ happened during that time!  
In summer of 2014, I was in the process of getting ready to start my two years at [Gobelins](https://www.gobelins-school.com/) through an apprenticeship program, which meant I had to find a company to sponsor me. On the advice of a [friend](http://areskub.com/), I approached [eFounders](https://www.wikiwand.com/en/EFounders), who told me that they liked what they saw on my resume[^8] but only had full-time positions. To which I cheekily replied "but _what if_ I applied for a full-time position?". One thing leading to another, I ran into [Front's CTO](https://github.com/lperrin) with whom I had worked on a previous project. Front was looking for a front-end developer, so everything clicked into place.  
It was definitely a gamble because, if this didn't go through, I would have felt pretty silly, but it paid off and, 9 years —phew— later, I have zero regrets!

The next summer, I followed the team to San Francisco, which was obviously quite the move! I didn't get much done on Better TweetDeck in 2015 because, as it turns out, moving all the way across the world keeps you busy for a while!

In December 2015, I created a [Twitter account for the project](https://twitter.com/BetterTDeck). up until that point I did all support and communication through my personal account, which got old pretty quickly. From that moment on, most BTD-related communication was done there.

I'm sure I did more on the project itself but again, my past self's poor changelog hygiene is costing me, as I can't gather anything useful from my Git history. So let's move onto the next milestone!

### Episode 3

<small>3.0, August 2016</small>

As the title of this section suggests, I released v3 of BTD in August 2016. It was quite a big release! You can see the [full changelog here](/btd-changelog#300) but the highlights were:

#### Complete rewrite

Once again, I had rewritten the whole codebase and managed to get an even faster and leaner BTD out of it. I had switched from the weird gulp-based tooling to using Webpack and ES6 modules. This may sound funny in 2023 but, at the time, it was a very recent addition to ECMAScript!

#### Ability to change hearts back to stars.

Twitter had renamed "Favorites" (using a star icon) to "Likes" (using a heart icon). I'm sure some people wrote about it in greater detail, but this caused quite the turmoil among Twitter users, since "favorite" had a more "neutral" connotation as to why people were using it, whereas "like" was very opiniated. So people (and I, at the time) were glad to be able to change the hearts back to stars.

Fun implementation trivia: when Twitter made that change on the main web app, TweetDeck simply added a `heart` class to the main `<body>` element of TweetDeck, which meant that switching back to stars was as easy as removing that class at runtime 😄 They eventually went with a more permanent solution, and I had to start embedding old PNGs into BTD's code, but that was a fun period.

#### A _lot_ of new thumbnail providers supported

At this point, I think the project was supporting maybe 15 different providers? I know the list grew even more when contributors started adding their own.

Like I said earlier, those were using [Embed.ly](https://embed.ly/), which was great because it had a unified API that supported basically every URL under the sun and could extract a useful thumbnail/embed out of it. Problem was that, despite Embed.ly giving a "free quota"[^9], I blew through it in a matter of _days_ after the release of v3.  
This meant that I [suddenly owed Embed.ly around ~200$](https://twitter.com/BetterTDeck/status/762319703419125761) after only a week or two, which was not money I could afford to spend on BTD, especially since it didn't make any significant income[^10]. I [called for donations/Patreon subscriptions at the time](https://twitter.com/BetterTDeck/status/762320997429055488) but quickly pulled the plug when I realized the juice wasn't worth the squeeze.  
In retrospect, that was the right call since Twitter ended up implementing their [cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards) universally and supporting those in TweetDeck was a better/easier way to go.

#### Verified badges in columns

This might seem like a small feature on paper but, without it, one of the funniest features of Better TweetDeck wouldn't have been possible years later. _\~Foreshadowing\~_.

### Opera support

<small>3.0.17, September 2016</small>

3.0.17 in itself was fairly light on features, but it also marked the first instance of non-Chrome browser support: Opera! On a technical side, I remember it being easy enough to support, since Opera had recently(? I think) switched to Chromium/Blink, so extensions worked as-is.  
However, the Opera Add-ons Store was _a pain_ to work with. I could never get reliable reviews in a reasonable time, meaning Opera users were always days, if not weeks, behind Chrome users.

[Three years later](https://twitter.com/BetterTDeck/status/1098087699993354240), I ended up removing the extension from Opera's store because of the review hassles. I could write a whole blog post about my experiences with different browser extension stores and platforms 😅

### 3.x

<small>2017</small>

Quite a bit had happened after 3.0:

- The messages in the Direct Messages column could be collapsed, a very neat and useful trick. One of many contributions by [pixeldesu](https://github.com/pixeldesu)
- A lot of thumbnail providers were contributed by folks! Mostly for Japanese-speaking sites. That might explain why BTD ended up being so popular with Japanese users.
  - For the curious, those providers were WorldCosplay, Photozou, Gyazo, TINAMI, Nicoseiga, Miil.me and... Google+.
- Donald Trump had taken office a few months prior and, things were looking grim in the U.S., so I used my (albeit tiny) platform to promote some organizations doing the good work on my donation page. I never needed BTD to make money in order to work on it, so it felt like the right thing to do.
- A bunch of things around GIFs:
  - Ability to view GIFs in full-screen. A feature that I wish more social media sites copied, sometimes a GIF is actually a video, and it would be very useful to zoom in on it!
  - GIF download! This one was useful but also a pain in the ass. It was based on a [barely maintained library from Yahoo](https://www.npmjs.com/package/gifshot) and worked well about 80% of the time. Turns out converting MP4 files to GIF files is much harder than you might think. I ended up removing that feature a few years later because it was also _very slow_ on some browsers.
- Image pasting into the composer. A feature that's basically a given on any website these days, but TweetDeck never got that, for some reason, which is a shame because my implementation was [really simple](https://github.com/eramdam/BetterTweetDeck/blob/3.1.0/src/js/inject.js#L335-L362).

### Firefox support!

<small>3.3.4, May 2017</small>

Firefox support had been a common request ever since Better TweetDeck was released in 2014. But the fact was, Firefox had a completely different extension architecture, meaning I would need to accommodate both in a single codebase, somehow. That wasn't happening.  
Thankfully, Mozilla was working on implementing the [WebExtensions API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions) with the goal of reaching parity with Chrome. This was great news because it meant I could easily support both Chrome and Firefox with minimal platform-specific changes 😄

After quite a bit of back and forth in initial reviews with the Mozilla Add-ons team, Better TweetDeck landed on Firefox in May 2017!

![Better TweetDeck 3.3.4 running on Firefox 52](/img/blog/btd-post-mortem2/btd-firefox.jpg)

### The one with the "Edit button"

<small>3.4.6-3.4.7, October 2017</small>

One recurring theme of Better TweetDeck was that I wasn't very good at versioning, since, in hindsight these "patch" versions deserved to be more than that. After all, they brought fan-favorite features, all of which were contributed by [EntranceJew](https://github.com/EntranceJew). I wish I came up with at least _one_ of these myself!

#### Collapsible columns and "clear" button in columns' header

1. [Collapsible columns](https://github.com/eramdam/BetterTweetDeck/pull/208). This was a good alternative to deleting a column, because sometimes you wanted to just "hide" a column temporarily, or just needed to clean up your view.
2. ["Clear" button in the columns' header](https://github.com/eramdam/BetterTweetDeck/pull/224). On its own, it was a small improvement, but I built on top of it to add more actions in that area later.

<figure class="rehype-figure">
<video src="/img/blog/btd-post-mortem2/btd-collapsible-columns.mp4" poster="/img/blog/btd-post-mortem2/btd-collapsible-columns.jpg" playsinline controls></video>
<figcaption>
  A demo of Better TweetDeck's collapsible columns in action. Enjoy the "retro" Chrome UI as a bonus.
</figcaption>
</figure>

#### The "Edit" button

Honestly EntranceJew's best idea and the one that had the most impact for Better TweetDeck users and [everyone](https://blog.joinmastodon.org/2018/06/if-you-could-edit-tweets/) [else](https://www.theverge.com/2023/2/14/23600047/tweetbot-creators-mastodon-ivory-edit-button). It was more of a "re-draft" feature more than anything else since it copied your tweet's text and media, deleted it and re-opened the composer with everything pre-filled.  
I probably should have changed the button's label to "Re-draft", but then I wouldn't have ended up in a [BuzzFeed](https://www.buzzfeednews.com/article/janelytvynenko/twitter-is-not-testing-an-edit-button) story so who can say!

### The GIF and emoji update

<small>3.5, December 2017</small>

This time, I had properly versioned the version since it added two pretty "big" features:

#### Emoji short codes in the composer

A long-time request and one of my favorite features. If you've used Slack, Discord or Mastodon, you know what this does, otherwise, look at the video below!

<figure class="rehype-figure">
<video src="/img/blog/btd-post-mortem2/btd-emoji-shortcodes.mp4" poster="/img/blog/btd-post-mortem2/btd-emoji-shortcodes.jpg" playsinline controls></video>
<figcaption>
  A demo of the emoji autocompletion feature
</figcaption>
</figure>

#### GIF picker

Another long requested feature. It was a bit of a mess to implement at the time but was well worth it. It also let me introduce a subtle but [effective April Fools' joke](https://twitter.com/search?q=%40Bettertdeck%20jif&src=typed_query&f=live) in Better TweetDeck 😄

<figure class="rehype-figure">
<video src="/img/blog/btd-post-mortem2/btd-gif-picker.mp4" poster="/img/blog/btd-post-mortem2/btd-gif-picker.jpg" playsinline controls></video>
<figcaption>
  A demo of the emoji autocompletion feature
</figcaption>
</figure>

### Advanced Mute Engine's debut and the old dark theme.

<small>3.6, February 2018</small>

Another big update with external contributions! This time, [pixeldesu](https://github.com/pixeldesu) cooked up a feature that ended up being the backbone of many useful additions later on: the "Advanced Mute Engine". Without going into the technical details, it was a system running on top of TweetDeck's mute engine.  
This may sound weird nowadays, but TweetDeck had mute capabilities way before the rest of Twitter did! TweetDeck's system running entirely client-side (in a user's browser) meant that Better TweetDeck could plug into it to add extra functionality. In this first update you could:

- Mute tweets by keywords from a specific user
- Mute with regular expressions
- Mute people based on keywords in their bio
- Mute users with the default profile picture
- Mute users with less than _n_ followers

Those options showed up as options in the "Mute" tab of TweetDeck's settings:

![Better TweetDeck's Advanced Mute Engine additions](/img/blog/btd-post-mortem2/btd-advanced-mute.png)

Over time, pixeldesu and I ended up adding more specific/"niche" muting options to that menu.

However, this release also happened at the same time that Twitter switched TweetDeck's dark "gray" theme to a more blueish dark theme palette. I personally didn't mind much, but _a lot_ of people cared and preferred the old way things looked, so I pretty much embedded a copy of TweetDeck's old CSS file in Better TweetDeck to support that. It worked but was kind of a messy solution to a problem that —I imagine[^11]— only a fraction of my user base had 🙃

### Custom CSS

<small>3.7, May 2018</small>

3.7.0 was a smaller update but saw support for another long-requested feature: Custom CSS! I avoided implementing this for a long time because extensions like [Stylus](https://add0n.com/stylus.html) do the job better, but I guess not everybody wanted to install a whole other extension _just_ to apply a few CSS tweaks.

So I added that feature in, and took this as an opportunity to play around with [Monaco](https://microsoft.github.io/monaco-editor/), the code editor that powers [Visual Studio Code](https://code.visualstudio.com/).  
Users were also sharing [their own personal tweaks](https://github.com/eramdam/BetterTweetDeck/issues/546) to TweetDeck's UI as well, which is always neat to see.

### Putting a (one) face behind TweetDeck

<small>August 2018</small>

2018 wasn't a quiet year for me (more on that later), but one of the highlights was being able to finally put a (at least one) face behind TweetDeck! You see, in 2018, Twitter held a company-wide event called "#OneTeam", where most (all?) the teams would meet up at HQ in San Francisco. That's when I got to meet [Andreas](https://twitter.com/andrs) who was TweetDeck's Tech Lead at the time.

It has been 5 years, so I obviously don't remember every detail from our conversation, but I got the same feeling I had from my other interactions with him and other members of the TweetDeck team prior: it ~~is~~ was a small but mighty team who cared about their work and was very much aware of what I was doing with Better TweetDeck.  
It was all pie-in-the-sky thinking but I remember Andreas imagining an "add-ons" system that third parties (like me) could take advantage of to add functionality to TweetDeck. At this point I wasn't the only project extending TweetDeck anymore. [ModernDeck](https://github.com/dangeredwolf/ModernDeck), [TweetDuck](https://tweetduck.chylex.com/), [Tweeten](https://tweetenapp.com/), among others, were filling specific niches with different ideas for the app. It was an interesting time to build on top of TweetDeck!

Those good relations and interactions were also the reason why I refrained from publicly venting/berating the TweetDeck team on behalf of Better TweetDeck. The team was small and, at this point, I knew a couple of people there, so, if I talked shit, they _would_ know.

### Cleaning up and adopting TypeScript

<small>4.0, April 2021</small>

2018 was a very busy (and stressful) year for me at work, since it was the year we decided to rewrite our entire frontend, switching from [AngularJS](https://angularjs.org/) to [React](https://react.dev/). I won't go into the details of that transition in this post but, if you take a quick look at [Front](https://front.com)'s website, you can imagine how big the effort was.
However, despite the hardships and the large amount of work, I learned a lot about React (even though I had already used it in a previous project that served as a "proof of concept") and, more importantly, [TypeScript](https://www.typescriptlang.org/).

As soon as the migration work was close to being done, I knew I wanted to rewrite Better TweetDeck in TypeScript. The advantages, safety and creature comforts it brought were 100% worth the learning curve, so I knew it would be a good fit for Better TweetDeck as well.
I think I can't see myself writing any sizeable app without it. The safety and peace of mind it brings are just too good to pass up. When you've made a massive refactor with only its compiler running, and _nothing_ breaks when you launch the app for the first time after days of work, it feels like magic.

However, Better TweetDeck had become a bigger project than it was when I first rewrote it from 1.0 to 2.0, years earlier, which meant that a rewrite was no easy task!  
Or, now that I think about: no, rewriting the code itself was the easy part. Knowing _how_, _what_ to change and _why_ in a rewrite was the hard part. For a while I couldn't reach that point. I would always rewrite some core parts of Better TweetDeck's codebase, but it brought little to no benefits, so I would be spinning my wheels.

The timeline is a bit hazy in my head, but I suppose things must have clicked in place around the end of 2020, since I ended up releasing 4.0.0 in April 2021.  
At any rate, 4.0.0 came with a [_bunch_ of features](https://github.com/eramdam/BetterTweetDeck/releases/tag/4.0.0) on top of the technical changes that made it faster and easier to maintain.

I don't want to say the project's codebase was perfect because, looking back, there are things I wish I did differently, or that I probably shouldn't have done myself, but I was pretty happy with the results!

### Getting silly with it

<small>4.2.0, June 2021</small>

The switch to a TypeScript codebase really paid dividends, as it meant I could add features more easily and have fun with it. One of those features was the customization of the "logo" in the bottom left of TweetDeck's UI!

This started with the fact that TweetDeck, for a few years prior that, had been replacing the [regular logo](/img/blog/btd-post-mortem2/tweetdeck-logo96.png) with a [Pride-themed variant](/img/blog/btd-post-mortem2/tweetdeck-pride.2019.svg) during [London Pride](https://en.wikipedia.org/wiki/Pride_in_London?useskin=vector) in July. If you're wondering why London Pride in July and not June with Pride month like the US, that is because (most of) the TweetDeck team was based in London!

Anyway, I thought it would be fun to riff on that and offer multiple variants in Better TweetDeck. It would only be visible to the user themselves, of course, but people liked it a lot, which made it worth it. It also made the weirdest, most annoying people mad, which is very funny.

<figure class="rehype-figure">
<img src="/img/blog/btd-post-mortem2/btd-pride-settings.png" alt="The list of different logos that the user could choose from in Better TweetDeck 4.2.0" />
<figcaption>
The list of different logos that the user could choose from in Better TweetDeck 4.2.0
</figcaption>
</figure>

### TweetDeck Beta

<small>July 2021</small>

What is now sold behind a paywall as "XPro", used to be called [TweetDeck Beta](https://www.theverge.com/2021/7/20/22585249/tweetdeck-redesign-twitter-column-deck); the existence of which was [hinted at](https://www.theverge.com/2021/3/9/22321991/twitter-tweetdeck-overhaul-redesign-product-changes) for quite a while before Twitter started making it available in July 2021. After being able to [get in](https://twitter.com/Eramdam/status/1417505836662853633), I got rolled in in order to try it in a more "official" manner. As mentioned before, the TweetDeck team knew I'd be curious to check it out and was actually curious to hear my thoughts! I had... a [lot of them](https://twitter.com/Eramdam/status/1417507455907426304). And in a funny way, most of them are still valid, because it has barely evolved since then!

From July until the end of 2021, I was in communication with the TweetDeck team about:

- what I thought of the Beta itself. I still think it was promising and it could have been a worthy replacement if the team had been given time and resources to make it good, which didn't happen.
- what the Beta needed to be "competitive" with current TweetDeck. True multi-accounts was a must, at the very least. This wouldn't come until the middle of 2023, long after Elon Musk fired most of the TweetDeck team, leaving it down to a skeleton crew.

During those conversations, I got the impression that the team really wanted to deliver their best work with this Beta. They seemed aware of what needed to improve to satisfy the userbase at the time. I was still on the fence about whether or not Better TweetDeck would try to support this Beta, should it become the main TweetDeck experience, and they even expressed the wish of making it easier for me to extend it later down the line! I was inclined to believe them, because it was consistent with the attitude I had seen towards Better TweetDeck from other team members in the past.

It wouldn't be the last time I'd hear about TweetDeck Beta, but I'll touch on that later.

### Content warnings and pronouns

<small>July - November 2021</small>

In a completely detached vein from the one Twitter would eventually follow, I added two of my (still) favorite features to Better TweetDeck.

The first one being [content warning detection](https://github.com/eramdam/BetterTweetDeck/pull/483). It was another great idea by [pixeldesu](https://github.com/pixeldesu) who contributed the basic idea/implementation, which I then ported over the v4 codebase. I would have merged it wholesale but it took me so long to work on v4 that his PR was impossible to merge quickly 😅  
If you are unaware, it was a workaround to the fact that Twitter still doesn't have any good way of marking the content of a tweet as sensitive, which led people to using a syntax like "cw // phobia" to indicate sensitive content.
This PR interpreted the syntax and presented a Mastodon-like UI to toggle the display of the content in question, pretty good stuff!

![Screenshot showing the Content Warning detection in practice at an earlier stage of development](/img/blog/btd-post-mortem2/btd-content-warnings.png)

The second one was [pronoun extraction](https://twitter.com/BetterTDeck/status/1455252017996201984) (sic), which, like the name implies, grabbed pronouns from users' bio and location fields and displayed them above their tweets.
It's the kind of feature whose [implementation](https://github.com/eramdam/BetterTweetDeck/blob/main/src/features/pronounsDisplay.ts) is more complex than one may think but which looks very simple when used.

<figure class="rehype-figure">
  <img src="/img/blog/btd-post-mortem2/btd-pronouns-display.png" alt="Screenshot showing the pronouns display in practice">
  <figcaption>
    Screenshot showing the pronouns display in practice
  </figcaption>
</figure>

It's also another feature that I _knew_ the TweetDeck/Twitter folks were aware of, because one engineer there told me they saw it, and Twitter ended up testing an [actual pronouns field](https://twitter.com/uwukko/status/1515618844244590592) later on! But alas, I doubt this will ever materialize under Twitter's current administration.

### No Fucking Thanks

<small>November 2021</small>

2021 also saw the rise of cryptocurrencies and other blockchain bullshit. Despite the technology itself being pretty old at this point (Bitcoin was picking up steam when I was still a student in 2013, for crying out loud!), [NFTs](https://en.wikipedia.org/wiki/Non-fungible_token?useskin=vector) were seemingly everywhere and poised to revolutionize everything that had to do with computers 🙄

Thankfully, the whole crypto space is now recognized for the joke and fraud that it is but, back then, Twitter felt the need to jump onto the craze and [allow users to use their NFTs as avatars](https://twitter.com/TheSmarmyBum/status/1443259893411049475). I allowed Better TweetDeck users to mute those accounts as soon as [technically possible](https://twitter.com/BetterTDeck/status/1465505226044018700).

Unsurprisingly, crypto people —who had otherwise never heard of me or my projects— took it upon themselves to decide I was enemy #1, and deemed it worthy of their time to harass me for implementing a silly little switch in my dinky little extension. Go figure 🤷‍♂️

Sure, I could have been more diplomatic about the whole thing (I did kick the hornet's nest pretty hard on my first iteration of the feature), but it's still funny to me that a crowd who supposedly were pioneering a "new age of computing and finance" felt threatened by an open-source project with maybe 50,000 users tops.

Clown stuff. Anyway, the harassment fortunately didn't last very long and was curbed pretty quickly thanks to [BlockParty](https://www.blockpartyapp.com/). And as I'm writing this, [Twitter dropped the feature entirely](https://web3isgoinggreat.com/?id=twitter-removes-nft-profile-picture-support), good riddance.

Later on, I would add a UI that let users see what users the mute filters they set up "caught". A lot of folks wanted me to implement an auto-blocking mechanism, but I didn't want to work around Twitter's very strict rate limits around blocking, and also wanted to be able to sleep at night knowing I didn't ship a bug that made my code block a whole bunch of people by mistake. So this "mute catching" thing was the best compromise IMO since it would let people export the list of users to a format that tools like BlockParty could use to mass-block accounts.

<figure class="rehype-figure">
  <img src="https://user-images.githubusercontent.com/1409924/147862067-416852b7-2f1c-483a-bbed-389972881765.png" alt="Screenshot of the mute catches modal in Better TweetDeck 4.7.0">
  <figcaption>
    Screenshot of the mute catches modal in Better TweetDeck 4.7.0
  </figcaption>
</figure>

### Dawn of the Final Year

<small>Most of 2022</small>

2022 was a lot. It was kind of overwhelming on a personal level due to uninteresting reasons (Immigration is fun and definitely not anxiety-inducing!) but as you may know if you used Twitter then, that was also the start of Elon's deranged arc that ended with him buying the company and killing it.

Anyway, the first half of the year was pretty quiet on the Better TweetDeck side. I had started experimenting with making my own web-based Twitter client, obviously inspired by TweetDeck. The reasoning was that I understood pretty quickly that TweetDeck Beta would make Better TweetDeck impossible to use, so I preferred spending energy on creating something from scratch. It didn't really go anywhere because:

- Twitter's API was already in a bad enough shape that it would've been impossible to get to a satisfying point feature-wise.
- I also made things harder for myself by wanting to support Twitter **and** Mastodon.
- Making a whole-ass TweetDeck-like web app takes work! Who knew!

At the very least, it was a good distraction amidst the [madness](https://twitter.com/MacRumors/status/1518664496138518528).

The rest of 2022 was pretty uneventful on Better TweetDeck's side, until...

### The beginning of the end

<small>September - November 2022</small>

In early September 2022, I made peace with the fact that Better TweetDeck in its current form was going to die as soon as TweetDeck Beta dropped. I [posted about it](https://github.com/eramdam/BetterTweetDeck/issues/848) and decided Better TweetDeck was in a "feature freeze" mode, where I would only fix the most pressing bugs until the very end.

There was still uncertainty around whether or not Musk would end up buying Twitter. Alas it happened in November. With it came the first of many stupid changes, which was offering "verification" for an 8$/month subscription.

This was a very silly decision, so I decided to make fun of it in what would be the last major feature update for Better TweetDeck.

<figure class="rehype-figure">
  <img src="https://user-images.githubusercontent.com/1409924/201475115-71e23d45-63e7-416d-a993-ee5ec22aba1b.png" alt='Setting to change the checkmark icon for "Blue verified" users'>
  <figcaption>
    Setting to change the checkmark icon for "Blue verified" users
  </figcaption>
</figure>

Unsurprisingly, this made some of the most boring people on Earth (those who want to pay 8 bucks to feel important online) very upset, so it was well worth it.

### Slow Death

<small>2023</small>

And that brings us to the end of Better TweetDeck. Like I said above, Elon Musk took over, fired a bunch of Twitter's workforce, and killed third party clients, convincing me it wasn't worth my time to build on top of Twitter's service.

The rest of the year was a mess as far as Twitter goes, but TweetDeck stayed, inexplicably, unaffected. Until July of 2023 when Twitter first [killed it by mistake](https://www.theverge.com/2023/7/3/23782585/tweetdeck-broken-twitter-rate-limits-scraping-elon-musk) and then [announced](https://www.theverge.com/2023/7/3/23783092/twitter-tweetdeck-new-preview-force-legacy-apis) the new version would be locked behind Twitter Blue, announcing that, 30 days later, TweetDeck Beta would be the **only** TweetDeck and would require a Twitter Blue subscription.

In early August, after their stupid rebranding to X, [Twitter would rename TweetDeck to XPro and force the new UI onto everyone willing to pay for a subscription](https://www.theverge.com/2023/8/15/23833707/tweetdeck-xpro-paid-service-x-premium-twitter), killing Better TweetDeck for good.

## Parting words

And here we are, back to the present day (pretend this blog post didn't take me 5 months to write). If it weren't for all of this, Better TweetDeck would be ten years old at the end of January.  
It is completely mind-blowing to me that I spent that long working on, caring about and sharing this project with people!

While I was the main contributor for a while, all of this wouldn't have been possible without the contributions of a lot people!

- [twilight sparkle](https://synthetic.garden/) who wrote [`webcrack`](https://gist.github.com/twilight-sparkle-irl/cb63762000e606e50690911cac1bcead), which allowed to modify TweetDeck's modules at runtime. Without that work, most of Better TweetDeck's most interesting features wouldn't have been possible at all.

- [pixeldesu](https://github.com/pixeldesu), for helping, supporting and contributing some critical features, as well as creating and maintaining [moduleRaid](https://github.com/pixeldesu/moduleRaid), a successor to the aforementioned `webcrack`. moduleRaid was invaluable when digging through TweetDeck's code and made a lot of recent features possible. Andy also created [DeckHack](https://github.com/deckhack) which was a small group of TweetDeck-focused developers where we'd discuss how to ~~break~~ mess around with TweetDeck.

- [dangered wolf](https://github.com/dangeredwolf/) for their work on [TweetDeck-Decompiler](https://github.com/DeckHack/TweetDeck-Decompiler). As the name implies, this let me quickly inspect TweetDeck's JavaScript code and figure out where to poke to do what I wanted to 😄

- [EntranceJew](https://github.com/eramdam/BetterTweetDeck/commits?author=EntranceJew) for the "edit" button feature and a whole lot more 🙏

- [shuuji3](https://github.com/eramdam/BetterTweetDeck/commits?author=shuuji3) for their help localizing Better TweetDeck into Japanese and early thumbnail provider support for Gyazo, Niceoseiga, TINAMI, WorldCosplay, Photozou, twipple and Pixiv.

- ~~[dependabot](https://github.com/apps/dependabot), for the pesky dependency upgrade reminders 😪~~

- [lucia scarlet](https://twitter.com/luciascarlet/status/1590462560515473409) for the "nerd emoji" badge.

- [JoshQuake](https://twitter.com/JoshQuake/status/1590634793393614849) for the clown badge.

- As well as the following people for smaller contributions to the codebase [LeoColomb](https://github.com/eramdam/BetterTweetDeck/commits?author=LeoColomb), [hiroto7](https://github.com/eramdam/BetterTweetDeck/commits?author=hiroto7), [emadgh](https://github.com/eramdam/BetterTweetDeck/commits?author=emadgh), [outadoc](https://github.com/eramdam/BetterTweetDeck/commits?author=outadoc), [noriokun4649](https://github.com/eramdam/BetterTweetDeck/commits?author=noriokun4649), [chylex](https://github.com/eramdam/BetterTweetDeck/commits?author=chylex), [Sophia2329](https://github.com/eramdam/BetterTweetDeck/commits?author=Sophia2329), [d4rky-pl](https://github.com/eramdam/BetterTweetDeck/commits?author=d4rky-pl), [miestasmia](https://github.com/eramdam/BetterTweetDeck/commits?author=miestasmia), [knu](https://github.com/eramdam/BetterTweetDeck/commits?author=knu), [viki53](https://github.com/eramdam/BetterTweetDeck/commits?author=viki53), [katabame](https://github.com/eramdam/BetterTweetDeck/commits?author=katabame), [ngdio](https://github.com/eramdam/BetterTweetDeck/commits?author=ngdio), [Floppy012](https://github.com/eramdam/BetterTweetDeck/commits?author=Floppy012), [mika-f](https://github.com/eramdam/BetterTweetDeck/commits?author=mika-f), [zenmaibane](https://github.com/eramdam/BetterTweetDeck/commits?author=zenmaibane), [resir014](https://github.com/eramdam/BetterTweetDeck/commits?author=resir014), [babolivier](https://github.com/eramdam/BetterTweetDeck/commits?author=babolivier), [Jaid](https://github.com/eramdam/BetterTweetDeck/commits?author=Jaid), [Lycolia](https://github.com/eramdam/BetterTweetDeck/commits?author=Lycolia), [yaa](https://github.com/eramdam/BetterTweetDeck/commits?author=yaa), [CommanderRoot](https://github.com/eramdam/BetterTweetDeck/commits?author=CommanderRoot), [nullpixel](https://github.com/eramdam/BetterTweetDeck/commits?author=nullpixel), [Vogeslu](https://github.com/eramdam/BetterTweetDeck/commits?author=Vogeslu) and [izzy](https://github.com/eramdam/BetterTweetDeck/commits?author=izzy).

But also... you! This isn't just me being corny. For the longest time, Better TweetDeck had no real "marketing" and the most it got was banners in the Chrome Web Store. So, if you used Better TweetDeck and spread the word about it in any capacity, **thank you**! None of this would have been possible without you and I'm grateful for it ❤️

I want to try to keep using this blog more regularly, so feel free to add it to your RSS reader (remember those?) or [find me online](/links) to know when I post something!

So long, and thanks for all the fish! 🐬

[^3]: They will probably recognize themselves if they're reading this 😄

[^6]: Typing this out is very funny when you think about the fact there are around 3,500 emoji now!

[^7]: Here's a [link](https://erambert.me/btd-graph) to a chart showing that data. Surely there's a way to present it in a nicer way, but I don't know how 😅

[^8]: Despite being fresh out of university at the time, I had already worked on a few freelance projects, as well as a project you [may](https://dribbble.com/shots/176127-VLC-for-OS-X-Lion-style) [know](https://dribbble.com/shots/196481-VLC-QuickTime-X-Like) [about](https://dribbble.com/shots/1734291-VLC-on-Yosemite-dark-mode-and-sidebar-icons).

[^9]: At least that's what I can remember from the few emails I sent them back then, I lost the emails they sent _me_, so I don't remember the details.

[^10]: Not that I really wanted it to. I always wanted to keep BTD free of charge and free of ads or anything.

[^11]: Analytics/telemetry would have been really useful during that time, but I never set that up by pure laziness.

[gulp]: https://gulpjs.com/
