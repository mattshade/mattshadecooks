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
      <Hero hero={"/philly-cheesteak-cropped.jpg"} width={1200} height={600} />
      <main>
        <Header title="PHILLY CHEESESTEAK" />
        <p className="author">
          Matt Shade, Home Cook
        </p>
        <div className="intro">
          <p>
            Growing up in Massachussetts I was always a fan of the Philly Cheesesteak though the offering was limited to local pizza joints and a sandwich chain that I LOVE <a href="https://dangelos.com/">D'angelo</a>. I've had the pleasure of enjoying them in Philadelphia, PA(I've only been to Philly once and I know it's touristy, but I am a <a href="https://www.patskingofsteaks.com/">Pat's</a> fan) and I've also had the pleasure of enjoying them in the comfort of my own home. This recipe is a culmination of all the best parts of the cheesesteak. The meat is tender and flavorful, the onions and peppers are caramelized to perfection, and the cheese is melted and gooey.
          </p>
        </div>
        <div className="row">
          
        <div className="column1">
          <h4 className="description">
            SERVES 4
          </h4>
          <ul>
            <li>2lbs shaved rib eye</li>
            <li>2 tbsp peanut oil</li>
            <li>4 locally sourced hero rolls</li>
            <li>Kosher salt and onion powder to taste</li>
            <li>1/2 green pepper sliced(optional)</li>
            <li>1/2 red pepper sliced(optional)</li>
            <li>1/2 spanish onion sliced(optional)</li>
            <li>6 cremini mushrooms sliced(optional)</li>
            <li>4 heaping tbsp cheez wiz</li>
            <li>1/4 cup heavy cream</li>
          </ul>
        </div>
        <div className="column2">
        <h4 className="description">
            FOR THE VEGGIES AND MEAT
          </h4>
          <p>
            The best surface I've found for any sauteeing for this application is cast iron. You can use your go-to pan for this recipe, but I highly recommend using cast iron. It's the best way to get a good sear on the meat and veggies. I use a <a href="https://www.lodgecastiron.com/product/seasoned-cast-iron-baking-pan">Lodge</a> cast iron baking sheet pan which Lodge states is not intended for stovetop use, but it actually works out perfectly.
          </p>
        <h4 className="description">
            FOR THE CHEESE SAUCE
          </h4>
          <p>
            Combine cheez wiz and heavy cream in a small saucepan over medium heat. Stir until melted and combined. Keep warm until ready to use. 
          </p>
          <h4 className="description">
            FOR THE BREAD
          </h4>
          <p>
            Find a local bakery that makes hero rolls daily. If you can't find a local bakery that makes them daily, try your supermarket or a local sandwich shop. You want the freshest rolls possible. Keep them warm in an oven or toaster oven at 180 - 200 degrees F. 
          </p>
          <h4 className="description">
            FOR THE VEGGIES
            </h4>
          <p>
          In the sheet pan or a large skillet over medium-high heat, heat oil. Add peppers, onions, and mushrooms and cook until soft, about 5 minutes. Remove from skillet and set aside.
          </p>
          <h4 className="description">
            FOR THE MEAT
            </h4>
          <p>
            You'll want to find a supermarket that sells fresh shaved rib eye. The frozen stuff is just ok and will not produce great results. Sometimes with the frozen option there can be strange flavors in the meat. Avoid if possible. If your regular supermarket doesn't have it, try a local butcher or an Asian market. At Asian markets it's called shabu shabu. This will typically be frozen but the quality is much better than the pre-packaged frozen stuff at the supermarket. 
          </p>
          <p>
            Season meat with salt and onion powder. In the same sheet pan or skillet over medium-high heat, add meat and cook using two spatulas to break the meat up into quarter sized pieces. Sear until longer pink, about 5 minutes. Return veggies to skillet and toss to combine.
          </p>
          <h4 className="description">
            CONSTRUCT THE CHEESESTEAK
          </h4>
          <p>
            Use a New England top slice on the roll. This is the best way to keep the ingredients from falling out of the sandwich. Add a generous portion of cheese sauce to the roll, then meat and veggie mixture. Top with cheese sauce. Serve immediately.
          </p>
        </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
