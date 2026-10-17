# Sadam Tech Solutions Website

A local React/Vite demo of the Sadam Tech Solutions website.

## Included

- Animated loading screen
- Responsive homepage and navigation
- Cybersecurity, Cloud & Microsoft 365, IT Infrastructure and IT Support service cards
- Interactive service panels
- Contact form demo
- Privacy Notice and consent flow
- Cookie choice banner
- Responsive mobile layout

> Important: The contact form is a local demonstration. It does not send email or store information. The Privacy Notice contains production placeholders that must be completed before publishing a live website.

## Requirements

Install Node.js before running the project. Current Vite documentation lists Node.js 20.19+ or 22.12+ as supported minimum versions.

Check your installation:

```bash
node -v
npm -v
```

## Run on Windows

1. Extract or copy the `Sadam-Tech-Solutions` folder to somewhere convenient, for example your Desktop.
2. Open the folder in File Explorer.
3. Click the address bar, type `cmd`, and press Enter. This opens Command Prompt directly in the project folder.
4. Install packages:

```bash
npm install
```

5. Start the website:

```bash
npm run dev
```

6. Vite will print a Local address in the terminal. Open that address in your browser.

Do not close the Command Prompt window while demonstrating the website. Press `Ctrl + C` when you want to stop it.

## Run on macOS

1. Extract or copy the `Sadam-Tech-Solutions` folder to your Desktop or another convenient location.
2. Open Terminal.
3. Change into the project folder. Example if the folder is on your Desktop:

```bash
cd ~/Desktop/Sadam-Tech-Solutions
```

4. Install packages:

```bash
npm install
```

5. Start the website:

```bash
npm run dev
```

6. Open the Local address Vite prints in Terminal.

Keep Terminal open while showing the site. Press `Control + C` when finished.

## Production test

Create an optimized build:

```bash
npm run build
```

Vite will create a `dist` folder.

Preview that build locally:

```bash
npm run preview
```

Open the Local address shown in the terminal.

## Folder structure

```text
Sadam-Tech-Solutions/
├── README.md
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    └── styles.css
```

## Editing the website

Most website content is in:

```text
src/App.jsx
```

Visual styling is in:

```text
src/styles.css
```

After saving an edit while `npm run dev` is running, Vite normally updates the browser development view automatically.

## Before publishing publicly

Complete and verify the Privacy Notice, privacy contact details, business address, lawful basis, retention schedule, recipient/service-provider information and actual cookie use. Connect the contact form to an approved server-side email or CRM workflow. Never place mailbox passwords, API secrets or other credentials directly in `App.jsx` or other browser-side source code.
