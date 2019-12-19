# nuxt-bio

> Small bio-esque site for presenting links built with Nuxt.js

## PWA settings
Change the values with the comment `// Change me` in the following files:

- `/config/env.js` - Change this to your API URL
- `/config/manifest.js` - Change `name` and `short_name` for your PWA
- `/config/meta.js` - Change the values to reflect how the meta-tags will look like. This also sorts out structured data for your PWA. Delete the `ogImage` if you don't have/want one.

## Netlify
You can easily put this on Netlify. Just add the `links` environment variable to your deploy settings and `@nuxtjs/dotenv` will automatically pick it up.

## Changelog
**1.2.0**:
- Updated the project to use Vuex
- Moved config files into `/config` to clean up the Nuxt config
- Updated the eslint config
- Updated dependencies

**1.1.1**:
- Security updates

**1.1.0**:
- Added PWA module
- Fixed some styling issues

**1.0.0**:
- Initial release

## Build Setup

Copy `.env.example` to `.env` and add your links variable

For inspiration, my API has the following fields in `links`:
- id (selfincrement)
- icon (text)
- url (string)
- text (string)

``` bash
# install dependencies
$ yarn install # Or npm install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

Copy `.env.example` to `.env` and add your links variable

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
