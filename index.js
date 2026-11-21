// tororo-info: sirve la página pública de información en tororo.trade/info
// Con la ruta "tororo.trade/info*" el Worker recibe la ruta COMPLETA, así que url.pathname es "/info".
// public/info.html se sirve en /info (la extensión .html se quita sola; /info/ y /info.html redirigen a /info).
export default {
  async fetch(request, env) {
    const res = await env.ASSETS.fetch(request);
    // Se copia la respuesta para poder añadir una cabecera de diagnóstico.
    const out = new Response(res.body, res);
    out.headers.set("x-served-by", "tororo-info");
    return out;
  },
};
