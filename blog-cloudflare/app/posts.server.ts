type Post = {
  slug: string;
  title: string;
  markdown: string;
};

export async function getPosts(db: D1Database): Promise<Post[]> {
  const { results } = await db.prepare("select * from posts").all<Post>();

  return results ?? [];
}

export async function getPost(
  db: D1Database,
  slug: string
): Promise<Post | null> {
  console.log({ slug });

  const post = await db
    .prepare("select * from posts where slug = ?")
    .bind(slug)
    .first<Post | null>();

  return post;
}

export async function createPost(db: D1Database, post: Post): Promise<Post> {
  const createdPost = await db
    .prepare(
      "insert into posts (slug, title, markdown) values (?, ?, ?) returning *"
    )
    .bind(post.slug, post.title, post.markdown)
    .first<Post>();

  return createdPost;
}
