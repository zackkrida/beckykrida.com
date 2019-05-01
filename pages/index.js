import Header from '../components/Header'

function Home() {
  return (
    <div>
      <style jsx global>{`
        body {
          background: rebeccapurple;
        }
      `}</style>
      <Header />
      <h1>It's working!</h1>
    </div>
  )
}

export default Home
