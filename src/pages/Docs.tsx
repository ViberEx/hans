import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { sections } from "@/data/chapters";
import { Skeleton } from "@/components/ui/skeleton";

const Docs = () => {
  const { chapterId } = useParams();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Find the chapter
  const chapter = sections
    .flatMap((s) => s.chapters)
    .find((c) => c.id === chapterId);

  useEffect(() => {
    if (!chapter) {
      setError(true);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(false);

    // Load markdown file
    fetch(`/src/data/markdown/${chapter.file}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load");
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [chapter]);

  if (error || !chapter) {
    return <Navigate to="/" replace />;
  }

  if (loading) {
    return (
      <div className="container max-w-4xl py-8 space-y-4">
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    );
  }

  return (
    <article className="container max-w-4xl py-8 px-6">
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default Docs;
