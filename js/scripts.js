// Business Logic

function Pizza (size, toppings) {
  // this.size = ["Small"]; // expext an array of sizes
  // this.toppings = ["Pepperoni", "Olives"]; // expext an array of toppings
  this.size = size; // expext an string of size
  this.toppings = toppings; // expext an array of toppings

}

Pizza.prototype.cost = function () {
  var baseCost = 10.99;
  var multiplier = 1;
  var size = this.size;
  // console.log("mySize in cost: " + this.size + " and it's a " + typeof(size));
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
    } else {
      // (size === "Extra Large")
      console.log ("Size in cost method is: " + this.size);
      multiplier = 1.75 ;
    }
    var yourCost = (baseCost * multiplier + this.toppings.length-1).toFixed(2);
  return yourCost;
};

function randomToppings(someToppings){
  // alert("Toppings: " + someToppings);
  var myToppings = [ someToppings[Math.floor(Math.random() * someToppings.length)], someToppings[Math.floor(Math.random() * someToppings.length)] ];
  return myToppings;
}

function buildSizeForm() {
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

function showPizza(myPizza){
  // var pizzaHtml = "</div>" + myPizza + "</div>"
  var pizzaHtml = "</div> YOUR ORDER: " + "<br>" + "ONE " + myPizza.size + " pizza with " + myPizza.toppings + "</div>"
  // console.log("myPizza: " + JSON.stringify(myPizza.toString()));
  // pizzaHtml += "<br>That will be: " + myPizza.cost("Small", ["Pepperoni"]) + " please."
  pizzaHtml += "<br>That will be: " + myPizza.cost(myPizza.size, myPizza.toppings) + " please."
  // pizzaHtml += "<br>That will be: " + myPizza.cost() + " please."
  $("#pizza").html(pizzaHtml);
  $("#pizzaViewer").show();
}

// User Interface Logic
$(document).ready(function(event) {
    buildSizeForm();
  // $("form#name-form").submit(function(event) {
    // var aPizza = "Small Pepperoni"
    // showPizza(aPizza);
    var sizes = ["Personal", "Small", "Medium", "Large", "Extra Large"];
    var toppings = ["Pepperoni", "Pineapple", "Canadian Bacon", "Sausage", "Mushrooms", "Mozzarella Cheese", "Onion", "Garlic", "Bell Peppers", "Olives"];
    var randomSizesIndex = Math.floor(Math.random() * sizes.length);
    console.log("Random size: " + sizes[randomSizesIndex]);
    var randomToppingIndex = Math.floor(Math.random() * toppings.length);
    console.log("Random toppings: " + toppings[randomToppingIndex]);
    // var newPizza = new Pizza(sizes[1], ["Pepperoni", "Olives"]);
    // var randomToppings = [ toppings[Math.floor(Math.random() * toppings.length)], toppings[Math.floor(Math.random() * toppings.length)] ];
    var newPizza = new Pizza(sizes[randomSizesIndex], randomToppings(toppings) );


    console.log("newPizza's cost: " + newPizza.cost());
    showPizza(newPizza);

    $("form#pizzaForm").submit(function(event) {
      var newSize = $("#pizzaSizes").val();
      console.log("Size choice = " + newSize);
      event.preventDefault();
      var newPizza = new Pizza(newSize, randomToppings(toppings));
      showPizza(newPizza);
      console.log("Chosen pizza is: " + newPizza);
    });

    // $("form#some-form").submit(function(event) {
    //   var someInput = $("input#some-input").val();
    //
    //   event.preventDefault();
    // });

  //   name = $("#username").val();
  //   $("#user-name").replaceWith(", " + name + ". P");
  // });
  // $("form#number-form").submit(function(event) {
  //   event.preventDefault();
  //   if ((name === "") || (name === null)) {   // trap for empty string and null!
  //     name = "Dave";
  //   }
  //   $("#results-p").empty(); // empty the DOM section
  //   var myNumber = $("#number").val();
  //   var direction = $("input:radio[name=direction]:checked").val();
  //   if (isValidInput(myNumber)) {
  //     myNumber = loopTheirNumber(myNumber, direction, name);
  //     myNumber = "<span class='myNumberFormat'>" + myNumber + "</span>";
  //     $("#results h2").text("RESULTS:");
  //     $("#results-p").append("<span class='myNumberFormat'><strong>Your Number: </strong><span class='output'>" + $("#number").val() + "</span></span><br>" +myNumber);
  //     $("#results").show();
  //   }
  //   $("#number").val(""); // clear the text form value
  // });
});
