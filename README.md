# Responsive Music Player Web Application

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Technologies Used](#technologies-used)
6. [Code Structure](#code-structure)
7. [Responsive Design](#responsive-design)
8. [Contributing](#contributing)
9. [License](#license)

---

## Introduction

This project is a fully responsive music player web application. It features an elegant design, smooth animations, and an intuitive user interface. The application is styled to work seamlessly on various devices, including desktops, tablets, and smartphones, offering a consistent and engaging user experience.

## Features

- **Customizable Background:** A gradient background with an attractive visual appeal.
- **Music Player Controls:** Play, pause, and navigate between songs.
- **Dynamic Progress Bar:** Visual representation of the song progress.
- **Queue Management:** Displays a list of songs with hover effects.
- **Responsive Design:** Adapts gracefully to screens of all sizes.
- **Smooth Animations:** Includes fade-in effects, rotating images, and button transitions.

## Installation

To set up the project locally:

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/music-player-app.git](https://github.com/RonewaOnly/hexsoftwares_web_music_player.git)
   ```

2. Navigate to the project directory:
   ```bash
   cd music-player-app
   ```

3. Open the project in your preferred code editor (e.g., VS Code).

4. Open the `index.html` file in a web browser to view the application.

No additional dependencies or installations are required.

## Usage

1. Launch the application by opening `index.html` in any browser.
2. Use the music player controls to:
   - Play or pause music.
   - Navigate between songs using the "Next" and "Previous" buttons.
3. Observe the queue management section for the list of songs.
4. Enjoy the responsive and interactive design on any device.

## Technologies Used

- **HTML5:** Structure and semantic layout.
- **CSS3:** Styling, animations, and responsive design.
- **JavaScript (optional):** For adding interactivity (if required).

## Code Structure

### General Styles

- **Background Gradient:** The `body` tag has a gradient applied using `linear-gradient` for an aesthetically pleasing appearance.
- **Font:** The application uses the `Poppins` font for a modern look.

### Music Player Container

- **Music Info:** Displays the title of the current song and a progress bar.
- **Image Container:** Circular container with a rotating image of the album cover.
- **Controls:** Buttons styled for play, pause, next, and previous actions.

### Queue Container

- **List:** Displays songs in a scrollable container with hover effects.
- **Scrollbar Styling:** Custom scrollbar for better aesthetics.

## Responsive Design

The application is optimized for various screen sizes:

### Breakpoints

- **Desktop:** Full-width layout with ample padding.
- **Tablet:** Reduced width for the queue container and smaller button sizes.
- **Mobile:** Compact layout with optimized font sizes and touch-friendly buttons.

### CSS Media Queries

Media queries are utilized to adjust styles:

```css
@media (max-width: 768px) {
    .quene-container {
        max-width: 90%;
        padding: 15px;
    }

    .quene-container li {
        font-size: 1rem;
        padding: 10px;
    }
}
```

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request on GitHub.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

