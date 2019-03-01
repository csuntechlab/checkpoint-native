<template>
<Page enableSwipeBackNavigation="false" actionBarHidden="true">
	<GridLayout>
		<DockLayout>
			<Label text="Checkpoint" dock="top" horizontalAlignment="center" class="status-title navStatusBar"></Label>
			<Home v-if="selectedTab === 'Home'"></Home>
			<Alerts v-if="selectedTab === 'Alerts'"></Alerts>
			<Progress v-if="selectedTab === 'Progress'"></Progress>
			<Timesheet v-if="selectedTab === 'Timesheet'"></Timesheet>
			<Settings v-if="selectedTab === 'Settings'"></Settings>
		</DockLayout>
		<DockLayout>
			<navBottom verticalAlignment="bottom" dock="bottom" />
		</DockLayout>
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
