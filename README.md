# Portfolio

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing Guidelines](#contributing-guidelines)
- [Testing](#testing)
- [Authors and Acknowledgements](#authors-and-acknowledgements)
- [Questions](#questions)

## Description

A responsive full-stack portfolio app built with MERN and TypeScript.

## Technologies Used

- Frontend: Vite, React, TypeScript, Tailwind CSS, gsap, @gasap/react
- Backend: Node.js, Express, MongoDB
- Authentication: JWT 
- Deployment: Render

## Features

- Secure user authentication

## Installation

To get started with this project, implement the following steps:

1. Clone the project:

```
git clone git@github.com:gina-t/Portfolio.git
```

2. Install `client` dependancies:

```
cd client
npm install
```

3. Install `server` dependencies:

```
cd server
npm install
```
4. Specifically, this project uses GSAP for animation. Register and login to GSAP and watch the tutorial for useGSAP()Hook. Import the useGSAP() hook from @gsap/react. useGSAP() is a drop-in replacement for useEffect() or useLayoutEffect() that automatically handles cleanup using gsap.context().

```
npm install gsap @gsap/react
```
5. After installation, you can start the development server:

```zsh
# Start backend development server
npm run dev:server

# Start frontend development server in another terminal
npm run dev:client

# Or run both concurrently
npm run dev
```
6. Create separate .env.development and .env.production files in `server` directory:

```plaintext
PORT=
MONGODB_URI=
JWT_SECRET=
NODE_ENV=
LOG_LEVEL=
```

7. In `.env.production`, add your MongoDB Atlas connection string to `MONGO_DB_URI`.

8. In `server` directory generate two secret tokens for JWT and paste into JWT_SECRET fields, one for each environment:

```zsh
# For development token
node -e "console.log('DEV_TOKEN: ' + require('crypto').randomBytes(64).toString('hex'))"

# For production token
node -e "console.log('PROD_TOKEN: ' + require('crypto').randomBytes(64).toString('hex'))"
```
9. In `server` directory:

```zsh
npm run build
npm run start
```

