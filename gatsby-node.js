const urlSlug = require('url-slug');

exports.createPages = async ({actions, graphql, reporter}) =>{
    const result = await graphql(`
        query{
            allStrapiItinerary {
              nodes{
                title_en
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

    //create iterinary templates
    iterinaries.forEach(iterinary => {
        actions.createPage({
            path:urlSlug(iterinary.title_en),
            component:require.resolve('./src/components/iterinaryEn/oneIterinary.js'),
            context:{
                id:iterinary.id
            }
        })
    })
   
}
