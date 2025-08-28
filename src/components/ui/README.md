# UI Components

This directory contains reusable UI components for the Dozen project management application.

## Components

### Button

A versatile button component with multiple variants and states.

```tsx
import { Button } from "@/components/ui";

<Button variant="primary" size="md" isLoading={false}>
  Click me
</Button>;
```

**Props:**

- `variant`: "primary" | "secondary" | "outline"
- `size`: "sm" | "md" | "lg"
- `isLoading`: boolean
- `disabled`: boolean
- `className`: string

### Input

A form input component with label and error handling.

```tsx
import { Input } from "@/components/ui";

<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  error="Invalid email"
/>;
```

**Props:**

- `label`: string (optional)
- `error`: string (optional)
- `type`: string (default: "text")
- All standard input props

### Checkbox

A checkbox component with label support.

```tsx
import { Checkbox } from "@/components/ui";

<Checkbox label="Accept terms" checked={true} onChange={handleChange} />;
```

**Props:**

- `label`: string | React.ReactNode (optional)
- `error`: string (optional)
- All standard checkbox props

### SocialButton

Pre-configured buttons for social authentication.

```tsx
import { SocialButton } from "@/components/ui";

<SocialButton provider="google" onClick={handleGoogleAuth} />;
```

**Props:**

- `provider`: "google" | "facebook" | "github" | "twitter"
- `onClick`: function
- `disabled`: boolean
- `className`: string

### FormField

A wrapper component for form fields with consistent styling.

```tsx
import { FormField } from "@/components/ui";

<FormField label="Name" required error="Name is required">
  <input type="text" />
</FormField>;
```

**Props:**

- `label`: string (optional)
- `error`: string (optional)
- `required`: boolean
- `children`: React.ReactNode

## Usage

Import components from the index file:

```tsx
import {
  Button,
  Input,
  Checkbox,
  SocialButton,
  FormField,
} from "@/components/ui";
```

## Styling

All components use Tailwind CSS classes and support:

- Dark mode (automatic)
- Responsive design
- Focus states
- Hover states
- Loading states
- Error states

## Animations

The `animations.css` file contains custom animations used throughout the application:

- `fade-in-up`
- `gradient-x`
- `float` and variants
- Animation delay classes
