import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from '../components/cover-image';
import CoverVideo from '../components/cover-video';
import PostTitle from '../components/post-title';
import {imageBuilder} from '../lib/sanity';
export default function PostHeader({
  title,
  coverImage,
  date,
  tagline,
  coverVideo,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="text-center md:text-left mb-8 text-2xl font-bold text-tap-primary">
        <Date dateString={date} />
      </div>
      <div className="mb-8 md:mb-16 -mx-10 sm:mx-0">
        {coverVideo ? (
          <CoverVideo title={title} videoUrl={coverVideo} />
        ) : (
          <CoverImage title={title} imageObject={coverImage} url={coverImage} />
        )}
      </div>
      <div className="max-w-2xl mx-auto">
        <h1>{tagline}</h1>
      </div>
    </>
  );
}
