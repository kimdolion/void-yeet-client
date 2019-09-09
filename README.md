# yeet-into-void
    A fullstack SPA built during General Assembly's Software Engineering Immersive.
    A simple CRUD with one to many resource relationships.
    This is an app you can use to catalog and throw away negative thoughts/feelings in a more fun way.
    To be more specific, to yeet the bad thoughts into the darkness, where they can live away from you, or be permanently deleted.

[Void-Yeet Github Pages Client]()
[Void-Yeet Heroku API](https://void-yeet.herokuapp.com)
[Void-Yeet Backend Repo](https://github.com/kimdolion/void-yeet-backend)
[Void-Yeet Frontend Repo](https://github.com/kimdolion/void-yeet-client)

## Technologies Used
HTML, CSS, JavaScript, Boostrap, AJAX

## Development Process
Created HTML with user authentication parts.
Added HTML for CRUD yeet options.
Went back to the backend to double check and update controllers.
Changed HTML around to see how well the auth pieces were working based on old project.
Added a handlebar to create a delete button on each of the thoughts following the index action.
Began adding many more files/code I knew I would need with the help of past lessons.
Updated files to the urls and proper data table.



## Problem Solving
Create
  When I created a thought to send to the api, the api was logging the words as null. Console log registered them under title. I hadn't realized how the HTML was interacting with everything else and started searching through my API and my front-end JS files to figure out where title was coming from. Turns out I setup my form for create incorrectly. Console log is my best friend. Probably could have solved that problem faster using find but I wanted to make sure I understood the pathways of where the information was coming from. Also legitimately forgot that the HTML was as important to the muscles that is JS.

## Unsolved Problems


## Wireframes and User Stories
[Wireframes](https://docs.google.com/document/d/1KwBhRLp_6zkn_2rRmb9peL4R21ZophPq4RHJ0sfLhYY/edit?usp=sharing)

[User Stories](https://docs.google.com/document/d/1mT_4jPHt9VJXNKliIf85UhxIWa60qeKjdIjKgMj0N6c/edit?usp=sharing)

[ERD](https://docs.google.com/document/d/1GELci8kxVrlS7039vx3CMMipWjQ_RotPNJauMfnQScE/edit?usp=sharing)

## Stretch goals
- Choose the animate.css styling for the words
- Replay button
- Legitimate resources to connect with when the negative thoughts aren't going away

## Additional Resources
[Heroku Examples](https://void-yeet.herokuapp.com/examples)
