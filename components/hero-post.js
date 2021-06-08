import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from '../components/cover-image';
import CoverVideo from '../components/cover-video';
import Link from 'next/link';

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tagline,
  coverVideo,
}) {
  return (
    <section>
      <div className="mb-12 md:mb-16">
        <div className="relative rounded-lg overflow-hidden">
          {coverVideo ? (
            <CoverVideo title={title} videoUrl={coverVideo} />
          ) : (
            <CoverImage
              slug={slug}
              imageObject={coverImage}
              title={title}
              url={coverImage}
            />
          )}
          <div className="flex pb-2 md:pb-4 items-center flex-col absolute inset-x-0 bottom-0 backdrop-filter backdrop-blur-sm rounded-b-lg cursor-pointer z-10">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <>
                <h3 className="text-4xl lg:text-6xl leading-tight font-medium text-white px-4 text-center bg-blend-darken">
                  <a className=" hover:underline">{title}</a>
                </h3>
                <div className="text-xl text-gray-100 font-bold">
                  <Date dateString={date} />
                </div>
              </>
            </Link>
          </div>
        </div>
        {tagline ? (
          <a href={`/posts/${slug}`}>
            <div>
              <h1 className="text-3xl text-center text-tap-primary py-2">
                {tagline}
              </h1>
              <h1 className="text-lg pb-8 text-blue-500 cursor-pointer text-center">
                read more...
              </h1>
            </div>
          </a>
        ) : null}
      </div>
    </section>
  );
}
