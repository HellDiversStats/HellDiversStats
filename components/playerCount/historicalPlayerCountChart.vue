<template>
  <div>
    <div class="btn-group">
      <button class="btn btn-color btn-small" @click="fetchAndRenderData('12h')">Last 12 Hours</button>
      <button class="btn btn-color btn-small" @click="fetchAndRenderData('24h')">Last 24 Hours</button>
      <button class="btn btn-color btn-small" @click="fetchAndRenderData('48h')">Last 48 Hours</button>
      <button class="btn btn-color btn-small" @click="fetchAndRenderData('1m')">Last 1 Month</button>
      <button class="btn btn-color btn-small" @click="fetchAndRenderData('3m')">Last 3 Months</button>
      <button class="btn btn-color btn-small" @click="fetchAndRenderData('6m')">Last 6 Months</button>
      <button class="btn btn-color btn-small" @click="fetchAndRenderData('1yr')">Last 1 Year</button>
    </div>
    <Line
      v-if="chartData.datasets.length"
      :data="chartData"
      :options="chartOptions"
      ref="lineChart"
    />
  </div>
</template>

<style scoped>
.btn-color {
  background-color: #ff00ea;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.btn-small {
  padding: 5px 10px;
}
</style>


<script setup>
import { ref, onMounted } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
} from 'chart.js/auto'
import moment from 'moment'
import 'chartjs-adapter-moment'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
)

const chartData = ref({
  labels: [],
  datasets: [{  // Placeholder dataset
    label: 'Loading...',
    data: [0],  // Single data point to render a line
    backgroundColor: 'rgba(255, 255, 255, 0.2)',  // Transparent background
    borderColor: 'rgba(200, 200, 200, 1)',  // Light gray line
    borderWidth: 1
  }]
})
const lineChart = ref(null)

const chartOptions = {
  responsive: true,
  maintainAspectRatio: true, // Set maintainAspectRatio to true
  aspectRatio: 2, // Set the desired aspect ratio
  scales: {
    x: {
      type: 'time',
      time: {
        unit: 'hour',
        displayFormats: {
          hour: 'MMM D, HH:mm'
        }
      },
      distribution: 'linear'
    },
    y: {
      title: {
        display: true,
        text: 'Player Count'
      }
    }
  },
  // Enable zoom and pan plugins
  plugins: {
    zoom: {
      zoom: {
        wheel: {
          enabled: true
        },
        pinch: {
          enabled: true
        },
        mode: 'xy'
      },
      pan: {
        enabled: true,
        mode: 'xy'
      }
    }
  }
}

onMounted(async () => {
  const zoomPlugin = (await import('chartjs-plugin-zoom')).default
  ChartJS.register(zoomPlugin)

  await fetchAndRenderData()
})

async function fetchAndRenderData(timeRange) {
  try {
    const endDate = new Date()
    let startDate = new Date()

    switch (timeRange) {
      case '12h':
        startDate.setHours(startDate.getHours() - 12)
        break
      case '24h':
        startDate.setHours(startDate.getHours() - 24)
        break
      case '48h':
        startDate.setHours(startDate.getHours() - 48)
        break
      case '1m':
        startDate.setMonth(startDate.getMonth() - 1)
        break
      case '3m':
        startDate.setMonth(startDate.getMonth() - 3)
        break
      case '6m':
        startDate.setMonth(startDate.getMonth() - 6)
        break
      case '1yr':
        startDate.setFullYear(startDate.getFullYear() - 1)
        break
      default:
        break
    }

    

    const startDateStr = formatDate(startDate)
    const endDateStr = formatDate(endDate)

    let allPlayerCounts = []
    let currentPage = 1
    let totalPages = 1

    while (currentPage <= totalPages) {
      const response = await fetch(`https://api.helldiversstats.com/1.0/getHistoricalPlayerCount?startDate=${startDateStr} 00:00:00&endDate=${endDateStr} 23:59:59&page=${currentPage}`)
      const data = await response.json()

      if (data.totalPages) {
        totalPages = data.totalPages
      }

      allPlayerCounts = allPlayerCounts.concat(data.historicalPlayerCount.filter(entry => entry.gameName === 'Helldivers 2'))

      currentPage++
    }

    const timestamps = allPlayerCounts.map(entry => new Date(entry.timestamp))
    const playerCountsData = allPlayerCounts.map(entry => entry.totalPlayerCount)

    chartData.value = {
      labels: timestamps,
      datasets: [
        {
          label: 'Helldivers 2 Player Count',
          data: playerCountsData,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }
      ]
    }

    chartData.value = {  // Update with actual data
    labels: timestamps,
    datasets: [
      {
        label: 'Helldivers 2 Player Count',
        data: playerCountsData,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  }    

  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

function formatDate(date) {
  return moment(date).format('YYYY-MM-DD')
}
</script>