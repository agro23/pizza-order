# pizza-order

#### _A program to simulate ordering pizza, 01/26/18_

#### _**Andy Grossberg**_

## Description

_This is the Friday Project for Week Four of Intro to Programming at Epicodus_

## Location

_You can find the files at https://www.github.com/agro23/pizza-order_

## Rules for the pizza ordering assignment:

Order Pizza

* Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.

* Allow the user to choose toppings and size for the pizza they'd like to order.

* Create a pizza object constructor with properties for toppings and size.

* Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

* Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes.


## Methodology

_I chose to build the select boxes in the form on the fly so that the size and topping options could be changed at a later date without having to alter the HTML._
_My formula for the pizza cost was to set the base cost in the pizza object and then calculate it against a multiplier where Medium was 1 and larger or smaller pizzas had a higher or lower multiple. So to change the prices you only need to alter the cost prototype. Additionally, each extra topping after the first just added $1 to the price._

### _The following specs are included in the program:_

**Take input from the user for pizza (size and toppings)**
**display choice(s) back to them.**

* The program shows a pizza
  - Example Output: Here's your pizza!

* The program creates a Pizza object with sizes and toppings and a method to calculate the cost

* The program shows a pizza with a random size chosen from multiples.
  - Example Output: Random size: Personal

* The program shows a pizza with a random topping chosen from multiples.
  - Example Output: Random toppings: Pineapple

* The program shows the cost of sample pizzas based on a scratch formula
  - Example Input:
  - Example Output: ONE Small pizza with Pepperoni,Olives
                    That will be: 8.49 please.

* The program accepts user input to choose the size (Input via a Select Box and form with submit)
  - Example Input: > Large --> SUBMIT
  - Example Output: Size choice = Large

* The program accepts user input to choose the size and 'orders' that size plus random toppings
  - Example Input: > > Large --> SUBMIT
  - Example Output: ONE Large pizza with Pepperoni,Olives
                    That will be: $14.62 please.

* The program accepts user input to alter the topping choice (Input via a form with submit)
  - Example Input: Pepperoni / Medium
  - Example Output:
    * ONE Medium pizza with Pepperoni
    * That will be: 10.99 please.

* The program lets the user pick multiple toppings (Input via a form with multiple select)
  - Example Input: Pepperoni/Sausage/Olives / Medium
  - Example Output:
    * ONE Medium pizza with Pepperoni,Sausage,Olives
    * That will be: 12.99 please.

* The user's choices are displayed to an appropriate Output panel

* Output results formatted to look nicer

* Choices are in selector checkboxes

* Page uses images and some styling.

* Refactor code and clean up code

## Setup/Installation Requirements

* Download the files from the repository into appropriately named directories.
* Open the files with the browser of your choice.

## Known Bugs

_There are no known issues at this time. However, the program does not catch non-number input._

## Support and contact details

_You can contact me at andy.grossberg@gmail.com_

## Technologies Used

_Uses HTML, CSS, javascript, and jQuery._

### License

*Distributed under the GPL*

Copyright (c) 2018 **_Andy Grossberg_**
