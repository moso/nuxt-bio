<template>
    <div>
        <div class="container:fluid">
            <div class="row xs:center xs:middle">
                <div class="xl">
                    <moso-card header-name="Morten Sørensen" header-title="Front-End Engineer" image="https://moso.io/images/profile.jpg">
                        <moso-link
                            v-for="link in links"
                            :key="link.id"
                            :icon="link.icon"
                            :url="link.url"
                            :text="link.text"
                            :subtext="link.subtext" />
                    </moso-card>
                    <div class="footer">
                        <span>Made with</span>
                        <span>
                            <svg viewBox="0 0 24 22" xmlns="http://www.w3.org/2000/svg">
                                <g transform="matrix(1.19689,0,0,1.19689,-2.36267,-3.57213)">
                                    <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36L12.93,7.36C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" style="fill:#ff1507;fill-rule:nonzero;"/>
                                </g>
                            </svg>
                        </span>
                        <span> and </span>
                        <span>
                            <a href="https://vuejs.org" title="Vue.js" target="_blank" rel="noopener">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245.39999 212.52124">
                                    <g transform="translate(-250.87 -383.24)">
                                        <g id="g10" transform="matrix(1.25 0 0 -1.25 179.33 677.01)">
                                            <g transform="translate(178.06 235.01)">
                                                <path d="m0 0-22.669-39.264-22.669 39.264h-75.492l98.161-170.02 98.16 170.02h-75.491z" style="fill: #41b883;"/>
                                            </g>
                                            <g id="g16" transform="translate(178.06 235.01)">
                                                <path d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01h-36.227z" style="fill: #35495e;"/>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </span>
                        <span> + </span>
                        <span>
                            <a href="https://nuxtjs.org" title="Nuxt.js" target="_blank" rel="noopener">
                                <svg viewBox="0 0 200 141" xmlns="http://www.w3.org/2000/svg">
                                    <g transform="matrix(0.2,0,0,0.2,0,-29.5)">
                                        <g>
                                            <path d="M317.9,852L166.9,852L3.7,852L411.8,148L819.9,852L658.7,852L507.7,852" style="fill:#41b883;fill-rule:nonzero;"/>
                                            <path d="M779.8,852L996.3,852L642.3,243.5L291.3,852L507.8,852" style="fill:#3b8070;fill-rule:nonzero;"/>
                                            <g transform="matrix(1.01977,0,0,1.01977,-5.82691,-16.8471)">
                                                <path d="M651.2,852L810.7,852L549.9,403.8L291.3,852L450.8,852" style="fill:#35495e;fill-rule:nonzero;"/>
                                            </g>
                                        </g>
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
import MosoCard from '~/components/moso-card/moso-card.vue'
import MosoLink from '~/components/moso-link/moso-link.vue'

import axios from 'axios'

export default {
    components: {
        'moso-card': MosoCard,
        'moso-link': MosoLink
    },

    data() {
        links: []
    },

    asyncData({ req, params }) {
        return axios.get('https://api.morten.is/link')
        .then((res) => {
            return { links: res.data }
        })
    }
}
</script>

<style lang="scss">
    .footer {
        margin-top: .5rem;
        text-align: center;
        
        a {
            text-decoration: none;
            outline: none;

            &:hover,
            &:focus,
            &:active,
            &:hover:active {
                text-decoration: none;
                outline: none;
            }
        }

        svg {
            position: relative;
            top: 1px;
            width: auto;
            height: 12px;
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
