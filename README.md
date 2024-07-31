# Grafword Starter SPA

This is a Single Page Application (SPA) starter integrated with Grafword for user identity and access management.

## Prerequisites

- Node.js (version 12 or higher)
- npm (usually comes with Node.js)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/throughputer/grafword-starter-spa.git
    cd grafword-starter-spa
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Configuration

1. **Contact Throughputer admin:**  
   Email your redirect URI/URIs to the admin at `info@throughputer.com`. You will receive `clientId` and `grafwordDomain` in response.


2. **Update configuration:**  
   Open `/public/index.html` and `/public/profile.html`, then update the `clientId` and `grafwordDomain`:

    ```javascript
    const clientId = 'YOUR_CLIENT_ID';
    const grafwordDomain = 'YOUR_GRAFWORD_DOMAIN';

    var currentHost = window.location.protocol + '//' + window.location.host;
    var redirectUri = encodeURIComponent(currentHost + '/profile');
    ```

## Running the Application

1. **Start the server:**

    ```bash
    node server.js
    ```

2. **Open the application:**  
   Open a web browser and navigate to [http://localhost:8000](http://localhost:8000)
