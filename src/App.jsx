import { useState } from 'react';

// Context
import { useExpence } from './context/ExpenseContext';

// Components
import ExpenceCard from './components/ExpenceCard';
import AddBudgetModal from './components/AddBudgetModal';
import AddExpenseModal from './components/AddExpenseModal';

// React bootstrap imports
import Container from 'react-bootstrap/Container';
import { Button, Stack } from 'react-bootstrap';

function App() {
  const [showBudgetModal, setShowBudgetModal] = useState(false);
  const [showExpenseModal, setshowExpenseModal] = useState(false);
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();
  const { budgets, getBudgetExpenses } = useExpence();

  const openAddExpenseModal = (budgetId) => {
    setshowExpenseModal(true);
    setAddExpenseModalBudgetId(budgetId);
  };

  return (
    <>
      <Container className='my-4'>
        <Stack direction='horizontal' gap='2' className='mb-4'>
          <h1 className='me-auto'>Expense Tacker</h1>
          <Button variant='primary' onClick={() => setShowBudgetModal(!showBudgetModal)}>
            Add Budget
          </Button>
          <Button variant='secondary' onClick={openAddExpenseModal}>
            Add Expense
          </Button>
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
            return (
              <ExpenceCard
                key={budget.id}
                amount={amount}
                onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                {...budget}
              />
            );
          })}
        </div>
      </Container>
      <AddBudgetModal show={showBudgetModal} handleClose={() => setShowBudgetModal(false)} />
      <AddExpenseModal
        show={showExpenseModal}
        defaultBudgetId={addExpenseModalBudgetId}
        handleClose={() => setshowExpenseModal(false)}
      />
    </>
  );
}

export default App;
