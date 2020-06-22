const urlSlug = require("url-slug")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allStrapiItinerary {
        nodes {
          slug
        }
      }
      allStrapiFeedbacks {
        nodes {
          slug
        }
      }
      allStrapiThemeTour {
        nodes {
          slug
        }
      }
      allStrapiTourGuides {
        nodes {
          slug
        }
      }
      allStrapiTouristInformation {
        nodes {
          slug
        }
      }
    }
  `)

  //some error
  if (result.errors) {
    reporter.panic("Some Problem with the database", result.errors)
  }

  //Generate files for iterinary
  const iterinaries = result.data.allStrapiItinerary.nodes

  //Generate files for feedbacks
  const feedbacks = result.data.allStrapiFeedbacks.nodes

  //Generate files for theme tours
  const tours = result.data.allStrapiThemeTour.nodes

  //Generate files for Guides tours
  const guides = result.data.allStrapiTourGuides.nodes

  //Generate files for tourist information
  const informations = result.data.allStrapiTouristInformation.nodes

  //create iterinary templates
  iterinaries.forEach(iterinary => {
    actions.createPage({
      path: `/bestSale/${iterinary.slug}/`,
      component: require.resolve(
        "./src/components/iterinaryEn/oneIterinary.js"
      ),
      context: {
        slug: iterinary.slug,
      },
    })
  })
  //create feedbacks templates
  feedbacks.forEach(feedback => {
    actions.createPage({
      path: `/reviews/${feedback.slug}/`,
      component: require.resolve("./src/components/feedbackEn/oneFeedback.js"),
      context: {
        slug: feedback.slug,
      },
    })
  })
  //create  theme tours templates
  tours.forEach(tour => {
    actions.createPage({
      path: `/themeTour/${tour.slug}/`,
      component: require.resolve("./src/components/toursEn/oneTour.js"),
      context: {
        slug: tour.slug,
      },
    })
    //create feedbacks Guides tours templates
    guides.forEach(guide => {
      actions.createPage({
        path: `/reviews/${guide.slug}/`,
        component: require.resolve("./src/components/guideEn/oneGuide.js"),
        context: {
          slug: guide.slug,
        },
      })
    })
    //create feedbacks Guides tours templates
    informations.forEach(information => {
      actions.createPage({
        path: `/touristInformation/${information.slug}/`,
        component: require.resolve(
          "./src/components/touristinfo/oneTouristInfo.js"
        ),
        context: {
          slug: information.slug,
        },
      })
    })
  })
}
