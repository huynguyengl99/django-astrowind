# 🚀 Django AstroWind

Fork from [Astrowind](https://github.com/onwidget/astrowind)

**Django AstroWind** is a free and open-source template to make your website using **[Astro 4.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)** + [Django headless CMS](https://github.com/huynguyengl99/django-headless-cms). Ready to start a new project and designed taking into account web best practices.

Everything of Astrowind plus:
- ✅ **Multi language** supports.
- ✅ **Switch language** supports.
- ✅ **Django headless CMS** integration.

<summary>Table of Contents</summary>

- [🚀 Django AstroWind](#-django-astrowind)
  - [Getting Started](#getting-started)
    - [Commands](#commands)
    - [Configuration](#configuration)
    - [Deploy](#deploy)
      - [Deploy to production (manual)](#deploy-to-production-manual)
      - [Deploy to Netlify](#deploy-to-netlify)
      - [Deploy to Vercel](#deploy-to-vercel)
  - [Frequently Asked Questions](#frequently-asked-questions)
  - [Contributing](#contributing)
  - [Acknowledgements](#acknowledgements)
  - [License](#license)

</details>

<br>
## Getting Started

- If you haven't launched the `Django-headless-cms` backend yet, please refer to the [Introduction](https://django-headless-cms.readthedocs.io/en/latest/introduction.html) and follow the tutorials.

- Create a `.env` file from the [.env.TEMPLATE](.env.TEMPLATE) file, then input your created CMS API key from your backend.

- Install the required packages:

```bash
npm install
```

- Run the following command to start the server:

```bash
npm run dev
```

### Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                             |
| :-------------------- | :------------------------------------------------- |
| `npm install`         | Installs dependencies                              |
| `npm run dev`         | Starts local dev server at `localhost:3000`        |
| `npm run build`       | Build your production site to `./dist/`            |
| `npm run preview`     | Preview your build locally, before deploying       |
| `npm run format`      | Format codes with Prettier                         |
| `npm run lint:eslint` | Run Eslint                                         |
| `npm run astro ...`   | Run CLI commands like `astro add`, `astro preview` |

<br>

### Configuration

Basic configuration file: `./src/config.yaml`

```yaml
site:
  name: 'Example'
  site: 'https://example.com'
  base: '/' # Change this if you need to deploy to Github Pages, for example
  trailingSlash: false # Generate permalinks with or without "/" at the end

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

<br>

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

#### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/onwidget/astrowind)

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
