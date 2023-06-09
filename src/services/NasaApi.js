export const NasaApi =  {
    baseUrl(name, pageNumber) {
      return `https://api.nasa.gov/mars-photos/api/v1/rovers/${name}/photos?sol=1000&page=${pageNumber}&api_key=DEMO_KEY`
    },
    async getNasaMarchData(name, pageNumber) {
      try {
        const response = await fetch(this.baseUrl(name, pageNumber))
        const data = await response.json()
        return data
      } catch (error) {
        console.log(error)
      }
    }
  }