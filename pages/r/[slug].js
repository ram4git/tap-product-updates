import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import MoreStories from '../../components/more-stories';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
import Comments from '../../components/comments';
import SectionSeparator from '../../components/section-separator';
import Layout from '../../components/layout';
import {getAllPostsWithSlug, getPostAndMorePosts} from '../../lib/api';
import PostTitle from '../../components/post-title';
import Head from 'next/head';
import {CMS_NAME} from '../../lib/constants';
import Form from '../../components/form';

export default function Post({post, morePosts, preview}) {
  const router = useRouter();
  const {embed} = router.query;
  console.log({post});

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div className="no-scrollbar overflow-y-visible">
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="max-w-8xl mx-auto px-4">
            <Head>
              <title>{post.title}</title>
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              videoUrl={post.videoUrl}
            />
            <PostBody content={post.body} />
          </article>
        </>
      )}
    </div>
  );
}

export async function getStaticProps({params, preview = false}) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map(post => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}
