import gql from "graphql-tag";

export default gql`
  query Products {
    products {
      id
      name
      price
      taste
      description
    }
  }
`;
