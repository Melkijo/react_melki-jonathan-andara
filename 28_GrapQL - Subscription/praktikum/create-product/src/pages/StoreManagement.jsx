import { useQuery, gql, useMutation, useSubscription } from "@apollo/client";
import Card from "react-bootstrap/Card";
import CardImg from "../assets/Vector.jpg";
import Navbar from "../components/Navbar";
import Button from "react-bootstrap/Button";

const GET_PRODUCTS = gql`
  subscription MySubscription {
    product {
      id
      product_name
      product_freshness
      product_category
      price
      created_at
      aditional_information
    }
  }
`;
const DELETE_PRODUCT = gql`
  mutation MyMutation($id: uuid!) {
    delete_product_by_pk(id: $id) {
      id
    }
  }
`;

const UPDATE_PRODUCT = gql`
  mutation MyMutation($id: uuid!, $productName: String!) {
    update_product_by_pk(
      pk_columns: { id: $id }
      _set: { product_name: $productName }
    ) {
      id
      product_name
    }
  }
`;
export default function StoreManagement() {
  const { loading, error, data } = useSubscription(GET_PRODUCTS, {
    refetchQueries: [GET_PRODUCTS],
  });
  const [deleteProduct, { loading: loadingDelete }] = useMutation(
    DELETE_PRODUCT,
    { refetchQueries: [GET_PRODUCTS] }
  );
  const [updateProduct, { loading: loadingUpdate }] = useMutation(
    UPDATE_PRODUCT,
    { refetchQueries: [GET_PRODUCTS] }
  );

  if (loading || loadingDelete || loadingUpdate) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error : {error.message}</p>;
  }

  const handleDeleteProduct = (idx) => {
    deleteProduct({
      variables: {
        id: idx,
      },
    });
  };

  const handleEditProduct = async (idx) => {
    const { value: newProductName } = await Swal.fire({
      title: `Edit Name`,
      input: "text",
      showDenyButton: true,
      confirmButtonText: "Update",
      denyButtonText: `Cancel`,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
    });
    if (newProductName) {
      Swal.fire(`Product updated`, "", "success");
      updateProduct({
        variables: {
          id: idx,
          productName: newProductName,
        },
      });
    }
  };
  return (
    <>
      <Navbar />
      <div
        className="banner text-center"
        style={{ padding: 50, backgroundColor: "blue" }}
      >
        <h1>Store Management</h1>
        <p>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don’t simply skip over it entirely.
        </p>
      </div>
      <div className="d-flex gap-5 p-5 flex-wrap">
        {data.product.map(
          ({ id, product_name, aditional_information, created_at }) => (
            <Card key={id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={CardImg} />
              <Card.Body>
                <Card.Title>{product_name}</Card.Title>
                <Card.Text>{aditional_information}</Card.Text>

                <Button variant="info">View</Button>
                <Button variant="warning" onClick={() => handleEditProduct(id)}>
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteProduct(id)}
                >
                  Delete
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted">{created_at}</Card.Footer>
            </Card>
          )
        )}
      </div>
    </>
  );
}
