// From a forum post.  It didnt work.
// if (typeof global === undefined) {
//   globalThis.global = globalThis
// }

import { CommonEngine } from '@angular/ssr/node';
import { render } from '@netlify/angular-runtime';

const commonEngine = new CommonEngine();

export async function netlifyCommonEngineHandler(request: Request, context: any): Promise<Response> {
  return await render(commonEngine);
}
