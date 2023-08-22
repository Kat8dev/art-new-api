# Art News Aggregator API

This project is an Express.js-based API that aggregates art-related articles from various online newspapers. It utilizes Axios for making HTTP requests and Cheerio for web scraping. The API provides endpoints to access news articles from different newspapers.

## Table of Contents

- [Getting Started](#getting-started)
- [Available Endpoints](#available-endpoints)
- [Usage](#usage)
- [Example Requests](#example-requests)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To set up the project and run the API server, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine using:

   git clone <repository_url>
   
# Installation

To set up the project and run the API server, follow these steps:

**1. Install Dependencies**: Navigate to the project directory and install the required dependencies using:

npm install
## Running the Server

To start the Express server, follow these steps:

1. Open your terminal.

2. Run the following command to start the server:

   npm start
   
## Server and Endpoints

The server will run on the specified port (default is 8000) or the port specified in your environment variables.

### Available Endpoints

- **GET /**: This endpoint provides a simple welcome message.

- **GET /news**: Retrieves a list of aggregated art-related articles from various newspapers.

- **GET /news/:newspaperId**: Fetches art-related articles specific to a given newspaper. Replace :newspaperId with the newspaper's identifier.

### Usage

This API is a useful tool for accessing art news articles from a variety of reputable sources. It provides a straightforward way to gather information on the latest developments in the art world.

### Example Requests

- **Get All Art News Articles**:

   GET /news
  
### Get Art News Articles from a Specific Newspaper (e.g., nyt):

GET /news/nyt

## Contributing

Contributions to this project are welcome! If you find issues or have suggestions for improvements, feel free to create a pull request or open an issue.

