import { useQuery, gql } from "@apollo/client";
import { Table, Button } from "react-bootstrap";

const GET_PRODUCTS = gql`
  query MyProducts {
    products {
      id
      name
      category
      created_at
    }
  }
`;

export default function DisplayProducts() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <h1 className="text-center">List Product</h1>
      <Table striped bordered hover variant="dark" className="container">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Created at</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map(({ id, name, category, created_at }, index) => (
            <tr key={id}>
              <td>{index}</td>
              <td>{name}</td>
              <td>{category}</td>
              <td>{created_at}</td>

              <td className="d-flex gap-2">
                <Button variant="warning">Edit</Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
