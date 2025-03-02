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

{% video "/img/blog/balatro-touch/balatro-touch-ios.mp4" "Balatro on iOS and its touch controls to buy/sell/use cards" %}

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

https://social.erambert.me/@eramdam@social.erambert.me/113813401719828118/

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
