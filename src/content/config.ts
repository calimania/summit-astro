import { markketplace } from "../config";
import { defineCollection } from "astro:content";

import { strapiLoader } from "../markket";

const pages = defineCollection({
  loader: strapiLoader({
    contentType: "page",
    filter: `filters[store][slug][$eq]=${markketplace.store_slug}`,
    populate: 'SEO.socialImage,albums,albums.cover'
  }),
});


const albums = defineCollection({
  loader: strapiLoader({
    contentType: "album",
    filter: `filters[store][slug][$eq]=${markketplace.store_slug}`,
    populate: 'SEO.socialImage,tracks,tracks.media,tracks.urls,SEO,tracks.SEO,tracks.SEO.socialImage,cover'
  }),
});


const store = defineCollection({
  loader: strapiLoader({
    contentType: "store",
    filter: `filters[slug][$eq]=${markketplace.store_slug}`,
    populate: 'SEO.socialImage,Logo,URLS,Favicon,Cover'
  }),
});

const products = defineCollection({
  loader: strapiLoader({
    contentType: "product",
    filter: `filters[stores][slug][$eq]=${markketplace.store_slug}`,
    populate: 'SEO.socialImage,Thumbnail,Slides,PRICES'
  }),
});

const posts = defineCollection({
  loader: strapiLoader({
    contentType: "article",
    filter: `filters[store][slug][$eq]=${markketplace.store_slug}`,
    populate: 'SEO.socialImage,Tags,store,cover',
    paginate: {
      limit: 100,
    }
  }),
});

const events = defineCollection({
  loader: strapiLoader({
    contentType: "event",
    filter: `filters[stores][slug][$eq]=${markketplace.store_slug}`,
    populate: 'SEO,SEO.socialImage,Tag,Thumbnail,Slides,stores'
  }),
});

export const collections = { posts, pages, products, events , store, albums  };
