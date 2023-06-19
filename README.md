# -22110621.github.io-a-digital-portfolio
This is the source code for my digital portfolio

# Powered by Vite + React
This portfolio has been created using Vite and React for faster load times

# Why Use React and Vite Over HTML and JS?

Using React and Vite instead of plain HTML and JavaScript offers several advantages:

1. **Efficiency and Performance**: React's component-based architecture and Vite's fast build tool optimize development and result in faster page load times.

2. **Developer Productivity**: React's declarative syntax and vast ecosystem, along with Vite's intuitive development experience, enhance productivity.

3. **Component Reusability**: React promotes modular and reusable UI components, reducing code duplication and improving maintenance.

4. **Developer Tooling and Community Support**: React and Vite provide excellent developer tooling and have active communities, offering resources and solutions.

5. **Scalability and Ecosystem**: React's mature ecosystem and Vite's growing plugin ecosystem support scalability and provide solutions for various application needs.

In summary, using React and Vite empowers developers with efficient workflows, performance optimization, code modularity, and access to a rich ecosystem.



## How to build for deployment?
# Building a Vite App for Production

To build a Vite app for production, follow the steps outlined below:

## 1. Initialize the Project

- Create a new directory for your project.
- Open a terminal in the project directory.
- Run the following command to initialize a new Vite project:
  

- Follow the prompts to configure your project. Choose the desired framework (e.g., React, Vue, etc.), and select the project options accordingly.

## 2. Install Dependencies

- Navigate into the project directory:
`cd <project-directory>`

- Install project dependencies by running:
`npm install`

- This will launch your app in the development mode, allowing you to test and make changes.

## 4. Production Build

- When you're ready to build your app for production, stop the development server if it's still running.
- Run the following command to generate a production-ready build:
`npm run build`

- Vite will create an optimized build in the `dist` directory.

## 5. Serve the Production Build

- To preview the production build locally, you can use a static file server. One option is to use the `http-server` package.
- Install `http-server` globally (if not installed) by running:


- Navigate to the `dist` directory:


- Start the server by running:
`npm run dev`

- You can now access your production-ready app in the browser using the provided server URL.

## 6. Deployment

- To deploy your app to a hosting platform, follow their specific instructions.
- Typically, you will need to upload the contents of the `dist` directory to the hosting server.
- Make sure to configure any necessary server or routing settings based on your hosting provider's requirements.

Congratulations! You have successfully built a Vite app for production. You can now deploy and share your application with others.
