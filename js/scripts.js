// Business Logic

function Pizza (size, toppings) {
  this.size = ["Small"]; // expext an array of sizes
  this.toppings = ["Pepperoni"]; // expext an array of toppings
}

// Pizza.prototype.cost = function (pizzaSize, pizzaToppings) {
  // var baseCost = 9.99;
  // var multiplier =1;
  // if (pizzaSize === "Small") {
  //   baseCost = 9.99;
  // }
  // if (pizzaToppings.length === 1 ) {
  //   multiplier = .75;
  // }
//   this.yourCost = baseCost * multiplier;
//   return this.yourCost;
// };

Pizza.prototype.cost = function () {
  this.yourCost = 1;
  return this.yourCost;
};

function showPizza(myPizza){
  // var pizzaHtml = "</div>" + myPizza + "</div>"
  var pizzaHtml = "</div> YOUR ORDER: " + "<br>" + "ONE " + myPizza.size + " pizza with " + myPizza.toppings + "</div>"
  console.log("myPizza: " + JSON.stringify(myPizza.toString()));
  // pizzaHtml += "<br>That will be: " + myPizza.cost(myPizza.size, [myPizza.toppings]) + " please."
  pizzaHtml += "<br>That will be: " + myPizza.cost() + " please."
  $("#pizza").html(pizzaHtml);
  $("#pizzaViewer").show();
}

// User Interface Logic
$(document).ready(function(event) {
  // $("form#name-form").submit(function(event) {
    // var aPizza = "Small Pepperoni"
    // showPizza(aPizza);
    var sizes = ["Personal", "Small", "Medium", "Large", "Extra Large"];
    var toppings = ["Pepperoni", "Pineapple", "Canadian Bacon", "Sausage", "Mushrooms", "Mozzarella Cheese", "Onion", "Garlic", "Bell Peppers", "Olives"];
    var randomSizesIndex = Math.floor(Math.random() * sizes.length);
    console.log(sizes[randomSizesIndex]);
    var randomToppingIndex = Math.floor(Math.random() * toppings.length);
    console.log(toppings[randomToppingIndex]);
    var newPizza = new Pizza();
    console.log("newPizza's cost: " + newPizza.cost());
    showPizza(newPizza);

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
