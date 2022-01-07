import axios from 'axios'

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID J-1F1epCuB3I2eb8eHT9ECDOLIila_u0KTyiE2FBVvU'
  }
})