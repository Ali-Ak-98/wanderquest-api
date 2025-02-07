# WanderQuest API Documentation

## Overview

The WanderQuest API serves as the backend for the WanderQuest platform, providing endpoints to retrieve city data from a JSON file and serve it to the frontend application. This API is built using the [NestJS](https://nestjs.com/) framework, leveraging TypeScript for robust and scalable server-side applications.

## Features

- **City Data Retrieval**: Reads city data from a JSON file and provides a REST API to serve it.
- **User Authentication**: Handles user registration, login, and authentication.
- **Efficient Data Management**: Optimized endpoints for fetching city-related data.
- **Testing**: Comprehensive testing setup using Jest.

## Tech Stack

- **Framework**: NestJS
- **Language**: TypeScript
- **Data Source**: JSON file stored in the `data` folder
- **Testing**: Jest

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (v18+ recommended)
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/Ali-Ak-98/wanderquest-api.git
cd wanderquest-api
```

### Install Dependencies

```bash
npm install  # or yarn install
```

### Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```env
PORT=your_preferred_port
```

- **PORT**: Port on which the server will run (default is 3000).

### Running the Application

```bash
# Development
npm run start

# Watch mode
npm run start:dev

# Production
npm run start:prod
```

The API will be accessible at `http://localhost:3000` by default.

## Project Structure

```
/wanderquest-api
├── .github/           # GitHub configuration files
│   └── workflows/     # GitHub Actions workflows
├── src/               # Source code
│   ├── data/          # JSON file containing city data
│   ├── modules/       # Application modules
│   ├── controllers/   # Controllers for handling requests
│   ├── services/      # Services containing business logic
│   ├── dtos/          # Data Transfer Objects
│   └── main.ts        # Entry point of the application
├── test/              # Test files
├── .gitignore         # Git ignore file
├── .prettierrc        # Prettier configuration
├── README.md          # Project README
├── package.json       # Package manifest
├── tsconfig.json      # TypeScript configuration
└── nest-cli.json      # NestJS CLI configuration
```

## API Endpoints

### Get All Cities

```http
GET /cities
```
This endpoint retrieves a list of all cities. You can filter the results using query parameters.

### Query Parameters:

- **continent** (optional): Filter cities by continent (e.g., "Europe", "Asia").
- **min_population** (optional): Filter cities by minimum population (e.g., 1000000).
- **max_population** (optional): Filter cities by maximum population (e.g., 10000000).
- **landmark** (optional): Filter cities by landmark (e.g., "Eiffel Tower", "Great Wall of China").

**Response:**
```json
[
  {
    "name": "New York",
    "country": "USA",
    "population": 8419600
  },
  {
    "name": "London",
    "country": "UK",
    "population": 8982000
  }
]
```

### Get City by Name

```sh
GET /cities/{city_name}
```
This endpoint retrieves data about a specific city based on its name.

**Response:**
```json
{
  "name": "New York",
  "country": "USA",
  "continent": "North America",
  "population": 8419600,
  "landmarks": ["Statue of Liberty", "Central Park"]
}
```

## Running Tests

To execute tests:

```bash
# Unit tests
npm run test

```

## Deployment

For deployment, ensure that all environment variables are correctly set in your production environment. Build the application using:

```bash
npm run build
```

Then, start the application in production mode:

```bash
npm run start:prod
```


## License

This project is licensed under the MIT License.

## Contact

For support, open an issue on GitHub.

