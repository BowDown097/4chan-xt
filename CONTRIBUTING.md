## Reporting bugs

Bug reports and feature requests for 4chan XT are tracked at **https://github.com/TuxedoTako/4chan-xt/issues?q=is%3Aopen+sort%3Aupdated-desc**.

You can submit a bug report / feature request via your Github account.

If you're reporting a bug, the more detail you can give, the better. If I can't reproduce your bug, I probably won't be able to fix it. You can help by doing the following:

1. Include precise steps to reproduce the problem, with the expected and actual results.
2. Make sure your browser, 4chan X, and userscript manager (e.g. Greasemonkey, ViolentMoney, or Tampermonkey) are up to date. **Include the versions you're using in bug reports.**
3. Open your console with Shift+Control+J (⇧⌘J on OS X Firefox, ⌘⌥J on OS X Chromium), and **look for error messages**, especially ones that occur at the same time as the bug. Include these in your bug report. If you're using Firefox, be sure to check the browser console (Shift+Control+J), not just the web console (Shift+Control+K) as errors may not show up in the latter. Messages about "Content Security Policy" are expected and can be ignored.
4. If other people (including me) aren't having your problem, **test whether it happens in a fresh profile**. Here are instructions for [Firefox](https://support.mozilla.org/en-US/kb/profile-manager-create-and-remove-firefox-profiles) and [Chromium](https://developer.chrome.com/devtools/docs/clean-testing-environment).
5. **Please mention any other extensions / scripts you are using.** To check if a bug is due to a conflict with another extension, temporarily disable any other extensions and userscripts. If the bug goes away, turn them back on one by one until you find the one causing the problem.
6. To test if the bug occurs under the default settings or only with specific settings, back up your settings and reset them using the **Export** and **Reset Settings** links in the settings panel. If the bug only occurs under specific settings, upload your exported settings to a site like https://paste.installgentoo.com/, and link to it in your bug report. If your settings contains sensitive information (e.g. personas), edit the text file manually.
7. Test if the bug occurs using the **native extension** with 4chan XT disabled. If it does, it's likely a problem with 4chan or your browser rather than with 4chan X.

## Development & Contribution

### Get started

- Install [git](https://git-scm.com/), [node.js](https://nodejs.org/), and [npm](https://www.npmjs.com/).
- Clone 4chan XT: `git clone https://github.com/TuxedoTako/4chan-xt.git`
  - If this is taking too long, you can add `--depth 100` to fetch only recent history.
  - Alternatively, if you already have a local 4chan X repo, you can add XT as a remote:
    `git remote add xt https://github.com/TuxedoTako/4chan-xt.git`
- Open the directory: `cd 4chan-xt`
- Fetch needed dependencies with: `npm install`

### Build

- Build with `npm run build`. Options are in the readme.

### Contribute

- Use TypeScript for new files. If you want to convert a .js file to .ts, use a separate commit so the file history is
  tracked past the rename
- Edit the sources in the src/ directory (not the compiled scripts in builds/).
- Fetch needed dependencies with: `npm install`
- Compile the script with: `npm run build`
- Install the compiled script (found in the build/ directory), and test your changes.
- Make sure you have set your name and email as you want them, as they will be published in your commit message:<br>`git config user.name yourname`<br>`git config user.email youremail`
- Commit your changes: `git commit -a`
- Open a pull request on GitHub.

Pull requests to archive.json should be sent upstream: https://github.com/4chenz/archives.json
4chan XT updates from there automatically.

### More info

Further documentation is available at the wiki for the original 4chan X: https://github.com/ccd0/4chan-x/wiki/Developer-Documentation.
At the moment 4chan XT doesn't have its own wiki yet.
