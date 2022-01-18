import React from 'react';
import { Card } from 'react-bootstrap';

// Helper
import { currencyFormatter } from '../utils/helper';

const ExpenceCard = ({ name, amount, max }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <div>{name}</div>
          <div>
            {currencyFormatter.format(amount)} / {currencyFormatter.format(max)}
          </div>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ExpenceCard;
