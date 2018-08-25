<template>
    <li>
        <a :href="url" :title="text" target="_blank" rel="noopener">
            <div class="collection">
                <div class="collection:icon" v-html="icon"></div>
                <div class="collection:data">
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
            type: String
        },
        icon: {
            type: String
        },
        text: {
            type: String
        },
        subtext: {
            type: String
        }
    }
}
</script>
