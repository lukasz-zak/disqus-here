# disqusHere [![Build Status](https://travis-ci.org/lukasz-zak/disqus-here.svg?branch=master)](https://travis-ci.org/lukasz-zak/disqus-here)

Angular directive for embeding Disqus comments on your site.

Apart of standard disqus fields you can toggle visibility of disqus comments with ajax reloading them after switching visible on.

You can also use your own function as Disqus onReady callback.

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/lukasz-zak/disqus-here/master/dist/disqus-here.min.js
[max]: https://raw.githubusercontent.com/lukasz-zak/disqus-here/master/dist/disqus-here.js

In your web page:

```html
<script src="angular.js"></script>
<script src="dist/disqus-here.min.js"></script>
```

## Documentation

#### shortname
Type: `String` <br />
Description: `Short name from Disqus settings` [read more]

[read more]: http://help.disqus.com/customer/portal/articles/472098-javascript-configuration-variables#disqus_shortname

#### url
Type: `String` <br />
Description: `Disqus url param` [read more]

[read more]: http://help.disqus.com/customer/portal/articles/472098-javascript-configuration-variables#disqus_url

#### identifier
Type: `String|Integer` <br />
Description: `Disqus identifier param` [read more]

[read more]: http://help.disqus.com/customer/portal/articles/472098-javascript-configuration-variables#disqus_category_id

#### title
Type: `String` <br />
Description: `Disqus title param` [read more]

[read more]: http://help.disqus.com/customer/portal/articles/472098-javascript-configuration-variables#disqus_title


#### category-id
Type: `String` <br />
Description: `Disqus category_id param` [read more]

[read more]: http://help.disqus.com/customer/portal/articles/472098-javascript-configuration-variables#disqus_category_id

#### disable-mobile
Type: `Boolean` <br />
Description: `Disqus disable_mobile param` [read more]

[read more]: http://help.disqus.com/customer/portal/articles/472098-javascript-configuration-variables#disqus_disable_mobile

#### on-ready
Type: `Function`<br/>
Description: `Function which will be fired with disqus onReady callback`

#### display-comments
Type: `Boolean`<br/>
Description: `Binded value for toggling visibility of comments` <br/>
Default: `true`

## Examples

#### Min usage:
```html
<disqus-here shortname="your-disqus-shortname"></disqus-here>
```

#### Full usage:
```html
<disqus-here shortname="your-disqus-shortname"
             url="{{disqusPageUrl}}"
             identifier="{{disqusPageID}}"
             title="{{disqusPageTitle}}"
             disable-mobile="{{disqusDisableMobile}}"
             category-id="{{disqusCatID}}"
             on-ready="onCommentsReady()"
             display-comments="commentsVisible">
</disqus-here>
```

## Contributing

Feel free to open an issue or send a pull request.

## License

MIT License. See the LICENSE file.

## Author

Copyright © 2014 Łukasz Żak. Contact me at `<zlukasz.poczta@gmail.com>`.