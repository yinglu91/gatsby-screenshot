import React from "react"
import Img from "gatsby-image"

import styles from "./index.module.css"
import logo from "../gatsby-light.svg"

export default ({ data }) => (
  <div className={styles.gallery}>
    <div className={styles.header}>
      <h1>
        powered by
        <img src={logo} className={styles.logo} alt="" />
      </h1>
    </div>
    <div className={styles.sites}>
      {data.allSitesYaml.nodes.map((node, index) => (
        <div className={styles.site} key={index}>
          <a href={node.url} target="_blank" rel="noopener noreferrer">
            <Img
              resolutions={
                node.childScreenshot.screenshotFile.childImageSharp.resolutions
              }
              alt={node.title}
              className={styles.shadow}
            />
          </a>
        </div>
      ))}
    </div>
  </div>
)

export const query = graphql`
  query SitesQuery {
    allSitesYaml {
      nodes {
        url
        title
        childScreenshot {
          screenshotFile {
            childImageSharp {
              resolutions(width: 384, height: 288) {
                ...GatsbyImageSharpResolutions
              }
            }
          }
        }
      }
    }
  }
`
