import request, { gql } from "graphql-request";

const MASTER_URL =
  "https://ap-south-1.cdn.hygraph.com/content/cmcn95bv701ui07w9xnq777d9/master";

const getCategory = async () => {
  const query = gql`
    query Category {
      categories {
        bgcolor {
          hex
        }
        id
        name
        icon {
          url
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getAllBuisnessLists = async () => {
  const query = gql`
    query BuisnessList {
      buisnessLists {
        about
        address
        category {
          name
        }
        contactPerson
        email
        id
        name
        images {
          url
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};
export default { getCategory ,getAllBuisnessLists};
