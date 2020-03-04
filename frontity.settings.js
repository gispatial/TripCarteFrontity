const settings = {
  "name": "my-app",
  "state": {
    "frontity": {
      "url": "http://tripcarte.asia/",
      "title": "TripCarte",
      "description": "Your Online Ticketing Services"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Destinations",
              "/destinations/"
            ],
            [
              "Promotions",
              "/promotions/"
            ],
            [
              "Travel Blog",
              "/travel-blogs/"
            ],
            [
              "Privacy Policy",
              "/privacy-policy/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://tripcarte.asia/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
