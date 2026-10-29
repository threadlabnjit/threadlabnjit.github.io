# THREAD Lab — GitHub Pages edition

The current THREAD Lab redesign, exported as a standalone React + Vite project. Includes circular profiles, scroll fade-ins, the scrolling THREAD acronym, all research content, and the compact contact section. No Wix or ChatGPT hosting account is needed to run this source.

## Publish using GitHub in your browser

1. Extract `THREAD_Lab_GitHub_Ready.zip` on your computer.
2. Open the extracted `thread-lab-website` folder. Upload its CONTENTS to your GitHub repository root. `package.json` and `index.html` must be visible directly in the repository, not inside an extra `thread-lab-website` folder.
3. Include `app`, `components`, `data`, `public`, `web`, `scripts`, and `.github`, plus the loose files. Do not upload the ZIP itself.
4. Commit the upload to `main`.
5. In the repository, choose Settings → Pages → Build and deployment → Source: GitHub Actions.
6. Open Actions → Publish THREAD Lab → Run workflow → main → Run workflow. Future commits to main deploy automatically.
7. Wait for the workflow to finish. Its deployment link is your live website. Test Our Work, Our Team, an individual profile, Get Involved, and News.

The workflow automatically detects the repository subfolder (such as `/thread-lab-website/`), so you do not need to edit paths. It also supports a user-site repository or a custom domain configured in Pages settings.

### If the .github folder did not upload

In your repository select Add file → Create new file. Enter this exact filename:

`.github/workflows/deploy.yml`

Copy all the text from the ZIP's `.github/workflows/deploy.yml`, then commit to main. The same workflow text is also included as `GITHUB_ACTIONS_WORKFLOW.txt` for easier access. You need only one workflow; the TXT file does not run by itself.

### If the workflow fails

- Confirm Source is GitHub Actions in Settings → Pages, then rerun the workflow.
- Confirm the branch is named `main` and the project files are at the repository root.
- If no workflow appears, create `.github/workflows/deploy.yml` as described above.
- If GitHub says Pages is unavailable, review the repository's visibility, account plan, and organization Pages policy.

Publishing through this workflow makes the generated website publicly accessible according to GitHub Pages settings. This ZIP does not publish anything until you upload/configure/run it.

## Edit content

`data/content.json` contains biographies, role labels, publications, presentations, and profile descriptions. For each person, fill in `work` and `projects`; empty strings show the existing placeholders. Add portrait files to `public/team` and set `image` to `/team/filename.jpg`.

The profile editor saves drafts in the current browser only. Exported JSON drafts can be copied into `data/content.json` for a permanent update. They do not automatically update GitHub.

## Local development (optional)

Install Node.js 24 or newer supported LTS, then run:

```
npm install
npm run dev
```

Production build:

```
npm run build
npm run preview
```

For a manual repository-subfolder build, set the `PAGES_BASE_PATH` environment variable to `/thread-lab-website/`. The GitHub workflow sets this automatically. The `dist` output contains 21 pre-rendered page documents and all assets; JavaScript hydrates the interactive features. No backend server is required.

Google Fonts are requested for typography; local fallbacks are included. Publication DOI links, professional profile links, email links, and the RA Google Form remain external.
