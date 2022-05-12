folliesApp.service("apiService", [
  "$http",
  "$q",
  function ($http) {
    const getEthicalLifeRecipients = () =>
      $http.get("/resources/ethical-life-winners.json").then(handleSuccess);

    const getShowList = () => $http.get('/resources/shows.json').then(handleSuccess);

    return {
      getEthicalLifeRecipients,
      getRegistrationInfo,
      getShowList,
      getSponsors,
    };

    function getRegistrationInfo() {
      return $http
        .get("/resources/registration.json")
        .then(handleSuccess);
    }

    function getSponsors(year) {
      return $http.get("/resources/sponsors.json").then(function (response) {
        return response.data[year];
      });
    }

    function handleSuccess(response) {
      return response.data;
    }
  },
]);
