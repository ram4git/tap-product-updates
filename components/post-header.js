import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from '../components/cover-image';
import PostTitle from '../components/post-title';
import {imageBuilder} from '../lib/sanity';
export default function PostHeader({title, coverImage, date, author}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 text-2xl font-bold text-tap-primary">
        <Date dateString={date} />
      </div>
      {/* <div className="hidden md:block md:mb-12">
        <Avatar name={author?.name} picture={author?.picture} />
      </div> */}
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} imageObject={coverImage} url={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author?.name} picture={author?.picture} />
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
}
