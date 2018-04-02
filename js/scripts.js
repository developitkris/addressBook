// Business Logic

function Person(first, last, phone, addresses, email){
  this.firstName = first;
  this.lastName = last;
  this.phoneNumber = phone;
  this.addresses = [];
  this.email = email;
}
function Address(number, street, city, state, zip){
  this.number = number;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
}

Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
Address.prototype.fullAddress = function() {
  return this.inputAddNumber + " " + this.inputAddStreet + ", " + this.inputCity + ", " + this.inputState + " " + this.inputZip;
}

// User Logic
$(document).ready(function() {
  $("#newAddress").append('<div class="newAddress">' +
                              '<div class="form-group">' +
                                '<label for="number"> Number </label>' +
                                '<input type="text" class="form-control number">' +
                              '</div>' +
                               '<div class="form-group">' +
                                 '<label for="street"> Street </label>' +
                                 '<input type="text" class="form-control street">' +
                               '</div>' +
                               '<div class="form-group">' +
                                 '<label for="city"> City </label>' +
                                 '<input type="text" class="form-control city">' +
                               '</div>' +
                               '<div class="form-group">' +
                                 '<label for="state"> State </label>' +
                                 '<input type="text" class="form-control state">' +
                               '</div>' +
                               '<div class="form-group">' +
                                 '<label for="zip"> Zip Code </label>' +
                                 '<input type="text" class="form-control zip">' +
                               '</div>' +
                             '</div>');
    });
  $("form#newPerson").submit(function(event) {
    event.preventDefault();

    var inputFirst = $("input#first").val();
    var inputLast = $("input#last").val();
    var inputPhone = $("input#phone").val();
    var inputEmail = $("input#email").val();
    var newPerson = new Person(inputFirst, inputLast, inputPhone, inputAddress, inputEmail);

    var inputAddNumber = $(this).find("input.number").val();
    var inputAddStreet = $(this).find("input.street").val();
    var inputCity = $(this).find("input.city").val();
    var inputState = $(this).find("input:radio[name=state]:checked").val();
    var inputZip = $(this).find("input.zip").val();
    var newAddress = new Address(inputAddNumber, inputAddStreet, inputCity, inputState, inputZip);

    Person.addresses.push(newAddress);

    $("ul#directory").append("<li><span class= 'person'>" + newPerson.fullName() +
    "</span></li>");
    $("directory").last().click(function(){
      $("#show-person").show();
      $("#show-person").text(newPerson.firstName);
      $(".first").text(newPerson.firstName);
      $(".last").text(newPerson.lastName);
    });
      $("input#newFirst").val("");
      $("input#newLast").val("");


    $("ul#addresses").text("");
     newContact.addresses.forEach(function(address) {
       $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");

    });
  });
});
