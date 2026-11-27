export default {
  async fetch(request, env) {
    if (env && env.ASSETS) {
      return env.ASSETS.fetch(request);
    }
    return new Response("tororo-info", {
      status: 200,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  },
};
