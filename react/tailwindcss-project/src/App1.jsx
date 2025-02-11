import Footer from "./ex02-app/Footer";
import Header from "./ex02-app/Header";
import Main from "./ex02-app/Main";
import Nav from "./ex02-app/Nav";

export default function App() {
  return (
    <body className="bg-cyan-300">
      <div className="w-full max-w-[1000px] mx-auto">
        <Header />
        <Nav />
        <Main />
        <Footer />
      </div>
    </body>
  );
}
