import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

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

      <main>
        <Header title="FRENCH ONION SOUP" />
        <p className="description">
          Matt Shade, New York
        </p>
        <div className="row">
        <div className="column1">
          <p className="description">
            SERVES 4
          </p>
          <ul>
            <li>6 tablespoons (90g) unsalted butter, plus more for bread</li>
            <li>3 pounds (1.4kg) yellow or mixed onions, sliced 1/8 inch thick (see note)</li>
            <li>Kosher salt and freshly ground black pepper to taste, divided</li>
            <li>1/2 cup (120ml) dry sherry (such as Amontillado)</li>
            <li>2 quarts (1.8L) homemade or store-bought low-sodium chicken stock</li>
            <li>2 sprigs thyme</li>
            <li>1 bay leaf</li>
            <li>8 bowl-size slices rustic bread, toasted until crisp</li>
            <li>1 medium clove garlic</li>
            <li>1 pound (450g) Gruyère cheese, grated</li>
            <li>2 tablespoons freshly minced chives, for garnish</li>
          </ul>
        </div>
        <div className="column2">
        <p className="description">
            SERVES 4
          </p>
          <div>
          <img src="/o-soup.jpg" alt="French Onion Soup" style={{maxWidth:"600px"}} />
        </div>
          <p>
            we gonna start describing things here
          </p>
        </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
