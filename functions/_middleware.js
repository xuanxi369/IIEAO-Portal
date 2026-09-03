// Cloudflare Pages Functions middleware
// This file tells Pages to use the Worker from dist/server

export async function onRequest(context) {
  // Import the built server handler
  const { default: handler } = await import('../dist/server/index.js');
  return handler(context.request, context.env, context);
}
