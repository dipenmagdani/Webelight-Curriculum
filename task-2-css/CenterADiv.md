# Centering a Div in CSS

This guide outlines the **most used ways** to center a `<div>` in web development. It includes methods for:

- **Horizontal Centering**
- **Vertical Centering**
- **Horizontal and Vertical Centering**

The methods cover:

- Flexbox
- CSS Grid
- Absolute Positioning with Transforms

## Quick Overview of Methods

### 1. Flexbox

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

### 2. CSS Grid

```css
.container {
  display: grid;
  place-items: center;
  height: 100vh;
}
```

### 3. Absolute Positioning and Transforms

```css
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```
