// import type { NextApiRequest, NextApiResponse } from 'next';

// type MiddlewareFn = (
//   req: NextApiRequest,
//   res: NextApiResponse,
//   next: (result?: unknown) => void
// ) => void;

// export default function runMiddleware(
//   req: NextApiRequest,
//   res: NextApiResponse,
//   fn: MiddlewareFn
// ): Promise<unknown> {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result);
//       }
//       return resolve(result);
//     });
//   });
// }
