---
title: Blog
description: french software engineer living and working in the Bay Area on web stuff
---

<ul class="blog-posts">
{% for post in collections.blog %}
<li>
  <span>
    <i>{{ post.data.published_date | postDate }}</i>
  </span>
  <a href="{{ post.url }}">{{ post.data.title | escape }}</a>
</li>
{% endfor %}
</ul>
