import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Hero from '@components/Hero'

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
      <Hero hero={"/o-soup-crock-cropped.jpg"} width={1200} height={600} />
      <main>
        <Header title="FRENCH ONION SOUP" />
        <p className="author">
          Matt Shade, Home Cook
        </p>
        <div className="intro">
          <p>
            During my time as a bartender at Girard's Bistro in Franklin, MA, I stumbled upon the most unforgettable French Onion Soup. Made with fresh homemade veal stock, it rivaled even one that I savored in Paris, France. The first taste, during a rushed and lunchless shift, sparked a mission to indulge in as many bowls as possible and seek out the finest onion soup worldwide. While a close recipe has been found, the elusive secrets of chef Jeff Girard remain uncharted territory. The pursuit of the perfect onion soup continues, echoing the flavorful memories of French Onion Soup Gratinée from what once was Girard's Bistro run by Jeff and Kathleen Girard.
          </p>
        </div>
        <div className="row">
          
        <div className="column1">
          <h4 className="description">
            SERVES 8
          </h4>
          <ul>
            <li>8 tablespoons(1stick) unsalted butter</li>
            <li>1 tablespoon peanut oil </li>
            <li>3ish pounds mixed onions, sliced 1/8 inch thick</li>
            <li>Kosher salt and freshly ground black pepper to taste, divided</li>
            <li>1 cup Harvey's Bristol Cream Sherry or another sherry such as Amontillado</li>
            <li>2 quarts homemade or store-bought(Swanson's or Rachael Ray's) veal or beef stock</li>
            <li>6 sprigs thyme(tied with kitchen twine)</li>
            <li>2 bay leaves</li>
            <li>8 bowl-size slices rustic bread or 3 per bowl slices of a smaller baguette, toasted until crisp</li>
            <li>1 pound Gruyère cheese, grated</li>
            <li>if using a small baguette 1/4 pound Swiss cheese, sliced</li>
          </ul>
        </div>
        <div className="column2">
        <h4 className="description">
            FOR THE ONIONS
          </h4>
          <p>
            In a large Dutch oven or heavy-bottomed pot, melt butter and oil over medium heat. Add onions, season with salt and pepper, and cook, stirring occasionally, until onions are soft and caramelized, about 1 hour. 
          </p>
          <h4 className="description">
            POST ONION CARMELIZATION
            </h4>
          <p>
          Add sherry and cook until evaporated, about 10 minutes. I've used Amontillado sherry as a substitute and it was delicious, but the Harvey's Bristol Cream is what Chef Jeff used and I think it brings a more rich sweetness to the soup.
          </p>
          <p>
          Add stock, thyme, and bay leaves and bring to a boil. Reduce heat to medium-low and simmer, skimming occasionally, until flavors meld, about 1 hour. Season with salt and pepper.
          </p>
          <p>
            While it's tempting to want to eat the oinion soup in that same day it's made, it's best to let it sit overnight in the fridge and reheat the next day. This allows the flavors to meld and the flavors to mature. It seems like the optimal flavor potential is reached after 3 days in the fridge.
          </p>
          <h4 className="description">
            FOR THE CROUTON(S)
          </h4>
          <p>
            Toasting the croutons ahead of time is cruical. I've used a small baguette and cut 3 slices per bowl and it worked out great. I've also used a larger baguette and cut 8 bowl-size slices and that worked out great as well. Some folks choose to put a crouton on the bottom of the soup as well as the top. It's really up to you and how much bread you want in your soup. Toasting the bread early and letting it sit out for a few hours ensures that you won't end up with a soup sogged crouton.
          </p>
          <h4 className="description">
            CONSTRUCT THE SOUP
          </h4>
          <p>
            Turn broiler to high. Place 8 ovenproof bowls on a rimmed baking sheet. Ladle soup into bowls and top each with a slice of bread. Sprinkle with Gruyère and Swiss cheeses. If using the single layer of bread you don't need the Swiss cheese. If using smaller multiple pieces of bread for your crouton the Swiss cheese works well to bridge any gaps between the bread pieces and the bowl. Broil until cheese is melted and bubbly, about 3 minutes. Serve immediately.
          </p>
        </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
