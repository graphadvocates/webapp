# GraphAdvocates Web App

## How To Contribute

Create a local `.env` file and add the following variable `CLICKUP_API_KEY=""` and instert your ClickUp API key into the quotes.
This file will be gitignored and should not be pushed or shared with anyone.
If you don't have a Clickup API key with the appropriate permissions, you should still be able to run the application locally. Pages that utilize the ClickUp API
will appear empty.

To run use `yarn dev`

## Modify the carousel

1. `public > assets > LandingCarousel` will hold all images that will be used in the carousel.
2. Images are shown in the order of the name of the file (e.g. 1.jpg, 2.jpg, etc..)
3. Image recommendation are to maintain a max aspect ration of **2:1** (e.g. 2:1 and 1:1 will render perfectly). Anything beyond that will render blury
4. Image will be renedered with a max height of **600px** (The image can be any size as long as it maintains appropriate ratios)
