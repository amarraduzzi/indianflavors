export async function onRequest({ request }) {
const url = new URL(request.url);
const target = "https://indianflavors-foodcost.pages.dev" + url.pathname + url.search;
const init = {
method: request.method,
headers: request.headers,
};
if (request.method !== "GET" && request.method !== "HEAD") {
init.body = request.body;
}
const resp = await fetch(target, init);
const headers = new Headers(resp.headers);
return new Response(resp.body, {
status: resp.status,
statusText: resp.statusText,
headers,
});
}
