# Clerk Authentication Integration

This project uses Clerk for authentication and user management. Clerk provides secure, scalable authentication with built-in features like social login, user profiles, and session management.

## 🚀 Features

- **Secure Authentication**: Sign up and sign in with email/password or social providers
- **Session Management**: Automatic session handling with secure cookies
- **User Profiles**: Access to user data and profile information
- **Protected Routes**: Middleware-based route protection
- **Social Login**: Google and Facebook authentication
- **Dark Mode Support**: Consistent theming with your app's design

## 📁 File Structure

```
src/
├── middleware.ts              # Clerk middleware for route protection
├── app/
│   ├── layout.tsx            # Root layout with ClerkProvider
│   ├── (auth)/
│   │   ├── layout.tsx        # Auth pages layout
│   │   ├── signin/
│   │   │   └── page.tsx      # Sign in page
│   │   └── signup/
│   │       └── page.tsx      # Sign up page
│   ├── home/
│   │   ├── layout.tsx        # Protected home layout
│   │   └── page.tsx          # Dashboard/home page
│   ├── profile/
│   │   └── page.tsx          # User profile page
│   └── api/
│       └── user/
│           └── route.ts      # Protected API route example
```

## 🔧 Setup

1. **Install Clerk**: `npm install @clerk/nextjs`
2. **Environment Variables**: Add to your `.env.local`:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
   CLERK_SECRET_KEY=your_secret_key
   ```
3. **Middleware**: `src/middleware.ts` handles route protection
4. **Provider**: `app/layout.tsx` wraps your app with `ClerkProvider`

## 🎯 Usage Examples

### Protecting Pages

```tsx
// Server Component
import { auth } from "@clerk/nextjs/server";

export default async function ProtectedPage() {
  const { userId } = await auth();

  if (!userId) {
    return <div>Please sign in</div>;
  }

  return <div>Welcome, authenticated user!</div>;
}
```

### Client Components

```tsx
"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}
```

### API Routes

```typescript
// src/app/api/protected/route.ts
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  return Response.json({ message: "Protected data" });
}
```

### Accessing User Data

```typescript
// Server Component
import { currentUser } from "@clerk/nextjs/server";

export default async function Profile() {
  const user = await currentUser();

  return (
    <div>
      <h1>Welcome, {user?.firstName}!</h1>
      <p>Email: {user?.primaryEmailAddress?.emailAddress}</p>
    </div>
  );
}
```

## 🔐 Route Protection

The middleware uses `createRouteMatcher` to protect specific routes:

```typescript
const isProtectedRoute = createRouteMatcher([
  "/home(.*)", // Protects /home and all sub-routes
  "/profile(.*)", // Protects /profile and all sub-routes
  "/api(.*)", // Protects all API routes
]);
```

**Public routes** (not protected by middleware):

- `/signin` and `/signup` - handled by Clerk's hash-based routing
- All other routes not matching the protected patterns

**Important**: The SignIn and SignUp components use `routing="hash"` to avoid conflicts with Next.js routing and middleware protection.

## 🎨 Customization

### Sign In/Sign Up Styling

The auth pages use Clerk's built-in components with custom styling that matches your app's theme:

```tsx
<SignIn
  appearance={{
    elements: {
      formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
      card: "shadow-xl",
      // ... more custom styles
    },
  }}
  routing="hash" // Important: Use hash-based routing
  redirectUrl="/home"
/>
```

### User Button Customization

```tsx
<UserButton
  appearance={{
    elements: {
      avatarBox: "h-8 w-8",
    },
  }}
/>
```

## ⚠️ Configuration Notes

### Hash-based Routing

This implementation uses `routing="hash"` for SignIn and SignUp components to:

- Avoid conflicts with Next.js App Router
- Prevent middleware from protecting auth routes
- Enable proper handling of email verification and password reset flows

### Middleware Configuration

The middleware is configured to protect only specific routes using `createRouteMatcher`:

- Protects `/home/*`, `/profile/*`, and `/api/*`
- Leaves auth routes (`/signin`, `/signup`) unprotected
- Allows Clerk to handle authentication flows properly

## 🚦 Testing the Integration

1. **Start the development server**: `npm run dev`
2. **Visit `/home`**: Should redirect to sign in if not authenticated
3. **Sign up/Sign in**: Use the auth pages or modal buttons
4. **Test API**: Click "Test Protected API" on the home page
5. **View Profile**: Visit `/profile` to see user information

## 📚 Additional Resources

- [Clerk Documentation](https://clerk.com/docs)
- [Next.js App Router Guide](https://clerk.com/docs/quickstarts/nextjs)
- [Clerk React Components](https://clerk.com/docs/components/overview)

## 🔒 Security Notes

- User data is stored securely in Clerk's database
- Sessions are managed via secure HTTP-only cookies
- No sensitive authentication data is stored in localStorage
- All authentication flows are handled server-side for security
