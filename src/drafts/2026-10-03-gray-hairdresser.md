---
title: "Updates: March 2026"
slug: gray-hairdresser
date: 2026-03-11T02:24:29.964Z
tags: 
- meta
- redesign
- css
description: ''
image: ''
---

It's been a minute, hasn't it. In fact it has been _checks notes_ **10 months**?! Oh dear, well. Better late than never I suppose. If you're reading this directly on the website (and you should, imo), you'll see that things look quite different! 

I've been meaning to touch up my website's design for, uh, most of last year to be honest but I haven't been able to get to it until a few weeks ago. So here it is. It's more of a reskin rather than a redesign but it feels fresher, lighter and tidier in ways I like so I'm pretty happy with it.  

I've stuck to the excellent [Atkinson Hyperlegible Next](https://fontsource.org/fonts/atkinson-hyperlegible-next)[^1] as a body font and switched the headings from [Merriweather](https://fonts.google.com/specimen/Merriweather) to [Pangrampangram's Right Serif](https://pangrampangram.com/products/right-serif), I think they look quite neat.

I've made the website overall feel a bit more "professional". Not that I intend to write super serious stuff or anything but I eventually want to make https://erambert.me redirect to this website and avoid maintaining two websites with a _very_ similar purpose[^2].

## Little details

I've had fun with some details in the design so now I'm just gonna show them off.

I'm using the shit out of CSS ~~variables~~ custom properties, meaning that all the colors in the theme are derived from 3 base colors, which means I can do stuff like this[^3]:

<form id="color-change-demo">
  <label for="">
    <input type="color" /> <span>Change the color here and see how it affects the style</span>
  </label>
</form>

And the color system means that making a dark mode involved [changing a few colors](https://github.com/eramdam/damien.zone/blob/2026-redesign/src/assets/styles/redesign.damien.zone.css#L73-L86) and it looked great right away! <small>Huge thanks to [Tulip](https://blog.platinumtulip.net/) for helping me with these</small>

 Hover states for links are always a struggle for me, so I decided to stop worrying about it and going whole hog with it and making them **very** obvious:

![](/img/blog/2026-redesign-hoverstate.webp)


I wanted to have _some_ fancy/flashy touches in the redesign, so I opted for this progressive blur effect in the sticky header on compatible browsers, I think it looks cute. Kudos to [kennethnym](https://kennethnym.com/blog/progressive-blur-in-css/) because I wouldn't have bothered to figure it out myself, I think.

![](/img/blog/2026-redesign-blur-header.webp)

While on the topic of blurs, you know what's better than a colored shadow? A shadow that matches the image's colors. It's barely noticeable but I know it's there and it makes me happy

![](/img/blog/2026-redesign-avatarshadoa.webp)


One thing I noticed when working on this redesign was how I really did not like the default Comentario avatar for anonymous comments. It does the job but it felt really jarring in my opinion:

![](/img/blog/comentario-default-avatar.png)

So I tried to come up with something, and I didn't want to _just_ replace the default avatar with something else so I thought "could I somehow make something more unique and (more importantly) cuter?".

So I did! I will make a whole article about it because I don't want to derail this post too much but here's how it looks. It _looks_ random but isn't really (more on that in the future post) and retains the same "random" avatar if an anonymous commenter reuses the same name.[^4]

![](/img/blog/2026-redesign-anonavatars.png)


That's it ✨ I want to post more on this website this year, I swear I will (at least try to) stick to that this time around.


[^1]: #eggbug forever
[^2]: I am, however, not gonna even _think_ about migrating shit like email away from that domain.
[^3]: I would have made a video but A) this is funnier and B) this weighs nothing[^5]
[^4]: In case you're wondering, these are emoji taken from [Noto Emoji (monochrome)](https://emojipedia.org/noto-emoji)
[^5]: Unfortunately styling the color input in CSS is not possible consistently yet and I am not bothering to write a custom color input
