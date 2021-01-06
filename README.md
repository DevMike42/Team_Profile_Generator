# Team Profile Generator

**Team Profile Generator** is a **Node.js** command line application for generating a webpage based on user input that will be used for quick access to Email and Github information for a Dev Team.

## Installation

- Clone the repository locally and run the below command to install all needed dependencies

```
npm install
```

## Usage

- Run the below script to launch the application.

```
npm start
```

- Follow the prompts to enter information for your Team Members

![Example1_gif](https://imgur.com/4xMOmH7.gif)

![Example2_gif](https://imgur.com/X83zSlk.gif)

- After entering your last team member, choose "I do not want to add anymore team members."

![Example3_gif](https://imgur.com/luT2HHN.gif)

- The application will auto-generate an index.html file populated with user data

  ![HTML_file_img](https://imgur.com/0kt0Yhq.png=700x800)

## Technologies Used

- **HTML5** - For creating front-end markup
- **Bootstrap** - For styling UI using classes
- **JavaScript** - For all functionality and dynamically creating final html document
- **inquirer** - For gathering user input through command line prompts
- **fs** - For auto generating final html document
- **jest** - For testing all constructor functions
- **colors** - Adds color to the prompts displayed
- **asciiart-logo** - To create a cleaner looking main logo

## License

This project is licensed under the MIT License

## Tests

Test for this project can be run using `jest` by running the below script from the root directory.

```
npm run test
```
