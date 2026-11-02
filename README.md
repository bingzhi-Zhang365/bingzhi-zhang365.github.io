# Bingzhi Zhang — Academic website

An English academic website prepared for GitHub Pages. Static HTML, CSS, and JavaScript; no installation or build step required. All fonts and visual assets are local or system-provided.

## Preview locally

Open `index.html` in your browser, or run from this directory:

```sh
python -m http.server 8765 --bind 127.0.0.1
```

Then visit http://127.0.0.1:8765.

## Publish with GitHub Pages

1. Create or use the repository `bingzhi-zhang365.github.io` under the account `bingzhi-Zhang365`.
2. Upload this directory's contents to the root of its `main` branch. The root must contain `index.html`, rather than a nested website folder.
3. In **Settings → Pages**, select **Deploy from a branch**, then **main** and **/ (root)**, and save.
4. Once GitHub reports deployment success, open https://bingzhi-zhang365.github.io/.

Official reference: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site (checked November 1, 2026).

## Update content

- Edit biography, papers, experience, talks, and email in `index.html`.
- Edit colors and layout in `style.css`.
- Each publication uses `data-kind="published"` or `data-kind="preprint"`. Set `data-selected="true"` to include it in the initial selected list.
- Keep author order, equal-contribution marks, and publication status consistent with the original records.
- Without JavaScript, every publication remains readable.
- Add a current, publication-approved CV PDF and link only after reviewing its contents.

This repository should contain only website files approved for public release. Do not upload the surrounding career-application workspace.
