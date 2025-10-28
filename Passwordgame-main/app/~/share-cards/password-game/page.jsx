import Head from 'next/head';

export default function Page(){
  const title = 'Password Game — Share';
  const description = 'A game that tests your password strength, your patience, and your will to live';
  const image = 'https://neal.fun/share-cards/password-game.png?v=2';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index,follow" />
      </Head>
      <main style={{fontFamily:'sans-serif',padding:32}}>
        <h1>Password Game</h1>
        <p>Share preview for the Password Game miniapp.</p>
        <img src={image} alt="share" style={{maxWidth:'100%',height:'auto'}} />
      </main>
    </>
  );
}
