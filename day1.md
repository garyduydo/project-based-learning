# Day 1 — HTML, CSS & JavaScript Fundamentals

## What We Covered Today

---

## HTML — Structure of a Webpage

HTML defines **what** is on a page. Every element is wrapped in opening and closing tags.

### Core Tags Learned

| Tag | Purpose |
|-----|---------|
| `<h1>` to `<h6>` | Headings, h1 is largest, h6 is smallest |
| `<p>` | Paragraph text |
| `<nav>` | Navigation bar |
| `<header>` | Page header section |
| `<section>` | A section of content |
| `<div>` | Generic block container with no meaning of its own |
| `<a href="">` | Link — use `#id` to jump to a section on the same page |
| `<form>` | A form container |
| `<input>` | Single line text field |
| `<textarea>` | Multi-line text field |
| `<button>` | Clickable button |
| `<strong>` | Bold text (inline) |
| `<span>` | Generic inline container |

### Block vs Inline Elements

- **Block elements** — take up the full row and start on a new line (`div`, `section`, `p`, `h1-h6`)
- **Inline elements** — sit within text without breaking the layout (`a`, `span`, `strong`, `em`)

### Important HTML Concepts

**IDs and Classes**
```html
<section id="about">        <!-- unique identifier, used for anchor links -->
<div class="skill">         <!-- reusable label for styling or JS targeting -->
```

**Data Attributes** — store custom data directly in HTML elements
```html
<div class="progress" data-width="60"></div>
<!-- JavaScript reads this with: element.dataset.width -->
```

**Anchor Links** — the `#` tells the browser to jump to an element on the same page
```html
<a href="#about">About</a>   <!-- jumps to <section id="about"> -->
<a href="about">About</a>    <!-- WRONG — tries to open a file called "about" -->
```

**Input Types**
```html
<input type="text">     <!-- plain text -->
<input type="email">    <!-- validates email format automatically -->
<input type="password"> <!-- hides characters -->
```

---

## CSS — Appearance of a Webpage

CSS defines **how** things look. You target HTML elements and apply styles to them.

### The Three Selectors

```css
h1 { }         /* Tag selector — targets every h1 on the page */
.my-name { }   /* Class selector — targets elements with class="my-name" */
#about { }     /* ID selector — targets the one element with id="about" */
```

The dot `.` is essential for class selectors. Without it CSS looks for an HTML tag by that name and finds nothing — it silently ignores the rule.

### Key CSS Properties Learned

```css
/* Colors and backgrounds */
background-color: #1a1a2e;
background: linear-gradient(135deg, #1a1a2e, #e94560);
color: white;

/* Text */
font-family: Arial, sans-serif;
font-size: 1.2rem;
text-align: center;
text-decoration: none;
letter-spacing: 3px;

/* Spacing */
margin: 40px auto;
padding: 50px 20px;

/* Box styling */
border-radius: 8px;
border: 2px solid #e0e0e0;
opacity: 0.8;

/* Layout */
display: flex;
flex-direction: column;
gap: 15px;
max-width: 800px;
```

### Pseudo-classes — Targeting States

```css
a:hover { }     /* when mouse hovers over the element */
input:focus { } /* when user clicks into an input field */
```

### Transitions and Transforms

```css
/* Smooth animation when a property changes */
transition: transform 0.3s ease;
transition: background-color 0.3s ease;
transition: width 1s ease;

/* Movement — negative Y moves up, positive moves down */
transform: translateY(-5px);
```

`ease` means it starts slow, speeds up, then slows down at the end.

### Responsive Design — Media Queries

Think of it like an if statement: apply these styles ONLY when the screen is this wide or smaller.

```css
@media (max-width: 600px) {
  /* styles that only apply on mobile */
}
```

Common breakpoints used in the industry:
- `600px` — mobile
- `900px` — tablet
- `1200px` — large desktop

### Linking CSS to HTML

```html
<link rel="stylesheet" href="styles.css">   <!-- goes inside <head> -->
```

---

## JavaScript — Behaviour of a Webpage

JavaScript makes pages **do things**. It can reach into the page and change anything dynamically.

### Variables

```javascript
const name = "value"   // value never changes
let count = 0          // value can change
// avoid var — old syntax
```

### Selecting Elements

```javascript
document.querySelector(".btn")        // grabs the FIRST element with class btn
document.querySelector("#name")       // grabs element with id name
document.querySelectorAll(".progress") // grabs ALL matching elements as a list
```

`document` refers to the current page only — each page has its own separate document.

### Event Listeners

Listen for something to happen, then run a function when it does.

```javascript
button.addEventListener("click", function() {
  // runs when button is clicked
})
```

Common events: `"click"`, `"submit"`, `"mouseover"`, `"keypress"`

### Looping Through Multiple Elements

```javascript
const bars = document.querySelectorAll(".progress")

bars.forEach(function(bar) {
  // runs for every element in the list
})
```

### Manipulating Elements

```javascript
element.textContent = "New text"        // change the text
element.style.width = "60%"             // change a CSS property
element.classList.toggle("dark-mode")   // add if not there, remove if it is
element.classList.contains("dark-mode") // returns true or false
```

### Form Handling

```javascript
form.addEventListener("submit", function(event) {
  event.preventDefault()  // stops the page from reloading (default browser behaviour)

  const name = document.querySelector("#name").value  // .value grabs what user typed

  if (name === "") {
    alert("Please fill in all fields")
    return  // stops the function from continuing
  }

  form.reset()  // clears all input fields
})
```

### Template Literals — cleaner string formatting

```javascript
// Old way
"Thanks " + name + " I'll contact you at " + email

// New way — use backticks and ${}
`Thanks ${name} I'll contact you at ${email}`
```

### Data Attributes in JavaScript

```html
<!-- Store data in HTML -->
<div class="progress" data-width="60"></div>
```

```javascript
// Read it in JavaScript
const width = bar.dataset.width  // returns "60"
```

### Linking JavaScript to HTML

```html
<script src="script.js"></script>   <!-- goes just before closing </body> tag -->
```

---

## Project Built — Personal Portfolio Website

Features completed today:
- Navigation bar with anchor links to each section
- Header with gradient background and call to action button
- About, Skills, Projects, and Contact sections
- Hover animations on sections and nav links
- Dark/Light mode toggle
- Animated skill progress bars using data attributes
- Contact form with validation
- Typing animation in the header
- Responsive design with media queries for mobile

---

## Key Mindset Takeaways

- HTML = structure, CSS = appearance, JavaScript = behaviour
- CSS silently ignores rules it doesn't understand — no errors shown
- The browser console (F12) is your best friend for debugging JavaScript
- `#` in a link means jump to an element on the same page — without it the browser looks for a file
- You don't need to master everything before moving on — you learn in layers