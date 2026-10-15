type YouTubeProps = {
  id: string;
  title: string;
  className?: string;
};

export function YouTube({ id, title, className = "" }: YouTubeProps) {
  return (
    <div className={`relative aspect-video bg-[#111] border border-line ${className}`}>
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
