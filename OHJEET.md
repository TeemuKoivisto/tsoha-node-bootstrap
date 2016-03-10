#Vaihtoehtoinen tsoha-bootstrap Nodella

Jos tuntee olonsa rohkeaksi voi yritt�� tehd� tsohan Nodella. Jotta devaaminen omalla koneella olisi mahdollista tulee seuraavat asiat suorittaa ennen kuin p��set tekem��n yht��n mit��n:
* Asenna Node.js nvm:n kautta ja npm
* Asenna gulp ja bower globaalisti npm:n avulla (npm install gulp -g)
* Lataa t�m� repositorio
* Menee juuren ja kirjoita "npm install" sek� "bower install"
* K�ynnist� sovellus kirjoittamalla "gulp nodemon"

Nvm on versionhallinta-ohjelmisto Nodelle, joka mahdollistaa useamman Node-version k�yt�n. Se on hyv� olla. Npm on "Node Package Manager" jonka avulla siis hallinnoit sovelluksesi riippuvuuksia. Gulp on task-runner eli sen avulla voit kirjoittaa apu-skriptej� jotka tekev�t muuten ty�l�it� ja rutiinomaisia teht�vi�. Esim. "gulp nodemon" suorittaa "nodemon" -nimisen skriptin "gulp" -kansiossa joka k�ynnist�� serverin aina uudestaan muutettuasi jotain tiedostoa kansiossa. HUOM. jos luot uusia kansioita tulee se silti k�ynnist�� uudestaan manuaalisesti eli terminaalissa ctrl+c ja uudestaan "gulp nodemon". Bower on front-end:in riippuvuuksien hallintakirjasto, johon siis kannattaa tallentaa kaikki tyylikirjastot kuten bootstrap tai ionicons. Jos mietit ett� miksi tarvitaan kahta eli kun npm ja bower tekev�t periaatteessa samaa asiaa niin vastaus on convenience. Mutta voisit hoitaa homman npm:ll�kin, se vaan vaatii sitten v�h�n omaa �lykkyytt� :-p.

Hostaus kannattaa suorittaa Herokulla. Hommahan on tosi simppeli, sen kuin:
* Rekister�idyt Herokuun
* Lataat Heroku toolbeltin omalle koneellesi
* Menet t�m�n repositorion juureen terminaalilla ja kirjoitat "heroku create softan_nimi_jos_haluaa"
* Sitten kirjoitat "git push heroku master" joka siirt�� tiedostot Herokuun
* Lis��t linkin sovellukseesi README:hen ja Labtooliin

T�m�n j�lkeen sinun on muistettava aina commitoida muutokset ennen kuin voit l�hett�� ne Herokuun. Mutta siis devauksen voit suorittaa ihan omalla koneellasi, ett� kunhan vain kirjoitat aina "git push heroku master" kun olet tehnyt viikon teht�v�t niin ne siirtyv�t Herokuun ja ohjaaja n�kee ne sielt�.

##Muita vinkkej�

Kannattaa hy�dynt�� reittej� sovelluksessasi eli luot uuden tiedoston routes-kansioon kun teet jollekin uudelle tietokohteelle REST-polkuja.

Git commitit kannattaa nimet� imperatiivissa esim. "Create customer view, model and controller". Yleens� k�ytet��n avainsanoja kuten "Add" tai "Create" kun luodaan jotain uutta, "Fix" kun korjataan jotain, "Enhance" kun parannellaan jotakin ja niin edes p�in. Googlesta kyll� l�yt�� hyvi� tyylioppaita.

Jos tarvitset lis�kirjastoja npm:n avulla niit� voi ladata kunhan muistaa tallentaa ne package.json:iin. Eli vaikkapa "npm install kirjastox --save" niin npm lataa kirjaston ja tallentaa sen package.json:iin.

Jos k�ytt�� tabia sisent�miseen kannattaa tarkistaa ett� k�ytt�m�si IDE muuttaa ne 4:ksi v�lily�nniksi. Pelk�t tabit ovat GitHubissa aika ruman n�k�isi�.

Ja mieluusti kirjoitat kaiken koodin englanniks.

Postgre-tietokannan saat Herokussa k�ytt��n sovelluksesi lis�asetuksista tai voit k�ytt�� jotain toista palvelua sen yll�pit�miseen. Kunhan lis��t vain osoitteen configVariables:iin, Herokun asetuksista l�yt�� ja joku AWS oli kyseess�. Voit my�s halutessasi hostata Postgren lokaalisti parempaa debuggausta varten. Eik� ole pakko k�ytt�� erikseen dev ja prod tietokantoja, ne nyt vain ovat tommoinen soma lis�.