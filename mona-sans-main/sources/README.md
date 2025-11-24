# Build process

### MonaSansVF Build (via Glyphs.app)

Mona Sans VF is exported from the Glyphs interface directly into the /fonts directory. This is the easiest way to distribute multiple cuts of the variable font.

1. Open the Mona Sans project in Glyphs.app
2. Use File > Export > Variable Font

The exported variable font will include the full feature set and axis range of Mona Sans.

If the fonts aren't in the right directories, the build.sh will try to move them to the right place.

### Google Fonts Build (`build.sh`)

The `build.sh` script handles building font files that meet Google Fonts specifications and requirements, and builds into the /googlefonts folder. It also checks to make sure the other fonts are in the right place.

```bash
sh sources/build.sh
```

You'll need gftools and ttfautohint installed. Which you can do via:

```bash
pip3 install gftools
brew install ttfautohint
```

This builds from `MonaSans.glyphspackage`, which is `2.0` the version of the font before optical sizes were added (). This build is significantly different from the current version, and should be removed once google fonts is caught up to the latest.

