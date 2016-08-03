**Optimization project**
===============================

Files:
======
* dist folder - new updated and optimized code.
    * css - stylesheets
    * index.html
    * js - javaScript files
    * images - pictures
    * Views - code for the pizza site.
* Src folder - original old code.

### Getting started
* [Camerons portifolia](https://izzygld.github.io/optimized/dist/index.html) Clink on the linkfor a optimized version of Camerons portifolia.
* [pizza page](https://izzygld.github.io/optimized/dist/views/pizza.html)
Click on Cam's Pizzeria To order your pizza you need to use the size slider to select the size of your pizza. You can scroll throught the selection and choose which one you want to order.


Modifications Included:
=============================

# Camerons portifolio Optimizations:

* Reduce the size of pizzaria.jpg to 100px width
* Inline css/style.css
* Make google-analytics script async
* Add a media query for print.css
* Use Web Font Loader to load the Google webfont asynchronously
* Minify CSS
* Compress jpg and png files
* Minify HTML

# Cam's Pizza Store Optimizations:

* I modified the amount of pizzas rendered in the background from 200 to 40 which greatly reduced the frame rate issue.
* To further reduce the frame rate I assigned ```document.getElementsByClassName("mover")``` to items so that it isn't being assigned each time the loop happens. It simply just gets the items.
* I also took out ```document.body.scrollTop / 1250;``` which prevents the calculation being done everytime you scroll saving you more of those precious frames.
*  Also took out ```var phase = Math.sin(scrollT + (i % 5));``` and ```var pizzaDiv = document.getElementById("randomPizzas")``` so that they don't get calculated each time the for loop is ran.

and finally Since we are changing the size of all the pizzas I made the calculations outside of the loop. That way each pizza knows what size it needs to be depending on the selector.

Credits and acknowledgements:
=============================
This project was created by me using the framework given to me by Udacity and also received a great deal of help using the Udacity forum discussions by other students and mentors.


Thanks for trying it!.

Izzy Goldman