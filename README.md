![Alt Text](https://github.com/caglaryalcin/caglaryalcin/blob/main/person.gif)

#### You can use this site to build directly in the image on Docker hub. :whale:

```
docker container run --name caglaryalcin.com -dp 9000:9000 caglaryalcin/gatsby-website
```

or on Github Registry.

```
docker container run --name caglaryalcin.com -dp 9000:9000 ghcr.io/caglaryalcin/gatsby-website:latest
```

and open `http://localhost:9000` in the browser.

<br />

#### You can publish the built public file of your own website using my image below on Docker hub. :whale:

```
docker run -d -p 80:80 -v /your-public-folder-path/:/usr/share/nginx/html caglaryalcin/gatsby-public
```

or on Github Registry.

```
docker run -d -p 80:80 -v /your-public-folder-path/:/usr/share/nginx/html ghcr.io/caglaryalcin/gatsby-public:latest
```

and open `http://localhost` in the browser.
