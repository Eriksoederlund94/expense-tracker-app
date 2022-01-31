import React from 'react';
import { Card, ProgressBar, Stack, Button } from 'react-bootstrap';

// Helper
import { currencyFormatter } from '../utils/helper';

const ExpenceCard = ({ name, amount, max, gray, onAddExpenseClick }) => {
  const cardClassNames = [];

  if (amount > max) {
    cardClassNames.push('bg-danger', 'bg-opacity-10');
  } else if (gray) {
    cardClassNames.push('bg-light');
  }

  const progressBarStatus = (amount, max) => {
    const ratio = amount / max;

    if (ratio < 0.5) return 'primary';
    if (ratio < 0.6) return 'warning';
    return 'danger';
  };

  return (
    <Card className={cardClassNames.join(' ')}>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal mb-3'>
          <div className='me-2'>{name}</div>
          <div className='d-flex align-items-baseline'>
            {currencyFormatter.format(amount)}
            <span className='text-muted fs-6 ms-1'> / {currencyFormatter.format(max)} </span>
          </div>
        </Card.Title>
        <ProgressBar className='rounded-pill' variant={progressBarStatus(amount, max)} min={0} max={max} now={amount} />
        <Stack className='mt-4' direction='horizontal' gap='2'>
          <Button variant='outline-primary' onClick={onAddExpenseClick}>
            Add Expense
          </Button>
          <Button variant='outline-secondary'>View Expense</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default ExpenceCard;
