<template>
    <div class="root">
        <a-row>
            <a-col :span="12">col-12</a-col>
            <a-col :span="12">col-12</a-col>
        </a-row>
        <a-row>
            <a-col :span="8">col-8</a-col>
            <a-col :span="8">col-8</a-col>
            <a-col :span="8">col-8</a-col>
        </a-row>
        <a-row>
            <a-col :span="6">col-6</a-col>
            <a-col :span="6">col-6</a-col>
            <a-col :span="6">col-6</a-col>
            <a-col :span="6">col-6</a-col>
        </a-row>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        props: {

        }
    };
</script>

<style scoped>
.root .ant-row > div:nth-child(even) {
    background: #CCC
}
.root .ant-row > div:nth-child(odd) {
    background: #eee;
}
</style>