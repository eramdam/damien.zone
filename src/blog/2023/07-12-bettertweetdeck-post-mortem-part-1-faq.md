---
title: 'Better TweetDeck, A Post-Mortem, Part 1: frequently asked questions'
slug: bettertweetdeck-post-mortem-part-1-faq
date: 2023-07-12T07:00:00.000Z
updated: 2024-09-22T01:42:24.008191+00:00
tags:
  - better tweetdeck
description: >-
  Answering some questions I've got since I announced the retirement of Better
  TweetDeck
image: ''
class_name: ''
---

Welp, here we are. As I write this, it seems TweetDeck is heading toward the paywall[^1], so I decided to [discontinue Better TweetDeck](https://better.tw/).

If you've been using it, I'm sure you have many questions on your mind. Some of which I've answered in the past already on my various accounts, but I feel they deserve to be all answered in the same place.

### Can't you support the new TweetDeck?

Yes and no. I looked into supporting the new TweetDeck back in 2022 and found that the way it was built makes it very hard to build on top of it (more on that later). It's not impossible, of course, and maybe someone else would figure it out, but after spending 8 (at this point) years working on Better TweetDeck, I didn't want to start from scratch on top of a completely new base.

That's also when I started entertaining the idea of making my own 3rd party web client for Twitter (and possibly Mastodon), which I believe could have been interesting. But then Elon Musk acquired Twitter and [jacked up the API pricing](https://www.theverge.com/2023/3/30/23662832/twitter-api-tiers-free-bot-novelty-accounts-basic-enterprice-monthly-price), which killed that idea in the nub 😬

#### But _why_ can't you support it?

This part is going to be kind of technical, so buckle up!

If you ever used it, you probably noticed that New TweetDeck looks and feels **a lot** like Twitter Web. It isn't a coincidence. That is because, on a technical level, it IS Twitter Web But With Columns.
From Twitter's point of view, this is a net positive because it means that features added to Twitter Web are easily ported to TweetDeck.
For Better TweetDeck? Not so much. Like I said above, it would mean throwing everything I wrote and start again, which frankly is kind of depressing to think about.

But even if I had the motivation, this is easier said than done[^2]. Let's look at why in details by inspecting their tech stack[^3]:

- [Redux](https://redux.js.org/) is used for state/data management. This is pretty common in big JS apps. Redux's state is fairly "easy" to look and poke at, but messing with data only gets you so far, unfortunately.
- [React](https://react.dev/) (UI framework) in conjunction with [react-native-web](https://necolas.github.io/react-native-web/)[^4] make it very hard to mod anything in a reliable way because the component tree of the app is just a bunch of generic "views" that are indistinguishable from each other and they're all styled with machine-generated CSS classes that change depending on the underlying styles applied. All of this means that any UI or CSS mod is hard to make and maintain. Some projects like [Control Panel for Twitter](https://github.com/insin/control-panel-for-twitter) do it, but I frankly don't have it in me to do that.

That's for the technical side. The obvious elephant in the room is the upcoming paywall behind TweetDeck. When working on Better TweetDeck (or any side-project for that matter) I want to make sure that keeping it around/using it does _not_ cost me money. Having to pay 8$ for Twitter Blue to use TweetDeck goes against that. Even if Elon Musk didn't buy Twitter, a lot of people would be reticent in doing that, so I would see Better TweetDeck's userbase shrink, which sucks.

### Okay then, what about supporting Mastodon/Threads/Bluesky?

Oh boy. That one is a doozy so let's take it one at a time, shall we?

#### Mastodon

I've been using Mastodon since April 2017. I shortly contributed to the project[^5] and helped moderate the main [mastodon.social](https://mastodon.social) instance for a short while so I'm _a bit_ familiar with it. While I like the project and the network despite its issues... the Web interface uses a similar stack as Twitter Web (not exactly the same, mind you), meaning building a "Better Mastodon" would also require a lot of work, maintenance AND also juggling with different instances which may or may not run forks/modifications of the software. So this is a no-go.

But maybe I could make my own client? Maybe! This is also a lot of work and I haven't had the time/motivation to start such a project. The recent [retirement of Pinafore](https://nolanlawson.com/2023/01/09/retiring-pinafore/) frankly discouraged me. Maintaining Better TweetDeck was already a lot of work, but a whole Mastodon client is something else entirely. Not worth it for me to do it at this time. Besides, the [app ecosystem](https://joinmastodon.org/apps) of Mastodon is going very well and isn't going anywhere anytime soon because, unlike Twitter, Mastodon isn't headed by a billionaire who wants to make a quick buck on the back of developers[^6].

So at the time of writing this (July 2023), doing anything substantial with Mastodon is out of the question. I do have a smaller project called [Tokimeki Mastodon](https://tokimeki-mastodon.vercel.app/) which is a clone of [Tokimeki Unfollow](https://tokimeki-unfollow.glitch.me/) which lets you clean up your followings list, in case you're interested!

#### Bluesky

Bluesky is...a lot, and not in a good way 🫠. The main web/mobile app is janky, the content moderation situation is [embarassingly](https://techcrunch.com/2023/06/08/blueskys-growing-pains-strain-relationship-with-its-black-community-moderation/) [bad](https://techcrunch.com/2023/07/17/bluesky-racial-slurs-banned-list-usernames/), [Jack Dorsey](https://www.wikiwand.com/en/Bluesky_Social) is still involved, the leadership has [questionable views on moderation](https://blueskyweb.xyz/blog/4-13-2023-moderation), it's frankly a mess. And it is still invite-only, so you can imagine how well things will be going when they open up/allow anyone to start an instance.

The main web app is very similar to Twitter's in its tech stack, meaning that my only reasonable plan forward would be to either [contribute to the code](https://github.com/bluesky-social/social-app) (which I'm not going to do. The project has millions of dollars in VC funding, I refuse to do free labor for them on principle) or [build my own web client](https://atproto.com/docs). The latter _would_ be feasible, and others have done it already, but the aforementioned issues are too important for me to entertain the idea of doing anything with Bluesky.

#### Threads

I am uninterested in Threads. Plain and simple. It is an Instagram/Facebook[^7] app, meaning it:

- [will have ads shoved in users' face](https://twitter.com/mehedih_/status/1676916689374420993)
- doesn't have a chronological timeline, and everything Instagram did tells me they won't give a crap
- doesn't have any API to work on top of
- doesn't have and might never have a Web version
- already [has a crappy moderation situation](https://mashable.com/article/threads-hate-speech-disinformation) and likely won't improve
- is owned by frigging Mark Zuckerberg. Come on! I hate Elon Musk and Jack Dorsey but I am _not_ jumping on Zuckerberg's lap either, screw that.

So anyway, no, I'm not building a "ThreadsDeck", "Better Threads" or anything, screw them.

### Is there a future where the project would be revived? (Elon leaving/TweetDeck becoming free again/etc.)?

I honestly don't know? If Elon were to sell Twitter back and remove itself completely (which I doubt he will because his ego is in the way), or TweetDeck were to become free again...it wouldn't bring back the workers that _made_ TweetDeck and allowed (and even encouraged!) Better TweetDeck to exist. Twitter is a shell of its former self and I think at this point it's healthier to accept that and let it go, unfortunately.

### How about a "Better Twitter" extension?

I have little interest in doing that, and to be honest [Control Panel for Twitter](https://github.com/insin/control-panel-for-twitter) is already doing an amazing job in that department. I don't think I could do it better.

### Any other projects you’re currently working on?

Not really. As I'm writing this, my biggest project is finishing [Tears of the Kingdom](https://www.zelda.com/tears-of-the-kingdom/) 😄

### I wanna donate to thank you, can I do that?

Sure! That said... I'd rather you keep your money and give it to a friend in need, or a charity. I have a day job that pays well, I'm fine. That said if you really really want to do it, I have a [Paypal](https://paypal.me/Eramdam) you can donate to.

## Conclusion

That's it! Thanks for reading, and see you later for the next part which will try to through Better TweetDeck's history and shout out the work of the folks that made the project special 😄

[^1]: Who knows, by the time this post gets published, Twitter will reverse [their decision](https://twitter.com/Support/status/1675990712297443330) because what happens there doesn't seem to make sense anymore.
[^2]: I'm sure someone, somewhere, will figure this out eventually but I frankly didn't have the will nor the energy to do it. The whole "management situation" at Twitter, in addition to the impending paywall killed the remains of motivation I had 😅
[^3]: I'm not revealing some grand secrets or anything, all of this can be figured out by opening the DevTools in your favorite browser and knowing where to look.
[^4]: You may have heard of "React Native" as a thing that lets people write apps for iOS _and_ Android with the same codebase. `react-native-web` allows to share code between an iOS/Android React Native app and its Web counterpart (it does a bit more but i'm simplifying here).
[^5]: Mostly in the form of French localization strings and very very tiny features.
[^6]: Please, [Eugen](https://en.wikipedia.org/wiki/Eugen_Rochko), don't make me regret saying this lol.
[^7]: I am not calling them Meta. Fuck this metaverse bullshit.
