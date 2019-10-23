<template>
    <li>
        <a :href="url" :title="text" target="_blank" rel="noopener">
            <div class="collection">
                <!-- eslint-disable-next-line vue/no-v-html -->
                <div class="collection-icon" v-html="icon"></div>
                <div class="collection-data">
                    <h3>{{ text }}</h3>
                    <span>{{ subtext }}</span>
                </div>
            </div>
        </a>
    </li>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            default: 'https://'
        },
        icon: {
            type: String,
            default: 'icon'
        },
        text: {
            type: String,
            default: 'Lorem ipsum dolor sit amet'
        },
        subtext: {
            type: String,
            default: 'consectetur adipiscing elit'
        }
    }
}
</script>
