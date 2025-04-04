## Portfolio
A modern, responsive portfolio website showcasing my skills, experience, and projects as an ERP Consultant and Technology Professional.

## Features

- **Dark Theme UI**: Elegant dark color scheme with accent highlights
- **Database Integration**: MySQL backend storing all portfolio content
- **Responsive Design**: Fully functional on all device sizes
- **Dynamic Content**: Data fetched and rendered from database
- **Sections**:
  - About Me
  - Education
  - Work Experience
  - Skills
  - Projects
  - Tools
  - Contact Information

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MySQL

## Installation

1. Clone the repository:
   git clone https://github.com/Shar-kabiru/Portfolio_website.git
   
   cd portfolio
3. Install dependencies:
      npm install express mysql cors
4. Set up MySQL database:
      Create database 
      Populate with your data
5. Configure database connection:
      Edit db.js with your MySQL credentials:

        javascript
        Copy
        {
          host: 'localhost',
          user: 'your_username',
          password: 'your_password',
          database: 'portfolio_db'
        }
6. Start the server:
        node server.js
7. Open in browser:
      
