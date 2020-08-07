import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="ABout" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Im Kelvin Knighton I enjoy building things with JavaScript
            on the Backend and Full Stack.
          </h2>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure>
          <h3 id="dynamic-styles">Try, fail, improve then repeat</h3>
          <p>
            My roommate introduced me to code around 2014, I took to it
            consuming online courses and switching my major to CS for it.
          </p>
          <p>
            I loved the programming classes in college, but real experience
            came from linking up with other developers and coding basic projects
            with javaScript and HTML, I got my start with an internship at a local
            startup here in San Diego I was on the backend javascript team and
            from there I went on to the  {" "}<a>Node.js foundation</a>{" "}
            doing open source full time.
          </p>
          <p>
           From there I've worked for a local startup after that experience
            I decided to start my own company, so now I'm an entrepreneur and
            I do freelance. I've always done projects for people and for my
            own while working. Thank for being here with me, you could have
            any where else in the world but you are here with me.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "me_.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
