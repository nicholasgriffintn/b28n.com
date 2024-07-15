import * as b28n from '@b28n/b28n';

import type { Env } from './types';

async function transformBBCSite(
  html: string,
  translator: {
    decode: (encoded: string) => Promise<string>;
    encode: (decoded: string) => Promise<string>;
  }
) {
  class ElementHandler {
    element(element: Element) {
      if (element.tagName === 'a') {
        const href = element.getAttribute('href');
        if (
          href &&
          (href.startsWith('/news/articles/') ||
            href.startsWith('https://www.bbc.co.uk/news/articles/'))
        ) {
          const articleId = href.slice(15);
          // TODO: Figure out how to encode IDs
          // const encodedArticleId = translator.encode(articleId);
          element.setAttribute('href', `/n2s/${articleId}`);
        } else if (href && href.startsWith('/')) {
          element.setAttribute('href', `https://www.bbc.co.uk${href}`);
        }
      }
    }
  }

  class DocumentHandler {
    end(end) {
      const script = `<script src="https://b28n.com/b28n.js"></script>`;
      end.append(script, { html: true });
    }
  }

  return new HTMLRewriter()
    .on('*', new ElementHandler())
    .onDocument(new DocumentHandler())
    .transform(
      new Response(html, {
        headers: {
          'content-type': 'text/html;charset=UTF-8',
        },
      })
    );
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { method, url } = request;
    const { pathname, searchParams } = new URL(url);

    const translator = new b28n.B28n({
      bucket: env.DATA_BUCKET,
    });
    await translator.loadLookup();

    switch (method) {
      case 'GET':
        if (pathname === '/n2s') {
          const bbcHome = await fetch('https://www.bbc.co.uk/news');
          const body = await bbcHome.text();
          return transformBBCSite(body, translator);
        } else if (pathname.startsWith('/n2s/')) {
          const articleId = pathname.slice(5);
          const decodedArticleId = await translator.decode(articleId);
          console.log('Loading article', articleId, decodedArticleId);
          const bbcArticle = await fetch(
            `https://www.bbc.co.uk/news/articles/${decodedArticleId}`
          );
          return transformBBCSite(await bbcArticle.text(), translator);
        } else {
          return new Response('Not Found', { status: 404 });
        }
      default:
        return new Response('Method not Allowed', { status: 405 });
    }
  },
};
