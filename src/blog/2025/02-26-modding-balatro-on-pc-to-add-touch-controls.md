---
title: Modding Balatro on PC to add touch controls
date: 2025-03-02T03:06:14.600Z
tags:
  - games
  - programming
  - Balatro
description: >-
  I've made a Balatro mod that adds the touch controls of the iOS version on PC.
  It's called "Sticky Fingers" and is available to download on
  GitHub ! This post will is mostly about the
  process of making the mod itself.
image: /img/blog/balatro-touch/sticky-fingers-hero.webp
slug: modding-balatro-on-pc-to-add-touch-controls
---

![](/img/blog/balatro-touch/sticky-fingers-hero.webp)

_TL;DR: I've made a Balatro mod that adds the touch controls of the iOS version on PC. It's called "Sticky Fingers" and is available to [download on GitHub](https://github.com/eramdam/sticky-fingers)! This post will is mostly about the process of making the mod itself._

## How I got here

If you're reading this, I probably do not need to explain [Balatro](https://www.playbalatro.com/) to you. To say I got _into_ this game would be an understatement. According to Steam, I've spent **210 hours** playing it last year and I expect to spend half of that amount playing it in the next year. The game's good, turns out.  

Balatro released on PC in February 2024, Mac in March, and got an official mobile port in September of the same year.   
And that mobile port is great! Great use of the haptic engine and most importantly… great touch controls! 

If you don't know what I'm talking about, here's a little recording showing them off:

<figure data-type="video">
<video src="/img/blog/balatro-touch/balatro-touch-ios.mp4" poster="/img/blog/balatro-touch/balatro-touch-ios-poster.webp?v=a2e286656790" playsinline="" controls="" preload="none"></video>
<figcaption>
Balatro on iOS and its touch controls to buy/sell/use cards
</figcaption>
</figure>

After playing the game on iOS a bunch, I've come to really like those controls and would often miss them when playing on my Mac.    

So I did the reasonable thing… Hoping that _someone_ ported those controls to the desktop version of Balatro.

Until I got fed up with waiting and asked myself: ✨ "How hard could it be, really?" ✨

Not _that_ hard, but not easy either, it turns out!

## Background

If you are unaware, Balatro is a game written using the [LÖVE](https://love2d.org/) framework in [Lua](https://www.lua.org/) and more importantly… the code of the game is available on the file system when you buy it! All of it, neither obfuscated nor minified! This is, obviously, very convenient when it comes to making mods ([of which there are many](https://github.com/jie65535/awesome-balatro)), and it greatly simplified what I wanted to do.

The plan was "simple":
1. get the Balatro PC/Mac source code
2. get the Balatro iOS source code
3. compare the two file-by-file and figure out what pieces of code I needed to "transplant" into the PC version to get the drag'n'drop controls working.

## Getting the Balatro PC/Mac source code

This is pretty easy, just open the local folder of the game on Steam, open Balatro.exe/Balatro.app and the `Balatro.love` file is an archive that can be extracted/recompressed pretty easily! 

![](/img/blog/balatro-touch/balatro-folder-dark.webp "A Finder window on macOS showing the content of Balatro.love")


## Getting the Balatro iOS source code

This proved more difficult…but only because I accidentally made my life harder 😅 

### What I should have done

I _should_ have realized that [Balatro+](https://apps.apple.com/us/app/balatro/id6502451661) (Apple Arcade version of the game) is a universal macOS/iPadOS/iOS app. Meaning that I could just download the game on my Mac and…open the `.app` package and _voilà_! The iOS source code, easily accessible!

![](/img/blog/balatro-touch/balatro-ios-apple-arcade.webp "A Finder window on macOS showing the content of Balatro+ (Balatro.app)")

### What I did instead because I didn't know any better

So here's how I managed to grab the source of the iOS port, which required getting the `.ipa` file for the app onto my Mac:

1. Install [iMazing](https://imazing.com/)
2. Plug my iPhone to my Mac
3. Click _Manage Apps_ 

![](/img/blog/balatro-touch/balatro-imazing.webp)


4. Go to the _Library_ tab
5. Find Balatro in the list
6. Select "Export .IPA"

![](/img/blog/balatro-touch/balatro-imazing-library.webp)

7. Decompress the `.ipa` file, since `.ipa` files are just fancy archives
8. Go to `Payload/Balatro.app/game` and…

Tada! The files are there!

![](/img/blog/balatro-touch/balatro-ios-folder.webp)


## Comparing the two codebases

This part wasn't complicated in itself, it just took a long time. 

I opened the two folders in a Visual Studio Code workspace and went through most of the files that seemed relevant and compared them against their iOS counterpart.    
Then, every time I found a bit of code that seemed useful, I would copy it over the desktop file and launch the game until I got what I wanted.  

<details>
<summary>
  <strong>
    Special trick that helped me a lot with this
  </strong>
</summary>

So you know how I said earlier that the source code of Balatro is just _there_ in an "archive"? Well, on macOS, you can abuse symlinks to have `Balatro.love` point to a modified copy of the code, which makes it easy to quickly test changes!

![](/img/blog/balatro-touch/balatro-mac-symlink.webp "A Finder window inside the Balatro game files with `Balatro.love` being a symlink")
</details>

And I did get what I wanted!

<blockquote class="mastodon-embed" data-embed-url="https://social.erambert.me/@eramdam/113813401719828118/embed" style="background: #FCF8FF; border-radius: 8px; border: 1px solid #C9C4DA; margin: 0; max-width: 540px; min-width: 270px; overflow: hidden; padding: 0;"> <a href="https://social.erambert.me/@eramdam/113813401719828118" target="_blank" style="align-items: center; color: #1C1A25; display: flex; flex-direction: column; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Roboto, sans-serif; font-size: 14px; justify-content: center; letter-spacing: 0.25px; line-height: 20px; padding: 24px; text-decoration: none;"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 79 75"><path d="M74.7135 16.6043C73.6199 8.54587 66.5351 2.19527 58.1366 0.964691C56.7196 0.756754 51.351 0 38.9148 0H38.822C26.3824 0 23.7135 0.756754 22.2966 0.964691C14.1319 2.16118 6.67571 7.86752 4.86669 16.0214C3.99657 20.0369 3.90371 24.4888 4.06535 28.5726C4.29578 34.4289 4.34049 40.275 4.877 46.1075C5.24791 49.9817 5.89495 53.8251 6.81328 57.6088C8.53288 64.5968 15.4938 70.4122 22.3138 72.7848C29.6155 75.259 37.468 75.6697 44.9919 73.971C45.8196 73.7801 46.6381 73.5586 47.4475 73.3063C49.2737 72.7302 51.4164 72.086 52.9915 70.9542C53.0131 70.9384 53.0308 70.9178 53.0433 70.8942C53.0558 70.8706 53.0628 70.8445 53.0637 70.8179V65.1661C53.0634 65.1412 53.0574 65.1167 53.0462 65.0944C53.035 65.0721 53.0189 65.0525 52.9992 65.0371C52.9794 65.0218 52.9564 65.011 52.9318 65.0056C52.9073 65.0002 52.8819 65.0003 52.8574 65.0059C48.0369 66.1472 43.0971 66.7193 38.141 66.7103C29.6118 66.7103 27.3178 62.6981 26.6609 61.0278C26.1329 59.5842 25.7976 58.0784 25.6636 56.5486C25.6622 56.5229 25.667 56.4973 25.6775 56.4738C25.688 56.4502 25.7039 56.4295 25.724 56.4132C25.7441 56.397 25.7678 56.3856 25.7931 56.3801C25.8185 56.3746 25.8448 56.3751 25.8699 56.3816C30.6101 57.5151 35.4693 58.0873 40.3455 58.086C41.5183 58.086 42.6876 58.086 43.8604 58.0553C48.7647 57.919 53.9339 57.6701 58.7591 56.7361C58.8794 56.7123 58.9998 56.6918 59.103 56.6611C66.7139 55.2124 73.9569 50.665 74.6929 39.1501C74.7204 38.6967 74.7892 34.4016 74.7892 33.9312C74.7926 32.3325 75.3085 22.5901 74.7135 16.6043ZM62.9996 45.3371H54.9966V25.9069C54.9966 21.8163 53.277 19.7302 49.7793 19.7302C45.9343 19.7302 44.0083 22.1981 44.0083 27.0727V37.7082H36.0534V27.0727C36.0534 22.1981 34.124 19.7302 30.279 19.7302C26.8019 19.7302 25.0651 21.8163 25.0617 25.9069V45.3371H17.0656V25.3172C17.0656 21.2266 18.1191 17.9769 20.2262 15.568C22.3998 13.1648 25.2509 11.9308 28.7898 11.9308C32.8859 11.9308 35.9812 13.492 38.0447 16.6111L40.036 19.9245L42.0308 16.6111C44.0943 13.492 47.1896 11.9308 51.2788 11.9308C54.8143 11.9308 57.6654 13.1648 59.8459 15.568C61.9529 17.9746 63.0065 21.2243 63.0065 25.3172L62.9996 45.3371Z" fill="currentColor"/></svg> <div style="color: #787588; margin-top: 16px;">Post by @eramdam@erambert.me</div> <div style="font-weight: 500;">View on Mastodon</div> </a> </blockquote> <script data-allowed-prefixes="https://social.erambert.me/" async src="https://social.erambert.me/embed.js"></script>

## Actually turn this into a mod

After a while, I had a local-only Git repo called `balatro-touch-desktop` which house the desktop files that I modified by hand. This was very convenient to quickly iterate/see what I actually changed between the original code and my "mod" but, well, it wasn't exactly a real Balatro mod. The best I could do was generate a `.patch` file that could be applied to the vanilla game.

I do not intend for this article to be a "how to make a Balatro mod" tutorial[^1] but, at the very high level, I needed a way to turn my [Git patch](https://github.com/eramdam/sticky-fingers/blob/main/touch-mode/touch-mode.patch) into a proper mod that used [lovely-injector](https://github.com/ethangreen-dev/lovely-injector) to modify the games' files.

If you're unfamiliar, Lovely's README file has [examples of patches](https://github.com/ethangreen-dev/lovely-injector?tab=readme-ov-file#patches) that can be applied.

On paper, this seemed simple enough, the problem was that my changes were precise/small enough that it was very tricky to write a patch by hand. Adding new functions entirely is straightforward, but adding and extra `elseif` clause 3 levels deep? That drove me nuts, and it wouldn't even work because I kept generating invalid Lua files 🫠. 

This is when [Amy](https://github.com/a-e-m) essentially saved my butt and wrote a [tool](https://github.com/a-e-m/lovely-differ) that did exactly what I wanted! Turn my Git diff into a `lovely.toml` patch file!

From that point on, putting the mod together was relatively simple, and there I had it! My mod in the `Mods` section.

![](/img/blog/balatro-touch/balatro-touch-mods-list.webp "The Steamodded 'Mods' window with my mod in there")

## Improving on it

After that, I ~~had the perfect excuse to play Balatro~~ had to test the mod to make sure nothing crashed or behaved weirdly. Thankfully, everything worked just fine! The only "issue" was that the "Sell" target for jokers was _way_ too close to the main joker area, which made it too easy to accidentally sell a joker when re-arranging them quickly (ask me how I know).

![](/img/blog/balatro-touch/balatro-touch-og-sell-zone.webp "Balatro with the touch control mod, showing the default sell zone for jokers (in the top right of the game's UI)")

Thankfully, smods provides [a built-in way to make a mod configurable](https://github.com/Steamodded/smods/wiki/Mod-functions#modconfig_tab) so after an hour or two, I managed to [make an option](https://github.com/eramdam/sticky-fingers/commit/b6c2bf5590470a30b36d66ad35d08a899b984a11) (turned on by default) that moved the sell target further to prevent this from happening again.

![](/img/blog/balatro-touch/balatro-mod-option.webp "The options tab of the mod, with \"Harder Joker sell target\" checked.")

![](/img/blog/balatro-touch/balatro-harder-sell.webp "Balatro with the touch control mod, showing the 'harder' sell zone for jokers (in the middle right of the game's UI)")

## Releasing the mod

And there you have it! The mod is available on GitHub, as I'm writing this, I just updated it for compatibility with Balatro 1.0.1o.

[https://github.com/eramdam/sticky-fingers](https://github.com/eramdam/sticky-fingers)

Let me know if you enjoy it and/or have any issues with it!

Bye!  
\- damien


[^1]: the [smods wiki](https://github.com/Steamodded/smods/wiki/Your-First-Mod) is better for this
