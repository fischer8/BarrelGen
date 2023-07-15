# BarrelGen

This script generates an index.js file that performs sorted module "barreling" of the files from any directory and subdirectories of the provided path. The "barrel" consists of creating an index file that exports all the components contained in a directory, making it easier to import them into other files. 

<h3>
  Install
</h3>

```
$ npm install -g barrelgen
```

<h4>
  To run the script use the following command
</h4>

```
$ barrelgen /path/to/directory
```

#

<h3>
  Usage example
</h3>

![Gif-Example](https://raw.githubusercontent.com/fischer8/BarrelGen/src/Examples/barrelgen.gif)

![Img-Example](https://raw.githubusercontent.com/fischer8/BarrelGen/src/Examples/exampleimg.jpg)

[Folder structure used in the example](https://github.com/fischer8/BarrelGen/tree/src/Examples/Components)



