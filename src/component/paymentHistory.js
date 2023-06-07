import {PaymentCard} from './paymentCard';


export function PaymentHistory({ payments, selectedDate }) {
  const filteredPayments = selectedDate
    ? payments.filter(payment => new Date(payment.date).toLocaleDateString() === selectedDate.toLocaleDateString())
    : payments;

  return (
    <div>
      {filteredPayments.map((payment, index) => (
        <PaymentCard key={index} payment={payment} />
      ))}
    </div>
  );
}