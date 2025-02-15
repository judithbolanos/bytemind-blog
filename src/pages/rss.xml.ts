import type { APIRoute } from 'astro';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from "sanitize-html";
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export const GET: APIRoute = async ({ params, request , site }) => {
    const getBlogs = await getCollection('blog');
  return rss({
    //stylesheet: '/styles/rss.xsl',
    // `<title>` field in output xml
    title: 'ByteMind Blog',
    // `<description>` field in output xml
    description: 'Donde la creatividad y la tecnología se fusionan. Explora con nosotros las últimas tendencias en desarrollo de software, desde la inteligencia artificial hasta el diseño de interfaces intuitivas. Descubre cómo transformar tus ideas en código y da vida a proyectos innovadores.',
    xmlns: {
        media: 'http://search.yahoo.com/mrss/',
    },
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: site ?? '',
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: getBlogs.map( ({data, slug, body})=>({
        title:data.title,
        pubDate:data.date,
        description:data.description,
        link: `/post/${slug}`,
        content: sanitizeHtml(parser.render(body), {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
          }),
          
          customData: `<media:content
              type="image/${data.image.format === 'jpg' ? 'jpeg' : 'png'}"
              width="${data.image.width}"
              height="${data.image.height}"
              medium="image"
              url="${site + data.image.src}" />
          `,
    })),
    // (optional) inject custom xml
    customData: `<language>es-mx</language>`,
  });
}