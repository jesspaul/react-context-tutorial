# React Context API Tutorial Project
This project was created following The Net Ninja's [Youtube tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI) on React Context & Hooks.

## Lessons Learned 
* Normally, data is passed as props through components, even components that don't need the data
* Use Contexts to share "global" data across multiple child components
* Context: data, provider: surrounds the components that will use the data
* Consume context:
    * contextType - only for class based components, can only use one context
    * Consumer - also works with functional components, can use more than one context per component
    * useContext hook - only for functional components

## Project Features
* Display a list of books with title and author
* Ability to delete a book from the list
* Form to add new books to the list