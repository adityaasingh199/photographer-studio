# Keshav Photography Studio

This is the Sanity content studio for the photographer portfolio website. It manages the CMS content for the site, including gallery images, journal posts, testimonials, client galleries, and site-wide settings.

## Project purpose

The studio is used to manage:

- site settings and homepage hero content
- photo gallery entries
- client private galleries
- journal/blog posts
- press mentions and media logos
- testimonials

## Tech stack

- Sanity Studio
- React
- Vite-based Sanity build setup

## Local development

From the studio folder:

```bash
npm install
npm run dev
```

To build the studio:

```bash
npm run build
```

To start the production build locally:

```bash
npm run start
```

## Main schema types

The studio includes these document types:

- `siteSettings`
- `photo`
- `testimonial`
- `journalPost`
- `clientGallery`
- `pressMention`

## Notes

- The project is configured as a Sanity Studio under the `studio/` folder.
- The studio is set up to hide the singleton `siteSettings` from standard creation flows.
- Content is connected to the configured Sanity project and dataset defined in `sanity.config.js`.

## Useful commands

```bash
npm run dev
npm run build
npm run deploy
npm run deploy-graphql
```

## Important files

- `sanity.config.js` — Studio configuration
- `schemaTypes/` — content model definitions
- `structure.js` — custom navigation structure
- `static/` — static assets
