# WordPress Theme Boilerplate

This is a basic wordpress theme boilerplate for WordPress theme development.
This boilerplate in under development. You are welcome to assist to develop the theme and make it a great boilerplate for theme developers.

## Features
    <li>Development environment setup with NPM</li>
    <li>Webpack Configuration</li>
    <li>Babel, Sass, Postcss</li>
    <li>Most common folders and files</li>
    <li>Simple loop, Enqueue styles and scripts</li>
    <li>Basic theme setup</li>

## Installation instructions
copy the repository directory and open with vscode.
open your terminal and type

```cmd
    cd assets
    npm init -y
    npm install
```

this command will install all required dependencies and files into your project.


## Folder & File Architecture
<pre>
|Inc
|  |__
|     |theme-config.php
|     |enqueue-assets.php
|     |theme-support.php
|     |nav-menu.php
|     |widgets.php
|     |customize.php
|     |helpers.php
|
|Page Template
|     |__
|        |Page Templates
|
|assets
|  |__
|  |  |src   (Development Assets)
|  |    |__
|  |       |scss
|  |       |__
|  |       |   |components
|  |       |   |   |__
|  |       |   |      |components styles
|  |       |   |admin.scss
|  |       |   |theme.scss
|  |       |
|  |       |js
|  |       |   |__
|  |       |   |   |components
|  |       |   |         |__
|  |       |   |            |components scripts
|  |       |   |theme.js
|  |       |   |admin.js
|  |       |
|  |       |images
|  |       |   |__
|  |              |images
|  |__
|  |  |dist   (Production Assets)
|  |     
|Template Parts
|     |__
|        |Header
|        |Footer
|        |Posts
|   
|index.php  
|functions.php
|style.css
|screenshot.png
|header.php
|footer.php
|archive.php
|single.php
|searchform.php
|sidebar.php
|page.php
|404.php
</pre>
