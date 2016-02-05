folliesApp.controller('ContactCtrl',['$scope',function($scope){
  $scope.clickablePhone = $scope.contact.phoneNumber.replace('-','').replace('(','').replace(')','');
  
  $scope.schema = [
    {
      name: 'fname',
      type: 'text',
      label: 'First Name',
      required: true
    },
    {
      name: 'lname',
      type: 'text',
      label: 'Last Name',
      required: true
    },
    {
      name: 'street1',
      type: 'text',
      label: 'Address Street 1'
    },
    {
      name: 'street2',
      type: 'text',
      label: 'Address Street 2'
    },
    {
      name: 'city',
      type: 'text',
      label: 'City'
    },
    {
      name: 'state',
      type: 'select',
      label: 'State',
      options: ["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA",
        "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS",
        "MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA",
        "RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
      ]
    },
    {
      name: 'zip',
      type: 'text',
      label: 'ZIP Code'
    },
    {
      name: 'email',
      type: 'email',
      label: 'E-mail Address'
    },
    {
      name: 'comments',
      type: 'textarea'
    },
    {
      name: 'submit'
    },
    {
      name: 'reset'
    }
  ];
}]);
