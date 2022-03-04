import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

type TitleAndMetaTagsProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  pathname?: string;
};

export function TitleAndMetaTags({
  title = 'Resume Quest',
  description = 'We\'ll help you refine and tailor your resume.',
  image,
  url = 'https://critique-ai.com', //TODO
  pathname,
}: TitleAndMetaTagsProps) {
  const router = useRouter();

  const imageUrl = `public/images/social/${image || 'default.png'}`;
  const path = pathname || router.pathname;

  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta property="og:url" content={`${url}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
    </Head>
  );
}