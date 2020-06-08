const urlSlug = require('url-slug');

exports.createPages = async ({actions, graphql, reporter}) =>{
    const result = await graphql(`
        query{
            allStrapiItinerary {
              nodes{
                slug
              }
            }
            allStrapiFeedbacks {
                nodes {
                  id
                }
              }
        }
    `);

    //some error
    if(result.errors){
        reporter.panic('Some Problem with the database',result.errors)
    }

    //Generate files for iterinary
    const iterinaries = result.data.allStrapiItinerary.nodes;

    //Generate files for feedbacks
    const feedbacks = result.data.allStrapiFeedbacks.nodes;

    //create iterinary templates
    iterinaries.forEach(iterinary => {
        actions.createPage({
            path:iterinary.slug,
            component:require.resolve('./src/components/iterinaryEn/oneIterinary.js'),
            context:{
                slug:iterinary.slug
            }
        })
    })
    //create feedbacks templates
    feedbacks.forEach(feedback => {
        actions.createPage({
            path:feedback.id,
            component:require.resolve('./src/components/feedbackEn/oneFeedback.js'),
            context:{
                id:feedback.id
            }
        })
    })
   
}
