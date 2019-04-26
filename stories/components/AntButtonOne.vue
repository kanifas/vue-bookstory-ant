<template>
    <div>
        <a-button type="primary" :size="size">Primary</a-button>
        <a-button :size="size">Normal</a-button>
        <a-button type="dashed" :size="size">Dashed</a-button>
        <a-button type="danger" :size="size">Danger</a-button>

        <br>
        <br>

        <a-button-group>
            <a-button>Cancel</a-button>
            <a-button type="primary">OK</a-button>
        </a-button-group>
        <a-button-group>
            <a-button disabled>L</a-button>
            <a-button disabled>M</a-button>
            <a-button disabled>R</a-button>
        </a-button-group>
        <a-button-group>
            <a-button type="primary">L</a-button>
            <a-button>M</a-button>
            <a-button>M</a-button>
            <a-button type="dashed">R</a-button>
        </a-button-group>

        <h4>With Icon</h4>
        <a-button-group>
            <a-button type="primary">
                <a-icon type="left" />Go back
            </a-button>
            <a-button type="primary">
                Go forward<a-icon type="right" />
            </a-button>
        </a-button-group>
        <a-button-group>
            <a-button type="primary" icon="cloud" />
            <a-button type="primary" icon="cloud-download" />
        </a-button-group>
    </div>
</template>

<script>
export default {
    data () {
        return {
            size: 'large'
        }
    },
    props: {
        x: {type: Number, default:10},
        y: {type: Number, default:20},
        z: {type: Number, default:30}
    }
};
</script>

<style scoped>

</style>