<template>
    <div class="card">
        <div class="card-img__wrapper" v-if="imgUrl">
            <img class="card-img" :src="imgUrl" :alt="title" />
        </div>
        <span class="card-name">{{ level }} level</span>
        <span class="card-title">{{ title }}</span>
        <div class="card-body">
            <slot name="body"></slot>
            <router-link
                class="link"
                style="display: block; margin-top: 16px"
                v-if="link"
                :to="link"
                >See more</router-link
            >
        </div>
        <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
    props: {
        level: {
            type: Number,
            require: true,
        },
        title: {
            type: String,
            require: true,
        },
        imgUrl: {
            type: String,
        },
        link: {
            type: String,
        },
    },
};
</script>
