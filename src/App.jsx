import { Header } from "./Header";
import { ArticlesPage } from "./ArticlesPage";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="font-['Oswald'] flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto py-12 px-24 flex-auto mt-16">
        <ArticlesPage />
      </div>
      <Footer />
    </div>
  )
}

export default App;