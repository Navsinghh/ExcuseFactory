# ExcuseFactory

## Overview

**ExcuseFactory** is a full-stack application that provides a collection of randomly generated excuses. While the excuses were initially created with the help of AI, they are now stored in the backend in a JSON format. The project consists of a **React** frontend, built with **Vite**, and an **Express.js** backend.

## Features

- **Frontend (Vite + React):**

  - A user-friendly interface that allows users to click a button to generate an excuse.
  - The UI fetches excuses from the backend and displays them dynamically.

- **Backend (Express.js):**
  - The backend serves a collection of excuses that were generated with the help of AI and now stored in a JSON format.
  - The backend is designed to be extensible, with extra code included for future features, allowing users to customize and enhance the project.

## Excuses Storage

- The excuses are stored in a JSON file on the backend. Each excuse has a unique ID and can be retrieved by the frontend.
- Example JSON format for an excuse:
  ```json
  [
    {
      "id": 1,
      "excuse": "I’ve become a professional couch potato for the day."
    }
  ]
  ```

## Future Work

- Some scope of updation is to ad an AI Agent for generating excuses insted of storing it in JSON file.
- I might add some additional button for accessing excuses differently.

## Installation and Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/Navsinghh/excusefactory.git
   ```

2. Frontend Local Run

- cd client
- npm install
- npm run dev

3. Backend Local Run

- cd server
- npm install
- node server.js
