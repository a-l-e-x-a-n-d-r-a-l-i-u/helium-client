# Welcome to this repository, Helium!

Helium is a lightweight copy of the blogging platform, Medium.com.

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

## But where do I get the content if I don't have a server?

Previously, I toyed with using a headless CMS like `Strapi.io` to follow JAMstack architecture. I realised it wasn't necessary for a website like so since CMSes are expensive, they save assets on their own servers and, for a simple site like here, CMSes do not provide the best performance.

I decided to use a Markdown file system that I store in Github and call dynamically.

### Importing posts on the main page

Using an asynchronous function in JavaScript, I import the Markdown files from the `content` folder project into a JSON file, `posts.json`. Later I return them in the form of a promise as an array of JSON objects.

## Commands

### `npm run dev`

Concurrently runs the client and server (`getposts.ts`, to be replaced with a Node backend as the course progresses)

### `npm start`

Serves the client only, assuming that the `posts.json` file is up to date

## Deployment

Master branch is automatically deployed to [Netlify](https://dynamic-gumption-45f7d8.netlify.app).
