<template>
<Page enableSwipeBackNavigation="false" actionBarHidden="true">
    <FlexboxLayout>
        <Login v-show="selectedAuthTab == 'Login'"></Login>
        <Register v-show="selectedAuthTab == 'Register'"></Register>
    </FlexboxLayout>
</Page>


</template>
<script>
import Login from './Login';
import Register from './Register';
import { mapGetters, mapActions } from 'Vuex';
export default {
    components: {
        Login,
        Register
    },
    computed: {
        ...mapGetters([
            'selectedAuthTab',
        ])
    },
};
</script>

<style>
    .nav {
        height: 100%;
        width: 100%;
    }

    .nav.active {
        background-color: #dddddd;
    }

    .navIcon {
        horizontal-align: center;
        vertical-align: center;
        height: 20
    }

    .navIcon.active {
        vertical-align: bottom;
    }

    .navText {
        margin-bottom: 2;
        font-size: 12;
        /* color: #c43776; */
        color: #282828;
        horizontal-align: center;
    }
</style>