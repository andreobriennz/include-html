# include-html

*Currently pre-alpha. Basic features work, but is still being tested and not yet performance optimized.*

**Description:** Include HTML files with a single attribute: `<div data-include="path/to/file.html"></div>`

## Basic Feature
Simply create an HTML element with a data-include attribute, and make the value of the attribute equal the path to the file you want to include. For example: 

```
<div data-include="path/to/file.html"></div>
```

## Router (optional)
(coming soon)
Currently under development is the ability to create a router. This optional feature will allow you to load pages dynamically via a router.

---

**Note: include-html is intended to be used with trusted sources of HTML (ie: not user provided content):**
There is basic protection against XSS and style injection, but it requires further testing to be safe for using with untrusted user input
