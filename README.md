# CornHub

A parody website that you could upload and explore Corn-related facts

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file for your Supabase database connection (never commit this):

```env
# .env
DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/<db>?pgbouncer=true"
DIRECT_URL="postgresql://<username>:<password>@<host>:<port>/<db>"
```

Then create a `.env.local` for public-facing keys:

```env
# .env.local
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-publishable-key
CLERK_SECRET_KEY=your-secret-key

NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL='/profile/create'
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL='/profile/create'

SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_KEY=your-service-role-key

NEXT_PUBLIC_WEBSITE_URL='http://localhost:3000'
```

> ⚠️ **Do not commit `.env`, `.env.local` or any secret keys. Add them to your `.gitignore`**

### 4. Run the app locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 📦 Tech Stack

* Next.js 14 (App Router)
* Clerk.dev (Authentication)
* Supabase (Database + API)
* Tailwind CSS

---

## Learn More

To learn more about Next.js, take a look at the following resources:

* [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
* [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

