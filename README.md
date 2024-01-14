# task-manager

Easy Tasks is a user-friendly task management application built with Vue.js and Vuetify. Simplify your daily routine by effortlessly adding, organizing, and tracking tasks. The application offers a clean and intuitive interface, allowing users to focus on what matters most.

## Description

Easy Tasks is designed to help users manage their tasks efficiently. It allows users to add tasks easily through a simple interface.

## Features

- Add new tasks.
- Mark tasks as favorites.
- Responsive design for various screen sizes.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/marylynn-dev/easy-tasks.git
```

2. Navigate to project directory

```bash
cd easy-tasks
```

3. Install dependencies

```bash
npm install
```

## Usage

To run the application locally, use the following command:

```bash
npm run dev
```

Visit http://localhost:3000 in your web browser to access the application.

## Mock Database

For development purposes, a mock database is included using json-server. It simulates a backend API with a JSON file (db.json).
Run the following commands in a separate terminal tab:

1. First, install json-server globally:

```bash
npm install -g json-server
```

2. Run the json-server:

```bash
json-server -w .\data\db.json -p 3001
```

The json-server API will be running at http://localhost:3001

## Project Structure

assets: Contains static assets such as images.
components: Vue components used in the application.
store: Pinia store for managing application state.
views: Top-level Vue components for different views in the application.

## Dependencies

Vue.js
Vuetify
Pinia
Axios
SweetAlert2

## Contributing

Contributions are welcome!

For the hosted version, you can check it out at [Easy Tasks](https://gleaming-alpaca-a19b11.netlify.app/.)
