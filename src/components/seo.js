/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const DEFAULT_DESCRIPTION = `Caglar Yalcin is an Architect System Engineer focused on infrastructure, automation, privacy and open-source software.`

function Seo({ description = DEFAULT_DESCRIPTION, meta = [], title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  )

  const documentTitle = title || site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang: `en`,
      }}
      title={documentTitle}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: documentTitle,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:locale`,
          content: `en_US`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: documentTitle,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
    />
  )
}

export default Seo
