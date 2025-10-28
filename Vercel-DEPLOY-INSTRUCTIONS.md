Vercel deploy instructions

This repository contains a Next.js app in the `Passwordgame-main/` subdirectory. The project includes static assets under `Passwordgame-main/public/.well-known/` which must be deployed as-is.

Automatic deploy via GitHub Actions
1. Go to the GitHub repo Settings -> Secrets and variables -> Actions -> New repository secret and add the following secrets:
   - `VERCEL_TOKEN` — your Vercel personal token
   - `VERCEL_ORG_ID` — your Vercel organization ID
   - `VERCEL_PROJECT_ID` — your Vercel project ID

2. The workflow `.github/workflows/vercel-deploy.yml` is already added and will run on pushes to `main`.

How the workflow works
- It checks out the repo, sets up Node, and runs the `amondnet/vercel-action` targeting `Passwordgame-main` via `working-directory`.
- Static files inside `Passwordgame-main/public/.well-known` will be served by Vercel automatically at `https://<your-deployment>/.well-known/...`.

If you want me to run the first deploy directly, provide a Vercel token with the `scope:projects:deploy` permission and tell me whether you want me to deploy (I can run `vercel --prod --cwd Passwordgame-main` locally). Otherwise add the secrets above and pushing to `main` will trigger a deploy.
