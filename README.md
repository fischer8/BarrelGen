# BarrelGen

This script generates an index.js file that performs sorted module "barreling" in a components directory. The "barrel" consists of creating an index file that exports all the components contained in a directory, making it easier to import them into other files.

![Example](/barrelgen.gif)

<h3>
  To run the script, use the following command:
</h3>

```
$ npx barrelgen /path/to/directory
```
#

<h3>
  Or install it globally:
</h3>

```
$ npm install -g barrelgen


$ barrelgen /path/to/directory
```


