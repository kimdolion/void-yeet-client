# yeet-into-void
A fullstack SPA built during General Assembly's Software Engineering Immersive.

A simple CRUD with one to many resource relationships.
This is an app you can use to catalog and throw away negative thoughts/feelings in a more fun way.

To be more specific, to yeet the bad thoughts into the darkness, where they can live away from you, or be permanently deleted.

[Void-Yeet Github Pages Client](https://kimdolion.github.io/void-yeet-client/)

[Void-Yeet Frontend Repo](https://github.com/kimdolion/void-yeet-client)

[Void-Yeet Heroku API](https://void-yeet.herokuapp.com)

[Void-Yeet Backend Repo](https://github.com/kimdolion/void-yeet-backend)


## Technologies Used
HTML, CSS, JavaScript, Boostrap, AJAX, Handlebars

## Development Process
Created HTML with user authentication parts.

Added HTML for CRUD yeet options.

Went back to the backend to double check and update controllers.

Changed HTML around to see how well the auth pieces were working based on old project.

Added a handlebar to create a delete button on each of the thoughts following the index action.

Began adding many more files/code I knew I would need with the help of past lessons.
Updated files to the urls and proper data table.

Started trying to figure out a cleaner sign-in/sign-up system. Flucutated back and forth between just relying on what I did and spending time to dig into Bootstrap.

Updated backend some more once I realized that the Create action was logging the entries as title with null.

The last two days have honestly been a blur of constantly going through the HTML and the JS files and testing the CSS and Bootstrap stylings. Once I had everything working with the backend and the front end properly doing everything I needed to I would pick an element to improve then go through each file related to it to improve on it.

## Problem Solving
#### Create
When I created a thought to send to the api, the api was logging the words as null. Console log registered them under title. I hadn't realized how the HTML was interacting with everything else and started searching through my API and my front-end JS files to figure out where title was coming from. Turns out I setup my form for create incorrectly. Console log is my best friend. Probably could have solved that problem faster using find but I wanted to make sure I understood the pathways of where the information was coming from. Also legitimately forgot that the HTML was as important to the muscles that is JS.

Another issue I didn't realize was happening was that you can flood the input field with text, aka try to create several things and submitting each one, and the animation wouldn't run until the timeout function was finished after 2 seconds.

I tried setting the timeout to be a smaller window but that still only worked so fast. Decided to trigger hiding the form so users would just focus on the one thought that they just submitted/yeeted.

#### Animation
I struggled to get the animation working because I wasn't sure exactly how to target what the user had just created. I did not want to overcomplicate the create action so I created another div that would take the most recent entry in which I could then target with the animation. Getting the animation setup was a little confusing at first, so I tried out different animations just to see how everything interact with each other. I realized I could use the create event to add an animation class that would also be removed afterwards to prevent the animation from replaying.

#### Styling
My understanding of Bootstrap grew immensely with this project because I overestimated how straightforward adding or removing classes with stylings attached would be. When I had created my index buttons, it hadn't occurred to me make it easier for the user to be able to continue to access them after activating the index function. This being more obvious once I had filled my test accounts with a lot of entries that would require scrolling through to the top. Another option would have been to simply create a back to top link mechanism but I figured having sticky buttons would be far more useful than being forced to forever scroll to the end just to be jettisoned back up, which can be a visually nauseating experience.

## Unsolved Problems
Not really a true problem but I would have loved to have a better way to generating and placing the stars for the background. I'm sure it would have required utilizing JS's random math mixin to be "DRYer". For now I just had to repeatedly make stars, try to plot them without repeating myself, and rotate each div of stars. Rather tedious but it works for now.

## Wireframes and User Stories
[Wireframes](https://docs.google.com/document/d/1KwBhRLp_6zkn_2rRmb9peL4R21ZophPq4RHJ0sfLhYY/edit?usp=sharing)

[User Stories](https://docs.google.com/document/d/1mT_4jPHt9VJXNKliIf85UhxIWa60qeKjdIjKgMj0N6c/edit?usp=sharing)

[ERD](https://docs.google.com/document/d/1GELci8kxVrlS7039vx3CMMipWjQ_RotPNJauMfnQScE/edit?usp=sharing)

## Stretch goals
- Users choose the animate.css styling for the words
- Replay button (particularly on individual posts that let's you reyeet without recreating the thought)
- Legitimate resources to connect with when the negative thoughts aren't going away
- Tie the number of stars in the background to the number of thoughts/characters of thoughts a person has yeeted

## Additional Resources
[Medium: Animated Galaxy Background](https://medium.com/@jensaxena/css-tutorial-animated-geometric-galaxy-background-ad3835c36ce1)
