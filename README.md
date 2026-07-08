# mitch-poe-ai-server

A small Node/Express server that:

- proxies chat requests to the Anthropic API at `POST /chat`, and
- serves the **Family House Built-In Bed Plans** construction package at `/plans/`.

## Local setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment variables**

   Copy the example file and fill in your real values (never commit `.env`):

   ```bash
   cp .env.example .env
   ```

   Then edit `.env` and set your Anthropic API key:

   ```
   ANTHROPIC_API_KEY=sk-ant-...
   ```

   Get a key from <https://console.anthropic.com/>. The `/chat` endpoint returns
   a 500 error until this is set.

3. **Run the server**

   ```bash
   npm start
   ```

   The server reads `ANTHROPIC_API_KEY` (and optional `PORT`, default `3000`)
   from the environment. If you use a `.env` file, load it into your shell before
   starting — for example:

   ```bash
   set -a; . ./.env; set +a; npm start
   ```

   (or use your preferred process manager / `--env-file` on Node 20+:
   `node --env-file=.env server.js`).

## Endpoints

| Method | Path       | Description                                              |
|--------|------------|----------------------------------------------------------|
| GET    | `/`        | Health/status JSON                                       |
| POST   | `/chat`    | Proxies the request body to the Anthropic Messages API   |
| GET    | `/plans/`  | Family House Built-In Bed Plans construction package     |

## Construction plans

The built-in bed plan package lives in [`plans/`](./plans/). Open
[`plans/index.html`](./plans/index.html) in a browser (or visit
`http://localhost:3000/plans/` while the server runs) and print to PDF. See
[`plans/README.md`](./plans/README.md) for details.

## Security

- **Secrets are read from the environment only** — do not hardcode API keys in
  source. `.env` is git-ignored; `.env.example` documents the required variable
  names without any real values.
- If a key was ever committed to this repository, rotate/revoke it in the
  Anthropic console. Removing it from the current code does **not** remove it
  from git history.
