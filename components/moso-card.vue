<template>
    <div>
        <div class="card">
            <div class="card-header">
                <div class="card-info">
                    <h3>{{ headerName }}</h3>
                    <p>{{ headerTitle }}</p>
                </div>
                <div class="card-image">
                    <img :src="image" :alt="headerName">
                </div>
            </div>
            <div class="card-content">
                <ul>
                    <slot></slot>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        headerName: {
            type: String,
            default: 'Card header'
        },
        headerTitle: {
            type: String,
            default: 'Card title'
        },
        image: {
            type: String,
            default: 'image'
        }
    }
}
</script>
