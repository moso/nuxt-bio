module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'Bio | moso.io',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
            { vmid: 'og:description', property: 'og:description', content: 'Bio made with Vue.js and Nuxt.js' },
            { vmid: 'og:image', property: 'og:image', content: 'https://moso.io/images/og_image.png'},
            { vmid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://moso.io/images/og_image.png'},
            { vmid: 'og:image:width', property: 'og:image:width', content: '700'},
            { vmid: 'og:image:height', property: 'og:image:height', content: '500'},
            { vmid: 'og:title', property: 'og:title', content: 'Bio | moso.io'},
            { vmid: 'og:type', property: 'og:type', content: 'website'},
            { vmid: 'og:url', property: 'og:url', content: 'https://bio.moso.io'},
            { name: 'description', name: 'description', content: 'Bio made with Vue.js and Nuxt.js' },
            { name: 'author', content: 'Morten Sørensen (morten@moso.io)' },
            { name: 'mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'application-name', content: 'Bio | moso.io' },
            { name: 'msapplication-TileColor', content: '#263238' },
            { name: 'theme-color', content: '#263238' }
        ],

        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'manifest', href: '/manifest.json' }
        ]
    },

    /*
    ** CSS
    */
    css: [
        '~/node_modules/flexgrid.co/css/flexgrid-tailwind.css',
        '~/assets/sass/main.scss'
    ],

    /*
    ** Customize the progress bar color
    */
    loading: { color: '#3B8070' },

    /*
    ** Third-party modules
    */
    modules: [
        '@nuxtjs/axios',
    ],

    /*
    ** axios config
    */
    axios: {
        proxy: true
    },

    proxy: {
        '/api/': { target: 'http://api.morten.is', pathRewrite: {'^/api/': ''} }
    },


    /*
    ** Build configuration
    */
    build: {
        vendor: ['axios'],
        /*
        ** Run ESLint on save
        */
        extend (config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}

