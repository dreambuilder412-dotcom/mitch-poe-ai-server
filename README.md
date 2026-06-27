# Mitchell's Bar & Grill — Application Form

A static job-application page that:

1. **Flows into Google Forms** — every submission is POSTed straight into your
   Google Form (which collects responses in a Google Sheet).
2. **Auto-reads résumés with AI** — applicants can upload a résumé photo/text and
   the page pre-fills their name, phone, city, etc. The Anthropic API call is
   proxied through a **Netlify Function** so the API key stays on the server.

## Project layout

```
public/index.html            The application form (deployed as the site)
netlify/functions/chat.js    Serverless proxy to the Anthropic API (résumé scan)
netlify.toml                 Netlify build/publish/function config
server.js                    Optional local Express version of the same proxy
```

## Deploy to Netlify

1. Push this repo to GitHub (already connected).
2. In Netlify: **Add new site → Import from Git** and pick this repo.
   - Build command: *(none)*
   - Publish directory: `public`
   - Functions directory: `netlify/functions` (auto-detected from `netlify.toml`)
3. Set the secret: **Site settings → Environment variables → Add a variable**
   - Key: `ANTHROPIC_API_KEY`
   - Value: your Anthropic key (`sk-ant-...`)
4. Deploy. Your form is live at `https://<your-site>.netlify.app`.

Send that URL to applicants.

## How the Google Forms connection works

The form posts to your Google Form's `formResponse` endpoint with each Google
field mapped by its `entry.XXXX` id (see `submitForm()` in `index.html`):

| Form field            | Google Form entry id |
|-----------------------|----------------------|
| Email                 | `entry.499165778`    |
| First name            | `entry.1000206579`   |
| Last name             | `entry.609980903`    |
| Phone                 | `entry.1417621653`   |
| City                  | `entry.511076197`    |
| Position              | `entry.1746606231`   |
| Availability          | `entry.998618313`    |
| Years of experience   | `entry.1498135098`   |
| Last employer         | `entry.1424661284`   |
| Last job title        | `entry.812533439`    |

**To verify these still match your Google Form:** open your live Google Form,
right-click → *Inspect*, and confirm each question's `name="entry.XXXX"` matches
the table above. If you add/rename questions, update the ids in `submitForm()`.
Responses land in the linked Google Sheet (Form → Responses → Link to Sheets).

> Note: references and the "why join" text box are collected in the UI but are
> not yet mapped to Google Form fields. Add matching questions to your Google
> Form and wire their `entry.XXXX` ids into `submitForm()` if you want those
> captured too.

## Local development (optional)

```
npm install
ANTHROPIC_API_KEY=sk-ant-... npm start   # Express proxy on :3000
```

## ⚠️ Security note

A previous version of `server.js` had a live Anthropic API key committed to git
history. That key is exposed and **should be rotated/revoked** in the Anthropic
console. The key is now read from the `ANTHROPIC_API_KEY` environment variable
and is never stored in source or shipped to the browser.
