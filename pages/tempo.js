function Tempo(props) {
  console.log('> Passando pelo Frontend;')
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
    <div>
      <div>{dynamicDateString} (dinâmico)</div>
      <div>{props.staticDateString} (estático - com delay e revalidação branch main)</div>
    </div>
  )
}

// getStaticProps só executa no build ou quando bater o tempo de revalidação
export async function getStaticProps() {
  console.log('> Passando pelo getStaticProps();');
  console.log('> Adicionando delay de 5 segundos');

  await delay(5000);
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString
    },
    revalidate: 1
  }
}
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
export default Tempo; 