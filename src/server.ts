// From a forum post.  It didnt work.
// if (typeof global === undefined) {
//   globalThis.global = globalThis
// }

import { CommonEngine } from '@angular/ssr/node';
import { render } from '@netlify/angular-runtime/common-engine.mjs';
import type { Context } from '@netlify/edge-functions';

const commonEngine = new CommonEngine();

export async function netlifyCommonEngineHandler(request: Request, context: Context): Promise<Response> {
  return await render(commonEngine);
}
