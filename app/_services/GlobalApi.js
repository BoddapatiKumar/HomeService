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

const getBuisnessListByCategory = async (category) => {
  const query =
    gql`
    query ListByCategory {
      buisnessLists(where: { category: { name: "` +
    category +
    `" } }) {
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

const getBuisnessById = async (id) => {
  const query =
    gql`query BuisnessById {
  buisnessList(where: {id: "` +
    id +
    `"}) {
    about
    address
    category {
      name
    }
    contactPerson
    email
    id
    images {
      url
    }
    name
  }
}`;
  const result = await request(MASTER_URL, query);
  return result;
};

const createNewBooking = async (buisnessId,date,time,email,name) => {
  const mutationQuery = gql`
    mutation CreateBooking {
      createBooking(
        data: {
          bookingStatus: booked
          buisnessList: { connect: { BuisnessList: { id: "`+buisnessId+`" } } }
          date: "`+date+`"
          time: "`+time+`"
          userEmail: "`+email+`"
          userName: "`+name+`"
        }
      ) {
        id
      }
    }
  `;
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};
export default {
  getCategory,
  getAllBuisnessLists,
  getBuisnessListByCategory,
  getBuisnessById,
  createNewBooking,
};
