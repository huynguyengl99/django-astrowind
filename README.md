# 🚀 Django AstroWind

Fork from [Astrowind](https://github.com/onwidget/astrowind)

**Django AstroWind** is a free and open-source template to make your website using **[Astro 4.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)** + [Django headless CMS](https://github.com/huynguyengl99/django-headless-cms). Ready to start a new project and designed taking into account web best practices.

Everything of Astrowind plus:

- ✅ **Multi language** supports.
- ✅ **Switch language** supports.
- ✅ **Django headless CMS** integration.

<summary>Table of Contents</summary>

- [🚀 Django AstroWind](#-django-astrowind)
  - [Demo](#demo)
  - [Getting Started](#getting-started)
    - [Commands](#commands)
    - [Configuration](#configuration)
    - [Deploy](#deploy)
      - [Predeploy](#predeploy)
      - [Deploy to production (manual)](#deploy-to-production-manual)
      - [Deploy to Netlify](#deploy-to-netlify)
      - [Deploy to Vercel](#deploy-to-vercel)
  - [Frequently Asked Questions](#frequently-asked-questions)
  - [Contributing](#contributing)
  - [Acknowledgements](#acknowledgements)
  - [License](#license)

</details>

<br>

## Demo

https://django-astrowind.netlify.app/

## Getting Started

- If you haven't launched the `Django-headless-cms` backend yet, please refer to the [Introduction](https://django-headless-cms.readthedocs.io/en/latest/introduction.html) and follow the tutorials.

- Create a `.env` file from the [.env.TEMPLATE](.env.TEMPLATE) file, **then input your created CMS API key from your backend to VITE_CMS_API_KEY.**

> **_NOTE:_** VITE_CMS_API_KEY is required to fetch content, don't forget to get that one from backend.

- Install the required packages:

```bash
npm install
```

- Run the following command to sync api schema (located at [src/schemas/](./src/schemas/content.ts)), schema type (located at [src/types/](./src/types/content.ts)) and the content (located at [src/contents/auto-\*](./src/content/)):

```bash
npm run sync:all
```

- If you want to sync content only, run this command:

```bash
npm run sync:content
```

- Run the following command to start the server:

```bash
npm run dev
```

### Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run sync:content` | Sync your content from backend API (cache)         |
| `npm run sync:schema`  | Sync your schema from backend                      |
| `npm run sync:type`    | Sync your type with backend API                    |
| `npm run sync:all`     | Sync schema, type & content from backend API       |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run format`       | Format codes with Prettier                         |
| `npm run lint:eslint`  | Run Eslint                                         |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |

<br>

### Configuration

Basic configuration file: `./src/config.yaml`

```yaml
site:
  name: 'Example'
  site: 'https://example.com'
  base: '/' # Change this if you need to deploy to Github Pages, for example
  trailingSlash: ignore

  googleSiteVerificationId: false # Or some value,

apps:
  blog:
    isEnabled: true
    postsPerPage: 6

    post:
      isEnabled: true
      permalink: '/%slug%' # Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      robots:
        index: true

    list:
      isEnabled: true
      pathname: 'blog' # Blog main path, you can change this to "articles" (/articles)
      robots:
        index: true

    category:
      isEnabled: true
      pathname: 'blog/category' # Category main path /category/some-category, you can change this to "group" (/group/some-category)
      robots:
        index: true

    tag:
      isEnabled: true
      pathname: 'blog/tag' # Tag main path /tag/some-tag, you can change this to "topics" (/topics/some-category)
      robots:
        index: false

    isRelatedPostsEnabled: true
    relatedPostsCount: 4

analytics:
  vendors:
    googleAnalytics:
      id: null # or "G-XXXXXXXXXX"

ui:
  theme: 'system' # Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  tokens:
    default:
      fonts:
        sans: InterVariable
        serif: InterVariable
        heading: InterVariable
      colors:
        default: rgb(16 16 16)
        heading: rgb(0 0 0)
        muted: rgb(16 16 16 / 66%)
        bgPage: rgb(255 255 255)
        primary: rgb(1 97 239)
        secondary: rgb(1 84 207)
        accent: rgb(109 40 217)
    dark:
      fonts: {}
      colors:
        default: rgb(229 236 246)
        heading: rgb(247, 248, 248)
        muted: rgb(229 236 246 / 66%)
        bgPage: rgb(3 6 32)
        primary: rgb(1 97 239)
        secondary: rgb(1 84 207)
        accent: rgb(109 40 217)
```

Languages settings file located at [src/utils/languages.ts](./src/utils/languages.ts). Update your
`DEFAULT_LANG` and `LANGUAGE_MAP` to your desired target languages:

```javascript
// Update your default language target
export const DEFAULT_LANG = 'en';

// Uncomment the below to choose your desired languages

export const LANGUAGE_MAP = {
  en: 'English',
  // af: 'Afrikaans',
  ...
}
```

<br>

### Deploy

#### Predeploy

> **_NOTE:_** Make sure you have deployed your `Django-headless-cms` backend. Then, create a **CMS API key** and save it for your deployment. Next, update your backend server URL in the [Production settings](./src/settings/production.settings.ts).

#### Deploy to production (manual)

- Update your [.env](.env) file (or export the environment variables):

```text
VITE_CMS_API_KEY=your-production-key
VITE_CMS_API_URL=https://your-production.url
```

-You can create an optimized production build with:

```shell
VITE_APP_ENV=production npm run build
```

- Now, your website is ready to be deployed. All generated files are located at
  `dist` folder, which you can deploy the folder to any hosting service you
  prefer.

> **_NOTE:_** Deployment to Vercel has not yet been updated to include the ability
> to fetch content and cache it. If you have knowledge about this, please feel free to contribute. Thank you!

#### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/onwidget/astrowind)

When deploying to Netlify, don't forget to add `VITE_CMS_API_KEY` and `VITE_CMS_API_URL` to your environment
variables on the dashboard or use the CLI.

If you update the auto schema section in [src/content/config.ts](src/content/config.ts), don't forget to add or
update it in the [cache-django-astrowind Netlify plugin](plugins/cache-django-astrowind/index.js).

#### Deploy to Vercel

Clone this repository on own GitHub account and deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonwidget%2Fastrowind)

<br>

## Frequently Asked Questions

- Why?
-
-

<br>

## Contributing

If you have any idea, suggestions or find any bugs, feel free to open a discussion, an issue or create a pull request.
That would be very useful for all of us and we would be happy to listen and take action.

## Acknowledgements

Initially created by [onWidget](https://onwidget.com) and maintained by a community of [contributors](https://github.com/onwidget/astrowind/graphs/contributors). Fork and edited by [Huy Nguyen](https://github.com/huynguyengl99/)

## License

**Django AstroWind** is licensed under the MIT license — see the [LICENSE](./LICENSE.md) file for details.
