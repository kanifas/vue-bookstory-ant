/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from 'storybook-addon-vue-info';
import { setDefaults } from 'storybook-addon-vue-info'
import { withViewport } from '@storybook/addon-viewport';

import 'ant-design-vue/dist/antd.less'; // or .css
import { Button, Icon, Row, Col } from 'ant-design-vue';
import AntButtonOne from './components/AntButtonOne.vue';
import Grid from './components/Grid.vue';
Vue.use(AntButtonOne);
Vue.use(Grid);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);

setDefaults({
    header: true,
    source: true,
    docsInPanel: true,
    useDocgen: true,
    components: {
        'AntButtonOne': AntButtonOne
    }
});

import MyButton from './MyButton';
import Welcome from './Welcome';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Button', module)
    .addDecorator(withInfo)
    .addDecorator(withViewport)
    .add('with text', () => ({
        components: { MyButton },
        template: '<my-button @click="action">Hello Button</my-button>',
        methods: { action: action('clicked') }
    }))

    .add('Ant Button', () => ({
        components: {
            Button
        },
        data () {
            return {
                msg: '111'
            }
        },
        template: '<a-button type="primary" @click="action">{{msg}}</a-button>',
        methods: { action: action('clicked') }
    }))

    .add('Other', () => ({
        components: { AntButtonOne },
        template: '<AntButtonOne />',
        propsDescription: {
            AntButtonOne: {
                x: 'Horizontal coordinate',
                y: 'Vertical coordinate',
                z: 'Depth...',
            }
        }
    }),
    {
        info: {
            summary: 'Summary for MyComponent'
        }
    })

    /*
  .add('with JSX', () => ({
    components: { MyButton },
    // eslint-disable-next-line no-unused-vars
    render(h) {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo('clicked') },
  }))*/
    .add('with some emoji', () => ({
        components: { MyButton },
        template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
        methods: { action: action('clicked') },
    }));

/* eslint-enable react/react-in-jsx-scope */


storiesOf('Layout', module)
.addDecorator(withInfo)
.addDecorator(withViewport)
.add('Grid', () => ({
    components: { Grid },
    template: '<Grid />',
    propsDescription: {
        AntButtonOne: {

        }
    }
}),
{
    info: {
        summary: 'Summary for MyComponent'
    }
});
