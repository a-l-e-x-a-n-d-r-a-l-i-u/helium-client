# Welcome to this repository, Helium!

`Helium` is a lightweight clone of the popular blogging platform, Medium.com.

## Why did I re-do Medium.com?

In my work as a UXer, I was curious to learn more about not only how products appear to the end-user, but how they are built. This year, 2022, I have been focused on learning frontend concepts.

As part of my [DPC Digital Academy](https://innovationnetwork.vic.gov.au/digital-academy) Scholarship with [Code Like A Girl](codelikeagirl.com)'s [Foundations of Web Dev](https://learnto.codelikeagirl.com/foundations-of-web-dev) Program, I took this opportunity to:

- Build sassy components
- Improve performance
- Practise frontend routing
- Learn global state management and authentication

The tools I used are:

- React
- Node
- Typescript
- SASS
- Markdown

## `But where do I get the content if I don't have a server?`

Previously, I toyed with the idea of using a headless CMS like `Strapi.io` to follow a JAMstack architecture. I realised it wasn't necessary for a website like mine since CMSes are expensive, they save assets on their own servers and, for a simple site like here, CMSes do not provide the best performance.

`Therefore, I decided to use a Markdown file system that I store in Github and call dynamically.`

### Importing posts on the main page

Using an asynchronous function in JavaScript, I import the Markdown files from the `content` folder project into a JSON file, `posts.json`. Later I return them in the form of a promise as an array of JSON objects.

## `Commands`

### `npm run dev`

Concurrently runs the "server" and the client

### `npm start`

Serves the client only assuming the `posts.json` file is up to date

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
