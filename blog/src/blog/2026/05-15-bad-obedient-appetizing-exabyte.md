---
title: Making a homebrew release for a live show
slug: making-a-homebrew-release-for-a-live-show
date: '2026-05-15T16:36:59.163Z'
tags: []
description: ''
image: /open_graph.webp
updated: '2026-07-04T04:54:58.577Z'
isDraft: false
blueskyUrl: https://bsky.app/profile/damien.zone/post/3mnukjvybos26
mastodonUrl: https://social.erambert.me/@eramdam/116720950991340345
---
<small>Note: I wrote this post two months before publishing it because I wrote the draft and then...forgot to post it so I'm just posting it now to get it out of the way, it's probably fine but I just want to set expectations lol</small>

Let's say, hypothetically, that one of your favorite artists/DJs recently played a set. Let's say the set has been recorded and is floating around on the internet. 

So obviously, you want a copy to listen to on your music player of choice. Right? 
But you're ~~annoying~~ particular, like me, and prefer when DJ sets are cut into individual tracks. 

How would you go about it? I've done that a couple of times now for multiple sets and shows, so here's how _I_ do it. 

## 0. Getting The Video

If the set is on YouTube, use [yt-dlp](https://github.com/yt-dlp/yt-dlp), or [cobalt.tools](https://cobalt.tools/)[^1], or [JDownloader](https://jdownloader.org/). If it's on something that's not YouTube, chances are yt-dlp and JDownloader will be able to grab it.

## 1. Cutting into Parts

Grab the excellent [LosslessCut](https://mifi.no/losslesscut/) app. Import the video file into it. This guide assumes that you, somehow, have a tracklist with timestamps to go off of.   
If you're doing this on a show from a relatively well-known artist, chances are someone has already figured out the tracklist. [1001tracklists.com](https://www.1001tracklists.com/) is an excellent source for those.

If we take the example of [this specific dj set](https://www.1001tracklists.com/tracklist/crn06bk/etienne-de-crecy-cassius-dj-falcon-trabendo-paris-2025-09-26.html), the exported tracklist text looks like this

```txt
Étienne de Crécy & Cassius & DJ Falcon - Trabendo Paris 2025-09-26

[00:00] ID - ID
w/ Daft Punk - Technologic [DAFT LIFE/WARNER FRANCE]
[01:47] Carte Blanche - Politrix As Usual [ED BANGER]
[03:02] Sav-E - Yallec [MINIMAL KIDS]
[05:20] Basement Jaxx - Jump N Shout (ID Remix) [XL]
[08:09] Fedde Le Grand - Liquid Music [TOOLROOM]
... and so on
```

We want it to look like this instead

```
Étienne de Crécy & Cassius & DJ Falcon - Trabendo Paris 2025-09-26

00:00 ID - ID
01:47 Carte Blanche - Politrix As Usual 
03:02 Sav-E - Yallec 
05:20 Basement Jaxx - Jump N Shout (ID Remix)
08:09 Fedde Le Grand - Liquid Music
... and so on
```

Go to **File > Import project > Text chapters / YouTube**[^3]. Paste the text snippet you generated. LosslessCut will split the video into chunks. It will look like this.

![](/img/blog/losslesscut-segments.webp)

## 2. Exporting the Files

The details of this step will vary based on your specific video file — here I'm working with an mp4 file with AAC audio tracks. So when clicking "Export", I tell LosslessCut to only export the _audio_ track, and I tell it to export `.m4a` files.

![](/img/blog/losslesscut-export-options.webp)
![](/img/blog/losslesscut-export-tracks.webp)

## 2(Bis). Converting the Files

You will probably want to convert those files to a more "common" audio format. `.m4a` works fine, but you probably want to convert those to FLAC or MP3 or whatever. I'll leave this part to your discretion, I personally use `ffmpeg` for that by navigating to the folder with the files and running something like this

```zsh
for file in *.m4a; do ffmpeg -i $file "$file.flac"; done;
```

## 3. Tagging

For this part, I use [Meta](https://www.nightbirdsevolve.com/meta/)[^4] because it has a _very_ convenient CSV import feature. Meaning I will go into Google Sheets, make two columns "title" and "artist" and export it as a CSV that looks like this

```csv
artist, title
ID, ID
Carte Blanche, Politrix As Usual 
Sav-E, Yallec 
Basement Jaxx, Jump N Shout (ID Remix)
Fedde Le Grand, Liquid Music
```

And Meta will be able to fill the `title` and `artist` fields automatically.  

You can use whatever tagging tool you want on this one.   

Here are some rules of thumb I follow when tagging, you're obviously free to do whatever you want:
- I use the "album artist" for the main performing artist (in our example above that would be "Étienne de Crécy & Cassius & DJ Falcon")
- When multiple tracks are mixed together, I will put "Artist 1 & Artist 2" and "Title 1 / Title 2" for the `artist` and `title` field respectively.
- Apple Music loves to add `(Mixed)` as a suffix in the `title` field (https://music.apple.com/us/album/nye-2025-dj-mix/1779812248). I'm not convinced this is really useful, but you can do it.

I also like to have the files be renamed following the `$tracknumber - $title.extension` format, but again, that's all up to you. Although in the case of a DJ mix with lots of artists/tracks together, you don't want to have a filename that's _too_ long.

## 4. (Extra Credits) Artwork.

That's entirely optional but is, in my opinion, where you can have some fun messing around in Photoshop. I like to find promotional pictures of the show and try to follow the style guide of the show/event/artist related to the DJ mix.

And that's it!

![](/img/blog/trabendo-paris-preview.webp)

[^1]: I only ever use yt-dlp but I know not everyone is comfortable in the command line.[^2]
[^2]: But really though, yt-dlp is one of these tools you ought to learn how to use if only to be able to save shit you like before it gets wiped from the Internet.
[^3]: I'm using this specific format because it's the easiest to convert to when you have a tracklist with timestamps, but if you happen to have something else, chances are LosslessCut can import it.
[^4]: Unfortunate name but it existed before Zuck's cringe rebrand.
