import request, { gql } from 'graphql-request'

export const getCarsList = async () => {
  const query = gql`
    query CarLists {
        carLists {
          createdAt
          id
          publishedAt
          updatedAt
          seat
          price
          name
          carAvg
          carType
          carBrand
          image {
            url
          }
        }
      }
    `

  const result = await request('https://api-ap-south-1.hygraph.com/v2/clp0te0n933a501ulgy6t48xl/master', query)
  return result
}