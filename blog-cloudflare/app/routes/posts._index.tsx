import { json } from "@remix-run/cloudflare";
import type { LoaderArgs } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/posts.server";

export async function loader({ context }: LoaderArgs) {
  return json({ posts: await getPosts(context.env.DB) });
}

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="admin" className="text-red-600 underline">
        Admin
      </Link>
    </main>
  );
}
