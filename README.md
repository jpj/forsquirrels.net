# ForSquirrels.net

This is the source for [forsquirrels.net](forsquirrels.net). If you see anything that needs
changing or adding, by all means, submit a pull request.

Some general guidelines:

* Keep it clean. It's not perfect but try to keep things in good shape
and reasonably consistent. Feel free to pick up any messes you come across.
* Keep it minimal. The goal has always been to provide an accessible experience
to all For Squirrels fans. No need to bring in the JS Framework Of The Month.
In fact, don't bring in any JS at all. I recently removed it all now that CSS3
obviated all of the js I was using. Keep the number of HTML tags and CSS classes
to a minimum.
* Keep it traditional.

You may notice some odd tags floating around that don't belong. Those are
from a custom Perl framework I wrote in the early 2000's that powers the
site. The idea was to ease the work load by making common elements easy
to share and databases easy to access but it has become cumbersome to
maintain. It is not part of this repo because it's probably insecure and
I probably did dumb things like put usernames and passwords in it so
you'll have to ignore those bits for now. The site should run fine on any
general Apache installation, which will gleefully overlook these tags.
The browser should also overlook them so some pages will just look a bit
thin. If you really, really, really want to change some of that stuff
then get in touch and we'll figure something out. Ultimately I want to
get rid of all that which I think will make for easier mantenance.
