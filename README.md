# Planet Plus

Planet Plus is a React-based carbon footprint journal. It helps users record everyday activities, estimate CO₂ emissions, track water usage, verify sustainable actions, and measure avoided emissions.

## Features

- Log travel, electricity, gas, meals, fuel, and shopping
- Estimate CO₂ using activity-specific emission factors
- Record trips using a simplified coordinate map and great-circle distance
- Scan bills and receipts for activity values
- Track water usage separately from CO₂ totals
- Register and verify planted trees
- View impact, dashboard, progress, challenges, reports, history, and leaderboards
- Rank users by verified CO₂ emissions avoided—not by having the smallest footprint
- Connect mock electricity and public-transport services
- Persist application data in the browser

## Tech stack

- React 19
- Vite
- JavaScript and JSX
- Browser `localStorage`
- Inline React styles and SVG icons

The project uses only the dependencies already listed in `package.json`.

## Data persistence

The current app uses a browser-based local persistence layer. Data is stored under this key:

```text
planet-plus-local-backend-v1
```

The stored data includes:

- `activities`
- `waterLogs`
- `trees`
- `verifiedActions`
- `completedChallenges`

This persistence is single-user and browser-specific. Clearing site data, changing browsers, or using another device will not share the same records.

## Important prototype notes

- The connected services are mock integrations.
- Tree verification is simulated in the prototype.
- Bill scanning calls an external vision endpoint when used and requires a suitable browser/network environment.
- Emission factors are illustrative estimates and are not a certified carbon audit.
- The map is a simplified grid and does not use live map tiles.

## Backend status

The current workspace is a browser React project. It does not currently include a running HTTP server or database. The local persistence layer behaves like a small client-side backend, but it is not a multi-user API.

For a production-ready backend, the next step would be to add:

- A Node.js API server
- SQLite for local development or PostgreSQL for production
- User authentication and authorization
- Server-side CO₂ calculations and validation
- Secure proof-image storage
- Protected AI scanning endpoints
- API-backed leaderboard and challenge data

A future API could expose endpoints such as:

```text
GET    /api/state
GET    /api/activities
POST   /api/activities
DELETE /api/activities/:id
GET    /api/leaderboard
GET    /api/trees
POST   /api/trees
POST   /api/verifications
```

## Project structure

```text
.
├── App.jsx       # Main React application and views
├── index.jsx     # React entry point
├── index.html    # Browser document shell
├── package.json  # Project metadata and dependencies
└── README.md     # Project documentation
```

## Development

Use the editor's Run button to load the application in the browser.

If the app has previously stored data, refresh the page to load it again. To reset the prototype's data, clear the browser's site data for the application.

## License

This project is a prototype. Add a project-specific license before public distribution.
