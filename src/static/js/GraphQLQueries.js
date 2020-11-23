const repQuery = `{
                    repositoryOwner(login: "{login}") {
                      ... on User {
                        repositories(first:12) {
                          edges {
                            node {
                              name
                              description
                              url
                              primaryLanguage {
                                name
                              }
                              forkCount,
                              stargazerCount
                            }
                          }
                        }
                      }
                    }
                  }                  
`

const pinRepQuery = `{
    repositoryOwner(login: "{login}") {
      ... on User {
        pinnedItems(first: 6) {
          edges {
            node {
              ... on Repository {
                name
                url
                primaryLanguage {
                  ... on Language {
                    name
                  }
                }
                description
              }
            }
          }
        }
      }
    }
  }
`

export {
    repQuery, pinRepQuery
}