import axios from 'axios'

// this is a public api key so it is ok to let it be unrestricted
const KEY = 'AIzaSyCrqXGU3lAJpXnCJIo8Di-nQS8tx0yqmK0'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
      channelId: 'UCZ1J6ZuCcJJr1iOEkUzbVPA',
      part: 'snippet', 
      type: 'video',
      key: KEY
    }
})