import { PostHog } from "posthog-node";

export default function PostHogClient() {
  return new PostHog(import.meta.env.POSTHOG_KEY, {
    host: import.meta.env.POSTHOG_HOST || "https://app.posthog.com",
    flushAt: 1,
    flushInterval: 0,
  });
}
