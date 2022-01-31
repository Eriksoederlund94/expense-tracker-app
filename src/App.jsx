import { useState } from 'react';

// Context
import { useExpence } from './context/ExpenseContext';

// Components
import ExpenceCard from './components/ExpenceCard';
import AddBudgetModal from './components/AddBudgetModal';

// React bootstrap imports
import Container from 'react-bootstrap/Container';
import { Button, Stack } from 'react-bootstrap';

function App() {
  const [showModal, setShowModal] = useState(false);

  const { budgets, getBudgetExpenses } = useExpence();

  console.log(budgets);

  return (
    <>
      <Container className='my-4'>
        <Stack direction='horizontal' gap='2' className='mb-4'>
          <h1 className='me-auto'>Expense Tacker</h1>
          <Button variant='primary' onClick={() => setShowModal(!showModal)}>
            Add Budget
          </Button>
          <Button variant='secondary'>Add Expense</Button>
        </Stack>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1rem',
            alignItems: 'flex-start',
          }}
        >
          {budgets.map((budget) => {
            const amount = getBudgetExpenses(budget.id).reduce((total, expence) => total + expence.amount, 0);
            return <ExpenceCard key={budget.id} amount={amount} {...budget} />;
          })}
        </div>
      </Container>
      <AddBudgetModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
}

export default App;
