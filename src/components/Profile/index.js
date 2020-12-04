import React from "react";
import { StaticQuery, graphql } from 'gatsby';

const Profile = () => (
  <StaticQuery
    query={graphql`
      query GatsbyBlogMetadata {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `}
    render={data => (
      <div className="Profile-wrapper">
        <h1>{data.site.siteMetadata.title}</h1>
        <h2>Analista de sistemas</h2>
        <p>Analista de sistemas da CAGECE. Especialista em frontend.</p>
      </div>
    )}
  />
)

export default Profile;