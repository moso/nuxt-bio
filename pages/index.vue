<template>
    <div>
        <div class="container-fluid">
            <div class="row xs-justify-center xs-items-center">
                <div class="xl">
                    <moso-card header-name="Morten Sørensen" header-title="Front-End Engineer" image="/images/profile.jpg">
                        <moso-link v-for="link in links" :key="link.id" :icon="link.icon" :url="link.url" :text="link.text" :subtext="trimUrl(link.url)" />
                    </moso-card>
                    <div class="footer">
                        <span>Made with</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22">
                                <g transform="matrix(1.19689,0,0,1.19689,-2.36267,-3.57213)">
                                    <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36L12.93,7.36C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" style="fill:#ff1507;fill-rule:nonzero;"/>
                                </g>
                            </svg>
                        </span>
                        <span> and </span>
                        <span>
                            <a href="https://vuejs.org" title="Vue.js" target="_blank" rel="noopener">
                                <svg viewBox="0 0 261.76 226.69" xmlns="http://www.w3.org/2000/svg">
                                    <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
                                        <g transform="translate(178.06 235.01)">
                                            <path d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z" fill="#41b883"/>
                                        </g>
                                        <g transform="translate(178.06 235.01)">
                                            <path d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z" fill="#34495e"/>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </span>
                        <span> + </span>
                        <span>
                            <a href="https://nuxtjs.org" title="Nuxt.js" target="_blank" rel="noopener">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
                                    <g transform="translate(0 49)" fill="none" fill-rule="evenodd">
                                        <path d="M123 292l-1-1c-2-4-2-8-2-12H25L167 27l59 107 19-14-59-107c-1-2-8-13-20-13-5 0-13 2-19 13L4 268c-1 2-7 14-1 24 2 5 8 10 21 10h120c-13 0-19-5-21-10z" fill="#00C58E"/>
                                        <path d="M395 269L280 62c-2-2-8-13-20-13-5 0-12 2-19 13l-15 24v48l34-59 114 204h-43a20 20 0 0 1-2 12v1c-6 10-19 10-21 10h68c2 0 15 0 21-10 2-5 4-13-2-23z" fill="#108775"/>
                                        <path d="M332 292v-1l1-2c1-3 2-7 1-10l-4-11-90-158-13-24h-1l-13 24-91 158-3 11a21 21 0 0 0 2 13c3 5 9 10 21 10h168c3 0 16 0 22-10zM226 134l83 145H144l82-145z" fill="#2F495E" fill-rule="nonzero"/>
                                    </g>
                                </svg>
                            </a>
                        </span>
                        <div>
                            <span>Powered by</span>
                            <span>
                                <a href="https://strapi.io" title="Strapi" target="_blank" rel="noopener">
                                    <img src="/images/strapi.png" alt="Strapi">
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MosoCard from '~/components/moso-card.vue'
import MosoLink from '~/components/moso-link.vue'

export default {
    components: {
        'moso-card': MosoCard,
        'moso-link': MosoLink
    },

    async fetch({ error, store }) {
        try {
            await store.dispatch('getLinks')
        } catch(err) {
            error({
                statusCode: 500,
                message: err.message
            })
            throw err
        }
    },

    computed: {
        links() {
            return this.$store.state.links
        }
    },

    methods: {
        trimUrl(url) {
            return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
        }
    }
}
</script>

<style lang="scss" scoped>
@import './assets/sass/mixins';

.footer {
    margin-top: .5rem;
    text-align: center;

    a {
        text-decoration: none;
        outline: none;

        @include hover-state {
            text-decoration: none;
            outline: none;
        }
    }

    svg {
        position: relative;
        top: 1px;
        width: 16px;
        height: auto;
        margin: 0 5px;
    }

    img {
        margin: 0 0 0 7px;
        width: auto;
        height: 14px;
        vertical-align: middle;
        border-style: none;
    }
}
</style>
