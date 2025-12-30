# Awesome List README Generator

Stop maintaining huge Markdown lists by hand! Automate the creation of your Awesome List README.md from a structured JSON data file.

## Features

-   **Data-Driven**: Keep your list data in a clean `data.json` file.
-   **Mustache Templating**: Fully customizable `template.md`.
-   **TOC Support**: (Optional) Can be extended to generate TOCs.
-   **Consistent Formatting**: Ensures every entry looks exactly the same.

## Installation

```bash
npm install -g awesome-readme-generator
```

## Usage

1. Create a `data.json`:
   ```json
   {
     "title": "Awesome Things",
     "categories": [
       {
         "name": "Resources",
         "items": [
           { "name": "Google", "url": "https://google.com", "desc": "Search Engine" }
         ]
       }
     ]
   }
   ```

2. Create a `template.md` (Mustache syntax):
   ```markdown
   # {{title}}

   {{#categories}}
   ## {{name}}
   {{#items}}
   - [{{name}}]({{url}}) - {{desc}}
   {{/items}}
   {{/categories}}
   ```

3. Run the tool:
   ```bash
   awesome-readme-generator
   ```

## Contact

Developed for Anunzio International by Anzul Aqeel.
Contact +971545822608 or +971585515742.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


---
### 🔗 Part of the "Ultimate Utility Toolkit"
This tool is part of the **[Anunzio International Utility Toolkit](https://github.com/anzulaqeel/ultimate-utility-toolkit)**.
Check out the full collection of **180+ developer tools, scripts, and templates** in the master repository.

Developed for Anunzio International by Anzul Aqeel.
