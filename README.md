# Yuri Markov Website

Static portfolio site prepared for free deployment on Cloudflare Pages.

## Files

- `index.html` - homepage
- `portfolio.html` - interactive case library
- `publications.html` - publications and dissertation
- `research.html` - stimuli base and research context
- `talks.html` - talks and awards
- `styles.css` - shared visual system and responsive layout
- `portfolio.js` - interactive portfolio filtering and case detail panel

## Local preview

You can open `index.html` directly in a browser for a quick preview.

## Deploy to Cloudflare Pages

1. Create a GitHub repository and upload these files.
2. In Cloudflare, open `Workers & Pages`.
3. Create a new `Pages` project and connect the GitHub repository.
4. Use these build settings:
   - Framework preset: `None`
   - Build command: leave empty
   - Build output directory: `/`
5. After deployment, attach your custom domain in the `Custom domains` section.

## Upload without Git

If Git is not installed locally, you can still publish the site:

1. Create a new empty repository on GitHub.
2. Open the repository in the browser.
3. Choose `uploading an existing file`.
4. Drag all files from this folder into GitHub.
5. Commit the upload in the browser.
6. Connect that repository to Cloudflare Pages.

## Notes

- The current version already includes migrated content from the existing site.
- Some external asset links from Google Sites should be replaced with the final direct URLs later.
- The portfolio section is intentionally data-driven, so adding new case studies is easiest through `script.js`.
