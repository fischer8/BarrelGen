# BarrelGen

This script create an index.js file that performs module "barreling" in a components directory. The "barrel" consists of creating an index file that exports all the components contained in a directory, making it easier to import them into other files.

![gif](/barrel-gen.gif)

To run the script, use the following command:

```
$ npx barrelgen /path/to/directory
```
#

Or install it globally:
```
$ npm install -g barrelgen


$ barrelgen /path/to/directory
```


