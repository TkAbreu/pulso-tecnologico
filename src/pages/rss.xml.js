import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.date - a.data.date);

  return rss({
    title: 'Pulso Tecnológico',
    description: 'O pulso da tecnologia — artigos sobre EDI, produtividade e tendências tech em português.',
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id.replace(/\.md$/, '')}`,
    })),
    customData: '<language>pt-BR</language>',
  });
}
