---
title: Better TweetDeck changelog
layout: base
---

[← back to the article](/bettertweetdeck-post-mortem-part-2)

# Better TweetDeck changelog

## 0.0.8

- Added an option to display the full-time only after 24h
- Removed a debug message which was still in the code (woops!)
- Added an option to affect the [mention helper](http://f.cl.ly/items/0Q0I1t2k441639363V35/BehaYurCUAATDU8.png) only in name displaying
- Re-ordered the options to have something nicer

## 1.0.0

- Added a "Welcome" screen
- Re-ordered options
- Improved options page, now displaying it at each update with a changelog
- Added Tumblr support for previews
- Added CloudApp support for previews
- Added 500px support for previews
- Added Flickr support for previews
- Added Instagram support for previews
- Added full Imgur support for previews
- Added the possibility of choosing the services to display or not
- Added possibility not to hide the play button on YouTube thumbnails

## 1.0.2

- Large previews now fit perfectly with the Twitter ones
- Added a "Welcome" screen
- Re-ordered options
- Improved options page, now displaying it at each update with a changelog
- Added Tumblr support for previews
- Added CloudApp support for previews
- Added 500px support for previews
- Added Flickr support for previews
- Added Instagram support for previews
- Added full Imgur support for previews
- Added the possibility of choosing the services to display or not
- Added possibility not to hide the play button on YouTube thumbnails

## 1.0.3

Fixed a bug where URL could get "lost" between AJAX calls, resulting in failed links

## 1.0.4

- Fixed a bug where suffixes were mixed between providers, resulting in failed thumbnails

## 1.0.5

- Fixed a bug where imgur.com/gallery/ links where mistakenly considered as album

## 1.0.6

- Fixed a weird bug with the "inverted" name display mode

## 1.1.0

- Thumbnail size now can be controlled within columns' settings!
- Image services are in alphabetical order in settings.
- Large previews got a triangle like the Twitter's ones! #Illuminati
- Fixed a bug with Imgur IDs that were wrongly parsed
- Fixed **for real** the issue with "inverted" name displaying. Phew.

## 1.1.1

- Fixed the font-weight of usernames when using the "inverted" naming display (in Notifications columns)

## 1.1.3

- Now you can display only one thumbnail per tweet

## 1.1.4

- Fixed a "bug" where RT-boxes from TweetDeck are too wide

## 1.1.5

- The extension fetches the user-size for thumbnails sooner, resulting in better working thumbnails

## 1.2.x

- Thumbnails are back in profil modal windows. I might add an option for that.
- Lightboxes support for all the thumbnails services
- Vimeo, Dailymotion and full Instagram support added
- Imgur thumbnails are now 100% accurate
- The extension displays less useless errors in the console.

## 1.3.0

Features:

- The Settings page has been restyled
- The extension is now localized in French in addition to English
- Added support of Dribbble, Moby.to, yFrog & DeviantArt for thumbnails/lightboxes
- Lightboxes and modal windows can get a new "full-screen" effect
- Icons in compose panel can be smaller now

Bugfixes & Improvements:

- Fixed an issue with HTTPS and Dailymotion video embeds
- Fixed a duplicating thumbnails issue when a YouTube link and an Instagram one were in the same tweet
- Improved the Tumblr mechanism for thumbnails
- Removed thumbnails on Details view
- Stability and performance improvements as minor bugfixes as well

## 1.3.1

- BTD's lightboxes can be closed with Escape key

## 1.3.2

- Added a 404 check for Instagram links

## 1.3.3

- The tweet-action links in BTD's lightboxes work like the default ones

## 1.4.0

- Emojis are now supported!
- Soundcloud and Bandcamp are supported in thumbnails

## 1.4.5

Commit: [40ad2b3585374677782a46888afcf5f16add2796](https://github.com/eramdam/BetterTweetDeck/commit/40ad2b3585374677782a46888afcf5f16add2796)  
Date: 2014-04-13

- You can now add emojis easily in your tweets thank to the "Emojis" button in the Compose panel!
- Thumbnails should be lighter to load.
- Thumbnails for any images are now supported!
- Thumbnails from Dropbox are now supported!
- Emojis are now all supported (almost?) perfectly and should be faster to load
- Minors improvements and bugfixes

## 1.4.8

- A lot of functions has been rewritten for better performances
- Rounded avatars work with the smaller size recently introduced in TweetDeck
- Some aesthetic detzials has been improved

## 1.5.0

Commit: [eb2f04d07121be1c82a9456f712bd15201da6e9a](https://github.com/eramdam/BetterTweetDeck/commit/eb2f04d07121be1c82a9456f712bd15201da6e9a)  
Date: 2014-05-04

- Minimal mode!
- A LOT of things got improved in the way they're coded
- Some annoying "bugs" were crushed, yay!

## 1.5.1

Commit: [cc98786609c0870df60d9b59b050ea4e66bf90c9](https://github.com/eramdam/BetterTweetDeck/commit/cc98786609c0870df60d9b59b050ea4e66bf90c9)  
Date: 2014-05-08

- No more using <all_urls>
- Improvements for the Minimal mode
- Fixed URLs in profiles

## 1.6.0

Commit: [b79e9a6161f2c76440cf9060885ae8a635cb9557](https://github.com/eramdam/BetterTweetDeck/commit/b79e9a6161f2c76440cf9060885ae8a635cb9557)  
Date: 2014-05-20

- A share button
- A button to access the settings
- A preview of the tweet display settings
- TED talks support
- Konami stuff

## 1.6.2

Commit: [719436b424b44e265c5b036211c0070ecd963bad](https://github.com/eramdam/BetterTweetDeck/commit/719436b424b44e265c5b036211c0070ecd963bad)  
Date: 2014-05-23

- Removed emojis to let the TweetDeck ones

## 1.6.5

- Re-added emojis as TweetDeck "fixed" their XSS flaws but didn't add emojis back

## 2.0.0

Commit: [bacede58aaea3e86c44dbd74acc42e41a603f651](https://github.com/eramdam/BetterTweetDeck/commit/bacede58aaea3e86c44dbd74acc42e41a603f651)  
Date: 2014-08-03

- A new version completely re-written! Harder, Better, Faster, Stronger!
- You can now make new tweets "flash"
- A new nicer and eaiser to use Options page
- Tons of optimizations, bug fixes and improvements for an even better experience!

## 3.0.0

Commit: [9a397f8c860dd4c079525f6a4cadb5976799814a](https://github.com/eramdam/BetterTweetDeck/commit/9a397f8c860dd4c079525f6a4cadb5976799814a)  
Date: 2016-08-02

- Completely re-written in ES2015 with modules for a more maintainable code
- Faster than 2.x, more reliable and nicer on resources
- Modals/thumbnails work in DMs
- Stop the autoplay of GIFs
- Verified badge in the columns
- Updated Minimal theme for dark/white + more reliable support of it
- Can change hearts back to stars
- Emoji picker now has a search and diversity support
- Every thumbnail is powered by [Embed.ly](http://embed.ly/) and added thumbnails providers:
  - Gfycat
  - Giphy
  - Mixcloud
  - Skitch
  - Spotify
  - Streamable
  - TinyGrab
  - Twitch
  - Vidme
  - youtu.be
- Custom format for timestamps
- Bigger emojis in tweets

## 3.0.1

Commit: [f361e2358f925ab9f50d753747da64a18fb28c63](https://github.com/eramdam/BetterTweetDeck/commit/f361e2358f925ab9f50d753747da64a18fb28c63)  
Date: 2016-08-06

- The play glyph is aligned on the "play icon"
- Modal previews open for tweets in notifications
- The "bubble" in minimal mode actually depends on the "show context" setting
- Another "save" button has been added in options page

## 3.0.2

Commit: [ffc1f2c5f42d0d5c5e24031c8304e3e805e32d9d](https://github.com/eramdam/BetterTweetDeck/commit/ffc1f2c5f42d0d5c5e24031c8304e3e805e32d9d)  
Date: 2016-08-06

## 3.0.3

Commit: [a9f447bbed7fbeba34436cc958df85c8b6ea013d](https://github.com/eramdam/BetterTweetDeck/commit/a9f447bbed7fbeba34436cc958df85c8b6ea013d)  
Date: 2016-08-06

- Share item is correctly added or not
- Settings button is back in TD
- Settings to hide scrollbars or not

## 3.0.5

Commit: [dc71330fefc8fde9e615d964bb4b54dfd9494990](https://github.com/eramdam/BetterTweetDeck/commit/dc71330fefc8fde9e615d964bb4b54dfd9494990)  
Date: 2016-08-07

- Option to hide bg of modals

## 3.0.7

Commit: [4a951605f36ac93e7fe75c916d02324af636e0cb](https://github.com/eramdam/BetterTweetDeck/commit/4a951605f36ac93e7fe75c916d02324af636e0cb)  
Date: 2016-08-07

## 3.0.9

Commit: [5208b13d731635bf48648d54345e293dc724cd3d](https://github.com/eramdam/BetterTweetDeck/commit/5208b13d731635bf48648d54345e293dc724cd3d)  
Date: 2016-08-08

## 3.0.10

Commit: [4fe6e20ed4c694d6373422125198f0f210d0e899](https://github.com/eramdam/BetterTweetDeck/commit/4fe6e20ed4c694d6373422125198f0f210d0e899)  
Date: 2016-08-08

- Removal of "tabs" permissions
- More reliable way of showing verified badges
- Fix flashing of tweets
- Links won't be hidden if a column has its media size on "off"
- Modal should not have a scrollbar anymore
- The code don't rely on Embed.ly anymore for most services (except Giphy, cloudapp, bandcamp and twitch)

## 3.0.11

Commit: [a11071ea3ee67d16a6d15e06db5d68ed1867b453](https://github.com/eramdam/BetterTweetDeck/commit/a11071ea3ee67d16a6d15e06db5d68ed1867b453)  
Date: 2016-08-08

- Choice of activating a provider or not is correctly taken into account in settings
- Universal preview is re-enabled by default
- The code don't use Embed.ly anymore

## 3.0.12

Commit: [d4049c8eb5d831cadd24cc7c587808bc512d66c9](https://github.com/eramdam/BetterTweetDeck/commit/d4049c8eb5d831cadd24cc7c587808bc512d66c9)  
Date: 2016-08-11

- Verified badges should display correctly when relevant
- Bring back the like/RT indicator on tweets because TweetDeck killed it
- Verified badges should display in modals and in the DM columns

## 3.0.13

Commit: [721ccf423e7fecc62a394d89a467d0ed1d1dc7ee](https://github.com/eramdam/BetterTweetDeck/commit/721ccf423e7fecc62a394d89a467d0ed1d1dc7ee)  
Date: 2016-08-18

- GIFs should not stop anymore when the option "Stop gif autoplay" is unchecked
- Streamable embed players were too small and mis-placed, it's now fixed
- The option "hide links relative to thumbnails" should work more reliably
- Better French translation (Thanks [LeoColomb](https://github.com/LeoColomb))
- Verified badge is better positioned (Thanks [LeoColomb](https://github.com/LeoColomb))
- Twitch clips (clips.twitch.tv) are now supported

## 3.0.14

Commit: [a80868ced0ab049010ce08d2711540733a93557c](https://github.com/eramdam/BetterTweetDeck/commit/a80868ced0ab049010ce08d2711540733a93557c)  
Date: 2016-08-19

- Slimmer scrollbars are bigger and it's now an option

## 3.0.15

Commit: [9bb958e521c3156e62d7d2978b52bfb8bb1228a8](https://github.com/eramdam/BetterTweetDeck/commit/9bb958e521c3156e62d7d2978b52bfb8bb1228a8)  
Date: 2016-09-01

- Added a setting to "stop" GIFs in profile pictures in columns
- Gfycat embed players were too small, it's now fixed
- Twitch clips should now actually work
- Username formatting should be more reliable/more performant
- The "no bg" background of modal now has a black to transparent gradient for improve readability

## 3.0.16

Commit: [ca03bb49a46becffdb751cb0e8a3369ea4beab1a](https://github.com/eramdam/BetterTweetDeck/commit/ca03bb49a46becffdb751cb0e8a3369ea4beab1a)  
Date: 2016-09-10

- Fix a bug where tweet actions would not work on custom modals.
- Fix a bug where icons of accounts in Compose panel would be mis-placed.
- Fix a bug where usernames would wrongly gets changed in some edge cases.
- Made some improvements to the way BTD stores its settings to handle future Edge/Firefox ports properly.
- Revert back the gradient on the modal's background.

## 3.0.17

Commit: [867b244d66acfafc110c3c1b0f98d09b719d08a7](https://github.com/eramdam/BetterTweetDeck/commit/867b244d66acfafc110c3c1b0f98d09b719d08a7)  
Date: 2016-09-12

- Horizontal scrollbars are also thin when "slim scrollbars" is enabled ([#96](https://github.com/eramdam/BetterTweetDeck/issues/96))
- Dribbble/Imgur thumbnails work again
- Hide the link related to a thumbnail only if it ends the tweet ([#97](https://github.com/eramdam/BetterTweetDeck/issues/97))

## 3.0.18

Commit: [bd9e60b8b5e6dabe526284740033479295876433](https://github.com/eramdam/BetterTweetDeck/commit/bd9e60b8b5e6dabe526284740033479295876433)  
Date: 2016-09-17

- You can specify a custom width for columns using any CSS value
- The verified icon won't display on top on the "like" icon. Even though a heart should always be checked. :white_check_mark: :heart:
- The "replace hearts by stars" feature is fixed after TweetDeck broke it.
- The Esc key should close the lightboxes

## 3.0.19

Commit: [00e1498078eab0380bbf158a930e9f4130f085e3](https://github.com/eramdam/BetterTweetDeck/commit/00e1498078eab0380bbf158a930e9f4130f085e3)  
Date: 2016-10-10

- Remove the heart button animation when the stars are displayed
- Slim scrollbars are also slim in detailed tweet view
- Fix display of verified badge because of TweetDeck update on 9th of October 2016
- Images/iframes in modals should be correctly resized now
- Desaturate some colors in minimal + dark mode

## 3.0.20

Commit: [920e304b958f981f09434938b19b23cb57a6e0fe](https://github.com/eramdam/BetterTweetDeck/commit/920e304b958f981f09434938b19b23cb57a6e0fe)  
Date: 2016-10-17

- Fix display of verified badge because of TweetDeck update on 9th of October 2016 FOR REAL THIS TIME
- Gfycat iframes in modals should be correctly resized now (due to technical weirdness on Gfycat end, they won't resize dynamically though)
- Fixing the display of avatars in conversations because TweetDeck still didn't fix it smh
- BTD changes the usernames correctly inside quoted tweets inside retweets and inside the "in reply to" block inside quoted tweets
- The "in reply to" part in quoted tweets is a little darker than the rest so it doesn't blend too much while in Dark + Minimal mode

## 3.0.21

Commit: [44848cb0354eb25c74109cd47948e1de85ab19b6](https://github.com/eramdam/BetterTweetDeck/commit/44848cb0354eb25c74109cd47948e1de85ab19b6)  
Date: 2016-11-20

- You can now collapse read DMs in the Messages column for a cleaner look and more privacy (GG [@pixeldesu](https://github.com/pixeldesu)) ([#105](https://github.com/eramdam/BetterTweetDeck/pull/105))
- Fix a bug where valid "thumbnails" URLs would not get a preview because of the search query ([#104](https://github.com/eramdam/BetterTweetDeck/issues/104))

## 3.0.22

Commit: [c8806c956341f1e48d7dc83afa695df8dac51429](https://github.com/eramdam/BetterTweetDeck/commit/c8806c956341f1e48d7dc83afa695df8dac51429)  
Date: 2016-12-06

- Fix some UI shenanigans because of last TweetDeck update (6th December 2016)

## 3.0.23

Commit: [33a803639cb337e4be3b283950c9828102ec202c](https://github.com/eramdam/BetterTweetDeck/commit/33a803639cb337e4be3b283950c9828102ec202c)  
Date: 2016-12-06

- Fix a glitch with verified badges on "XXX added you to a list" notifications

## 3.1.0

Commit: [e70c1465e623239b635b5decdcf27a2a57f1c690](https://github.com/eramdam/BetterTweetDeck/commit/e70c1465e623239b635b5decdcf27a2a57f1c690)  
Date: 2017-01-13

- Better TweetDeck now speaks Japanese! :jp: (thanks to [@shuuji3](https://github.com/shuuji3)) ([#111](https://github.com/eramdam/BetterTweetDeck/pull/111))
- You can now paste images inside the tweet composer!
  - :rotating_light: **Due to a browser limitation, it will not work with GIFs** :rotating_light:
- Verified badges in mentions should display correctly (as of 29/12/2016)
- Various little crashes (that were not disrupting the UI but still annoying me)

## 3.2.0

Commit: [90eb0a0ec4a482f7573ad707cfe72ab750939e6e](https://github.com/eramdam/BetterTweetDeck/commit/90eb0a0ec4a482f7573ad707cfe72ab750939e6e)  
Date: 2017-01-19

- The changelog page now has some sweet looking pills :pill:
- Added support for Pixiv and Twipple! (thanks to [@shuuji3](https://github.com/shuuji3)) ([#113](https://github.com/eramdam/BetterTweetDeck/pull/113))
- Re-unify square/rounded avatars everywhere in TweetDeck's UI following last TweetDeck update
- Patched some code to avoid various JS crashes :bug:

## 3.2.1

Commit: [ce77bf6c9caa1a2ac53193d84fbc2b2b7e8cdfe6](https://github.com/eramdam/BetterTweetDeck/commit/ce77bf6c9caa1a2ac53193d84fbc2b2b7e8cdfe6)  
Date: 2017-01-21

- Added some donating alternatives #Resist
- Fixed the settings dump section of the options page (thanks to [@pixeldesu](https://github.com/pixeldesu)) ([#115](https://github.com/eramdam/BetterTweetDeck/pull/115))
- Fixed the "red stars on hover" bug (☭)

## 3.2.2

Commit: [c907eabb4e1505e9e49839d9cfcdca529025e720](https://github.com/eramdam/BetterTweetDeck/commit/c907eabb4e1505e9e49839d9cfcdca529025e720)  
Date: 2017-02-07

- Added support for TINAMI (thanks to [@shuuji3](https://github.com/shuuji3)) ([#117](https://github.com/eramdam/BetterTweetDeck/pull/117))
- Added support for Nicoseiga (thanks to [@shuuji3](https://github.com/shuuji3)) ([#120](https://github.com/eramdam/BetterTweetDeck/pull/120))
- Renamed "show verified badges" to "show verified badges on top of avatar" to fit TweetDeck's update on Feb 7th 2017

## 3.3

Commit: [3c26bc775c24a768ac52c96ff9f7356735b1d2f8](https://github.com/eramdam/BetterTweetDeck/commit/3c26bc775c24a768ac52c96ff9f7356735b1d2f8)  
Date: 2017-03-14

- Rejoice, the day finally came, GIFs can be viewed in fullscreen! :boom:
- Party hard, you can download GIFs from the fullscreen preview in one-click! :tada:
- You can choose the source of the thumbnails as a small badge on top of them (see the "Content" section)
- Added support for WorldCosplay (thanks to [@shuuji3](https://github.com/shuuji3)) ([#127](https://github.com/eramdam/BetterTweetDeck/pull/127))
- Added support for Google+ photo albums (thanks to [@shuuji3](https://github.com/shuuji3)) ([#126](https://github.com/eramdam/BetterTweetDeck/pull/126))
- Added support for Photozou photo albums (thanks to [@shuuji3](https://github.com/shuuji3)) ([#125](https://github.com/eramdam/BetterTweetDeck/pull/125))
- Added support for Gyazo photo albums (thanks to [@shuuji3](https://github.com/shuuji3)) ([#124](https://github.com/eramdam/BetterTweetDeck/pull/124))
- You can now paste images in replies and DMs
- Fullscreen previews are larger on smaller screens (thanks to [@d4rky-pl](https://github.com/d4rky-pl)) ([#128](https://github.com/eramdam/BetterTweetDeck/pull/128))
- When inverted the usernames now correctly display the emojis with Twitter's assets
- Made some changes under the hood so the core of Better TweetDeck is more reliable and a bit faster
- Images in modals should correctly auto-resize now
- Giphy thumbnails should work again (they changed their API recently)
- Better TweetDeck was trying to fetch Bandcamp thumbnails for URLs like `https://bandcamp.com/<username>`, it should not happen anymore
- Removed the code that adjust the text direction automatically as TweetDeck handles that on their own now
- Removed the support of Pixiv as their API changed, breaking the current one

## 3.3.0

Commit: [e634e0f8cb5a9395b5659b4939630cda6aa786db](https://github.com/eramdam/BetterTweetDeck/commit/e634e0f8cb5a9395b5659b4939630cda6aa786db)  
Date: 2017-02-18

## 3.3.1

Commit: [ed80856153bdf10e93632c218c96f291c474d64c](https://github.com/eramdam/BetterTweetDeck/commit/ed80856153bdf10e93632c218c96f291c474d64c)  
Date: 2017-03-30

- You can revert this nasty reply change thing (you know what I mean)
- You can now hide the RT/Like indicator on top of tweets
- BTD was trying to find thumbnails on Twitch chat links, I made the regex stricter so this should not happen anymore
- Instagram multi-video/multi-pictures posts were not correctly handled, it's now working fine
- Other minor bugfixes

## 3.3.2

Commit: [a555a461705ad0d8a093e37c227f0fb40e922381](https://github.com/eramdam/BetterTweetDeck/commit/a555a461705ad0d8a093e37c227f0fb40e922381)  
Date: 2017-04-23

- You can revert to the old search! (thanks to [@pixeldesu](https://github.com/pixeldesu)) ([#144](https://github.com/eramdam/BetterTweetDeck/pull/144))
- Instagram fullscreen previews should work properly now
- Video/iFrame-based modals should resize properly now
- The settings button has been repositioned
- The RT/likes indicator should now re-appear
- Some timestamps were not replaced/updated. This should be fixed
- The verified icon should be correctly displayed again now
- Some usernames were not handled, specifically in Activity columns. This should be alright now.

## 3.3.3

Commit: [bec7e09c46c40cbf34a43a77a1c10db175676e30](https://github.com/eramdam/BetterTweetDeck/commit/bec7e09c46c40cbf34a43a77a1c10db175676e30)  
Date: 2017-04-24

- The "download as GIF" link under GIF fullscreen previews is back. Sorry about that.

## 3.3.4

Commit: [cd9e413894572a14783fe92c80f84830c0f371cc](https://github.com/eramdam/BetterTweetDeck/commit/cd9e413894572a14783fe92c80f84830c0f371cc)  
Date: 2017-04-30

- Tweets with a poll will now have a "poll" indicator below them in the columns
- Spotify was not working anymore. This should be fixed.
- There was some weird issues with the Instagram embed script. It's now bundled w/ the extension to improve reliability.

## 3.3.5

Commit: [88affd016b34939235ef16364a392551c13c9443](https://github.com/eramdam/BetterTweetDeck/commit/88affd016b34939235ef16364a392551c13c9443)  
Date: 2017-05-26

- **Removed the old search setting**. TweetDeck killed the hack, sorry, RIP :sob:
- Fix the bug that opened a Google search view when clicking on videos in the timeline (Related to a new TweetDeck feature)
- Tweet field will be re-focused when you alt-tab after having it focused already (thanks to [@knu](https://github.com/knu)) ([#152](https://github.com/eramdam/BetterTweetDeck/pull/152))
- Videos/iframe should (hopefully) be correctly resized in full screen previews

## 3.3.6

Commit: [b48380c996c25c0f7036b7f545e2bacad94ff39c](https://github.com/eramdam/BetterTweetDeck/commit/b48380c996c25c0f7036b7f545e2bacad94ff39c)  
Date: 2017-05-28

- The previous fix for the Google search link issue (see 3.3.5) was not reliable enough. That should be better now.
- There was a bug with small thumbnails showing a 2nd play icon. This should be fixed.
- The emoji picker has been updated (Unicode 8/9)
- [Stickers](https://blog.twitter.com/official/en_us/a/2016/introducing-stickers-on-twitter.html) sent in Direct Messages from Twitter apps are displayed now.

## 3.3.7

Commit: [d41097ea8e25955b910bbeb204f49e24c38b274e](https://github.com/eramdam/BetterTweetDeck/commit/d41097ea8e25955b910bbeb204f49e24c38b274e)  
Date: 2017-06-06

- The "don't autoplay GIFs" feature has been removed now that [TweetDeck has that feature now](https://twitter.com/TweetDeck/status/861997926587019264)
- The sharing feature now requires your explicit permission before working. See the "Share" section on the left in the settings to learn more.
- There was some focusing issues on Opera/Chrome. This should be fixed now

## 3.3.8

Commit: [32185cf44119330e19777df503045f16f21a0b91](https://github.com/eramdam/BetterTweetDeck/commit/32185cf44119330e19777df503045f16f21a0b91)  
Date: 2017-06-09

- The settings page was broken on Firefox because of a mistake on my side. It's fixed
- Changed mentions of "Chrome" in the locales to "browser"

## 3.3.9

Commit: [a4430e924ced55a893662bfd95e2c217af029d86](https://github.com/eramdam/BetterTweetDeck/commit/a4430e924ced55a893662bfd95e2c217af029d86)  
Date: 2017-06-17

- A banner is displayed when BTD has been updated for better visibility
- The stars icons are correctly changed with the new TweetDeck design
- The verified icons are correctly displayed with the new TweetDeck design (thanks to [@LeoColomb](https://github.com/LeoColomb)) ([#165](https://github.com/eramdam/BetterTweetDeck/pull/165))
- Some icons now use the official TweetDeck iconfont (thanks to [@LeoColomb](https://github.com/LeoColomb)) ([#167](https://github.com/eramdam/BetterTweetDeck/pull/167))

## 3.3.10

Commit: [df3130fb337327a8f5e9507e27b2218b57587480](https://github.com/eramdam/BetterTweetDeck/commit/df3130fb337327a8f5e9507e27b2218b57587480)  
Date: 2017-06-22

- TweetDeck now has its [own poll indicator](https://twitter.com/TweetDeck/status/877536207034568704) so I can remove mine :grin:
- The action menu on a tweet now has a "Show on Favstar" item
- The way we apply some hacks should be less error-prone now (thanks to [@pixeldesu](https://github.com/pixeldesu)) ([#173](https://github.com/eramdam/BetterTweetDeck/pull/173))

## 3.4.0

Commit: [1b1bf86bd4c007865bcb4a3fbe544035b608a7cd](https://github.com/eramdam/BetterTweetDeck/commit/1b1bf86bd4c007865bcb4a3fbe544035b608a7cd)  
Date: 2017-07-02

- You can update the title of TweetDeck's tab when there are unread tweets/DMs
- You can mute #hashtags right from the tweet menu (toggable in the settings) (thanks to [@pixeldesu](@pixeldesu)) ([#180](eramdam/BetterTweetDeck/pull/180))
- You can use [JavaScript regular expressions](developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) as mute filters (thanks to [@pixeldesu](@pixeldesu) ([#179](eramdam/BetterTweetDeck/pull/179))
- You can now choose to use the default font of your OS inside TweetDeck's UI! (thanks to [@pixeldesu](@pixeldesu)) ([#176](eramdam/BetterTweetDeck/pull/176))
- With the related settings, emojis were made bigger everywhere in TweetDeck and not just in tweets. This is fixed.
- Usernames and verified badges should not disappear randomly anymore. BTD should be WAY ligther/faster thanks to that 🐎 [more technical details](eramdam/BetterTweetDeck/pull/178)
- When "Show Verified badges above avatars" settings was enabled, verified badges were hidden inside quoted tweets and tweets that were the target of a like/retweet. They should be displayed correctly now.
- You can disable the "Show in Favstar" item in tweets' menu in the Content section
- The settings button is better integrated inside of TweetDeck's UI (thanks to [@LeoColomb](@LeoColomb)) ([#177](eramdam/BetterTweetDeck/pull/177))

## 3.4.1

Commit: [50d074fb9f8c44ebfd381bca0aeb8a9990ff5722](https://github.com/eramdam/BetterTweetDeck/commit/50d074fb9f8c44ebfd381bca0aeb8a9990ff5722)  
Date: 2017-07-30

- Rejoice, old replies are back! Due to technical limitations, this only affects the display in columns though.
- You can add a shortcut to copy the links of all media in a tweet (thanks to @EntranceJew (#190))
- You can add a shortcut to download all the media in a tweet (thanks to @EntranceJew (#190))
- The dropdown menus in dark theme should be legible again
- Gfycat thumbnails now use the official oEmbed endpoint. So they should work correctly now.
- Some changes have been made under the hood to improve performances and security. Kudos to the Mozilla review team for advices!

## 3.4.2

Commit: [fea0e236debe961f5c141342ebc1cc052029afd3](https://github.com/eramdam/BetterTweetDeck/commit/fea0e236debe961f5c141342ebc1cc052029afd3)  
Date: 2017-07-31

- Removed strict check on the custom column width value

## 3.4.3

Commit: [5a9bc13906ebf67b19c20448a64a1e3aeddfbc8b](https://github.com/eramdam/BetterTweetDeck/commit/5a9bc13906ebf67b19c20448a64a1e3aeddfbc8b)  
Date: 2017-07-31

- **PLEASE READ IF YOU USE BTD ON FIREFOX**: Due to Mozilla's policy about 3rd party code in add-ons I had to remove the Instagram-related code from the Firefox build. It's annoying, but don't blame me, I'm just following the rules. I'll be working on an alternative but it's not as easy as it sounds.
- The custom column width setting should work like it did before.
- Some thumbnails were not showing on Firefox, this should be fixed

## 3.4.4

Commit: [5209b8b788d6f3153d429f774c7d84caec4ec07a](https://github.com/eramdam/BetterTweetDeck/commit/5209b8b788d6f3153d429f774c7d84caec4ec07a)  
Date: 2017-09-04

## 3.4.5

Commit: [e2fced93ea9fb76e620f0ca79eaa9e1a593f5228](https://github.com/eramdam/BetterTweetDeck/commit/e2fced93ea9fb76e620f0ca79eaa9e1a593f5228)  
Date: 2017-09-24

## 3.4.6

Commit: [a56cd0d02d7598a0f19bdc779dd811b67b5f4474](https://github.com/eramdam/BetterTweetDeck/commit/a56cd0d02d7598a0f19bdc779dd811b67b5f4474)  
Date: 2017-09-25

- You can add a `Mute <source>` item in tweets menu. Useful to mute tweets from specific apps!
- You can add a clear button ( :droplet: ) in columns' header (thanks <a href="https://github.com/EntranceJew">@EntranceJew</a> <a href="https://github.com/eramdam/BetterTweetDeck/pull/224">#224</a>)
- You can add a "collapse" button ( :heavy_minus_sign: ) in columns' header (thanks <a href="https://github.com/EntranceJew">@EntranceJew</a> <a href="https://github.com/eramdam/BetterTweetDeck/pull/208">#208</a>)
- You can specify the format of the filename when downloading a GIF/image. (thanks <a href="https://github.com/EntranceJew">@EntranceJew</a> <a href="https://github.com/eramdam/BetterTweetDeck/pull/204">#204</a>)
- You can make it so holding <kbd>Ctrl</kbd> (or <kbd>Cmd</kbd> on Mac) while interacting with a tweet (liking, retweeting, download/hotliking its media) makes you follow the author of said tweet. (thanks <a href="https://github.com/EntranceJew">@EntranceJew</a> <a href="https://github.com/eramdam/BetterTweetDeck/pull/206">#206</a>)
- Some internal changes have been made so Better TweetDeck is (hopefully) more reliable and faster. Are affected: timestamps, and the removal of the t.co redirection among others.
- I've tweaked the way the old replies are displayed in tweets, this should be more on-par with the old behavior.
- GIFs downloaded off a retweet should have the proper username in their filename (thanks <a href="https://github.com/EntranceJew">@EntranceJew</a> <a href="https://github.com/eramdam/BetterTweetDeck/pull/203">#203</a>)
- A couple visual bugs have been fixed

## 3.4.7

Commit: [3c773908378ebed43222123b353f0ae0db4e38a2](https://github.com/eramdam/BetterTweetDeck/commit/3c773908378ebed43222123b353f0ae0db4e38a2)  
Date: 2017-10-21

- You can enable an "Edit" item in tweets' menu (see the settings for specifics) (thanks @EntranceJew #230)
- You can pause the scrolling of columns when hovering them (thanks @EntranceJew #212)
- You can configure the feed behaviour when collapsing columns (thanks @EntranceJew #239)
- You can put the search columns **before** the first column (thanks @chylex #219)
- The Japanese translation has been updated (thanks @shuuji3 #236)
- Minor bugfixes

## 3.4.8

Commit: [595f77c0545c9348b15012be5490e2fecb93fa91](https://github.com/eramdam/BetterTweetDeck/commit/595f77c0545c9348b15012be5490e2fecb93fa91)  
Date: 2017-11-07

- You can display the character count as a number again instead of the circle-loading-thing (thanks <a href="https://github.com/pixeldesu">@pixeldesu</a> <a href="https://github.com/eramdam/BetterTweetDeck/pull/263">#263</a>)
- Due to performance reasons, Better TweetDeck will NOT change timestamps, load thumbnails and stickers inside DMs anymore as it was slowing down the DM conversations too much.
- Fixed the French translations (thanks <a href="https://github.com/viki53">@viki53</a> <a href="https://github.com/eramdam/BetterTweetDeck/pull/252">#252</a>)
- The Japanese translation has been updated (thanks <a href="https://github.com/shuuji3">@shuuji3</a> <a href="https://github.com/eramdam/BetterTweetDeck/pull/259">#259</a>)

## 3.4.9

Commit: [cc3810274206bda9a2fba5cfde138d86f5982788](https://github.com/eramdam/BetterTweetDeck/commit/cc3810274206bda9a2fba5cfde138d86f5982788)  
Date: 2017-11-10

- All of the CSS tweaks should work properly (minimal theme, modal background, verified icon, stars, etc..)
- That's all folks 🤷‍♂️

## 3.4.10

Commit: [3cfa418857f8e9e9aa71ea06043977272e0f599e](https://github.com/eramdam/BetterTweetDeck/commit/3cfa418857f8e9e9aa71ea06043977272e0f599e)  
Date: 2017-11-10

- The "icons in compose panel are smaller" was not properly fixed after 3.4.9. Should be good now.

## 3.5.0

Commit: [1ce4a722e23db2a4aba36339ad342fe0c71cc7c9](https://github.com/eramdam/BetterTweetDeck/commit/1ce4a722e23db2a4aba36339ad342fe0c71cc7c9)  
Date: 2017-12-18

- You can now add GIFs directly from Giphy and Tenor from the composer. Click the GIF button in there and 💥
- You can now add emojis in the composer even more easily using :shortcodes: like on Discord/Slack/GitHub.
- The emoji picker now displays a small preview of the emoji currently hovered, showing its :shortcode:
- The emoji picker should have slightly better performances
- The emoji picker now has a larger scrollbar and displays more emoji in the same space
- Instagram embeds should work again
- GIFs were not opening in fullscreen properly when they were in quoted tweets. That should work now.
- When truncating the text for sharing, BTD now takes account of the new character limit

## 3.5.1

Commit: [089a17342429dc5b9f938fc1620a1d6536b913b5](https://github.com/eramdam/BetterTweetDeck/commit/089a17342429dc5b9f938fc1620a1d6536b913b5)  
Date: 2017-12-31

- Better TweetDeck's settings are translated into Czech! (Thanks @chylex and @Sophia2329 #292 )
- Some categories were not working in the emoji picker, this should work again
- Support for Twipple thumbnails was removed as it shut down back in November
- Support for Miil.me thumbnails has been added (Thanks @shuuji3 #294)
- The emoji completion is now usable with the mouse
- If you are on Firefox, check out the add-on I made to fix the videos playback on TweetDeck/Twitter => https://addons.mozilla.org/en-US/firefox/addon/twitter-videos-fixer/

## 3.6.0

Commit: [822bf8d1fd7cdd048b3436486a3a542521c351d4](https://github.com/eramdam/BetterTweetDeck/commit/822bf8d1fd7cdd048b3436486a3a542521c351d4)  
Date: 2018-02-02

#### Advanced Mute Engine's debut!

- This release marks the debut of the [Advanced Mute Engine](https://github.com/eramdam/BetterTweetDeck/pull/286) into Better TweetDeck! Amazing work by @pixeldesu.
  This lets you:
  - Mute specific keywords from a specific user
  - Mute by using regular expressions (the old regex settings has been removed)
  - Mute by keywords in users' biography
  - Mute users with default profile pictures
  - Mute users with less than X followers
- Nicovideo thumbnails are now supported! And Nicoseiga thumbnails should work again! (Thanks @shuuji3 (#295))
- Pixiv thumbnails are back! (Thanks @shuuji3 (#303))
- You can now add the `tweetId` variable to the filename when downloading images/videos of a tweet (thanks @shuuji3 (#305))
- Settings are now translated in German (thanks @flak3 (#307 ))
- The emoji completion should now add the selected emoji when using the Tab key (thx @Floppy012 (#309))
- The verified icon on top of avatars is now a SVG icon which should look better in some browsers (namely Firefox)
- Instagram embeds should work again

#### Back to the future

- A new setting to re-enable the old dark theme has been added. Keep in mind that this is experimental and can break at any time and won't be maintained eternally either. Look for it in the **Interface** section!

#### 3.6.2

- Fixed some CSS after TweetDeck's update on the 6th of February that reduced the size of avatars and tweaked some layouts in the notifications columns

## 3.6.1

Commit: [d18a299ac31702150422147a1d89ac27e3362e78](https://github.com/eramdam/BetterTweetDeck/commit/d18a299ac31702150422147a1d89ac27e3362e78)  
Date: 2018-02-02

## 3.6.2

Commit: [694559dec1938c7d90267cb3fbff395f30fa30fa](https://github.com/eramdam/BetterTweetDeck/commit/694559dec1938c7d90267cb3fbff395f30fa30fa)  
Date: 2018-02-06

## 3.6.3

Commit: [927134da6ac130cdca51d9b0420158f899fe4ffd](https://github.com/eramdam/BetterTweetDeck/commit/927134da6ac130cdca51d9b0420158f899fe4ffd)  
Date: 2018-02-08

## 3.6.4

Commit: [02db02156d765b563559d5993aba020beeaa7398](https://github.com/eramdam/BetterTweetDeck/commit/02db02156d765b563559d5993aba020beeaa7398)  
Date: 2018-02-09

### Revamped "Download GIF" feature!

The "Download to GIF" feature has been reworked to be faster and more reliable, and you can now download more than 1 GIF at the time (if you're fast enough) 🔥

### Bugfixes

- The "collapsed read DMs" setting was glitched since TweetDeck's update on early February, this should work fine now
- Instagram embeds should work again
- CSS hotfixes are possible again, so I should be able to fix some CSS issues temporarily without needing to push an update

## 3.7.0

Commit: [0dea626dd56112ca3d3c799b4a933bf4d929e64b](https://github.com/eramdam/BetterTweetDeck/commit/0dea626dd56112ca3d3c799b4a933bf4d929e64b)  
Date: 2018-03-25

### 🎨 Custom CSS 🎨

It's finally here! 🎉 You can inject whatever CSS you want into TweetDeck easily with Better TweetDeck! No need for a separate extension anymore!

### Bugfixes and other features

- Pixiv thumbnails can now be displayed from users pages (thanks @mika-f in #322)
- You can now mute a specific tweet from the tweet menu. Look for `Hide this tweet` when clicking the `...` button on a tweet
- You can enable a "Keep tweeted hashtags" feature, useful when livetweeting! (thanks @zenmaibane in #324)

## 3.7.1

Commit: [e853fa398a9937ff9a9a4cbcec29a27decfa9dee](https://github.com/eramdam/BetterTweetDeck/commit/e853fa398a9937ff9a9a4cbcec29a27decfa9dee)  
Date: 2018-05-04

### 🐛 Bugfixes 🐛 & one small feature

- On May the 1st TweetDeck made some changes to the columns, notably breaking the clear button, the collapse button. Those two should be back in action!
- The size of the text input in column headers could be wrong if you set a custom width smaller than 250px on your columns, this should now be fixed
- The "Mute retweets from user" option was gone from users' profiles' dropdowns after a TweetDeck update, it's now back.
- The favicons of the thumbnails providers were not displaying in BTD's options page if you enabled the "Tracking Protection" feature of Firefox. This should now be fixed.
- The "new" button in the settings was misplaced in some situations, it should now be fixed.
- You can now hide the scrollbars of columns on Firefox 🔥🦊

## 3.7.2

Commit: [6fd7359192f9dfd8a6096e32d2297aa97b18bc1a](https://github.com/eramdam/BetterTweetDeck/commit/6fd7359192f9dfd8a6096e32d2297aa97b18bc1a)  
Date: 2018-05-15

## 3.7.3

Commit: [001567a6a5be67d8564a1e073faa0e9aaee0f79a](https://github.com/eramdam/BetterTweetDeck/commit/001567a6a5be67d8564a1e073faa0e9aaee0f79a)  
Date: 2018-06-02

## 3.7.4

Commit: [2c4bbc5790771d412c6b217c3da64fe691a73676](https://github.com/eramdam/BetterTweetDeck/commit/2c4bbc5790771d412c6b217c3da64fe691a73676)  
Date: 2018-06-09
Since Favstar.fm is closing on June 19th, this release removes the item pre-emptively.
We'll miss you, Favstar 💔😢

Otherwise, this release contains:

- CSS fixes for the columns thing that happened a few weeks ago
- Other small CSS fixes
- Japanese translation fixes (#346)

## 3.7.5

Commit: [fd3759f41bd161fa7885d0a0643c3456d23e9007](https://github.com/eramdam/BetterTweetDeck/commit/fd3759f41bd161fa7885d0a0643c3456d23e9007)  
Date: 2018-06-25
Contains a hotfix for the TweetDeck update of June 25th 2018.

Some small features may me missing but they'll be restored as soon as a complete fix is found, thanks for your patience!

## 3.7.6

Commit: [2f51218f52f4dd61b5b266cf23545111869532ed](https://github.com/eramdam/BetterTweetDeck/commit/2f51218f52f4dd61b5b266cf23545111869532ed)  
Date: 2018-06-30

## 3.7.7

Commit: [721d0209d935c4a3f19af9e73bf8f1c5f07805af](https://github.com/eramdam/BetterTweetDeck/commit/721d0209d935c4a3f19af9e73bf8f1c5f07805af)  
Date: 2018-06-30

### 🐛 Bugfixes & co 🐛

- ✨ Take a look in the bottom left corner ✨ It's a Better TweetDeck logo! 😱 😎 (you can disable this in the options if for some reason you're not into it)
- The small notifications when downloading GIFs should be back again 🔥
- Made some tweaks to avoid future TweetDeck updates from breaking Better TweetDeck 😅
- Fix some CSS around the banners that Better TweetDeck displays at the top of the app
- When downloading videos, there was a `?tag=X` suffix added after the extension, this should be fixed now

## 3.7.8

Commit: [f3298fe272ca6b059ffe8b9fb1fd228467a53d95](https://github.com/eramdam/BetterTweetDeck/commit/f3298fe272ca6b059ffe8b9fb1fd228467a53d95)  
Date: 2018-07-02

## 3.8.0

Commit: [bf35be5b2fbd570682be4739ddcd0ad5b58b87b2](https://github.com/eramdam/BetterTweetDeck/commit/bf35be5b2fbd570682be4739ddcd0ad5b58b87b2)  
Date: 2018-11-28
First release in a long time! 😴

### Bugfixes

- Some fixes to the Japanese translation (#373)
- Fix the fullscreen media overlay on small windows (#379)
- Backport some of the CSS hotfixes to the actual codebase
- Visual fixes for the new dark theme (emoji panel, dropdowns in minimal theme)
- Fixes to the "classic" dark theme, it should look mostly fine/usable now..

### Features and improvements

- Add new `Follower count greater than` mute option (#387)
- Add thumbnails support for MLTSHP (#371)
- Add thumbnails support for Audiomack (#364)
- Add thumbnails support for CorkBoard (#329)

## 3.8.1

Commit: [4b588e40028f7112fd153fdc80a46cead9d4d023](https://github.com/eramdam/BetterTweetDeck/commit/4b588e40028f7112fd153fdc80a46cead9d4d023)  
Date: 2019-01-19
1st release of 2019! Happy new year! 🎉

### Enhancements

As of Firefox 64+, Firefox **finally** supports custom scrollbars in CSS, so this release of BTD adds some CSS to style TweetDeck's scrollbars and enable the "slim scrollbars" option in Firefox 🔥 🦊 🎉

### Bugfixes

- Fix alignment of settings button in sidebar since last TweetDeck's update (#399)
- Fix some CSS issues with the Giphy column.
- Fix RT/like indicators not showing up in columns anymore.

## 3.8.2

Commit: [2e866aca50343f80bc2db83e9e1dce3c6f5acb1c](https://github.com/eramdam/BetterTweetDeck/commit/2e866aca50343f80bc2db83e9e1dce3c6f5acb1c)  
Date: 2019-03-05

## 3.9.0

Commit: [72d4804d94bb8c7031a50259ed98e254831b1736](https://github.com/eramdam/BetterTweetDeck/commit/72d4804d94bb8c7031a50259ed98e254831b1736)  
Date: 2019-03-09
a.k.a the "TweetDeck broke my stuff, so I gotta fix it back" update.

### Bugfixes

- The Giphy/Tenor integration works again
- The "Keep tweeted hashtags" feature works again
- The emoji picker/auto-completion works again
- The settings button is here again

As far as I can tell, I managed to fix everything the last TweetDeck update broke. Let met know if you're seeing something missing.

### Features

- You can now add a mute (🔇) and a block (🚫) item to the tweet actions, check the "Content" section of the settings to enable those

## 3.9.1

Commit: [8da3b93e3946c241fdd0f4947fdff1de0da8754b](https://github.com/eramdam/BetterTweetDeck/commit/8da3b93e3946c241fdd0f4947fdff1de0da8754b)  
Date: 2019-03-09

## 3.9.2

Commit: [9fc3155e031c823b471c009f41c98b7ae51c8a18](https://github.com/eramdam/BetterTweetDeck/commit/9fc3155e031c823b471c009f41c98b7ae51c8a18)  
Date: 2019-03-10

## 3.9.3

Commit: [93607370070ea3ed4d9acb37bca6ee978e25492f](https://github.com/eramdam/BetterTweetDeck/commit/93607370070ea3ed4d9acb37bca6ee978e25492f)  
Date: 2019-03-10
Bugfixes, bugfixes, bugfixes! 🐛

### Bugfixes

- The emoji picker should actually insert an emoji when an emoji is being clicked! Phew.
- The Mute/Block items should now work inside Activity columns. And they also will show the @ of whom you're about to block/mute.
- The search inside the emoji picker should work now 🔍
- The emoji picker, gif integration, and "keep hashtags" feature should now work if you have the "Stay open" option checked.
- Fixes in the way BTD checks whether it has been updated or not.

### Enhancements

- Update of the Japanese localization (#411)

## 3.9.4

Commit: [dad8787bb77a74e0a47c910d72eb6e2a6f8264df](https://github.com/eramdam/BetterTweetDeck/commit/dad8787bb77a74e0a47c910d72eb6e2a6f8264df)  
Date: 2019-03-10
Really fixes the "keep hashtags" feature this time 😓

If you appreciate what I do with Better TweetDeck, I have a donate page on the website now! https://better.tw/donate

## 3.9.5

Commit: [de7ea5653daae3e277964cfbd3b84188483152a4](https://github.com/eramdam/BetterTweetDeck/commit/de7ea5653daae3e277964cfbd3b84188483152a4)  
Date: 2019-07-10

- Hotfix for TweetDeck's last update that hardened their Content Security Policy, thus blocking Tenor/Giphy and other features.

That's all! Hope you're having a nice summer!

## 3.9.6

Commit: [f27fda2dab7a73323e4e22f895d5de75e713509b](https://github.com/eramdam/BetterTweetDeck/commit/f27fda2dab7a73323e4e22f895d5de75e713509b)  
Date: 2019-09-21

- Fixed a bug where the favicon of TweetDeck would change because of the URLs from which Better TweetDeck tries to get thumbnails from (if you had this happen, you'll know what I mean)

## 3.9.8

Commit: [5e30fe335093d3f77a52ee0463ae289f16d18539](https://github.com/eramdam/BetterTweetDeck/commit/5e30fe335093d3f77a52ee0463ae289f16d18539)  
Date: 2019-10-12

## 3.9.9

Commit: [a8874510259b8fa095ce179f70b6320d7eda599d](https://github.com/eramdam/BetterTweetDeck/commit/a8874510259b8fa095ce179f70b6320d7eda599d)  
Date: 2019-11-28

### Bugfixes

- Fixes some templates not being replaced, which fixes the following features (probably others that I didn't notice) (https://github.com/eramdam/BetterTweetDeck/pull/447)
  - block button in tweet actions
  - mute button in tweet actions
  - button to download all medias in tweet actions
  - button to copy links to all medias in tweet actions
- Tentative fix for the emoji insertion bug that wouldn't properly save the tweet draft, making you send half-written shortcodes instead of emojis (https://github.com/eramdam/BetterTweetDeck/pull/445)
- Fixes some dropdowns menus being impossible to read with the OG dark theme on (https://github.com/eramdam/BetterTweetDeck/issues/433)

### Features

- Add time-related variables to the download filename templates (https://github.com/eramdam/BetterTweetDeck/pull/442) (thanks @shuuji3 !)

## 3.9.10

Commit: [00cc17233fe04862e93363e5f2375d7772650c1e](https://github.com/eramdam/BetterTweetDeck/commit/00cc17233fe04862e93363e5f2375d7772650c1e)  
Date: 2020-05-18

## 3.9.11

Commit: [d1ae1f61ff8960c2cc775bad964f82fc9d86a7c4](https://github.com/eramdam/BetterTweetDeck/commit/d1ae1f61ff8960c2cc775bad964f82fc9d86a7c4)  
Date: 2020-05-18

- Fix the "no background behind modal" setting after TweetDeck's last update that switched to a native video player (https://github.com/eramdam/BetterTweetDeck/pull/476)
- Hopefully fix the emoji autocompletion not inserting the emoji in time when tweeting (https://github.com/eramdam/BetterTweetDeck/pull/463)
- Fix a typo in the French localization

## 3.9.12

Commit: [44c379729723741a10a720b7379a688ac3cc78e2](https://github.com/eramdam/BetterTweetDeck/commit/44c379729723741a10a720b7379a688ac3cc78e2)  
Date: 2020-05-20

## 3.9.13

Commit: [712009a8006e03ff7c3ab4772223705689ca5899](https://github.com/eramdam/BetterTweetDeck/commit/712009a8006e03ff7c3ab4772223705689ca5899)  
Date: 2020-05-23
In order to be compliant with the new Google policie regarding permissions, I had to remove a bunch of permissions BTD wasn't using. The list is quite long so feel free to check this [Pull Request](https://github.com/eramdam/BetterTweetDeck/pull/477) for details.

Also, the video modals for youtube/vimeo/etc should work correctly again, sorry about that 🙇‍♂️

## 3.9.14

Commit: [58c6d86110509c7759cf9c6ae09f8ae631240f8b](https://github.com/eramdam/BetterTweetDeck/commit/58c6d86110509c7759cf9c6ae09f8ae631240f8b)  
Date: 2020-05-25
This release fixes the fact that the "Share on TweetDeck" context menu stopped working in Firefox in 3.9.13

## 3.9.15

Commit: [1ea788561afe0c33d6fd432d1696ad021fdc45da](https://github.com/eramdam/BetterTweetDeck/commit/1ea788561afe0c33d6fd432d1696ad021fdc45da)  
Date: 2020-06-05

### Bugfixes

- Fix the giphy/tenor search not working in Firefox 77
- Fix the download media button in Firefox 77
- Fix an (old) bug around the date picker in the tweet composer
- Fix the bug where opening the Better TweetDeck settings would crash a tab container on Firefox

### Enhancements

- Some vertical offset is added to the tweet composer so when the "small composer icons" option is enabled, those buttons aren't hidden on smaller monitors
- The emoji popover will now try to re-position itself on smaller monitors where it might be partially hidden because it would go below the bottom of the window

## 3.9.16

Commit: [4049211911b969954af9502e835f51c751afb054](https://github.com/eramdam/BetterTweetDeck/commit/4049211911b969954af9502e835f51c751afb054)  
Date: 2020-09-15
This is a maintenance update that upgrades some code dependencies ([DOMPurify](https://github.com/eramdam/BetterTweetDeck/commit/b831e21cf7a0e881ba1432e38f689abaacaa2ad1)) for security reasons.

## 3.10.0

Commit: [7c147db4251d2fa357269dc020e8ffcccdc7d308](https://github.com/eramdam/BetterTweetDeck/commit/7c147db4251d2fa357269dc020e8ffcccdc7d308)  
Date: 2021-01-22

## 3.10.1

Commit: [da932a531150ae7c8f9a7acd8454ee922ced53ad](https://github.com/eramdam/BetterTweetDeck/commit/da932a531150ae7c8f9a7acd8454ee922ced53ad)  
Date: 2021-01-22

- Fix a bug around pasting files into the TweetDeck composer
- Fix a bug around video embed sizes in the fullscreen preview
- Prepare for Safari 14 support
- Remove un-used permissions on Firefox

## 4.0.0

Commit: [8aeae088e5d057e55824695df5bbaaae89571e26](https://github.com/eramdam/BetterTweetDeck/commit/8aeae088e5d057e55824695df5bbaaae89571e26)  
Date: 2021-04-03
Better TweetDeck 4 is a complete rework of the extension!
Everything has been rewritten from scratch to improve performance, stability, and make adding features easier in the future!

Speaking of features, 4.0 also comes with the following new features and improvements:

- You can now customize TweetDeck with a selection of 7 accent colors
- You can choose between two new dark themes, "Super Black" and "Old Gray"
- You can make TweetDeck switch between the light theme and a dark theme of your choosing according to your system's settings
- You can display the account picker when clicking the "like" button on a given tweet
- You can add a "Delete" button in columns' header in addition to the already existing Collapse and Clear
- You can display single images with their original aspect ratio inside of columns
- You can display fullscreen images like on Twitter Web (full width, with a colored background)
- You can show tweets "cards" inside of the columns
- You can choose to import/export your settings
- Better TweetDeck makes it so TweetDeck properly displays newer emoji
- Quote tweets with images are displayed like on Twitter Web
- The emoji picker has been revamped and should be easier to update in the future
- Translator badges can now be shown in addition to verified badges in columns
- And a lot of little things!

## 4.0.1

Commit: [af5bfce295caa36ef5940a0fd5e38b44c4690ce6](https://github.com/eramdam/BetterTweetDeck/commit/af5bfce295caa36ef5940a0fd5e38b44c4690ce6)  
Date: 2021-04-06

## 4.0.2

Commit: [f92c28c44d213c9db19bca1150f2fffa5cfade3c](https://github.com/eramdam/BetterTweetDeck/commit/f92c28c44d213c9db19bca1150f2fffa5cfade3c)  
Date: 2021-04-08

- Restore the setting to show RT/Like indicator on the top right of tweets
- Add Brazilian Portuguese translation
- Add Japanese translation
- Add German translation
- Re-add a setting to show the character counter in the tweet composer
- Properly ask for `tabs` permission on Firefox when enabling the Share Item. This should fix the shared links title not being captured on Firefox.
- Small main theme tweaks
- Fix the horizontal scrollbar in profile modals
- Fix unread DMs styles in Old Grey/Super Dark theme (fixes https://github.com/eramdam/BetterTweetDeck/issues/536)
- Fix selected tweet styles in Old Grey/Super Dark theme (Fixes https://github.com/eramdam/BetterTweetDeck/issues/548)
- Tweak the Old Grey theme for better contrast (Fixes https://github.com/eramdam/BetterTweetDeck/issues/545)
- Make the horizontal scrollbar at the bottom of the app thinner when asked to on Firefox (Fixes https://github.com/eramdam/BetterTweetDeck/issues/542)
- Make sure cards aren't rendered when a column has media off (Fixes https://github.com/eramdam/BetterTweetDeck/issues/550)
- Allow for single images in quoted tweets to have the right aspect ratio (Fixes https://github.com/eramdam/BetterTweetDeck/issues/541)
- Fix "keep tweeted hashtag" feature when using the always opened composer (Fixes https://github.com/eramdam/BetterTweetDeck/issues/560)
- Preserve CSS comments when saving Custom CSS (Fixes https://github.com/eramdam/BetterTweetDeck/issues/566)
- Improvements to the "show cards" features have been in an attempt to reduce the memory consumption when it was enabled.

## 4.0.3

Commit: [9bd9528942ba4a121d08357e9205181209743aad](https://github.com/eramdam/BetterTweetDeck/commit/9bd9528942ba4a121d08357e9205181209743aad)  
Date: 2021-04-10

- Better TweetDeck doesn't need to override TweetDeck's theme anymore (Fixes https://github.com/eramdam/BetterTweetDeck/issues/580 https://github.com/eramdam/BetterTweetDeck/issues/584 https://github.com/eramdam/BetterTweetDeck/issues/574)
- Fix a bug where quoted tweets could get rendered multiple times in a given tweet when coming back from their detailed view (Fixes https://github.com/eramdam/BetterTweetDeck/issues/581)
- Fix a bug that rendered cards inside of non-mentions notifications (Fixes https://github.com/eramdam/BetterTweetDeck/issues/577)

## 4.1.0

Commit: [2d8f5695a4ac934a08501160b0c7e1378ffda763](https://github.com/eramdam/BetterTweetDeck/commit/2d8f5695a4ac934a08501160b0c7e1378ffda763)  
Date: 2021-04-16

- Adds a search in the settings
- Don't show emoji completion unless there are two characters after the `:`
- Uncollapse collapsed columns when clicking in the app navigation
- Fix around keep hashtags
- Add settings to disable emoji-related features and the GIF picker (https://github.com/eramdam/BetterTweetDeck/issues/578)
- Allow to pick a custom accent color (https://github.com/eramdam/BetterTweetDeck/issues/539)
- Properly theme Trending column when switching theme automatically (https://github.com/eramdam/BetterTweetDeck/issues/563)
- Re-add "regex by username" from @pixeldesu (https://github.com/eramdam/BetterTweetDeck/issues/516)
- Add a setting to only show the like account picker on specific accounts (https://github.com/eramdam/BetterTweetDeck/issues/559)
- Fix https://github.com/eramdam/BetterTweetDeck/issues/551
- Add a setting to change the translation destination language (https://github.com/eramdam/BetterTweetDeck/issues/517)
- Make sure buttons in detailed view don't wrap (https://github.com/eramdam/BetterTweetDeck/issues/544)
- Allow clicking on an emoji in the completion to insert it (https://github.com/eramdam/BetterTweetDeck/issues/591)

## 4.1.1

Commit: [5ccb0c16896bf51c83ce6de5e2864c2790245739](https://github.com/eramdam/BetterTweetDeck/commit/5ccb0c16896bf51c83ce6de5e2864c2790245739)  
Date: 2021-05-03

- Make sure t.co redirection gets removed on website links inside of the profile modal (https://github.com/eramdam/BetterTweetDeck/pull/590 @hiroto7)
- Fix some usernames formatting issues (https://github.com/eramdam/BetterTweetDeck/pull/593 @hiroto7)
- Localization updates (https://github.com/eramdam/BetterTweetDeck/pull/582)
- Fix an issue where the modern overlay color change was triggered when browsing a profile inside the modal (https://github.com/eramdam/BetterTweetDeck/pull/601 @hiroto7 )
- Fixes tooling issues for Microsoft Edge

## 4.1.2

Commit: [70c5569a71c0e51fa0ef52184c6ef4d9a67f7fd1](https://github.com/eramdam/BetterTweetDeck/commit/70c5569a71c0e51fa0ef52184c6ef4d9a67f7fd1)  
Date: 2021-05-25

## 4.2.0

Commit: [345187dcf300086c8c7a3d939fc74f8f704b5f37](https://github.com/eramdam/BetterTweetDeck/commit/345187dcf300086c8c7a3d939fc74f8f704b5f37)  
Date: 2021-06-06

#### 🏳️‍⚧️ 🏳️‍🌈 Happy Pride Month! 🏳️‍🌈 🏳️‍⚧️

You can now change the logo displayed at the bottom left of TweetDeck and choose between 25 different variations!
![Screen Shot 2021-06-04 at 12 54 46 AM](https://user-images.githubusercontent.com/1409924/120766932-8e52d680-c4cf-11eb-8c7c-19c97d401a2e.png)

#### Other features

- You can add a "follow" action to tweets (thanks @hiroto7 https://github.com/eramdam/BetterTweetDeck/pull/605)
- You can show a specific badge for mutuals (people you follow and follow you) https://github.com/eramdam/BetterTweetDeck/pull/624

#### Bugfixes

- Fix a bug where typing ASCII style emoticons was triggering a weird behavior with the emoji completion (Fixes https://github.com/eramdam/BetterTweetDeck/issues/608)
- Fix a bug where BTD would unmount all instances of a given card accross multiple column when one instance would get out of the viewport
- Dynamically remove/add the context menu item without needing to relaunch the browser when changing the settings (Fixes https://github.com/eramdam/BetterTweetDeck/issues/607)
- Prevent most occurrences of "jumping around" when scrolling in columns with cards rendering enabled by specifying a minimum height for different kinds of cards ahead of time
  - Also make sure to load cards in replies of a given tweet

⚠️ **For Firefox users only** ⚠️

The `strict_min_version` of BTD is now **84.0**. Any version lower than that will NOT be supported. The value was kept at 52.0 due to an oversight and I will try to update it regularly.

## 4.2.1

Commit: [e608eae3def96886050d8db3d965f98d83b0c023](https://github.com/eramdam/BetterTweetDeck/commit/e608eae3def96886050d8db3d965f98d83b0c023)  
Date: 2021-06-07
This is a hotfix update after [4.2.0](https://github.com/eramdam/BetterTweetDeck/releases/tag/4.2.0)

### Fixes

- The accent color setting should work again
- The avatar shape setting should work again
- The small composer button setting should work again
- More small fixes around link previews ("cards")

## 4.3.0

Commit: [2880aa04ed7c585c56294195c71300f8bf15383d](https://github.com/eramdam/BetterTweetDeck/commit/2880aa04ed7c585c56294195c71300f8bf15383d)  
Date: 2021-07-05

### Features

- Add a setting to show the account's avatar on top of columns (https://github.com/eramdam/BetterTweetDeck/issues/359)
- Add a setting to change the mutual badge to a double arrow instead of a heart
- Add a setting to add a "Clear all columns" button in the sidebar (https://github.com/eramdam/BetterTweetDeck/issues/471)
- Add a setting that requires all images to have a description before tweeting (https://github.com/eramdam/BetterTweetDeck/issues/530)
- Add a setting to automatically detect content warnings in tweets and show a UI to expand/collapse the tweets' content (https://github.com/eramdam/BetterTweetDeck/pull/639 https://github.com/eramdam/BetterTweetDeck/pull/483) (thx to @pixeldesu for the initial implementation!)

### Improvements

- The extension now uses a non persistent background page. This shouldn't affect functionality but will allow the browser to unload Better TweetDeck's background page when it's un-used for a bit.
- The settings button is now hidden on collapsed columns (https://github.com/eramdam/BetterTweetDeck/issues/630)
- Fix a bug that could occur when closing the tweet composer while having the gif picker opened (https://github.com/eramdam/BetterTweetDeck/issues/619)
- Add a setting to also hide unread DMs in addition to read DMs

### Bugfixes

- More fixes around link previews in columns

## 4.3.1

Commit: [ffc4d015dc3177cd02ee7acd86f9516c750ef213](https://github.com/eramdam/BetterTweetDeck/commit/ffc4d015dc3177cd02ee7acd86f9516c750ef213)  
Date: 2021-07-06
This is a hotfix of [4.3.0](https://github.com/eramdam/BetterTweetDeck/releases/tag/4.3.0), check that release for the new features/changes.

### Bugfixes

- Revert back to using a persistent background page for the time being. **This should fix issues around the "Share on TweetDeck" contextual menu item**

## 4.3.2

Commit: [2f663524c8e62ca260d2217f3c4e615b20a3fc0a](https://github.com/eramdam/BetterTweetDeck/commit/2f663524c8e62ca260d2217f3c4e615b20a3fc0a)  
Date: 2021-07-12

### Bugfixes

- The "share on TweetDeck" contextual menu item should work reliably now. You might have to restart your brower after the update to make sure everything sorts itself out
- The logic of the mandatory alt on images should be more reliable now (https://github.com/eramdam/BetterTweetDeck/issues/645)
- The accent color should be applied to the "Show more" links in TweetDeck's UI (https://github.com/eramdam/BetterTweetDeck/issues/646)
- The "Clear all" button should properly handle the case where a single column cannot be cleared.

### Improvements

- Some adjustements have been made to the "column navigator" (sidebar) part of the UI as to better accomodate the "Clear all" button.
- Both the "Clear all" and "Clear" buttons on column can now turn into a "Reload" button when holding the Shift button
  ![Screen Recording 2021-07-12 at 1 41 52 PM](https://user-images.githubusercontent.com/1409924/125353361-4d907d80-e317-11eb-960f-67c787d18309.gif)

## 4.4.0

Commit: [9a191bc035e5bc596f67b6d283d185283b8afb56](https://github.com/eramdam/BetterTweetDeck/commit/9a191bc035e5bc596f67b6d283d185283b8afb56)  
Date: 2021-07-28

### Features

Thanks to the recent introduction of [conversation control on already posted tweets](https://twitter.com/TwitterSafety/status/1415025551773892608), Better TweetDeck can now use that to set conversation control on tweets.
![image](https://user-images.githubusercontent.com/1409924/126888397-e850bd1a-e337-4116-81fe-750ae1c1509c.png)

### Improvements

- BTD should be marked as compatible with Firefox ESR (78 as the time of writing)
- This release adds a failsafe to prevent BTD from accidentally breaking stuff on TweetDeck Preview.
- The "show tweet cards inside columns" feature now uses a more recent way of displaying those cards, resulting in much less memory usage and faster loading times overall. This should also fix all the issues around the scroll "jumping around" issues when those cards were loading.
- I also did a bunch of maintenance/performance stuff, nothing should change functionality-wise!

### Bugfixes

- HTML entities should properly be converted when using the "Re-draft" menu item (see https://github.com/eramdam/BetterTweetDeck/issues/658)

## 4.4.1

Commit: [fc568341cd120635603bb705930e97960acf147b](https://github.com/eramdam/BetterTweetDeck/commit/fc568341cd120635603bb705930e97960acf147b)  
Date: 2021-09-27

- Updates to the German, Japanese and Brazilian Portuguese translations
- Add a regex filter for display names (https://github.com/eramdam/BetterTweetDeck/issues/676)
- By default the image description requirement setting **will not** apply to the DM composer. You can enable it there with a new setting now (https://github.com/eramdam/BetterTweetDeck/issues/666)
- The emoji composer, completion, and replacement in tweets now supports [Unicode 13.1](https://emojipedia.org/emoji-13.1/) so emoji like 😵‍💫🥲 can be inserted and will be displayed properly

## 4.4.2

Commit: [435cbb33bfcbc2c57f774a5267e51c75a120736e](https://github.com/eramdam/BetterTweetDeck/commit/435cbb33bfcbc2c57f774a5267e51c75a120736e)  
Date: 2021-10-04

### What's Changed

- Changed links in contributors list from API responses to GitHub profiles by @Jaid in https://github.com/eramdam/BetterTweetDeck/pull/680
- New Crowdin updates by @eramdam in https://github.com/eramdam/BetterTweetDeck/pull/681
- The settings modal should scale better on smaller displays
- Safari 15 only: the Safari's tab color should be more consistent with the actual background of the TweetDeck theme.

### New Contributors

- @Jaid made their first contribution in https://github.com/eramdam/BetterTweetDeck/pull/680

**Full Changelog**: https://github.com/eramdam/BetterTweetDeck/compare/4.4.1...4.4.2

## 4.4.3

Commit: [506aadbcdf2472552d47acaebf652af50ba73af3](https://github.com/eramdam/BetterTweetDeck/commit/506aadbcdf2472552d47acaebf652af50ba73af3)  
Date: 2021-10-20

- The `Display name (regular expression)` filter should work properly now
- More types of "cards" should be displayed (fixes https://github.com/eramdam/BetterTweetDeck/issues/686)

## 4.4.4

Commit: [3b65cf7e1fd32b4e0081060ebd37aec4111abff6](https://github.com/eramdam/BetterTweetDeck/commit/3b65cf7e1fd32b4e0081060ebd37aec4111abff6)  
Date: 2021-10-22

- Fixes other regex filters to be case-insensitive

## 4.5.0

Commit: [b061c3a5ce1cc2a9d600ee93f3b94ea6b3f3f342](https://github.com/eramdam/BetterTweetDeck/commit/b061c3a5ce1cc2a9d600ee93f3b94ea6b3f3f342)  
Date: 2021-11-01

### New

- You can now choose to display "profile labels" when they're available

![Screen Shot 2021-10-31 at 1 10 13 AM](https://user-images.githubusercontent.com/1409924/139574034-01ec5010-9432-4fcf-a2ab-e52d529a1ce6.png)

- You can enable a setting to let Better TweetDeck try to detect users' pronouns from their biography/location. If you see a false positive/detection error please let me know on [@Eramdam](https://twitter.com/Eramdam) or [@BetterTDeck](https://twitter.com/BetterTDeck)

![Screen Shot 2021-10-31 at 1 11 46 AM](https://user-images.githubusercontent.com/1409924/139574065-d710c598-381e-4285-9c3e-68fe6e8b68d9.png)

Both of these new settings can be found in the "Tweet content" section of the settings!

### Changes / Bugfixes

- Better TweetDeck now has its own custom banners instead of relying on TweetDeck's own banners. They look prettier and should prevent confusion/weird issues with TweetDeck's own system

![image](https://user-images.githubusercontent.com/1409924/139723327-aacd7dfb-7086-4d26-bbe2-f31ab17f1a55.png)

- The content warning detection feature will show the CW/CN/TN acronym to make it clearer why a tweet is being collapsed

![Screen Shot 2021-10-31 at 1 15 19 AM](https://user-images.githubusercontent.com/1409924/139574193-775eac97-8e9e-4453-abd1-a5d3a0173a7a.png)

- Click events inside cards should be properly handled:

https://user-images.githubusercontent.com/1409924/139724822-36ccad02-322c-4ebd-b8fd-d2d437c3204f.mov

## 4.5.2

Commit: [5c8656089269c5a806a159f27431802550aabc31](https://github.com/eramdam/BetterTweetDeck/commit/5c8656089269c5a806a159f27431802550aabc31)  
Date: 2021-11-06

- The mute and block actions on tweets will now show a confirmation pop-up (fixes https://github.com/eramdam/BetterTweetDeck/issues/695)
- Better TweetDeck will try to parse tweets' timestamps down to millisecond precision (thanks to @key-moon for the base implementation in https://github.com/eramdam/BetterTweetDeck/pull/367)
- Native videos should take the entirety of available space when opened in fullscreen (fixes https://github.com/eramdam/BetterTweetDeck/issues/430)
- Better TweetDeck now uses an aggregate of both [pronoun.is](http://pronoun.is/all-pronouns) and [pronouns.page](https://en.pronouns.page/pronouns) so it should try to match more neopronouns
- Pronoun matching is improved in some cases
  - Support for inverted object/subject pairs like `her/she`
  - Fixes around matching pronouns between non-word characters
  - Lots of parsing fixes
  - Tries to parse `pronouns: any` and `any pronouns` (fixes https://github.com/eramdam/BetterTweetDeck/issues/697)
- The verified badge should properly show up on follower notifications
- Better TweetDeck will not try to render "carousels" in tweets automatically anymore (Fixes https://github.com/eramdam/BetterTweetDeck/issues/702)
- The content warning detection will try to match new patterns for content warnings:
  - `[food]`
  - `tw/food`

## 4.5.3

Commit: [b085983dd855fe114452c540886b88a2fcb23693](https://github.com/eramdam/BetterTweetDeck/commit/b085983dd855fe114452c540886b88a2fcb23693)  
Date: 2021-11-14

- Vertical videos shouldn't be cut off any more
- Alt text on images should be kept when using the Re-draft feature
- An additional (opt-out) setting has been added to control the confirmation showing up when blocking/muting users from tweet actions
- Additional actions (block, mute, download, copy links, follow) should show up in fullscreen image view

**Full Changelog**: https://github.com/eramdam/BetterTweetDeck/compare/4.5.2...4.5.3

## 4.5.4

Commit: [a77b3654600b877cc51a575338409cedd889c092](https://github.com/eramdam/BetterTweetDeck/commit/a77b3654600b877cc51a575338409cedd889c092)  
Date: 2021-11-16

- The mutuals badge on avatars should show more reliably
- Fixes around pronouns matching
- Fixes around content warning matching
- The confirmation setting should actually work now
- The videos should be bigger **only** with the "Show images à la Twitter Web" setting

## 4.6.0

Commit: [78d20710db214145b86c0d7ab86c0a90e115c92b](https://github.com/eramdam/BetterTweetDeck/commit/78d20710db214145b86c0d7ab86c0a90e115c92b)  
Date: 2021-11-29

- Better TweetDeck will try to enable sending images/videos with quote tweets.
- More fixes around pronouns matching
- Fixes in the CW detection logic
- Fix the bug where the "copy links" action would output "[object Object]"
- Tweak the timing of the logic that tries to re-add alt text on images when using the re-draft feature
- Show a notification when the browser updates the extension and TweetDeck tabs are open, making sure the user reloads to prevent issues
- Avoid showing the emoji completion when typing a date in the format `13:37`
- The emoji and gif buttons are now injected into the inline reply composer as well
- Add a setting to auto-mute users who use the "NFT avatar" (hexagon-shaped avatars) integration that Twitter is working on releasing

## 4.6.1

Commit: [91323b5ded26d2ee0af9257c655d37802fbbe6af](https://github.com/eramdam/BetterTweetDeck/commit/91323b5ded26d2ee0af9257c655d37802fbbe6af)  
Date: 2021-11-30
This is a hotfix on top of [4.6.0](https://github.com/eramdam/BetterTweetDeck/releases/tag/4.6.0), see that release for most of the interesting stuff. Meanwhile, 4.6.1 fixes the following:

- Fixes styling issues around the accent color feature
- Properly hide images in the `Large` setting with the CW detection feature

## 4.6.2

Commit: [4d980f4d3088cd6cf10118feb110c14c50ef695b](https://github.com/eramdam/BetterTweetDeck/commit/4d980f4d3088cd6cf10118feb110c14c50ef695b)  
Date: 2021-11-30
This is a hotfix on top of [4.6.0](https://github.com/eramdam/BetterTweetDeck/releases/tag/4.6.0), see that release for most of the interesting stuff. Meanwhile, 4.6.2 fixes the following:

- Fixes styling issues around the accent color feature
- Properly hide images in the `Large` setting with the CW detection feature
- Properly handle the transition between inline tweet composer and the pop-out one

## 4.6.3

Commit: [e3e7df456112e9e871fc26c6ad5e93b6386b4ca1](https://github.com/eramdam/BetterTweetDeck/commit/e3e7df456112e9e871fc26c6ad5e93b6386b4ca1)  
Date: 2021-12-02

- Fixes an issue causing the emoji/gif picker buttons to not show up if the tweet composer was set to `Stay open`
- Allow insertion of an emoji after another emoji when using the completion with `:shortcode:`

## 4.7.0

Commit: [0dfc8613b0598165c84cc834fca429320ac5316b](https://github.com/eramdam/BetterTweetDeck/commit/0dfc8613b0598165c84cc834fca429320ac5316b)  
Date: 2022-01-04

### What's Changed

- Add Japanese translations for settings_mute_nfts_accounts by @Lycolia in https://github.com/eramdam/BetterTweetDeck/pull/739
- Add UI to list and export users caught by mutes (see details below) by @eramdam in https://github.com/eramdam/BetterTweetDeck/pull/743
- Fix download-media action in Activity by @yaa in https://github.com/eramdam/BetterTweetDeck/pull/749
- Fixes around solo pronoun matching when surrounded by hyphens
- Keyword-less content warning matching is more strict
- The mutual badge will now take precedence over the verified one when applicable (https://github.com/eramdam/BetterTweetDeck/issues/740)
- Fix the inline reply box being hidden when a tweet with a content warning is collapsed
- Fix the link previews being bigger than regular image/video previews inside a column with the "small" media preview size (https://github.com/eramdam/BetterTweetDeck/issues/742)

### New Contributors

- @Lycolia made their first contribution in https://github.com/eramdam/BetterTweetDeck/pull/739
- @yaa made their first contribution in https://github.com/eramdam/BetterTweetDeck/pull/749

### "Mute catches" modal

Starting with this release, Better TweetDeck will keep track of users whose tweets are hidden by the different mutes you set up.
The list of users is accessible by going to the Settings -> Mute pane of TweetDeck.
Once you're there, you will be able to review, sort, and export those users in different formats, which can be useful for making sure your mutes aren't too "greedy" or to get a list of users to block/

![CleanShot 2022-01-01 at 15 13 38](https://user-images.githubusercontent.com/1409924/147862059-4343a46f-7667-473c-8512-7313a8547200.png)
![image](https://user-images.githubusercontent.com/1409924/147862067-416852b7-2f1c-483a-bbed-389972881765.png)

## 4.7.1

Commit: [8c08c751458bd9ff2d0760847716b81903ab2a58](https://github.com/eramdam/BetterTweetDeck/commit/8c08c751458bd9ff2d0760847716b81903ab2a58)  
Date: 2022-01-09
This is a hotfix update on top of 4.7.0 https://github.com/eramdam/BetterTweetDeck/releases/tag/4.7.0

- Fixes around the content warning detection
- Fix links not appearing in some cases in mentions
- (Hopefully) fix a random issue around notifications not loading in some cases

## 4.7.2

Commit: [562a2f1b159c0d7f8e7eac4163759c60fb1e2158](https://github.com/eramdam/BetterTweetDeck/commit/562a2f1b159c0d7f8e7eac4163759c60fb1e2158)  
Date: 2022-01-20
This is a patch update on top of [4.7.1](https://github.com/eramdam/BetterTweetDeck/releases/tag/4.7.1) and [4.7.0](https://github.com/eramdam/BetterTweetDeck/releases/tag/4.7.0)

- Fix an issue around the mute logging system that could falsely flag accounts in some cases
- Fix the issue where the composer buttons would disappear when hitting the Escape key while having the `Stay open` checkbox checked (https://github.com/eramdam/BetterTweetDeck/issues/757)
- Fix a bug with CW detection in mentions/notifications
- (Hopefully) fix an issue preventing BTD from loading in some cases

## 4.7.3

Commit: [79d0e0038ccef9fdf8a142e434e1636b534ea41e](https://github.com/eramdam/BetterTweetDeck/commit/79d0e0038ccef9fdf8a142e434e1636b534ea41e)  
Date: 2022-01-28
This is a patch update on top of [4.7.2](https://github.com/eramdam/BetterTweetDeck/releases/tag/4.7.2), [4.7.1](https://github.com/eramdam/BetterTweetDeck/releases/tag/4.7.1), and [4.7.0](https://github.com/eramdam/BetterTweetDeck/releases/tag/4.7.0)

### New features

- Support the new Twitter media warning system in columns, with an **opt-out** setting in `Tweet content`
  ![CleanShot 2022-01-28 at 21 19 43](https://user-images.githubusercontent.com/1409924/151648562-6a0319da-ded2-4f8f-b979-14eaebf3266c.png)

### Fixes / Improvements

- Add French translation for the settings
- Fix an issue where profile labels wouldn't have an icon showing up
- Hopefully fix an issue where the new version banner would appear even after being dismissed

## 4.8.0

Commit: [069a1f9435092dcd94fb7c10ff8e073e84315843](https://github.com/eramdam/BetterTweetDeck/commit/069a1f9435092dcd94fb7c10ff8e073e84315843)  
Date: 2022-02-21

## 4.8.1

Commit: [1d9f19b7126cb4436e98845954202810fa6c477e](https://github.com/eramdam/BetterTweetDeck/commit/1d9f19b7126cb4436e98845954202810fa6c477e)  
Date: 2022-02-21

### New

- Better TweetDeck will warn you before re-drafting a tweet. You can disable this behavior in the `Tweet actions` page of the settings.
- Added a new mute filter "Tweets with more than X hashtags" (https://github.com/eramdam/BetterTweetDeck/issues/777)
- Added settings to configure what kind of media warnings you want to consider (https://github.com/eramdam/BetterTweetDeck/issues/776)
- **Important change to the CW detection feature**: the feature will NOT try to detect patterns like `[food]` anymore. Instead, a new setting has been added in which you can specify what keywords should be detected in this pattern.
- Added a feature to allow the collapsing of tweets that contain a specific keyword (useful for spoilers!) (https://github.com/eramdam/BetterTweetDeck/issues/720)

### Improvements

- The GIF picker now features infinite scrolling and has improved performance
- Mute filters that are user-specific (like the NƒT avatar one) should properly consider retweets (https://github.com/eramdam/BetterTweetDeck/issues/780)
- The composer textarea has been made slightly bigger

### Fixes

- Fix a wording bug with the media warnings
- Small fixes around pronouns parsing
- Fix a bug where the "all images require a description" setting would not work properly when quote tweeting from an account that requires confirmation (https://github.com/eramdam/BetterTweetDeck/issues/773)

### Others

- Bump node-fetch from 2.6.6 to 2.6.7 by @dependabot in https://github.com/eramdam/BetterTweetDeck/pull/768
- Bump nanoid from 3.1.30 to 3.2.0 by @dependabot in https://github.com/eramdam/BetterTweetDeck/pull/767
- Bump follow-redirects from 1.14.5 to 1.14.8 by @dependabot in https://github.com/eramdam/BetterTweetDeck/pull/779
- Replace deprecated String.prototype.substr() by @CommanderRoot in https://github.com/eramdam/BetterTweetDeck/pull/787
- Bump url-parse from 1.5.3 to 1.5.7 by @dependabot in https://github.com/eramdam/BetterTweetDeck/pull/786

### New Contributors

- @CommanderRoot made their first contribution in https://github.com/eramdam/BetterTweetDeck/pull/787

**Full Changelog**: https://github.com/eramdam/BetterTweetDeck/compare/4.7.3...4.8.1

## 4.8.2

Commit: [e8411e293a60633a319e465d5d01ed8532436102](https://github.com/eramdam/BetterTweetDeck/commit/e8411e293a60633a319e465d5d01ed8532436102)  
Date: 2022-02-21
This is a hotfix release on top of [4.8.1](https://github.com/eramdam/BetterTweetDeck/releases/tag/4.8.1)

- Fixes the "more than X hashtags" filter causing notifications not to be displayed in columns

**Full Changelog**: https://github.com/eramdam/BetterTweetDeck/compare/4.8.1...4.8.2

## 4.8.3

Commit: [b3e9cf9df9af9d6b32561453b4e60f9a441d369b](https://github.com/eramdam/BetterTweetDeck/commit/b3e9cf9df9af9d6b32561453b4e60f9a441d369b)  
Date: 2022-03-06
This is a hotfix release on top of [4.8.1](https://github.com/eramdam/BetterTweetDeck/releases/tag/4.8.1) and [4.8.2](https://github.com/eramdam/BetterTweetDeck/releases/tag/4.8.2)

- Fixes a layout bug in the GIF picker when scrollbars are visible

## 4.8.4

Commit: [9baf459e03243b6f27d8c5c4ba33f822c81f57d7](https://github.com/eramdam/BetterTweetDeck/commit/9baf459e03243b6f27d8c5c4ba33f822c81f57d7)  
Date: 2022-03-06
This is a hotfix release on top of [4.8.1](https://github.com/eramdam/BetterTweetDeck/releases/tag/4.8.1), [4.8.2](https://github.com/eramdam/BetterTweetDeck/releases/tag/4.8.2) and [4.8.3](https://github.com/eramdam/BetterTweetDeck/releases/tag/4.8.3)

- Fixes a regression when using a custom accent color with the light theme

## 4.8.5

Commit: [2f1bfdc175e671cd9315dd8e28b80eb48c000bc9](https://github.com/eramdam/BetterTweetDeck/commit/2f1bfdc175e671cd9315dd8e28b80eb48c000bc9)  
Date: 2022-03-21

- The emoji picker, emoji completion, and emoji display now supports [Twemoji 14](https://emojipedia.org/twitter/twemoji-14.0/new/)
- The emoji completion and emoji picker search should be improved
- The "rainbow" item in the Accent Color setting should more reliably show a color picker to make it more obvious that it is a custom color setting 😅
- Add a way to force dismiss the update banner in the settings in case it keeps showing up on every load of TweetDeck. You can find it under the "Support" section of the settings.

## 4.8.6

Commit: [bb558263188955a304412bcbf4435824103a139d](https://github.com/eramdam/BetterTweetDeck/commit/bb558263188955a304412bcbf4435824103a139d)  
Date: 2022-04-08

- Added a setting (opt-in) to hide pronouns on your own accounts
- Fixes around the custom accent color feature
- Fixes around the profile label feature

## 4.8.7

Commit: [0aff468697d2d3e7c4c029ef6fc4f5019f3731bc](https://github.com/eramdam/BetterTweetDeck/commit/0aff468697d2d3e7c4c029ef6fc4f5019f3731bc)  
Date: 2022-05-09

- Hopefully fix the issue some users were seeing where the extension doesn't show up in Safari
- Fixes the profile badge display in some cases

## 4.9.0

Commit: [c58a9f5e6c66b3c3d9754a7a88f3108e84c663d0](https://github.com/eramdam/BetterTweetDeck/commit/c58a9f5e6c66b3c3d9754a7a88f3108e84c663d0)  
Date: 2022-11-13

### Important announcement

This release probably will be the very last one for the time being.
I decided to put BTD in a "feature freeze" state and will only address critical bug fixes should they arise until the eventual rollout of the new TweetDeck that will break BTD entirely. Please read the following issue for more details https://github.com/eramdam/BetterTweetDeck/issues/848.

Note that this decision was taken before the Elon Musk takeover of Twitter, but this situation confirms my intention of not wanting much to do with TweetDeck until the new version releases, or it disappears/breaks completely. Thank you all for using and supporting the project, and thank you to the Tweeps who allowed it to stay alive and contributed/worked on TweetDeck. 🫡

[See also thread on Twitter about this release](https://twitter.com/BetterTDeck/status/1591747755864907777)

If you want to stay tuned about my future side projects that may or may not include a 3rd party Twitter(+Mastodon?) web client:

- https://twitter.com/Eramdam
- https://octodon.social/@eramdam
- https://cohost.org/eramdam

### Feature highlight

Add a setting to show a badge for accounts that are ["Blue verified"](https://help.twitter.com/en/managing-your-account/about-twitter-verified-accounts). **This setting is opt-in**. Who knows if this whole thing will still be up by the time this update reaches you? Oh well!

![CleanShot 2022-11-12 at 13 59 14](https://user-images.githubusercontent.com/1409924/201475115-71e23d45-63e7-416d-a993-ee5ec22aba1b.png)

Thanks to:

- @luciascarlet for the [nerd checkmark](https://twitter.com/shadowbIood/status/1590462560515473409)
- @JoshQuake for the [clown checkmark](https://twitter.com/JoshQuake/status/1590634793393614849)

### Other changes

- Add settings to highlight/mute tweets made in a Twitter Circle (https://github.com/eramdam/BetterTweetDeck/pull/853 thanks @Vogeslu)
- Migrate the Chrome extension to Manifest V3. This shouldn't break or change anything, but Google will stop accepting Manifest V2 extensions soon, so this was needed. I'll be doing a similar update when Mozilla/Apple starts accepting Manifest V3 extensions.
- Made tooling optimizations to have smaller files so Mozilla's validation system wouldn't reject the extension because of its size.
- More fixes around content warnings detection.
- Fixes around the "show link preview" setting.
- Mark the extension as requiring Safari 15.4 at a minimum due to the switch to Event Pages.

[^1]: All of that assumes that Twitter even stays around long enough 🙃 "Thanks" Elon Musk.

## 4.10

Commit: [ed15e084c55c34f239029bff72565e76b79c9b27](https://github.com/eramdam/BetterTweetDeck/commit/ed15e084c55c34f239029bff72565e76b79c9b27)  
Date: 2023-02-06

## 4.10.0

Commit: [e108d35a704fd3c3981b0994a33d5dfc451102d9](https://github.com/eramdam/BetterTweetDeck/commit/e108d35a704fd3c3981b0994a33d5dfc451102d9)  
Date: 2023-02-06

### Important

Since the [last release back in November of 2022](https://github.com/eramdam/BetterTweetDeck/releases/tag/4.9.0) it is clear that Twitter [doesn't](https://www.engadget.com/twitter-new-developer-terms-ban-third-party-clients-211247096.html) [give a shit](https://twitter.com/TwitterDev/status/1621026986784337922) about 3rd party developers and apps so I will not be spending any more time and energy developing on top of Twitter's platform.

Thank you for using and supporting Better TweetDeck over the years, it was a wild ride, I wish it didn't end this way but it is what it is.
🫡

If you want to stay tuned about my future side projects that may or may not include a 3rd party Mastodon web client:

- https://twitter.com/Eramdam
- https://octodon.social/@eramdam
- https://cohost.org/eramdam

## 4.10.1

Commit: [e108d35a704fd3c3981b0994a33d5dfc451102d9](https://github.com/eramdam/BetterTweetDeck/commit/e108d35a704fd3c3981b0994a33d5dfc451102d9)  
Date: 2023-02-06

- Fixes the GIF search on Chrome

### Important

Since the [last release back in November of 2022](https://github.com/eramdam/BetterTweetDeck/releases/tag/4.9.0) it is clear that Twitter [doesn't](https://www.engadget.com/twitter-new-developer-terms-ban-third-party-clients-211247096.html) [give a shit](https://twitter.com/TwitterDev/status/1621026986784337922) about 3rd party developers and apps so I will not be spending any more time and energy developing on top of Twitter's platform.

Thank you for using and supporting Better TweetDeck over the years, it was a wild ride, I wish it didn't end this way but it is what it is.
🫡

If you want to stay tuned about my future side projects that may or may not include a 3rd party Twitter(+Mastodon?) web client:

- https://twitter.com/Eramdam
- https://octodon.social/@eramdam
- https://cohost.org/eramdam

## 4.11.0

Commit: [73dba3143056211110b3e1e3ff1552777bdbcd48](https://github.com/eramdam/BetterTweetDeck/commit/73dba3143056211110b3e1e3ff1552777bdbcd48)  
Date: 2023-05-19
I know I said the last update was the last one, but I felt like the changes Twitter made over the Verified status warranted at the very least that BTD displayed those badges properly to avoid confusion.

- This release shows Business and Government verified badges independently from the Blue badges. It also fixes a bug where those accounts would show up with the Blue badge despite not being actually subscribed to Blue(? I don't think? Twitter's API says they're "Blue verified" regardless so who knows 🤷 )
- Adds a "Mute accounts subscribed to Twitter Blue" option, you can find it by going to the ⚙️ icon -> Mute

## 4.11.1

Commit: [6520035be1a503de38049ba0457283a02bb8b275](https://github.com/eramdam/BetterTweetDeck/commit/6520035be1a503de38049ba0457283a02bb8b275)  
Date: 2023-07-03

- Properly hide the "Try new TweetDeck Preview" button as of July 3rd 2023
- Ensure the rollback dialog when on New TweetDeck properly shows up as of July 3rd 2023
