# Bogus KeyupEvents

This repository is something I quickly hacked up to help me figure out
why mb2, my poker software, was seeing a `KeyboardEvent` with an
inaccessible `code` property.

Turns out, it's a bug in Chromium, which I would have realized much sooner
had I looked to see if the bug was appearing under Firefox (it wasn't).

Some of the relevant commands are:
```
$ cargo install https
$ yarn install
$ yarn build
$ HTTP_SSL_PASS=password http --ssl localhost.pfx -- dist
```

You might need to configure your browser to respect the `localhost.crt`
certificate.

Visit https://localhost:8000 and then do whatever you have to in your
browser to get it to remember the nickname and password you put into
the text fields.  If you then get your browser to autofill those
fields, and you look in the console, you'll see some debug output and
a panic.  If you type anything in the password field, you'll see the
output that you get for a valid keyUp invocation.

There's some more info in [a comment I left on
GitHub](https://github.com/ctm/mb2-doc/issues/802#issuecomment-1008421522).

## Good Luck

If anyone sees this and is curious but can't figure out how to build
this or deploy it or make sense of the console output, contact me via
GitHub and I'll see if I can remember.
