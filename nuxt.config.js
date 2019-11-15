import { build, dev, env, manifest, meta } from './config'

require('dotenv').config()

export default {
    mode: 'universal',

    modern: !dev.isDev && 'client',

    watch: ['~/config/*'],

    meta,

    css: [
        '~/node_modules/flexgrid.io/dist/flexgrid.min.css',
        '~/assets/sass/main.scss'
    ],

    loading: { color: '#3B8070' },

    modules: [
        '@nuxtjs/axios',
        ['@nuxtjs/dotenv', { systemvars: true }],
        '@nuxtjs/pwa',
        'nuxt-webfontloader'
    ],

    buildModules: [
        '@nuxtjs/eslint-module'
    ],

    webfontloader: {
        google: {
            families: ['Source+Sans+Pro:300,400,600&display=swap']
        }
    },

    env,

    manifest,

    build
}
