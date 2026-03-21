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
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-10 w-full mt-16 md:mt-24 border-t border-border pt-4">
        {/* Left column */}
        <div className="md:col-span-4 lg:col-span-5 pr-6 md:pr-8 lg:pr-10">
          <h2 className="text-base font-medium text-foreground">Blog.</h2>
        </div>

        {/* Right column — list of post titles */}
        <div className="md:col-span-8 lg:col-span-7 pr-6 md:pr-8 lg:pr-10">
          <ul className="flex flex-col">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <button
                  onClick={() => openPost(post)}
                  className="group w-full text-left py-3 flex items-baseline justify-between gap-4 border-b border-border/60 last:border-b-0 transition-colors duration-200 hover:text-foreground text-foreground/80"
                >
                  <span className="font-medium text-[15px] md:text-base transition-opacity duration-200 group-hover:opacity-100 opacity-80">
                    {post.title}
                  </span>
                  <span className="text-xs text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {post.date}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <BlogModal post={selectedPost} onClose={closePost} />
    </>
  );
}
