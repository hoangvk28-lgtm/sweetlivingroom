import Image from "next/image";
import type { Author } from "@/data/authors";

/**
 * Author avatar. Falls back to an initials monogram when the author record has
 * no photo, so a missing file never renders a broken image. We do not ship a
 * stock portrait for an editor, since a photo of an unrelated person presented
 * as our author would be a misrepresentation.
 */
export function AuthorAvatar({
  author,
  size,
  className = "",
}: {
  author: Author;
  size: number;
  className?: string;
}) {
  const initials = author.name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (author.avatarUrl) {
    return (
      <span className={`relative rounded-full overflow-hidden shrink-0 block ${className}`} style={{ width: size, height: size }}>
        <Image src={author.avatarUrl} alt={`${author.name}, ${author.role}`} fill sizes={`${size}px`} className="object-cover" />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`rounded-full shrink-0 flex items-center justify-center bg-cta text-white font-display font-semibold ${className}`}
      style={{ width: size, height: size, fontSize: Math.round(size * 0.4) }}
    >
      {initials}
    </span>
  );
}
