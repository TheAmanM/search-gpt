import PostHogClient from "../src/posthog/index";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { searchTerm } = req.body;

  const posthog = PostHogClient();

  posthog.capture({
    distinctId: "anonymous",
    event: "search",
    properties: { searchTerm },
  });

  await posthog.shutdown(); // Ensures the event is sent before the function ends

  res.status(200).json({ success: true });
}
