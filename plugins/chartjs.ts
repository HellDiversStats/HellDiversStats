import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, TimeScale  } from 'chart.js'
export default defineNuxtPlugin(() => {
    Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, TimeScale )
})