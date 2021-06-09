import Vue from 'vue'
import axios from 'axios'

//Vue.prototype.$axios = axios

const axiosInstance = axios.create({
    baseURL: 'https://covidnigeria.herokuapp.com'
    //baseURL: 'https://nigeria-covid-19.p.rapidapi.com/api/confirmed'
})




export default ({ Vue }) => {
    Vue.prototype.$axios =  axios
}



export { axiosInstance }
