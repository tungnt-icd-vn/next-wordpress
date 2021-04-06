import Head from 'next/head'

export default function Meta(  
  post_name,
  post_description,
  post_url,
  post_image,
  ) {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" /> <meta title="titlexxx" content={post_name} />
      <meta name="description" content={post_description}/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={post_url}/>
      <meta property="og:title" content={post_name} />
      <meta property="og:description" content={post_description}/>
      <meta property="og:image" content={post_image}/>
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content={post_url}/>
      <meta property="twitter:title" content={post_name} />
      <meta property="twitter:description" content={post_description}/>
      <meta property="twitter:image" content={post_image}/>
    </Head>
  )
}
