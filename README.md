# PaintArc Website

PaintArc is a modern, visually polished website for a premium painting services company. The project showcases residential, commercial, and exterior painting solutions through a responsive landing page with animated sections, a portfolio gallery, testimonials, and a quote request form.

## Project Overview

PaintArc is designed to help a painting business present its services professionally online. The site combines elegant visuals, smooth interactions, and clear calls to action to make it easy for visitors to explore services, view completed projects, and request a quote.

## Features

- Responsive one-page website layout
- Smooth scrolling and animated hero section
- Service cards for interior, exterior, commercial, and specialty finishes
- Portfolio gallery with filtering by project type
- Testimonials section for social proof
- Contact/quote form with client-side validation
- PHP-powered form submission backend
- Clean and modern styling with a premium brand feel

## Installation

There is no build step required for this project.

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   ```
2. Navigate to the project folder:
   ```bash
   cd PaintArc_Website
   ```
3. Start a local server.

You can use any of the following options:
- Open the project directly in a browser
- Use VS Code Live Server
- Use XAMPP, WAMP, or another local PHP server for the contact form backend

> Note: To make the quote form work fully, configure the email address in File.php.

## Usage

Once the site is running:

- Open index.html in your browser or serve the folder through a local web server
- Browse the homepage sections: Home, Services, Gallery, Reviews, and Contact
- Use the navigation to explore services and portfolio projects
- Submit the contact form to request a quote

Example:

```bash
php -S localhost:8000
```

Then open:

```text
http://localhost:8000/
```

## Project Structure

```text
PaintArc_Website/
├── index.html          # Main website structure
├── style.css           # Styling and responsive design
├── Script.js           # Interactivity, animations, and form handling
├── File.php            # PHP backend for contact form submission
├── images/             # Project images and assets
└── README.md           # Project documentation
```

## Technologies Used

- HTML5 for page structure
- CSS3 for layout, visuals, and responsive styling
- JavaScript for animations, navigation, filtering, and form behavior
- PHP for backend form handling
- Font Awesome icons and Google Fonts for visual polish

## Customization

To customize the website for your own brand or business:

- Update the text content in index.html to match your services and company details
- Replace images in the images folder with your own project photos
- Adjust colors, fonts, and layouts in style.css
- Change the recipient email in File.php for the contact form

## Contact

For questions, feedback, or collaboration opportunities, please reach out through the contact form on the website or via the project owner’s preferred contact details.

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and test them locally
4. Commit your work:
   ```bash
   git commit -m "Add your feature"
   ```
5. Push the branch and open a pull request

Please keep the design consistent with the existing premium, modern aesthetic and ensure any UI changes remain responsive.

## License

This project is intended for personal or educational use unless otherwise specified by the project owner.
