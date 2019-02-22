<template>
<Page enableSwipeBackNavigation="false" actionBarHidden="true">
	<GridLayout rows="auto,auto,*,auto" columns="auto">
		<GridLayout 
				row="0" 
				ref="navStatusBar" 
				class="navStatusBar" 
				verticalAlignment="top" 
				height="40"
				width="100%" 
				rows="auto" 
				columns="*,auto,auto,auto">
			<Label col="0" row="0" text="Checkpoint" horizontalAlignment="center" class="status-title"></Label>
		</GridLayout>
		<GridLayout row="1">
			<Home v-if="selectedTab === 'Home'"></Home>
			<Alerts v-if="selectedTab === 'Alerts'"></Alerts>
			<Progress v-if="selectedTab === 'Progress'"></Progress>
			<Timesheet v-if="selectedTab === 'Timesheet'"></Timesheet>
			<Settings v-if="selectedTab === 'Settings'"></Settings>
		</GridLayout>
		<navBottom row="3" />
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

<style>

.navStatusBar{
	background-color: #7dadb8;
}

.status-title {
	color: white;
	font-size: 18;
	margin-left: 15;
	margin-top: 8;
	horizontal-align: left;
	vertical-align: center;
}
</style>