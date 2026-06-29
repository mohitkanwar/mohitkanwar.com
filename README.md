# Using this

This document contains the important information on using this repo

## Starting the server

We use the following command : 
`hugo serve`

## Creating a new blog

We use the following command: 

`hugo new <blog-name>`

## Creating a new solution

`hugo new content --kind solution solutions/<title-of-solution>.md`

## Analytics

The site uses Google Analytics 4 for production visitor tracking.

Current stream:

```toml
[params.analytics]
  enabled = true
  google_analytics_measurement_id = "G-GS17GYSGLC"
```

The implementation respects browser Do Not Track by default and does not load during local development unless `load_in_development = true`.

## Ads

Blog articles support subtle Google AdSense placements at the article footer and in the sidebar. They are disabled until the AdSense publisher id and ad unit slot ids are added:

```toml
[params.ads]
  enabled = true
  adsense_client = "ca-pub-..."

[params.ads.slots.article_footer]
  slot = "..."

[params.ads.slots.sidebar]
  slot = "..."
```

Set `disableAds = true` in a page's front matter to suppress ads on a specific article.
