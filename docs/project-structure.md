# Project Structure

Most of the code lives in the `src/` folder and looks like this:

```bash
.
|-- docs                        # The documentation that you are reading right now.
|
|-- public                      # The public folder were you put images, videos and other assets.
|
`-- src/                        # Where most of the codebase lives on.
    |
    |-- app/                    # The App Router of NextJS, where the pages are located.
    |
    |-- assets/                 # Icons, imagens, SVGs and more.
    |   |
    |   `-- icons/              # Icons folder, just for exemplification.
    |
    |-- data/                   # Static data like texts goes here.
    |
    |-- lib/                    # Lib configurations, utilitaries and imports.
    |   |
    |   `-- utils.ts            # `utils.ts` just for exemplification/
    |
    `-- ui/                     # All the UI modules are located here.
        |
        |-- components/         # All the UI components.
        |   |
        |   |-- modules         # All the developer created components.
        |   |
        |   |-- ui              # Shadcn/ui imported components.
        |   |
        |   `-- index.ts        # `index.ts` to export all of them.
        |
        |-- fonts.ts            # `fonts.ts` to create te consts for Google fonts or others.
        |-- globals.css         # Global CSS of the application.
        `-- shadcn-ui.css       # Shadcn/ui CSS.
```
