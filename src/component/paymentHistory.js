import {PaymentCard} from './paymentCard';


export function PaymentHistory({ payments, selectedDate }) {
  const filteredPayments = selectedDate
    ? payments.filter(payment => payment.date === selectedDate.toISOString().slice(0, 10))
    : payments;

  return (
    <div>
      {filteredPayments.map((payment, index) => (
        <PaymentCard key={index} payment={payment} />
      ))}
    </div>
  );
}