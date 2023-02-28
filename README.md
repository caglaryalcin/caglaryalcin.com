[![Netlify Status](https://api.netlify.com/api/v1/badges/849b7b6e-6759-42cf-8d4c-26ad3cd9167c/deploy-status)](https://app.netlify.com/sites/caglar/deploys)

This is my personal website.

![Alt Text](https://github.com/caglaryalcin/caglaryalcin/blob/main/personal.gif)

#### You can use this command to download the repo without the "main" name on 'C:'.

```
curl -o $env:userprofile\Desktop\caglaryalcin.zip https://github.com/caglaryalcin/caglaryalcin.com/archive/refs/heads/main.zip; Expand-Archive -Path $env:userprofile\Desktop\caglaryalcin.zip -DestinationPath C:\ -Force *>$null; Rename-Item C:\caglaryalcin.com-main caglaryalcin.com; Remove-Item $env:userprofile\Desktop\caglaryalcin.zip -recurse -ErrorAction SilentlyContinue
```
