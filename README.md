# Tamagotchi Browser Game 🐣

A browser-based Tamagotchi-style virtual pet game built with vanilla JavaScript, HTML, and CSS.

The goal is to keep your creature alive by managing its boredom, hunger, and sleepiness over time. Stats increase automatically, and the player must interact with the pet to prevent it from reaching critical levels.

This project explores game loops, state-driven UI updates, and incremental polish in a simple, framework-free environment.

---

## 🎮 Gameplay Overview

- Each pet has three stats:
  - **Boredom**
  - **Hunger**
  - **Sleepiness**
- Stats increase automatically over time.
- Buttons allow the player to reduce individual stats.
- If any stat reaches the maximum threshold, the game ends.
- Players can restart and try again with a new creature.

Planned enhancements focus on making the experience feel closer to a real Tamagotchi toy rather than a short, high-pressure game.

---

## ✨ Features

### Current
- Centralized game state object
- Interval-based game loop
- Dynamic DOM rendering
- Game over detection and reset
- Interactive stat controls

### In Progress / Planned
- Slower, real-time stat progression (playable throughout the day)
- Higher stat caps and warning zones
- Buttons reduce stats instead of hard resets
- Randomized creatures with light trait differences
- Visual mood changes based on pet status
- Improved UI styling and animations

---

## 🛠️ Tech Stack

- **JavaScript (Vanilla)**
- **HTML**
- **CSS**

No frameworks or libraries — the focus is on clarity, maintainability, and core web fundamentals.

---

## 🧠 What This Project Demonstrates

- Game loop and timer management
- State-driven UI architecture
- Separation of concerns (state, render, event handling)
- Clean, readable, and extensible JavaScript
- Iterative design and polish
