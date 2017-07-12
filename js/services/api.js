folliesApp.service('apiService',['$http', '$q', function($http, $q){
  return({
	  getRegistrationInfo: getRegistrationInfo,
    getSponsors: getSponsors
  });

	function getRegistrationInfo() {
		return $http.get('/resources/registration.json')
		.then(function(response){
			return response.data;
		});
	}

  function getSponsors(year) {
    var request = $http({
      method: 'get',
      url: 'api/v1/sponsors/'+year,
      responseType: 'json'
    });
    return(  request.then(handleSuccess, handleError)  );
  }

  function handleSuccess(response) {
    return(  response.data  );
  }

  function handleError(response) {
    /*
     * The response should be returned in a normalized format. However,
     * if the request was not handled by the server (or what not handles
     * properly - ex. server error), then we may have to normalize it on
     * our end, as best we can.
     */
    if(  !angular.isObject(response.data) || !response.data.message  ) {
      return(  $q.reject('An unknown error occurred')  );
    }
    return(  $q.reject(response.data.message)  );
  }
}]);
