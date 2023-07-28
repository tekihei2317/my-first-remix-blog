import { json } from "@remix-run/cloudflare";
import type { LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getPost } from "~/posts.server";
import { marked } from "marked";

export async function loader({ context, params }: LoaderArgs) {
  invariant(params.slug, "params.slug is required");
  const post = await getPost(context.env.DB, params.slug);
  invariant(post, `Post not found: ${params.slug}`);

  const html = marked(post.markdown);
  return json({ html, post });
}

export default function PostSlug() {
  const { post, html } = useLoaderData<typeof loader>();

  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
