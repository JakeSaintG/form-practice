var Cleave = require('cleave.js');
require('cleave.js/dist/addons/cleave-phone.us');

var cleave = new Cleave('.phone', {
    phone: true,
    phoneRegionCode: '{country}'
});
