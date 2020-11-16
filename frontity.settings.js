const settings = {
  "name": "my-app-new",
  "state": {
    "frontity": {
      "url": "https://eymockup.com",
      "title": "Test Eymockup Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "frontity-chakra-theme",
      "state": {
        "theme": {
          // The logo can be a text or an image url
          logo: "EYMOCKUP",
          // show background pattern
          showBackgroundPattern: true,
          // show social links
          showSocialLinks: true,
          // the top-level navigation labels and links
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "About Us",
              "/about-us/"
            ],
          ],
          
          // the social links
          socialLinks: [
            ["pinterest", "https://www.pinterest.com/frontity/"],
            ["facebook", "https://www.instagram.com/frontity/"],
            ["twitter", "https://www.twitter.com/frontity/"]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
          "postInfo": {
            showOnArchive: true,
            showOnPost: true
          },
          "postMeta": {
            showOnArchive: true,
            showOnPost: false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://www.eymockup.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
