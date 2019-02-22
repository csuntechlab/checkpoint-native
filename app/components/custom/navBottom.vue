<template>

    <GridLayout class="navBottom" height="50" width="100%" row="3" rows="auto"
        columns="auto,auto,auto,auto, auto">
        <GridLayout :class="selectedTab === 'Progress' ? 'active' : ''" @tap="routeToTab('Progress')" rows="*,auto" cols="auto" class="nav" col="0" row="0" width="20%">
            <Image :class="selectedTab === 'Progress' ? 'active' : ''" row="0" class="navIcon" :src="'~/assets/images/thermometer.png'" />
            <Label row="1" v-show="selectedTab === 'Progress'" text="Progress" class="navText"></Label>
        </GridLayout>
        <GridLayout :class="selectedTab === 'Timesheet' ? 'active' : ''" @tap="routeToTab('Timesheet')" rows="*,auto" cols="auto" class="nav" col="1" row="0" width="20%">
            <Image :class="selectedTab === 'Timesheet' ? 'active' : ''" row="0" class="navIcon" :src="'~/assets/images/calendar.png'" />
            <Label row="1" v-show="selectedTab === 'Timesheet'" text="Timesheet" class="navText"></Label>
        </GridLayout>
        <GridLayout :class="selectedTab == 'Home' ? 'active' : ''" @tap="routeToTab('Home')" rows="*,auto" cols="auto" class="nav" col="2" row="0" width="20%">
            <Image :class="selectedTab == 'Home' ? 'active' : ''" row="0" class="navIcon" :src="'~/assets/images/home.png'" />
            <Label row="1" v-show="selectedTab == 'Home'" text="Home" class="navText"></Label>
        </GridLayout>
        <GridLayout :class="selectedTab == 'Alerts' ? 'active' : ''" @tap="routeToTab('Alerts')" rows="*,auto" cols="auto" class="nav" col="3" row="0" width="20%">
            <Image :class="selectedTab == 'Alerts' ? 'active' : ''" row="0" class="navIcon" :src="'~/assets/images/bell.png'" />
            <Label row="1" v-show="selectedTab == 'Alerts'" text="Alerts" class="navText"></Label>
        </GridLayout>
        <GridLayout :class="selectedTab == 'Settings' ? 'active' : ''" @tap="routeToTab('Settings')" rows="*,auto" cols="auto" class="nav" col="4" row="0" width="20%">
            <Image :class="selectedTab == 'Settings' ? 'active' : ''" row="0" class="navIcon" :src="'~/assets/images/cog.png'" />
            <Label row="1" v-show="selectedTab == 'Settings'" text="Settings" class="navText"></Label>
        </GridLayout>
    </GridLayout>

</template>
<script>
    import { mapGetters, mapActions } from 'Vuex';
    export default {
        methods: {
            ...mapActions([
                'routeToTab'
            ]),
        },
        computed: {
            ...mapGetters([
                'selectedTab'
            ])
        }
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