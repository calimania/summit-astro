import type { POST } from "astro/actions/runtime/route.js";

interface ImportMetaEnv {
  /** Strapi REST Endpoint  */
  readonly STRAPI_URL: string;
  /** Markket API URL for REST requests */
  readonly MARKKET_URL: string;
  /** For external links to a markketplace instance  | for unsupported features */
  readonly MARKKETPLACE_URL: string;
  /** Identifier to render all the store content during build */
  readonly STORE_SLUG: string;
  /** posthog api key  */
  readonly POSTHOG_KEY: string;
}
