import { Navigate, Route, Routes } from 'react-router-dom';
import Check from './Check';
import Select from './Select';

const TicketingRouter = () => {
  return (
    <Routes>
      <Route path="/select" element={<Select />} />
      <Route path="/check" element={<Check />} />

      <Route path="/*" element={<Navigate to="/select" />} />
    </Routes>
  );
};

export default TicketingRouter;
