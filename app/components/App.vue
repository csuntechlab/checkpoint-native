<template>
<Page enableSwipeBackNavigation="false" actionBarHidden="true">
	<GridLayout rows="auto,auto,*,auto" columns="auto">
		<Label col="0" row="0" text="Checkpoint" horizontalAlignment="center" class="status-title"></Label>
		<GridLayout row="1" col="0" colSpan="1" rowSpan="2">
			<Home v-if="selectedTab === 'Home'"></Home>
			<Alerts v-if="selectedTab === 'Alerts'"></Alerts>
			<Progress v-if="selectedTab === 'Progress'"></Progress>
			<Timesheet v-if="selectedTab === 'Timesheet'"></Timesheet>
			<Settings v-if="selectedTab === 'Settings'"></Settings>
		</GridLayout>
		<navBottom row="3"/>
	</GridLayout>
</Page>
</template>
<script>

import navBottom from "./custom/navBottom";
import Home from './Home';
import Settings from './Settings';
import Alerts from './Alerts';
import Progress from './Progress';
import Timesheet from './Timesheet';
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters(['selectedTab'])
	},
	components: {
		navBottom,
		Home,
		Progress,
		Timesheet,
		Alerts,
		Settings
	},
};
</script>
