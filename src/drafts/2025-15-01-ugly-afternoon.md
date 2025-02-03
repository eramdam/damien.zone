---
title: Modding Balatro on PC to add touch controls
date: 2025-01-16T01:20:13.153Z
tags: [
  "games",
  "programming",
  "balatro"
]
description: ''
image: /img/blog/balatro-touch/balatro-touch-mode.webp
---

![](/img/blog/balatro-touch/balatro-touch-mode.webp)

_TL;DR: I've made a Balatro mod that adds the touch controls of the iOS version on PC. It's available [here](https://github.com/eramdam/balatro-touch-mode)! This post will is mostly about the process of making the mod itself._

## How I got here

If you're reading this, I probably do not need to explain [Balatro](https://www.playbalatro.com/) to you. To say I got _into_ this game would be an understatement. According to Steam, I've spent **210 hours** playing it last year and I expect to spend half of that amount playing it in the next year. The game's good, turns out.  

Balatro released on PC in February 2024, Mac in March, and got an official mobile port in September of the same year.   
And that mobile port is great! I'm an iOS user so I can only judge it there but outside the UI being a _bit_ hard to read on my iPhone 13 Pro <small>(I can't imagine how it must be on something smaller)</small>, it rules.   
Great use of the haptic engine and most importantly... great touch controls! 

If you don't know what I'm talking about, here's a little recording showing them off:

{% video "/img/blog/balatro-touch/balatro-touch-ios.mp4" "Balatro on iOS and its touch controls to buy/sell/use cards" %}

After playing the game on iOS a bunch, I've come to really like those controls and I would often miss it when playing on my Mac.    

So I did the reasonable thing...Hoping that _someone_ ported those controls to the desktop version of Balatro.

Until I got fed up with waiting and asked myself: "How hard could it be, really?"

Not _that_ hard, but not easy either, it turns out!

## Background

If you are unaware, Balatro is a game written using the [Löve](https://love2d.org/) framework in [Lua](https://www.lua.org/) and more importantly... the code of the game is available on the file system when you buy it! All of it, neither obfuscated nor minified! This is, obviously, very convenient when it comes to making mods ([of which there are many](https://github.com/jie65535/awesome-balatro)), and it greatly simplified what I wanted to do.

"All" I needed to do was:
1. get the Balatro PC/Mac source code
2. get the Balatro iOS source code
3. compare the two file-by-file and figure out what pieces of code I needed to "transplant" into the PC version to get the drag'n'drop controls working.

## Getting the Balatro PC/Mac source code

This is pretty easy, just open the local folder of the game on Steam, open Balatro.exe/Balatro.app and the `Balatro.love` file is an archive that can be extracted/recompressed pretty easily! 

![](/img/blog/balatro-touch/balatro-folder-dark.webp "A Finder window on macOS showing the content of Balatro.love")


## Getting the Balatro iOS source code

This proved more difficult...but only because I accidentally made my life harder 😅 

### What I should have done

I _should_ have realized that [Balatro+](https://apps.apple.com/us/app/balatro/id6502451661) (Apple Arcade version of the game) is a universal macOS/iPadOS/iOS app. Meaning that I could just download the game on my Mac and...open the `.app` package and _voilà_! The iOS source code, easily accessible!

![](/img/blog/balatro-touch/balatro-ios-apple-arcade.webp "A Finder window on macOS showing the content of Balatro+ (Balatro.app)")

### What I did instead because I didn't know better

So here's how I managed to grab the source of the iOS port, which required getting the `.ipa` file for the app onto my Mac:

1. Install [iMazing](https://imazing.com/)
2. Plug my iPhone to my Mac
3. Click _Manage Apps_ 

![](/img/blog/balatro-touch/balatro-imazing.webp)


4. Go to the _Library_ tab
5. Find Balatro in the list
6. Select "Export .IPA"

![](/img/blog/balatro-touch/balatro-imazing-library.webp)

7. Uncompress the `.ipa` file since `.ipa` files are just fancy archives
8. Go to `Payload/Balatro.app/game` and...

Tada! The files are there!

![](/img/blog/balatro-touch/balatro-ios-folder.webp)


## Comparing the two codebases

This part wasn't complicated in itself, it just took a long time. 

I first opened the two folders in a Visual Studio Code workspace, renamed all the files in the iOS folder with a `.ios.lua` extension, and went through most of the files that seemed relevant and compared them against their iOS counterpart.    
Then, every time I found a bit of code that seemed useful, I would copy it over the desktop file and launch the game until I got what I wanted.  


**Special trick that helped me a lot with this**

So you know how I said earlier that the source code of Balatro is just _there_ in an "archive"? Well, on macOS, you can abuse symlinks to have `Balatro.love` point to my own modified copy of the code, which makes it easy to quickly test changes!

![](/img/blog/balatro-touch/balatro-mac-symlink.webp)


## Turning this into a mod

