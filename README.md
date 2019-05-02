# "iyaiContact, Contacts and Connections"

[version 0.1.0](https://semver.org/)

[version badge](https://badge.fury.io/hooks/github)

https://badge.fury.io/hooks/github



iyai Contact Management System

## Getting Started

Go to Heroku and use the demo... User is able to add contact information with a web form.

**Run app locally on an Express web server.**

- Start MongoDB
- Run an `npm run build` to compile files.
- Start app and server with `npm start`
- Navigate to `http://localhost:4200/`

### What the app should do?

This was created to solve my contact management issues. Which seems to be an identity issue the more I think about it. Most of the contact managers charge for their service. There is no charge to use this software.

- Use webform to **input new contact information** then save with "Submit contact data" button.
- **Search for contacts** using part of the name, ie first or last name will find all matching that. Click "Search" button to display results
- **Show "All" contacts** in database by clicking the similar button.
- **Import Zoho export files** clicking "Choose File" button. This will display the raw data being imported and simultaneously save the data to MongoDB.
- **Export contacts:** select contacts to be exported to email provider, phone contact manager, and file-spreadsheet (spreadsheet is the most important because that is how the lay-person views most data).

_TO DO: see "iyaiContact-Software Design Document.md" for details of project To Do's_ (C:\Users\trewa\Documents\CodingWorkshop\iyaiContact-angular\0-Dev FILES-iyaiContact-angular\iyaiContact-Software Design Document.md)

## CREDIT

[Bishop Fox - Cybersecurity Style Guide - v1.1](https://www.bishopfox.com/blog/2018/02/hello-world-introducing-the-bishop-fox-cybersecurity-style-guide/)

### Built With

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.
- [Angular](https://angular.io) version 6
- enabled [codelyzer](https://www.npmjs.com/package/codelyzer) for linting purposes.
- [ExpressJS](https://github.com/expressjs/express) web server and middleware
- [Mongoose](https://mongoosejs.com/)
- [morgan](https://github.com/expressjs/morgan) for logging
- [express](https://expressjs.com/) Web Server
- [compodoc](https://compodoc.app/) Code Documenter
- [editorConfig](https://editorconfig.org/) VScode extension will read this file and attempt to add styling as an override. Heavy handed but a great way to make code conform to my coding style.
- [file-saver](https://www.npmjs.com/package/file-saver) simply export to file process, limited to blob max size.
- [dotenv](https://www.npmjs.com/package/dotenv) from npm to manage environment variables

- rxjs compat
- using cors

### CONTRIBUTIONS

Solo project so far. Code and graphic design contributors are welcome and encouraged to help. Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to me. 

### Authors

- **Tre' Grisby** - _Initial work_ - [trewaters](https://github.com/trewaters)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- "I tip my hat to anyone whose code was used!" npm gives me a lot of people to thank!
- Special thank you to my mom, wife, and daughter! Without their love and support this would gone nowhere.
- Gratitude is the attitude!

====

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Angular linting

Angular CLI has support for codelyzer. In order to validate your code with CLI and the custom Angular specific rules just use:
`ng new codelyzer`
`ng lint`
Note that by default all components are aligned with the style guide so you won't see any errors in the console.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#### NOTES
the folders in this are: 
- **"basic"** is built with the Angular CLI.
  - _[4/17/2019]...I am only working on this one right now._
  - _[4/18/2019]... adding form submission. Made my form, with css for validity, and the data object._
  - _[4/24/2019]... Using a tutorial to help me structure my app better. I added folders for COMPONENTS etc. moved the contact to it's own model. importing the contact model into the contact form for adding data._
  -_[4/26/2019]... made all the functionality work. It is test data. Now I am converting it to work with MongoDB. Enable adding all the fields and data for a real contact._
  -_[4/28/2019]... this is coming along well. I am able to import zoho csv data. It isn't perfect but I can understand what is being imported. It has extra bits like quotes that were not removed. I have all the real fields showing for the data that will be input and retrieved. I don't have the metadata set up yet. Like dated created being saved._
  -_[5/1/2019]... I have been working on this a little everyday. Today it is a complete draft. All the functionality is coded into the application. Now it needs to refined and improved upon._
  -_[]..._
