import { NextResponse } from "next/server";

/**
 * To create a route handler, export a function with the name of the HTTP method you want to handle.
 * For example, to handle GET requests, export a function named GET.
 *
 * @see {@url https://nextjs.org/docs/app/building-your-application/routing/route-handlers}
 */
export async function GET() {
  return NextResponse.json({ message: "Hello World" });
}
