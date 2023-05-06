import {PaymentCard} from './paymentCard';


export function PaymentHistory({ payments }) {
    return (
      <div>
        {payments.map((payment, index) => (
          <PaymentCard key={index} payment={payment} />
        ))}
      </div>
    );
  }