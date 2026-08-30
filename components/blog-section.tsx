"use client";

import { useState } from "react";
import { blogPosts } from "@/lib/blog-posts";
import type { BlogPost } from "@/lib/blog-posts";
import { BlogModal } from "@/components/blog-modal";

export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(() => {
    if (typeof window === "undefined") return null;
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("post");
    return slug ? (blogPosts.find((p) => p.slug === slug) ?? null) : null;
  });

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
    const url = `${window.location.pathname}?post=${post.slug}`;
    history.pushState(null, "", url);
  };

  const closePost = () => {
    setSelectedPost(null);
    history.pushState(null, "", window.location.pathname);
  };

  return (
    <>
      <div className="w-full flex flex-col gap-6 md:gap-8">
        <h2 className="text-base font-medium text-foreground">Blog.</h2>

        <ul className="flex flex-col w-full divide-y divide-border/60">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <button
                onClick={() => openPost(post)}
                className="group w-full text-left py-4 flex items-center justify-between gap-4 transition-colors duration-200 hover:text-foreground text-foreground/80 cursor-pointer"
              >
                <span className="font-medium text-base md:text-lg transition-colors group-hover:text-foreground">
                  {post.title}
                </span>
                <span className="text-xs md:text-sm text-muted-foreground shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                  {post.date}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <BlogModal post={selectedPost} onClose={closePost} />
    </>
  );
}
