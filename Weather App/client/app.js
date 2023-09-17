const condition = document.getElementById("condition")
const city = document.getElementById('city')
const country = document.getElementById('country')
const mainText = document.getElementById('main')
const description = document.getElementById('description')
const temp = document.getElementById('temp')
const pressure = document.getElementById('pressure')
const humidity = document.getElementById('humidity')

const cityInput = document.getElementById('city-input')
const historyElm =  document.getElementById('history')
const masterHistory = document.getElementById('master-history')

const API_KEY = '5340423bff93333cab0f1b9721051d6e'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}'
const ICON_URL = ' https://openweathermap.org/img/wn/'

window.onload = function() {
   navigator.geolocation.getCurrentPosition (s => {
      console.log(s)
   }, e => {
      console.log(e)
   })
}