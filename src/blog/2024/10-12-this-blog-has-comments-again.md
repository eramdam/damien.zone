---
title: this blog has comments (again)
slug: this-blog-has-comments-again
date: 2024-10-12T08:01:00.000Z
updated: 2024-10-12T09:39:40.295Z
tags:
  - comentario
  - comments
  - meta
---

Don't adjust your RSS reader, you're not seeing the same article twice. I just flip-flopped really hard with the whole comments thing.
In my (now unpublished) previous article, I said I went with [Chirpy](https://chirpy.dev) for comments... well, I'm not using them anymore! Oops! I am now using [Comentario](https://comentario.app/)! Comments are enabled on all posts, feel free to leave some!!  
Sorry to those who already did 🙈
Read below for the details of what happened here.

---

It turns out Chirpy was pretty limiting in that commenters could not update their own avatar _at all_ if they didn't sign in with GitHub/Twitter/Google... Which is extremely silly[^1].
I also wasn't happy with the fact that its widget rendered inside an `<iframe>` meaning customization options were limited to a few colors.

This sent me down the path of finding alternatives. I had found a couple that seemed promising, but [Blau](https://furry.engineer/@blaurascon) on Mastodon made me aware of [Comentario](https://comentario.app) which... I think, is perfect for what I want?

- ✅ Markdown formatting
- ✅ Comment replies
- ✅ Moderation UI/email notifications
- ✅ Custom user avatars
- ✅ Website field for authenticated users
- ✅ Anonymous posting (albeit limited)
- ✅ Authenticated posting
  - There are also options to set up login with Google/GitHub/GitLab/Twitter, but I didn't dig into that just yet
- ✅ Does **not** render within an `<iframe>` element so I can tweak everything with CSS to make it look good with my theme! I need to actually tweak that, but the default theme is Good Enough™️ for today.
- And a [bunch more features](https://gitlab.com/comentario/comentario)

The only downside being that there isn't any way to set it up without hosting it yourself. This is fine for me because I know how to do it, but I know a bunch of people who would benefit from that solution who can't/don't want to self-host.

Therefore, I think a "friends of ~~damien~~ eggbug" shared instance of Comentario could be a good idea? If we know each other, and you are interested (and/or would like to help share the costs of a VPS + domain name[^2]), let's get in touch.

I will probably keep my own instance because I have no clue if it can be migrated from a machine to another without breaking everything, but I want people to have access to that thing because I feel it might just be It? Maybe? We will see.

Oh, and also, if you're interested in self-hosting it, I detailed my [setup here](https://damien.zone/my-comentario-self-hosting-setup/).

See ya,  
\- damien

[^1]: Thanks to [Zandra](https://zandravandra.com/) for the heads-up on this one, by the way.

[^2]: If you can think of a good domain name, I'm also open to suggestions lol
