# Donation in India

## Overview

This web application consists of several key features:

1. **Navbar (Appears on all pages)**
   - Create a reusable Navbar component with a website logo on the left side and three menu items (Home, Donation, Statistics) on the right side.
   - Implement routing using a library like React Router to handle navigation between pages.
   - Apply an "active" class to highlight the currently selected menu item.

2. **Banner Section**
   - Create a Banner component that includes a title, a search bar, and a background image with an overlay.
   - Use CSS to style the banner and ensure that it covers only the banner section with the background image.

3. **JSON Data**
   - Create a JSON file containing a minimum of 12 data objects.
   - Each data object should include properties like Picture, Title, Category, Category Background Color, Card Background Color, Text and Button Background Color, Description, and Price.

4. **Home Page**
   - Design a Home page that displays at least 12 cards.
   - Arrange the cards in a grid with four cards in each row.
   - Each card should have three different colors for its background, category, and title/category text as specified in the JSON data.
   - Utilize mapping to render the cards dynamically.

5. **Donation Details Page (Dynamic Route)**
   - Implement a dynamic route for the Donation Details page.
   - Users can view detailed information about a specific donation.
   - The page should display the Picture, Title, Description, and a Donate button with the corresponding Price.
   - Implement a toast or a sweet alert for success messages when the Donate button is clicked.

6. **Donation Page**
   - Create a Donation Page that displays a list of all donations made.
   - Organize the donations in rows with two cards in each row.
   - Each card should include Picture, Category, Title, Price, and a View Details button.
   - If there are more than four donations, display a "See All" button to reveal the remaining data.
   - Ensure that card colors, category text, price, and button backgrounds match the JSON data.

7. **Statistics Page (Pie Chart)**
   - Develop a Statistics Page with a pie chart.
   - The pie chart represents your donations against the total donations.
   - Calculate the percentage and display it on the pie chart.
   - Use a charting library like Recharts to implement the pie chart.



## Technologies Used

- React
- React Router
- CSS (for styling)
- [Recharts](https://recharts.org/) (for the pie chart)



