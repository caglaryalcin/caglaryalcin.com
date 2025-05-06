![Alt Text](https://github.com/caglaryalcin/caglaryalcin/blob/main/person.gif)

#### You can use this site to build directly in the image on Docker hub. :whale:

```
docker container run \
    --name caglaryalcin.com \
    -dp 9000:9000 \
    caglaryalcin/caglaryalcin.com
```

or on Github Registry.

```
docker container run \
    --name caglaryalcin.com \
    -dp 9000:9000 \
    ghcr.io/caglaryalcin/caglaryalcin.com
```

and open `http://localhost:9000` in the browser.
