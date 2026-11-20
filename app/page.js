export default function Home() {
  return (
    <main>
      <h1>Jogo da Forca</h1>
      <pre role="img" aria-label="Forca com um bonequinho pendurado">
        {'+----+'}{'\n'}
        {'|    |'}{'\n'}
        {'|    '}<span className="parte" style={{ '--entrada': 'revelar-cabeca' }}>O</span>{'\n'}
        {'|   '}<span className="parte" style={{ '--entrada': 'revelar-primeiro-braco' }}>/</span>
        <span className="parte" style={{ '--entrada': 'revelar-tronco' }}>|</span>
        <span className="parte" style={{ '--entrada': 'revelar-segundo-braco' }}>\</span>{'\n'}
        {'|    '}<span className="parte" style={{ '--entrada': 'revelar-tronco' }}>|</span>{'\n'}
        {'|   '}<span className="parte" style={{ '--entrada': 'revelar-primeira-perna' }}>/</span>{' '}
        <span className="parte" style={{ '--entrada': 'revelar-segunda-perna' }}>\</span>{'\n'}
        {'|'}{'\n'}
        {'+--------'}
      </pre>
      <p className="doacao">
        Doe <strong>R$1,00</strong> via Pix para me incentivar a desenvolver o jogo da forca.
        <br />Chave Pix <strong>21-98088-2229</strong>
      </p>
    </main>
  );
}
