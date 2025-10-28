export const metadata = {
  title: 'Password Game — Share',
  description: 'Share preview for Password Game miniapp',
  openGraph: {
    title: 'Password Game',
    description: 'A game that tests your password strength, your patience, and your will to live',
    images: [
      {
        url: 'https://neal.fun/share-cards/password-game.png?v=2'
      }
    ]
  }
};

export default function Page(){
  return (
    <main style={{fontFamily:'sans-serif',padding:32}}>
      <h1>Password Game</h1>
      <p>Share preview for the Password Game miniapp.</p>
      <img src="https://neal.fun/share-cards/password-game.png?v=2" alt="share" style={{maxWidth:'100%',height:'auto'}} />
    </main>
  );
}
