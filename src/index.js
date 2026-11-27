export default {
  async fetch(request, env) {
    return env.ASSETS ? env.ASSETS.fetch(request) : new Response("ok");
  },
};
