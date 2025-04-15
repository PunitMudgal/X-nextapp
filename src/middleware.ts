import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isProtectedRoute = createRouteMatcher(["/"]);
const isPublicRoute = createRouteMatcher([
  "/api/webhooks/clerk(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/",
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) await auth.protect();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
