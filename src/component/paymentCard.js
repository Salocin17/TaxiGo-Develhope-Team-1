import { Card, Button } from 'react-bootstrap';


export function PaymentCard({ payment }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{payment.date}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{payment.taxiCompany}</Card.Subtitle>
        <Card.Text>
          <p><strong>Origin:</strong> {payment.origin}</p>
          <p><strong>Destination:</strong> {payment.destination}</p>
          <p><strong>Price:</strong> {payment.price}</p>
        </Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}