const ETHICAL_LIFE_URL = '/resources/ethical-life-winners.json'
const SHOWS_URL = '/resources/shows.json'
const SHOW_DATA_URL = '/resources/show.json'
const REGISTRATION_URL = '/resources/registration.json'
const SPONSORS_URL = '/resources/sponsors.json'

const handleUrl = ($http) => (url) => () => $http.get(url).then(res => res.data)

folliesApp.service("apiService", [
  "$http",
  "$q",
  function ($http) {
    const handler = handleUrl($http)
    const getEthicalLifeRecipients = handler(ETHICAL_LIFE_URL)
    const getShowList = handler(SHOWS_URL)
    const getShowData = handler(SHOW_DATA_URL)
    const getRegistrationInfo = handler(REGISTRATION_URL)
    const getSponsors = (year) => handler(SPONSORS_URL)().then(data => data[year])

    return {
      getEthicalLifeRecipients,
      getRegistrationInfo,
      getShowData,
      getShowList,
      getSponsors,
    }
  }
]);
