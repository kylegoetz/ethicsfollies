folliesApp.controller('AwardsCtrl', function($scope, apiService) {
  $scope.resources = {
    'nominationForm': {
      url: 'resources/award-nomination-form.pdf',
      event: 'Download: Ethical Life Awards Nomination Application'
    }
  };

  $scope.awards = [];

  apiService.getEthicalLifeRecipients().then(awards => {
    $scope.awards = awards.map(a => ({
      ...a,
      inhouse: a.inhouse ?? '—',
      firm: a.firm ?? '—'
    }));
    $scope.$apply();
  });
});
