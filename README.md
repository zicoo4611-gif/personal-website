# Personal Website

This is a personal website project built using React and TypeScript. The website serves as a portfolio to showcase individual projects, provide information about the individual, and include a contact form.

## Project Structure

The project is organized as follows:

```
personal-website
├── public
│   └── index.html          # Main HTML document
├── src
│   ├── main.tsx           # Entry point of the React application
│   ├── App.tsx            # Main App component with routing
│   ├── components          # Reusable components
│   │   ├── Header.tsx     # Navigation menu and branding
│   │   ├── Footer.tsx     # Copyright and additional links
│   │   ├── Hero.tsx       # Prominent section on the homepage
│   │   ├── About.tsx      # Information about the individual
│   │   ├── Projects.tsx    # Showcase of projects
│   │   └── Contact.tsx    # Contact form or information
│   ├── pages              # Page components
│   │   ├── Home.tsx       # Landing page
│   │   └── Resume.tsx     # Resume or CV page
│   ├── styles             # CSS styles
│   │   ├── globals.css     # Global styles
│   │   └── components.css   # Component-specific styles
│   └── types              # TypeScript types and interfaces
│       └── index.d.ts     # Type definitions
├── package.json           # npm configuration file
├── tsconfig.json          # TypeScript configuration file
├── vite.config.ts         # Vite configuration file
├── .gitignore             # Git ignore file
└── README.md              # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd personal-website
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the development server:**
   ```
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Features

- Responsive design
- Dynamic routing with React Router
- TypeScript for type safety
- Modular components for reusability

## License

This project is licensed under the MIT License. See the LICENSE file for more details.