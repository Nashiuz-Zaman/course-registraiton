# Project Features

- The homepage lists all the courses users can enroll in.
- Users can add courses on the list using the select button.
- Users cannot select courses worth more than 20 credit hours.
- Users cannot select the same course more than once.
- Users can see the total cost of all the selected courses in the shopping cart for courses.
- Users can see the total credit hours they are enrolling for in the shopping cart for courses.
- Users can also see how many more credit hours they can enroll for their education in the remaining hours section of the shopping cart.

# How I managed state in the assignment project

I have used the useState hook to manage multiple states of the application. I have lifted up the states as necessary to a common parent component for all the child components and passed down the states as props by using the prop drilling technique into the child components to implement functionality inside them accordingly based on the states. According to the states different content is rendered.
