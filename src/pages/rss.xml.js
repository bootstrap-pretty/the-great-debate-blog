import { SITE } from '@config';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

// eslint-disable-next-line func-style
export async function get(context) {
    const blog = await getCollection('blog');
    return rss({
        title: SITE.title,
        description: SITE.description,
        site: context.site,
        items: blog.map(post => ({
            title: post.data.title,
            author: post.data.author,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/posts/${post.slug}/`,
            content: sanitizeHtml(parser.render(post.body)),
            ...post.data
        }))
    });
}
