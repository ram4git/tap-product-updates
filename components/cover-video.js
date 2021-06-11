import cn from 'classnames';
import Link from 'next/link';
import {imageBuilder} from '../lib/sanity';

export default function CoverVideo({title, url, videoUrl, slug}) {
  const video = (
    <iframe
      width={1240}
      height={540}
      src={videoUrl}
      alt={`Cover video for ${title}`}
      frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      className={cn(
        'shadow-lg overflow-hidden bg-yellow-500 rounded-lg sm:rounded-lg',
        {
          'hover:shadow-medium transition-shadow duration-200': slug,
        },
      )}></iframe>
  );

  return <div className="-mx-5 sm:mx-0">{video}</div>;
}
