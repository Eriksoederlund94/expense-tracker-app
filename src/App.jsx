import react from 'react';

// Components
import ExpenceCard from './components/ExpenceCard';

// React bootstrap imports
import Container from 'react-bootstrap/Container';
import { Button, Stack } from 'react-bootstrap';

function App() {
  return (
    <Container className='my-4'>
      <Stack direction='horizontal' gap='2' className='mb-4'>
        <h1 className='me-auto'>Expense Tacker</h1>
        <Button variant='primary'>Add Budget</Button>
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
        <ExpenceCard name={'Food'} amount={10} max={100}></ExpenceCard>
      </div>
    </Container>
  );
}

export default App;
