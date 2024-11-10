# Desktop ChatGPT Opener

A simple desktop application for quickly opening ChatGPT and other websites directly from your desktop.

![изображение](https://github.com/user-attachments/assets/61c5b82a-e836-4695-b5bd-d20aae5a8a42)
![изображение](https://github.com/user-attachments/assets/f4c76e33-e4cf-411c-abdc-688764b7a51a)

## Features

- Open ChatGPT on the desktop with a single click.
- Option to open any other website by entering the URL.
- A customizable interface with predefined URLs (e.g., ChatGPT, GitHub, Yandex Music).
- Store and select previously used URLs for quick access.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- Electron (installed via npm)

### Steps to Run

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/your-username/desktop-chatgpt-opener.git
    cd desktop-chatgpt-opener
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

3. Build the application:

    ```bash
    npm run build
    ```

4. Start the application:

    ```bash
    npm start
    ```

The application will open with a window where you can choose ChatGPT or enter any other URL to visit.

## How It Works

The program uses Electron to create a desktop application that provides a simple interface for opening websites. The app starts by showing a window with a dropdown of predefined URLs, such as ChatGPT, GitHub, and Yandex Music. Users can also input custom URLs. The app then opens the selected or entered website in a new window.

## Usage

1. Launch the application.
2. Select a predefined URL from the dropdown or enter a custom URL.
3. Click the "Open URL" button to navigate to the selected website.
4. You can also save and access previously used URLs.

## Contributing

Feel free to fork the repository and make improvements! Pull requests are welcome.
