oe-objecten-checkGetalInput-opgave
# Check getalinput in een DOM-element
## GeefFeedback
Doet een call naar IsGeldigGetal.
Toont het resultaat (Melding) in divFeedback
## IsGeldigGetal
### Parameters
- het control waarvan de input gecheckt moet worden
- het eventuele minimum (optioneel)
- het eventuele maximum (optioneel)
- isGeheelGetal: standaard is dit het geval

### Feedback in de variabele *melding*
- De input in *txt* is ongeldig (bij gehele getallen)
- Decimale getallen zijn niet toegestaan (bij gehele getallen)
- De input in *txt* is geen geldig decimaal getal (bij decimale getallen)
- De input in *txt* is ongeldig. De waarde moet liggen tussen *min* en *max*
- De input is correct

### Return
- geldig of niet
- melding
- het omgezette getal
