# Npm Search Registry

## 1. PREMISE
A simple web application to search for npm package information, specifically name of the package, its author and the  last update date.

##### Wireframe with UI/UX considerations: https://miro.com/app/board/uXjVO69y8rQ=/?share_link_id=807059379844

## 2. USER STORIES
1. As a user, I am able search the npm package name.
2. As a user, I am able to filter the search results based on respective filter properties.
3. As a user, I am able to select the total number of search results to be generated.
4. As a user, I am able to select the number of elements(rows) to display on each page.
5. As a user, I am able to toggle between pages.
6. As a user, I am able to export either all or selected search results

## 3. TECHNOLOGY STACK
### Frontend
- React: Framework used to craft user interface
- TypeScript: Programming language used in React to develope user interface
- Axios: To handle communication between front-end and server
- External Libraries used:
  - MUI: A react UI library used for data grid construction using DataGrid component with pagination property
  - TailwindCSS: For certain stylistic interfaces 
### Backend
- Back-end: npm Public Registry API
- End-point: https://registry.npmjs.org/-/v1/search?text=${searchInput}&size=${optionInput}
    - GET response: npm packages data that correspond to search input("searchInput") and number of packages to display("optionInput") parameters by user

## 4. STARTUP INSTRUCTIONS 
Run the following commands in the sequence provided:
1. Run "npm install" inside the terminal to install all the project dependencies 
2. Run "npm start" to start the project on a local server (http://localhost:3000/)



