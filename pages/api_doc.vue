<template>
	<div class="container dark-theme">
	  <div class="row justify-content-center">
		<div class="col-md-14">

			<div class="chart-container mx-auto">

    <div>
 
      <b-container class="mt-4">
        <h1 class="mb-4">Helldivers Stats API Docs</h1>
        <div class="api-info mb-4">
          <p class="font-weight-bold">API URL:</p>
          <p>https://api.helldiversstats.com</p>
        </div>
  
        <b-tabs>
          <b-tab title="Player" active>
            <!-- Player endpoints -->
            <div v-for="(endpoint, index) in playerEndpoints" :key="index" class="card mb-4">
              <b-card-header>
                <h2 class="h4 mb-0">{{ endpoint.title }}</h2>
              </b-card-header>
              <b-card-body>
                <p class="card-text">{{ endpoint.description }}</p>
                <p class="font-weight-bold">HTTP Method:</p>
                <p>{{ endpoint.method }}</p>
                <p class="font-weight-bold">Parameters:</p>
                <p>{{ endpoint.parameters }}</p>
                <p class="font-weight-bold">Request Example:</p>
                <p><code>{{ endpoint.requestExample }}</code></p>
                <p class="font-weight-bold">Response:</p>
                <pre><code>{{ endpoint.response }}</code></pre>
                <p class="font-weight-bold">Status Codes:</p>
                <ul>
                  <li v-for="(status, code) in endpoint.statusCodes" :key="code">
                    <span class="badge" :class="status.color">{{ code }}</span>: {{ status.text }}
                  </li>
                </ul>
              </b-card-body>
            </div>
          </b-tab>
          <!-- masive WIP -->
        </b-tabs>
      </b-container>
  
    </div>

 				

			</div>		  

		</div>
	  </div>
	</div>
  </template>
  
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
  .api-info p {
  margin-bottom: 0.5rem;
}

  </style>

<script>
export default {
  data() {
    return {
      playerEndpoints: [
        {
          title: "/1.0/getPlayerCount",
          description: "This endpoint allows you to retrieve the player count of both Helldivers games.",
          method: "GET",
          parameters: "N/A",
          requestExample: "/1.0/getPlayerCount",
          response: `{
            "helldivers": { "Steam":567,"PS5":0,"HDTotalCount":567},
            "helldivers2": { "Steam":213225,"PS5":0,"HD2TotalCount":213225},
            "totalPlayerCount": { "Steam":213792,"PS5":0,"allGamesTotalPlayerCount":213792 }
          }`,
          statusCodes: {
            "200": { text: "OK - Request was successful.", color: "badge-success" },
            "404": { text: "Not Found - Resource not found.", color: "badge-danger" }
          }
        },
        // More end points gonna be here
      ],
      // More categories
    };
  }
};
</script>

