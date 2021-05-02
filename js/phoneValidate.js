// The telephone number must be in the format of (555) 555-5555
function isValidPhone(phone) {
    return /^\D*\d{3}\D*\d{3}\D*\d{4}\D*$/.test(phone);
    // \D* is used to allow any non-numeric group of characters but allow the groups of numbers to stay valid
    // "1234567890"   "(123) 123-1374"   "(123)  123-1374"   "( 123 ) 123 - 1374"   "sdf(123) 123sdf-1374asd" will all now pass but "( 123 ) 123 - 13sd74" won't
};

function formatPhone(text) {
    const regex = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/
    return text.replace(regex, '($1) $2-$3');
}




function isValidPhoneArea(phone) {
    return /^\D*\d{1}\D*\d{3}\D*\d{3}\D*\d{4}\D*$/.test(phone);
    // \D* is used to allow any non-numeric group of characters but allow the groups of numbers to stay valid
    // "1234567890"   "(123) 123-1374"   "(123)  123-1374"   "( 123 ) 123 - 1374"   "sdf(123) 123sdf-1374asd" will all now pass but "( 123 ) 123 - 13sd74" won't
};

function formatPhoneArea(text) {
    const regex = /^\+\D*\d{1}\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/
    return text.replace(regex, '($1) $2-$3');
}

