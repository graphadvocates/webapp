# GraphAdvocates Web App

## How To Contribute

Create a local `.env.local` file and add the following variable `CLICKUP_API_KEY=""` and instert your ClickUp API key into the quotes.
This file will be gitignored and should not be pushed or shared with anyone.
If you don't have a Clickup API key with the appropriate permissions, you should still be able to run the application locally. Pages that utilize the ClickUp API
will appear empty.

To run use `yarn dev`

## Google Calendar API

To confingure the google calendar shown at the bottom of the landing page, you'll need a few details from google:

1. GOOGLE_CAL_ID: The id of the calendar to read events from
2. GOOGLE_CLIENT_EMAIL: Google cloud api service account email
3. GOOGLE_PRIVATE_KEY: Google cloud api service account private key

## Modify the carousel

1. `public > assets > LandingCarousel` will hold all images that will be used in the carousel.
2. Images are shown in the order of the name of the file (e.g. 1.jpg, 2.jpg, etc..)
3. Image recommendation are to maintain a max aspect ration of **2:1** (e.g. 2:1 and 1:1 will render perfectly). Anything beyond that will render blury
4. Image will be renedered with a max height of **600px** (The image can be any size as long as it maintains appropriate ratios)

## Modify Advocate Spotlight

Data from the spotlight is stored in a Hesura DB to allow dynamic changes to be made through a form-like front-end.
Go to graphadvocates.com/resources/spotlight to access the form to update the advocate spotlight. You will need an access key to authenticate.

### Notes

Here are some important notes regarding the form submission system:

- Anyone with the key can modify the website's information.
- There is no option to modify previous submissions; a new form must be submitted. However, a modification feature can be added if needed.
- The latest form submission will be displayed on the front page.
- Each form submission will create a new entry in the database and will not overwrite previous entries, which could be useful for future reference.
- The "Role(s)" field accepts comma-separated values.
- The form includes general questions that apply to all spotlight submissions, but they can be customized.
- The Advocate Spotlight section of the landing page can be customized to match the desired color scheme and layout.

## Modify the 30 Day GRT Avg

The 30 day avg is calculated using two subgraphs (https://thegraph.com/explorer/subgraphs/G3JZhmKKHC4mydRzD6kSz5fCWve5WDYYCyTFSJyv3SD5?view=Playground&chain=mainnet) and (https://thegraph.com/explorer/subgraphs/Dgr3WsqFY8SoKW4RgzkCwyim4K4R4iejBxB1EVYEG2LN?view=Playground&chain=mainnet) as recommended by Derek.

The 30 Day calculation runs in /api/googleSheet. It is automatically triggered by Vercel on mignight UTC as a cron job. Inside the code, you can modify which google sheet gets written by modifying the following values:

```
const sheetId = "...";
const sheetName = "Sheet1";
const range = "Sheet1!D2:F2"; // range of cells to write data to
const rowIndex = 2; // row number to insert the new row before
```
