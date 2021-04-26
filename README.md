#

## Testing

Testing is using `jest` which is the go-to testing suite along with the react testing library for for react utilities.

https://www.gatsbyjs.com/docs/how-to/testing/unit-testing/

### Testing methodolgy

Due to the site being a static site generator, we are not doing really any functional testing. We are instead doing primarily snapshot testing.

That is testing if the current output matches what it did in the past, this is to ensure any changes we make doesn't break anything in the future.
