#Vaihtoehtoinen tsoha-bootstrap Nodella

Okei jos tuntee olonsa rohkeaksi voi yritt‰‰ tehd‰ tsohan Nodella. Jotta devaaminen omalla koneella olisi mahdollista tulee seuraavat asiat suorittaa ennen kuin p‰‰set tekem‰‰n yht‰‰n mit‰‰n:
* Asenna Node.js nvm:n kautta ja npm
* Asenna gulp ja bower globaalisti npm:n avulla (npm install gulp -g)
* Lataa t‰m‰ repositorio
* Menee juuren ja kirjoita "npm install" sek‰ "bower install"
* K‰ynnist‰ sovellus kirjoittamalla "gulp nodemon"

Hostaus kannattaa suorittaa Herokulla. Hommahan on tosi simppeli, sen kuin:
* Rekisterˆidyt Herokuun
* Lataat Heroku toolbeltin omalle koneellesi
* Kirjoitat "heroku create"
* Kirjoitat "git push heroku master" joka siirt‰‰ tiedostot Herokuun
* Lis‰‰t linkin sovellukseesi README:hen

T‰m‰n j‰lkeen sinun on muistettava aina commitoida muutokset ennen kuin voit l‰hett‰‰ ne Herokuun. Mutta siis devauksen voit suorittaa ihan omalla koneellasi, ett‰ kunhan vain kirjoitat aina "git push heroku master" kun olet tehnyt viikon teht‰v‰t niin ne siirtyv‰t Herokuun ja ohjaaja n‰kee ne sielt‰.