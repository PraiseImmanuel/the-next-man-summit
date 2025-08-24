# The Next Man Summit - Event Registration Website

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) for event registration for The Next Man Summit, featuring a welcome page, registration form, and email confirmation functionality.

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Supabase](https://supabase.com/) - Backend as a Service for database
- [Resend](https://resend.com/) - Email API

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Supabase account
- Resend account

### Installation

1. Clone the repository and install dependencies

```bash
git clone <repository-url>
cd the-next-man-summit
npm install
```

2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` with your actual Supabase and Resend API credentials.

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Setup

### Supabase Setup

1. Create a new project in Supabase
2. Create a `registrations` table with the following schema:

```sql
create table registrations (
  id uuid default uuid_generate_v4() primary key,
  first_name text not null,
  last_name text not null,
  email text not null,
  company text,
  job_title text,
  ticket_type text not null,
  dietary_restrictions text,
  special_requirements text,
  created_at timestamp with time zone default now() not null
);

-- Enable Row Level Security
alter table registrations enable row level security;

-- Create a policy that allows inserts from authenticated and anonymous users
create policy "Allow anonymous registrations" on registrations
  for insert
  to anon, authenticated
  with check (true);

-- Create a policy that only allows users to view their own registrations
create policy "Users can view their own registrations" on registrations
  for select
  to authenticated
  using (auth.uid() = id);
```

3. Get your Supabase URL and anon key from the project settings and add them to your `.env.local` file.

### Resend Setup

1. Create an account on [Resend](https://resend.com/)
2. Create an API key and add it to your `.env.local` file
3. Verify your domain if you want to use a custom sender domain

## Project Structure

- `app/page.tsx` - Home page with event information
- `app/register/page.tsx` - Registration form
- `app/confirmation/page.tsx` - Confirmation page after successful registration
- `app/api/send-confirmation/route.ts` - API route for sending confirmation emails

## Features

- Responsive design with dark mode support
- Animated UI components with Framer Motion
- Form validation
- Database storage with Supabase
- Email confirmation with Resend
- Error handling

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
