# Solita Name Application 2021

This is a front-end application for Solita Dev Academy recruiting assignment.

## Technologies used

ReactJS, vanilla CSS

## Write up on process

I started by sketching up some designs in Figma for desktop and mobile devices. I approached the problem mobile-first. This kind of application is easily designed for mobile as the structure of the application works well in a column layout.

Here's the initial design.

![Figma design document](https://i.ibb.co/pf1nRyx/solita-figma-sketch.png)

Now that I had the layout and design I was looking for I began by creating an empty react application. The most logical way to split the application was into 3 components: quick start information panel, the actual list of names / data and a search functionality.

Usually I create CSS files for each component separately, but the application wasn't going to be large so I opted for a single CSS file to speed up the process.

### Quick start

This is just a simple text-containing element so I created a function component and styled it according to my Figma document.

### Name list

The name list component needed some interactivity (sorting) so I created a class component to hold the sorting parameters in the class state which allowed me to easily update the results by updating the state.

I created buttons with onClick handlers for sorting by name and amount and some rudimentary logic to decide whether to change the sort by parameter or switch between ascending and descending. Rest was pretty much just styling it to spec. Due to the sorting happening on click events, I had to sort intially by amount in the constructor before passing the data into the class state.

### Search

The search component was mostly interaction and logic, so it needed to be a class component as well. I first thought about just executing the search on click but then decided it would be better for the user if the results updated in real time. I opted for an onChange handler which used Array.filter to query names.json values for matching names. This also made it easy to display the total number of names in the application when you first open the page, and the tally would update nicely when you entered a more specific search query. 
I added conditions to only show "Best match" if results were between 0 and total names. The "Best match" logic was just sorting the list alphabetically and selecting the first element after filtering the name array.

I used an SVG for the search icon, which is from iconmonstr.com. Their license allows this kind of use and only forbids selling their icons individually or using them as a main part of a product (e.g printing it on a t-shirt).

## Final notes

I thought about adding a backend in NodeJS to allow for adding and removing names, but decided I didn't really have the time for it right now. Implementing a backend for just one API route for listing the names didn't seem worth it to me. I have some backend API examples in my other projects (e.g. habits repo)
