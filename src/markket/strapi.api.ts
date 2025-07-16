import { markketplace } from "../config";

import {
  fetchStrapiContent,
  fetchStrapiSchema,
} from 'cafecito';

import type { StrapiQueryOptions } from 'cafecito';
import type { StrapiConfig } from 'cafecito';

const config: StrapiConfig = {
  store_slug: markketplace.store_slug,
  api_url: markketplace.api,
  sync_interval: 60000,
};

/**
 * Creates a Strapi content loader for Astro
 * @param contentType The Strapi content type to load
 * @param filter The filter to apply to the content &filters[store][id][$eq]=${STRAPI_STORE_ID}
 * @returns An Astro loader for the specified content type
 */
export function strapiLoader(query: StrapiQueryOptions) {

  return {
    name: `strapi-${query.contentType}`,
    schema: async () => await fetchStrapiSchema(query.contentType, config.api_url),

    async load({ store, logger, meta }) {
      const lastSynced = meta.get("lastSynced");
      if (lastSynced && Date.now() - Number(lastSynced) < config.sync_interval) {
        logger.info("Skipping sync");
        return;
      }

      const posts = await fetchStrapiContent(query, config);

      store.clear();
      posts.forEach((item: any) => store.set({ id: item.id, data: item }));
      meta.set("lastSynced", String(Date.now()));
    },
  };
}
