import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import Row from "./Row";
import requests from "./requests.js";
import Footer from "./Footer";
// import routes from "./routes.js"; 
  

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentaries}
      />
      <Row
        title="Thriller Movies"
        fetchUrl={requests.fetchThriller} />
      <Footer />
    </div>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <Banner />
//       <Row
//         title="NETFLIX ORIGINALS"
//         fetchUrl="fetchNetflixOriginals"
//         isLargeRow={true}
//       />
//       <Row title="Trending Now" fetchUrl="fetchTrending" />
//       <Row title="Top Rated" fetchUrl="fetchTopRatedMovies" />
//       <Row title="Action Movies" fetchUrl="fetchActionMovies" />
//       <Row title="Comedy Movies" fetchUrl="fetchComedyMovies" />
//       <Row title="Horror Movies" fetchUrl="fetchHorrorMovies" />
//       <Row title="Romance Movies" fetchUrl="fetchRomanceMovies" />
//       <Row title="Documentaries" fetchUrl="fetchDocumentaries" />
//       <Row
//         title="Thriller Movies"
//         fetchUrl="fetchThriller" />
//       <Footer />
//      </div>
//   );
// }
export default App;

