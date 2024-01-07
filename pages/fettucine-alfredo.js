import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Hero from '@components/Hero'
import Navi from '@components/Navi'

export default function onionSoup() {
  return (
    <div className="container">
      <Head>
        <title>mattshadecooks</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet" />
      </Head>
      <Navi />
      <Hero hero={"/fettucine-alfredo-cropped.jpg"} width={1200} height={600} />
      <main>
        <Header title="FETTUCINE ALFREDO" />
        <p className="author">
          Matt Shade, Home Cook
        </p>
        <div className="intro">
          <p>
            Pasta in a creamy sauce is a comfort food that I can't resist. I've tried many different recipes for Alfredo sauce and this one is my favorite. It's rich, creamy, and flavorful. I've made it with fettucine, but it's also great with penne or rigatoni. I've also added grilled chicken or shrimp to this recipe and it's delicious. This is a dish that comes together quickly and is sure to please everyone at the table.
          </p>
        </div>
        <div className="row">
          
        <div className="column1">
          <h4 className="description">
            SERVES 4
          </h4>
          <ul>
            <li>9-18oz fresh fettucine</li>
            <li>2 tbsp olive oil</li>
            <li>6 cloves garlic</li>
            <li>Kosher salt and freshly ground black pepper to taste</li>
            <li>1 quart heavy cream</li>
            <li>1/4 cup homemade or store-bought chicken stock</li>
            <li>7oz Parmigiano Reggiano grated</li>
            <li>1 heaping tbsp cream cheese</li>
            <li>1 tbsp butter</li>
          </ul>
        </div>
        <div className="column2">
        <h4 className="description">
            FOR THE SAUCE
          </h4>
          <p>
            Smash the garlic cloves with the side of a knife and remove the skins. In a large saucepan, heat the olive oil over medium heat. Add the garlic and cook until golden brown, about 2 minutes. Add the cream and chicken stock to the saucepan and bring to a simmer. Reduce heat to low, stir in the Parmigiano Reggiano, cream cheese, and cook until the sauce is thick enough to coat the back of a spoon, about 15 minutes. Season with salt, add butter. 
          </p>
          <h4 className="description">
            FOR THE PASTA
            </h4>
          <p>
          In a large pot of boiling salted water, cook the fettucine until al dente, about 3 minutes. Drain the pasta, coat with olive oil, and add it to the saucepan with the Alfredo sauce. Toss to coat the pasta in the sauce. Season with salt and pepper. Garnish with more Parmigiano. Drizzle with olive oil. Serve immediately.
          </p>          
        </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
