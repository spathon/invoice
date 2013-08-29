/* global angular */
'use strict';

var formatDate = function(date){
  var dd = date.getDate(),
      mm = date.getMonth() + 1,
      yy = date.getFullYear();

  if (dd < 10) { dd = "0"+ dd; }
  if (mm < 10) { mm = "0"+ mm; }

  return dd +'-'+ mm +'-'+ yy;
};
var date = new Date(),
    now = formatDate(date);
date.setDate(date.getDate() + 30);
var feature = formatDate( date );

var _default = {
  invoice: 'Faktura',
  company: 'Spathon.com',
  invoiceNr: 1,
  invoiceDate: now,
  invoiceLastDate: feature,

  address: 'Ditt namn<br>Gata 123<br>Stad',
  invoiceAddress: 'Företagsnamn<br>Gata 123<br>Stad',
  message: 'Skriv ett meddelande eller något trevligt ;)',

  items: [{
    name: 'Bla',
    desc: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
    quantity: 2,
    price: 10
  },{
    name: 'Bla',
    desc: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
    quantity: 2,
    price: 10
  }],
  VAT: 25,

  phone: '076 878 17 12',
  webpage: 'http://spathon.com',
  email: 'patrik@spathon.com',

  orgNr: '8803240459',
  vatNr: 'SE880324045901',
  swift: '',
  iban: '',

  bankgiro: '174-7930',
  plusgiro: '',
  bankkonto: ''
}



function HomeCtrl($scope){
  $scope.test = 'Tetsar';

  $scope.invoice = _default;
}
