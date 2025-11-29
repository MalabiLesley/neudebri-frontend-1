# Nuedebri Health App Kenya

## Overview
Nuedebri Health App is a modern digital platform designed for patient monitoring, facilitating seamless communication between patients, doctors, nurses, and administrators. This application aims to enhance healthcare delivery through efficient monitoring and management.

## Features
- **Real-time Status Monitoring**: Connects to a backend service to fetch and display the current status of the application.
- **Responsive Design**: Built with Tailwind CSS for a modern and responsive user interface.
- **Reusable Components**: Utilizes a component-based architecture for easy maintenance and scalability.

## Project Structure
```
neudebri-frontend
├── app
│   ├── layout.tsx          # Main layout of the application
│   ├── globals.css         # Global CSS styles
│   ├── page.tsx            # Main entry point for the application
│   └── components           # Contains reusable components
│       ├── Header.tsx      # Header component
│       ├── Footer.tsx      # Footer component
│       └── StatusCard.tsx   # Component to display backend status
├── components
│   └── ui
│       └── Button.tsx      # Reusable button component
├── lib
│   └── api.ts              # API call functions
├── hooks
│   └── useStatus.ts        # Custom hook for managing backend status
├── types
│   └── index.d.ts          # TypeScript types and interfaces
├── styles
│   └── tailwind.css        # Tailwind CSS styles
├── public                  # Static assets
├── .eslintrc.json          # ESLint configuration
├── .prettierrc             # Prettier configuration
├── next.config.js          # Next.js configuration
├── package.json             # npm configuration
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/MalabiLesley/neudebri-frontend.git
   ```
2. Navigate to the project directory:
   ```
   cd neudebri-frontend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to view the application.

### Building for Production
To create an optimized production build, run:
```
npm run build
```

### License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.
