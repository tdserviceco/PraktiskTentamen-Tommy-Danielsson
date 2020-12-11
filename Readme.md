Här har vi lite olika saker som bör förtydligas ifall namn inte make sense.
LoadRandomCountries hämtar som argument en URL (som skickas från längst ner i koden),
Sedan har vi getData() som är en async och vi säger till den använd URL som loadRandomCountries hämtar

Vi har en som data array som vi kommer mata in med senare.

Vi har en constructor som heter CountryRestAPI med 3 argumenter (tidzon, namn och flagga)

Finns 3st prototyper som har olika funktioner i sig.
DisplayName, DisplayFlag och DisplayTime.


Har en sido funktion för displayTime som heter addZero()
AddZero gör att ifall tiden som vi hämtar har ingen 0 i sig då adderar vi en 0, exempel: 9:00 -> 09:00