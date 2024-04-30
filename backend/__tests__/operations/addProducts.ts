import gql from "graphql-tag";

export default gql`
  mutation CreateProduct($data: ProductInput!) {
    createProduct(data: $data) {
      name
      price
      taste
      description
    }
  }
`;
