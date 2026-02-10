# Deploying Your Romantic Valentine App to Vercel

You have two easy ways to deploy this app to Vercel.

## Option 1: Using the Vercel CLI (Fastest for local)

1.  Open your terminal in the project folder:
    ```powershell
    cd d:\myvalantine\valentine-chuckki
    ```
2.  Run the deployment command:
    ```powershell
    npx vercel
    ```
3.  Follow the prompts:
    - **Set up and deploy?** [Y]
    - **Which scope?** [Select your account]
    - **Link to existing project?** [N]
    - **Project Name:** [Press Enter to keep `valentine-chuckki`]
    - **In which directory is your code located?** [Press Enter for `./`]
    - **Want to modify these settings?** [N]

4.  Wait for the deployment to finish! You will get a link like `https://valentine-chuckki.vercel.app`.

## Option 2: Using GitHub (Recommended for updates)

1.  Push your code to a GitHub repository.
2.  Go to [Vercel Dashboard](https://vercel.com/dashboard).
3.  Click **Add New...** -> **Project**.
4.  Import your GitHub repository.
5.  Vercel will auto-detect Vite/React. Just click **Deploy**.

---

### Tips

- The build command is `npm run build`.
- The output directory is `dist`.
- If you make changes, just run `npx vercel --prod` to update the potential deployment!
