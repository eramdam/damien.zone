---
title: Setting up the Wiimote cursors on macOS in 2026
slug: setting-up-the-wiimote-cursors-on-macos-in-2026
date: 2026-08-16T20:49:07.305Z
tags:
  - apple
  - mac
  - tutorial
description: 'Or how to set up custom cursors in general, I guess'
image: /media/blog/26/08/wiimote-cursor-applied.webp
updated: 2026-08-17T03:49:40.540Z
isDraft: false
---
This post is the type of posts I write for myself so I can find it again easily the next time I set up a Mac computer from scratch. Today was one of these days and I figured I'd take the time to write it so I can easily refer to it later, and I know it'll be useful for other folks too.

As the title implies, this will be a short "tutorial" explaining how to set up the (excellent) [Wiimote pointer cursors](https://primmr.dev/projects/wii-pointer-cursors/) by [PrimmR](https://primmr.dev) on current macOS (26 as of writing this). 

For this, you will need:

- [Mousecape-swiftUI](https://github.com/sdmj76/Mousecape-swiftUI) (the original [Mousecape](https://github.com/alexzielenski/Mousecape) hasn't been updated in years and stopped working multiple macOS versions ago, unfortunately).
- The [Wii Pointer Cursors for Mac](https://files.primm.gay/extras/cursors/Wii/MacOS%20Cursors.7z) (ported by me :) )   
<small>Here's a [mirrored link](https://files.damien.zone/MacOS%20Wii%20Pointer%20Cursors.7z) in case this one ever goes down. <br/> And here's a [variant](https://files.damien.zone/MacOS%20Wii%20Pointer%20Cursors%20%28link%20highlight%29.7z) with the "link" cursor tweaked. </small>

# 1. Install Mousecape-swiftUI

This one is easy enough: 
- Grab the latest releases from the releases page, [swiftUI_v1.1.4 as I'm writing this](https://github.com/sdmj76/Mousecape-swiftUI/releases/tag/Swift_v1.1.4). 
- Extract the .zip file, move the application into your `/Applications` folder.

Because the app isn't notarized/signed, macOS will tell you the app can't be run, you will want to run Terminal.app[^1] and enter the following command which will remove the "quarantine bit" from the application[^2]:

```bash
xattr -dr com.apple.quarantine /Applications/Mousecape.app
```

Then launch Mousecape and you should see a window like this one:

![](</media/blog/26/08/mousecape-swiftui.webp>)

# 2. Install the Wii Pointer Cursors

Download the [Wii Pointer Cursors for Mac](https://files.primm.gay/extras/cursors/Wii/MacOS%20Cursors.7z) and extract the `.7z` file.

Now, this one is a bit counter-intuitive because of (as I'm writing this) a bug with the work of Mousecape we're using. Instead of using the `Import cape` button or dropping the `gay.primm.wii.player*.cape` file of your choosing, you will want to go to Mousecape's settings page, then go to **Advanced** and click **Show in Finder** under the **Cape Folder** section: 

![](</media/blog/26/08/mousecape-show-finder.webp>)

And you will want to drop your `.cape` file(s) in this folder instead. 

![](</media/blog/26/08/mousecape-folder-finder.webp>)

# 3. Apply them

Relaunch Mousecape, select which variant of the cursors you want on the left sidebar and click the blue ✅ button at the top right and, _voilà_!

![](</media/blog/26/08/wiimote-cursor-applied.webp> "The Wiimote cursor applied, made bigger for comedic effect")

Hope this little post was useful to you!

[^1]: Or any terminal emulator, but if you know what a terminal emulator is and use one regularly, you probably don't need help opening one.
[^2]: Short version: this is a bit appended by browsers and such when downloading apps on macOS and it tells macOS to display a warning to the user before opening them. Long version: https://eclecticlight.co/2023/03/13/ventura-has-changed-app-quarantine-with-a-new-xattr/
