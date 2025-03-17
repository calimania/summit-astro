## Astro Site for Markkëts

[de.markket.place] is an open source platform for simple websites, ecommerce & newsletters

This template allows you to build a static site, that is easy to deploy for free

Easily deploy new versions after tweaking your content in the dashboard, rollback and manage your online presence like a pro

Use this template to get started

The template will fail to deploy if there are build errors, so you can make any changes with confidence

Easily run in your computer, to preview changes & create new extensions

[view demo](http://summit.caliman.org/)

Sign up to [de.markket.place](https://de.markket.place/auth/register) or

[self-host the markket strapi api](https://github.com/calimania/markketplace)

&

[self-host the markket next api](https://github.com/calimania/markketplace-next)

# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Environment Variables


`env.d.ts`

```typescript
interface ImportMetaEnv {
  /** Strapi REST Endpoint  */
  readonly STRAPI_URL: string;
  /** Markket API URL for REST requests */
  readonly MARKKET_URL: string;
  /** For external links to a markketplace instance  | for unsupported features */
  readonly MARKKETPLACE_URL: string;
  /** Identifier to render all the store content during build */
  readonly STORE_SLUG: string;
}
```

To access the values on your code, use the `{ markketplace }` import at `src/config`

``` typescript
export const markketplace = {
  api: import.meta.env.STRAPI_URL || 'https://api.markket.place',
  markket: import.meta.env.MARKKET_URL || 'https://de.markket.place',
  store_slug: import.meta.env.STORE_SLUG || 'dev',
  markketplace: import.meta.env.MARKKETPLACE_URL || 'https://dev.markket.place',
  posthog_id: import.meta.env.POSTHOG_KEY || '',
};
```

## Additional imports

# @tabler/icons-react

5880 pixel-perfect icons for web design
Free and open source icons designed to make your website or app attractive, visually consistent and simply beautiful.

[icon library](https://tabler.io/icons)
