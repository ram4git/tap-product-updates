import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from './cover-image';
import Link from 'next/link';
import {imageBuilder} from '../lib/sanity';
export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="px-4 py-6">
      <div className="mb-2">
        <CoverImage
          slug={slug}
          title={title}
          imageObject={coverImage}
          url={imageBuilder(coverImage).url()}
        />
      </div>
      <h3 className="text-3xl leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline text-tap-primary">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4 text-gray-600">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      {/* <Avatar name={author?.name} picture={author?.picture} /> */}
    </div>
  );
}
