fork https://github.com/ajaxorg/ace
added support for lsfusion language with antlr grammar
removed all unused modes, available modes: typescript, text, plain_text, lsf, js, html, css
removed all unused themes, available themes: ambiance, chrome

how-to:
 - Create Worker and Mode for you kind of analysis
 - Download Ace source code and install NodeJS
 - Put your new files within correspond Ace source code folders
 - Build Ace
 - Add build files to your project
 - Use new mode: editor.getSession().setMode("ace/mode/semicolonlineend");


Building Ace
-----------

You do not generally need to build ACE. The [ace-builds repository](https://github.com/ajaxorg/ace-builds/) endeavours to maintain the latest build, and you can just copy one of _src*_ subdirectories somewhere into your project.

However, all you need is Node.js and npm installed to package ACE. Just run `npm install` in the ace folder to install dependencies:

```bash
npm install
node ./Makefile.dryice.js
```

To package Ace, we use the dryice build tool developed by the Mozilla Skywriter team. Call `node Makefile.dryice.js` on the command-line to start the packing. This build script accepts the following options

```bash
-m                 minify build files with uglify-js          
-nc                namespace require and define calls with "ace"
-bm                builds the bookmarklet version
--target ./path    specify relative path for output folder (default value is "./build")
```

To generate all the files in the ace-builds repository, run `node Makefile.dryice.js full --target ../ace-builds`
