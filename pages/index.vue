<template>
	<div class="container dark-theme">
	  <div class="row justify-content-center">
		<div class="col-md-10">
		  <h1 class="text-center mb-4 text-light">Helldivers Stats</h1>
		  <div class="chart-container mx-auto">
			<LivePlayerCount />
			<historicalPlayerCountChart />
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <script>

  import LivePlayerCountTable from '~/components/playerCount/livePlayerCountTable.vue'
  import historicalPlayerCountChart from '~/components/playerCount/historicalPlayerCountChart.vue'
  
  
  export default {
	components: {
		LivePlayerCountTable,
		historicalPlayerCountChart
	}
  }
  </script>
  
  <style scoped>
  .container {
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #212529;
  }
  
  .chart-container {
	background-color: #343a40;
	padding: 2rem;
	border-radius: 0.5rem;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
	max-height: 70vh; 
	overflow: auto; 
  }
  
  .dark-theme {
	color: #e9ecef;
  }
  </style>