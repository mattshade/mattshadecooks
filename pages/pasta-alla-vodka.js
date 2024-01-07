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
      <Hero hero={"/pasta-alla-vodka-cropped.jpg"} width={1200} height={600} />
      <main>
        <Header title="PASTA ALLA VODKA" />
        <p className="author">
          Matt Shade, Home Cook
        </p>
        <div className="intro">
          <p>
            I love pasta with vodka sauce. I've tried many recipes and this one is my favorite. It's a little more involved than some of the other recipes I've tried, but it's worth it. It seems like it would go more quickly but takes just over an hour to make. Let's get into it!
          </p>
        </div>
        <div className="row">
          
        <div className="column1">
          <h4 className="description">
            SERVES 6
          </h4>
          <ul>
            <li>3 tablespoons unsalted butter</li>
            <li>1/2 quart heavy cream</li>
            <li>14oz can peeled whole san marzano tomatoes</li>
            <li>6oz tomato paste</li>
            <li>50ml vodka</li>
            <li>7oz parmigiano reggiano grated</li>
            <li>1 medium sized onion</li>
            <li>4 cloves garlic</li>
            <li>1lb pasta</li>
          </ul>
        </div>
        <div className="column2">
        <h4 className="description">
            FOR THE SAUCE
          </h4>
          <p>
            In a 3-4 quart saucepan, melt butter over medium heat. Add onion, garlic, a big pinch of salt and cook, stirring occasionally, until soft, but not carmelized, about 10 minutes. Turn heat down if any burning or carmelization starts to happen. Add the tomato paste and cook until fragrant, about 3 minutes. Add tomatoes and their juices and cook, stirring occasionally, press the tomatoes until all are crushed, about 10 minutes. Add cream and simmer until slightly reduced, about 10 minutes more. Remove from heat and stir in cheese. Season with salt and pepper. 
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
            While it's tempting to want to eat the onion soup in that same day it's made, it's best to let it sit overnight in the fridge and reheat the next day. This allows the flavors to meld and mature. For me, the optimal flavor potential is reached after 3 days in the fridge.
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
