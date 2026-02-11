# Tamagotchi Browser Game 🐣

**Live Demo:** https://xugknight.github.io/tamagotchi/

A simple Tamagotchi-style virtual pet built with vanilla JavaScript, HTML, and CSS.

The player keeps the creature alive by managing three stats: boredom, hunger, and sleepiness. Each stat increases on a timed interval, and user interaction is required to prevent any stat from reaching the maximum threshold.

This project focuses on implementing a clean game loop, centralized state management, and dynamic DOM updates.

---

## Gameplay

- Three stats: **Boredom**, **Hunger**, **Sleepiness**
- Stats increase automatically over time
- Buttons reset individual stats
- The game ends if any stat reaches the limit
- Restart fully resets the game state

---

## Tech Stack

- JavaScript (Vanilla)
- HTML
- CSS

---

## What This Demonstrates

- Interval-based game loop (`setInterval`)
- State-driven rendering
- Clear separation between state, rendering, and event handling
- Proper timer cleanup and reset logic