import config from '../gatsby-config';
const React = require("react")
const gatsby = jest.requireActual("gatsby")

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) =>
      React.createElement("a", {
        ...rest,
        href: to,
      })
  ),
  StaticQuery: jest.fn().mockImplementation(({ render }) =>
    render({
      data: {
        site: {
          siteMetadata: config.siteMetadata
        },
      }
    })
  ),
  useStaticQuery: jest.fn().mockImplementation(() => ({
    site: {
      siteMetadata: config.siteMetadata
    },
  })),
}