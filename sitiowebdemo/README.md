# Landing Page for a Web Programming Course

This project is a landing page designed to promote a web programming course. It showcases the skills and technologies taught in the course, aiming to attract potential students. The landing page is built using HTML, CSS, and JavaScript, demonstrating practical application of these technologies.

## Technologies Used

*   **HTML:**  Provides the structure and content of the landing page. Semantic HTML5 tags are used to organize the content effectively.
*   **CSS:** Styles the HTML elements to create an appealing and responsive design.  The project likely utilizes CSS techniques like Flexbox and Grid for layout management, as indicated by the course content.
*   **JavaScript:** Adds interactivity and dynamic behavior to the landing page.  This could include features like the testimonial slider, interactive questions, and potentially form handling.
*   **Potentially SASS:** The presence of  `<h3 class="about__title">Sass</h3>`  indicates that the project uses SASS for CSS preprocessing and management

## Project Structure

The project's file structure includes:

*   `index.html`:  The main HTML file containing the structure of the landing page.
*   `css/`:  Directory containing CSS files (`normalize.css`, `estilos.css`). `normalize.css` helps ensure consistent styling across different browsers. `estilos.css` likely holds the main styles for the landing page.
*   `images/`:  Directory containing images used in the landing page (logo, icons, etc.).
*   `js/`: Directory containing JavaScript files (`slider.js`, `questions.js`, `menu.js`). These files handle the testimonial slider, frequently asked questions, and menu functionality.

## Key HTML Elements and Sections

The HTML code is structured into several key sections:

*   **Header (`<header class="hero">`):**
    *   Contains the navigation menu (`<nav class="nav">`) with links to different sections of the page (Home, About, Contact, Blog).
    *   Includes a hero section (`<section class="hero__container">`) with a prominent title, a brief description of the course, and a call-to-action button.
*   **Main (`<main>`):**
    *   **About Section (`<section class="container about">`):**  Describes what students will learn in the course, highlighting key topics like CSS Layouts, Animations, and potentially Sass.
    *   **Knowledge Section (`<section class="knowledge">`):**  Presents a more detailed overview of the course and includes a call to action.
    *   **Price Section (`<section class="price container">`):**  Showcases different pricing plans or course modules (Flexbox, Grid, Animations) with their respective features and prices.
    *   **Testimonial Section (`<section class="testimony">`):**  Displays student testimonials using a slider to build trust and credibility.  JavaScript (`slider.js`) is used to control the slider functionality.
    *   **Questions Section (`<section class="questions container">`):**  Provides answers to frequently asked questions to address potential concerns and provide more information. JavaScript (`questions.js`) is used to handle the expanding/collapsing of answers.
*   **Footer (`<footer>`):**
    *   Contains a navigation menu, a newsletter subscription form, social media links, and copyright information.

## HTML Meta Tags

The `<head>` section includes important meta tags for SEO and social media sharing:

*   `<meta name="description" ...>`:  Provides a brief description of the landing page for search engines.
*   `<meta property="og:title" ...>` and `<meta property="og:description" ...>`:  Define the title and description that will be displayed when the page is shared on social media platforms like Facebook.
*   `<meta property="twitter:title" ...>` and `<meta property="twitter:description" ...>`: Define the title and description that will be displayed when the page is shared on Twitter.

## JavaScript Functionality

The JavaScript files enhance the user experience:

*   `slider.js`:  Implements the testimonial slider, allowing users to browse through different student reviews.
*   `questions.js`:  Handles the interactive FAQ section, allowing users to expand and collapse the answers to questions.
*   `menu.js`:  likely manages the behavior of the navigation menu, especially on smaller screens (e.g., a hamburger menu).

## Areas for Improvement

*   **Accessibility:**  Consider adding ARIA attributes to improve accessibility for users with disabilities.
*   **Image Optimization:** Optimize images to reduce file sizes and improve page loading speed.
*   **Code Comments:** Add more comments to the HTML, CSS, and JavaScript code to improve readability and maintainability.
*   **Responsiveness:** Ensure the landing page is fully responsive and looks good on all devices (desktops, tablets, and mobile phones).  Test thoroughly on different screen sizes.
*   **SEO:**  Further optimize the landing page for search engines by using relevant keywords in the content and meta tags.

This landing page project provides a solid foundation for promoting a web programming course. By focusing on clear communication, engaging design, and interactive elements, it can effectively attract potential students and encourage them to enroll.

