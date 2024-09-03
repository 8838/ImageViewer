export function onRequest(context) {
  return new Response(context.html, {
    headers: { 'content-type': 'text/html;charset=UTF-8' },
  });
}
