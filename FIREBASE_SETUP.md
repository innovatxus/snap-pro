# Firebase setup

The app builds and runs with no Firebase credentials at all — sign-in is
simply disabled until you complete the steps below. This is the **one step**
needed to turn it on.

## 1. Create a Firebase project

1. Go to the [Firebase Console](https://console.firebase.google.com/) → **Add project**.
2. Once created, click the **Web** icon (`</>`) to register a web app.
3. Copy the `firebaseConfig` object it shows you — you'll paste these values
   into `.env.local` in step 4.

## 2. Enable Email/Password sign-in

1. In the console: **Build → Authentication → Get started**.
2. Under **Sign-in method**, enable **Email/Password**.

## 3. Create a Firestore database

1. In the console: **Build → Firestore Database → Create database**.
2. Start in **production mode** (the rules in `firestore.rules` enforce
   deny-by-default access regardless of this choice).
3. Deploy the rules from this repo:
   ```bash
   npm install -g firebase-tools   # once
   firebase login
   firebase init firestore         # point it at this project, keep firestore.rules as-is
   firebase deploy --only firestore:rules
   ```

## 4. Fill in `.env.local`

Copy `.env.example` to `.env.local` and paste the values from step 1:

```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

These values are **not secret** — Firebase web config is meant to be public,
which is why every key is `NEXT_PUBLIC_`. The real security boundary is
`firestore.rules`, not hiding this config.

Restart `npm run dev`. Sign-in is now live.

## 5. (Optional) Admin SDK service account

Only needed if/when server-side code needs elevated Firestore/Auth access
(e.g. an API route that reads another user's data). Most of this app never
needs this.

1. Console: **Project settings → Service accounts → Generate new private key**.
   This downloads a JSON file.
2. Minify it to one line and set it as a single env var — **never commit this
   file, never prefix it `NEXT_PUBLIC_`**:
   ```
   FIREBASE_SERVICE_ACCOUNT_KEY={"type":"service_account",...}
   ```
3. Only import it from `lib/firebase/admin.ts`, and only inside server-only
   code (API routes, Server Components, Server Actions). The `server-only`
   package import at the top of that file turns an accidental client import
   into a build error.
