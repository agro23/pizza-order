// Business Logic

function Pizza (size, toppings) {
  // this.size = ["Small"]; // expext an array of sizes
  // this.toppings = ["Pepperoni", "Olives"]; // expext an array of toppings
  this.size = size;
  this.toppings = toppings; // expext an array of toppings
  this.basecost = 10.99; // basic pizza cost
  // this.multiplier = 1; // size multiplier default Medium
}

Pizza.prototype.cost = function () {
  var size = this.size;
  var multiplier = 1;
  var yourcost = 0;
    if (size === "Personal") {
      console.log ("Size in cost method is: " + this.size);
      multiplier = .7 ;
    } else if (size === "Small") {
      console.log ("Size in cost method is: " + this.size);
      multiplier = .85 ;
    } else if (size === "Medium") {
      console.log ("Size in cost method is: " + this.size);
      multiplier = 1 ;
    } else if (size === "Large") {
      console.log ("Size in cost method is: " + this.size);
      multiplier = 1.33 ;
    } else if (size === "Extra Large") {
      console.log ("Size in cost method is: " + this.size);
      multiplier = 1.75 ;
    } else {
      multiplier = 0;
    }
    yourCost = (this.basecost * multiplier + this.toppings.length-1).toFixed(2);
    console.log("Toppings are: " + this.toppings);
    // this.toppings.length-1 adds $1 for every topping after the one gratis topping.
  return yourCost;
};

function randomToppings(someToppings){
  // alert("Toppings: " + someToppings);
  var myToppings = [ someToppings[Math.floor(Math.random() * someToppings.length)], someToppings[Math.floor(Math.random() * someToppings.length)] ];
  return myToppings;
}

function buildSizeForm() {
  // build the sizes form on the fly so if the sizes offered ever changes we're coverd.
  var sizeFormHtml =
    '<select class="form-control" id="pizzaSizes">' +
      '<option>Personal</option>' +
      '<option>Small</option>' +
      '<option>Medium</option>' +
      '<option>Large</option>' +
      '<option>Extra Large</option>' +
    '</select>';
  $("#sizes").html(sizeFormHtml);
}

function buildToppingsForm(someToppings) {
  // build the toppings form on the fly so if the toppings list array changes we're coverd.
  var pizzaFormHtml = '<select multiple size="1" class="form-control" id="pizzaToppings">';
  for (var i = 0; i < someToppings.length; i++) {
    pizzaFormHtml += "<option>" + someToppings[i] + "</option>";
  }
  pizzaFormHtml += '</select>';
  $("#toppings").html(pizzaFormHtml);
}

// User Interface Logic

function showPizza(myPizza, newSize, newToppings){
  var pizzaHtml = "</div> YOUR ORDER: " + "<br>" + "ONE " + myPizza.size + " pizza with " + myPizza.toppings + "</div>"
  pizzaHtml += "<br>That will be: " + myPizza.cost(newSize, newToppings) + " please."
  $("#pizza").html(pizzaHtml);
  $("#pizzaViewer").show();
  // $('#pizzaForm')[0].reset();
  $('#pizzaForm option[selected="selected"]').each(
    function() {
        $(this).removeAttr('selected');
    }
  );
}

$(document).ready(function(event) {
    var sizes = ["Personal", "Small", "Medium", "Large", "Extra Large"];
    var toppings = ["Pepperoni", "Pineapple", "Canadian Bacon", "Sausage", "Mushrooms", "Mozzarella Cheese", "Onion", "Garlic", "Bell Peppers", "Olives"];

    buildSizeForm();
    buildToppingsForm(toppings);

    var randomSizesIndex = Math.floor(Math.random() * sizes.length);
    console.log("Random size: " + sizes[randomSizesIndex]);
    var randomToppingIndex = Math.floor(Math.random() * toppings.length);
    console.log("Random toppings: " + toppings[randomToppingIndex]);

    $("form#pizzaForm").submit(function(event) {
      var newSize = $("#pizzaSizes").val();
      // var newToppings = $("#pizzaToppings").val();
      var newToppings = $('#pizzaToppings').val();

      console.log("Size choice = " + newSize);
      event.preventDefault();
      // var newPizza = new Pizza(newSize, randomToppings(toppings));
      var newPizza = new Pizza(newSize, newToppings); // instead of new toppings
      showPizza(newPizza);
      console.log("Chosen pizza is: " + newPizza);
    });
});
