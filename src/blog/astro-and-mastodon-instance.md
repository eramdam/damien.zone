---
title: Running my own Mastodon instance "behind" Astro on Vercel
slug: astro-and-mastodon-instance
published_date: 2024-08-11T07:00:00+00:00
last_modified: 2024-11-02T03:15:47.146155+00:00
tags: ["astro", "mastodon", "vercel"]
description: PLACEHOLDER DESCRIPTION
meta_image: /img/blog/mastodon-light.png
---

<picture>
  <source srcset="/img/blog/mastodon-dark.png" media="(prefers-color-scheme: dark)" type="image/png">
  <source srcset="/img/blog/mastodon-light.png" type="image/png"><img
    src="/img/blog/mastodon-light.png" alt="My profile on my Mastodon instance"  
    loading="lazy" decoding="async">
</picture>

The Mastodon instance I've been on for the past 7 years, [octodon.social](https://octodon.social) is [shutting down next year](https://octodon.social/@CobaltVelvet/112897672123037837). So rather than try to find a replacement, I decided to run my own, single-user instance.

The issue isn't that good, well-moderated instances don't exist, they do! But one of the big reasons why I stayed on Octodon was because I knew the moderation team personally so I trusted their decisions and agreed with most of them. I just frankly couldn't be bothered with having to find and vet a new instance and I like to tinker so, after some advices from my friend [Niléane](https://nileane.fr/) I went and spun up my own!

It's up at https://social.erambert.me and you can find me on Mastodon by looking up `@eramdam@erambert.me`.

The setup isn't anything too fancy:

- a dedicated server hosted by [OVH](https://eco.ovhcloud.com/en/)
- OVH's [object storage solution](https://us.ovhcloud.com/public-cloud/object-storage/) for media files behind [Bunny](https://bunny.net/)
- running Mastodon 4.2.10 (current stable version at the time of writing)

All set up while following the [official documentation](https://docs.joinmastodon.org/admin/prerequisites/).

The only quirk of my setup might is that the "local domain" (domain the instance responds to) and the "web domain" (domain where the Web interface lives) are different. Meaning that people can find me by looking up @eramdam@erambert.me despite the actual instance running on https://social.erambert.me. It's a behavior that is [well documented](https://docs.joinmastodon.org/admin/config/#web_domain) by Mastodon and is usually trivial to implement when you host your website on your own server...

Except I don't do that 😅 My website is, for now, running on [Astro](https://astro.build) and hosted on [Vercel](https://vercel.com/) so I can't just modify the web server configuration to set up the necessary redirection.

Now, I'm not the only one that tried to do this with a similar setuip [link](https://www.danillouz.dev/posts/mastodon-alias#using-my-custom-domain-as-an-alias) [link](https://brandonrozek.com/blog/mastodon-webfinger-alias-using-redirects/) [link](https://www.seanmcp.com/articles/use-your-domain-on-mastodon-with-astro/). But none of those solutions were satisfactory for me because:

1. they assume only _one_ account as the "destination" OR
2. they work by outputing a "dumb" JSON file.

I want to have the options to maybe host more than one account on my instance so those limitations were deal-breaker. Thankfully [Sean McPherson's](https://www.seanmcp.com/articles/use-your-domain-on-mastodon-with-astro/) article put me on the right track and I ended up implementing an [Astro endpoint](https://docs.astro.build/en/guides/endpoints/).

All I had to was write this in a file under `src/pages/.well-known/webfinger.ts`, make sure my site was using the [Vercel adapter](https://docs.astro.build/en/guides/integrations-guide/vercel/) to run in server mode instead of static mode and I was done!

file: src/pages/.well-known/webfinger.ts

```typescript
import { APIRoute } from "astro";

const destinationInstance = "https://social.erambert.me";

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const newUrl = new URL(
    url.toString().replace(url.origin, ""),
    destinationInstance,
  );

  const response = await fetch(newUrl.toString());
  const json = await response.json();
  return new Response(JSON.stringify(json, null, 2), {
    headers: {
      "Content-Type": "application/jrd+json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
```

Now people could query `@eramdam@erambert.me` and find me as if they queried `@eramdam@social.erambert.me`! Neat!

After having written this post, [Tixie](https://mastodon.guerilla.studio/@tixie) made me realize that I _could_ use Astro's `redirect` method instead of doing a fetch in the endpoint code? Both seem to work but I am a bit worried about the potentially missing `Access-Control-Allow-Origin` header...

file: src/pages/.well-known/webfinger.ts

```typescript
import { APIRoute } from "astro";

export const GET: APIRoute = async ({ request, redirect }) => {
  const url = new URL(request.url);
  const newUrl = new URL(
    url.toString().replace(url.origin, ""),
    "https://social.erambert.me",
  );

  return redirect(newUrl.toString(), 301);
};
```

Update on September 3rd: It turns out, [Vercel rewrites](https://vercel.com/docs/edge-network/rewrites) work just fine for this and I didn't realize 😄 I added the following file to my repo and I was done

file: vercel.json

```json
{
  "rewrites": [
    {
      "source": "/.well-known/webfinger",
      "destination": "https://social.erambert.me/.well-known/webfinger"
    }
  ]
}
```
