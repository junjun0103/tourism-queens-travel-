import { graphql, useStaticQuery } from 'gatsby';

const UseFeedback = () =>{

    const result = useStaticQuery(graphql`
        query{
            allStrapiFeedbacks {
              nodes {
                title_en
                title_cn
                name_cn
                name_en
                content_cn
                content_en
                shortDescription_cn
                shortDescription_en
                date
                photo {
                  childImageSharp {
                    fixed {
                      src
                    }
                  }
                }
              }
            }
          }    
    `);

    console.log(result);
}

export default UseFeedback;