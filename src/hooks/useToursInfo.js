import { graphql, useStaticQuery } from 'gatsby';


const UseTour = () =>{

    const result = useStaticQuery(graphql`
        query{
            allStrapiTouristInformation {
                nodes {
                  active
                  slug
                  title_cn
                  title_en
                }
              }
          }    
    `);

    return result.allStrapiTouristInformation.nodes.map(tourinfo => ({
        active:tourinfo.active,
        slug:tourinfo.slug,
        title_cn:tourinfo.title_cn,
        title_en:tourinfo.title_en
    }))
}

export default UseTour;