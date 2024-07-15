import * as b28n from '@b28n/b28n';

import type { Env } from './types';

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const { method, url } = request;
    const { pathname, searchParams } = new URL(url);

    const query = searchParams.get('q');
    const decodedQuery = decodeURIComponent(query || '');

    const translator = new b28n.B28n();

    switch (method) {
      case 'GET':
        switch (pathname) {
          case '/':
            return new Response('H3o, w3d!');
          case '/decode':
            if (!decodedQuery) {
              return new Response('Bad Request', { status: 400 });
            }

            const decoded = await translator.decode(decodedQuery);
            return new Response(decoded);
          case '/encode':
            if (!decodedQuery) {
              return new Response('Bad Request', { status: 400 });
            }

            const encoded = await translator.encode(decodedQuery);
            return new Response(encoded);
          default:
            return new Response('Not Found', { status: 404 });
        }
      default:
        return new Response('Method not Allowed', { status: 405 });
    }
  },
};
