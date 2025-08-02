import PostHogClient from "../../src/posthog";

export async function POST(request: Request) {
  const body = await request.json();
  const { searchTerm } = body;

  const posthog = PostHogClient();

  posthog.capture({
    distinctId: "anonymous",
    event: "search",
    properties: { searchTerm },
  });

  await posthog.shutdown();

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
