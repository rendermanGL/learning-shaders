# Shader Engine

An interactive shader learning playground for breaking down how shaders work, one visual concept at a time.

## Working Title

Getting back to my routes of building fun little projects for learning, enhanced by AI.

## Overview

This project is a browser-based WebGL learning tool. It starts with a live fragment shader, then lets you move through the concepts behind it:

- UV coordinates
- Shape building with distance
- Color mixing
- Animation with time
- Shader math fundamentals

The goal is not to hide the math behind a polished effect. The goal is to make the relationship between code, numbers, and pixels visible.

## Why I Built This

Use this section to write the personal story in your own voice.

Possible points to cover:

- Getting back into small, curiosity-driven projects
- Using AI as a pair programmer and learning partner
- Rebuilding intuition around graphics programming
- Making abstract shader math feel tangible
- Treating this as a learning artifact, not a finished product

## What It Does

The app currently has two learning areas:

### Shader Walkthrough

The first section renders a live fragment shader and breaks the shader into stages:

- `UVs`: shows normalized screen coordinates as color
- `Shapes`: uses distance from the center to draw a circle
- `Color`: mixes gradients and color values
- `Motion`: uses time and sine waves to animate the effect

### Shader Math Lab

The math lab visualizes the basic relationships that show up constantly in shaders:

- `UV`: mapping screen position into normalized 0..1 space
- `Vector`: representing position and direction with `vec2`
- `Distance`: using `length()` to build circles and masks
- `Mix`: interpolating between values with `mix()`
- `Sine`: creating looping motion with `sin()`

## Tech Stack

- HTML
- CSS
- JavaScript
- WebGL
- Canvas 2D
- Node-based smoke tests

## Running Locally

```bash
npm start
```

Then open:

```text
http://127.0.0.1:4174
```

## Testing

```bash
npm test
```

The smoke test checks that:

- JavaScript parses correctly
- HTML links to the expected CSS and JS files
- JavaScript DOM references exist in the page
- Math tabs match the available lesson definitions
- The render throttling guard is present

## Project Notes

This is intentionally small and beginner-friendly. The project is meant to support learning by making shader concepts inspectable:

- Change a slider
- Watch the visual update
- Read the shader-style formula
- Connect the formula back to the rendered pixels

## Ideas For Next Steps

- Add editable shader code
- Add a lesson for `smoothstep()`
- Add noise, gradients, and polar coordinates
- Add before/after shader comparisons
- Add a small challenge mode for rebuilding effects from primitives
- Add screenshots or short demo clips to the README

## Personal Reflection

Use this section after you have played with the project a bit.

Prompts:

- What did this help me understand?
- What did AI make easier?
- What did I still have to reason through myself?
- What would I build next from this foundation?
