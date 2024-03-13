import {format,parse, parseISO, getDay} from 'date-fns'

const datefns: any={
  format,
  parse,
  parseISO,
  getDay
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('datefns', datefns)
})