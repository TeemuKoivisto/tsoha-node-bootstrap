#Vaihtoehtoinen tsoha-bootstrap Nodella

Jos tuntee olonsa rohkeaksi voi yrittää tehdä tsohan Nodella. Jotta devaaminen omalla koneella olisi mahdollista tulee seuraavat asiat suorittaa ennen kuin pääset tekemään yhtään mitään:
* Asenna Node.js nvm:n kautta ja npm
* Asenna gulp ja bower globaalisti npm:n avulla (npm install gulp -g)
* Lataa tämä repositorio
* Menee juuren ja kirjoita "npm install" sekä "bower install"
* Käynnistä sovellus kirjoittamalla "gulp nodemon"

Nvm on versionhallinta-ohjelmisto Nodelle, joka mahdollistaa useamman Node-version käytön. Se on hyvä olla. Npm on "Node Package Manager" jonka avulla siis hallinnoit sovelluksesi riippuvuuksia. Gulp on task-runner eli sen avulla voit kirjoittaa apu-skriptejä jotka tekevät muuten työläitä ja rutiinomaisia tehtäviä. Esim. "gulp nodemon" suorittaa "nodemon" -nimisen skriptin "gulp" -kansiossa joka käynnistää serverin aina uudestaan muutettuasi jotain tiedostoa kansiossa. HUOM. jos luot uusia kansioita tulee se silti käynnistää uudestaan manuaalisesti eli terminaalissa ctrl+c ja uudestaan "gulp nodemon". Bower on front-end:in riippuvuuksien hallintakirjasto, johon siis kannattaa tallentaa kaikki tyylikirjastot kuten bootstrap tai ionicons. Jos mietit että miksi tarvitaan kahta eli kun npm ja bower tekevät periaatteessa samaa asiaa niin vastaus on convenience. Mutta voisit hoitaa homman npm:lläkin, se vaan vaatii sitten vähän omaa älykkyyttä :-p.

Hostaus kannattaa suorittaa Herokulla. Hommahan on tosi simppeli, sen kuin:
* Rekisteröidyt Herokuun
* Lataat Heroku toolbeltin omalle koneellesi
* Menet tämän repositorion juureen terminaalilla ja kirjoitat "heroku create softan_nimi_jos_haluaa"
* Sitten kirjoitat "git push heroku master" joka siirtää tiedostot Herokuun
* Lisäät linkin sovellukseesi README:hen ja Labtooliin

Tämän jälkeen sinun on muistettava aina commitoida muutokset ennen kuin voit lähettää ne Herokuun. Mutta siis devauksen voit suorittaa ihan omalla koneellasi, että kunhan vain kirjoitat aina "git push heroku master" kun olet tehnyt viikon tehtävät niin ne siirtyvät Herokuun ja ohjaaja näkee ne sieltä.

##Muita vinkkejä

Kannattaa hyödyntää reittejä sovelluksessasi eli luot uuden tiedoston routes-kansioon kun teet jollekin uudelle tietokohteelle REST-polkuja.

Git commitit kannattaa nimetä imperatiivissa esim. "Create customer view, model and controller". Yleensä käytetään avainsanoja kuten "Add" tai "Create" kun luodaan jotain uutta, "Fix" kun korjataan jotain, "Enhance" kun parannellaan jotakin ja niin edes päin. Googlesta kyllä löytää hyviä tyylioppaita.

Jos tarvitset lisäkirjastoja npm:n avulla niitä voi ladata kunhan muistaa tallentaa ne package.json:iin. Eli vaikkapa "npm install kirjastox --save" niin npm lataa kirjaston ja tallentaa sen package.json:iin.

Jos käyttää tabia sisentämiseen kannattaa tarkistaa että käyttämäsi IDE muuttaa ne 4:ksi välilyönniksi. Pelkät tabit ovat GitHubissa aika ruman näköisiä.

Ja mieluusti kirjoitat kaiken koodin englanniks.

Postgre-tietokannan saat Herokussa käyttöön sovelluksesi lisäasetuksista tai voit käyttää jotain toista palvelua sen ylläpitämiseen. Kunhan lisäät vain osoitteen configVariables:iin, Herokun asetuksista löytää ja joku AWS oli kyseessä. Voit myös halutessasi hostata Postgren lokaalisti parempaa debuggausta varten. Eikä ole pakko käyttää erikseen dev ja prod tietokantoja, ne nyt vain ovat tommoinen soma lisä.