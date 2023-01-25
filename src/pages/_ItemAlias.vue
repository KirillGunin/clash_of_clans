<template>
    <div class="wrapper-person">
        <div v-if="item">
            <h1 class="title" style="color: #ffffff">{{ item.title }}</h1>
            <img :src="item.img" :alt="item.alias" />
            <p>Description: {{ item.descr }}</p>
            <div class="card-stats">
                <div
                    class="one-third"
                    v-for="(stat, index) in item.info"
                    :key="index"
                >
                    <div class="stat">{{ stat.title }}</div>
                    <div class="stat-value">{{ stat.value }}</div>
                </div>
            </div>
            <div>
                <router-link class="btn btnPrimary" to="/"
                    >Back to home page</router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
import items from "@/seeders/items.js";
export default {
    data() {
        return {
            item: null,
        };
    },
    created() {
        const alias = this.$route.params.itemAlias;
        const item = items.find((el) => el.alias === alias);
        this.item = item;
    },
};
</script>

<style lang="scss">
.wrapper-person {
    text-align: center;
    .card-stats {
        border-radius: 14px;
        margin: 30px 0
    }
}
</style>
