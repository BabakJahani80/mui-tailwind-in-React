import './App.css';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <div class="space-y-4">
        <div class="flow-root">
          <div class="my-4 bg-[#333] hover:bg-green-500 transition duration-500 ease-in-out">1</div>
        </div>
        <div class="flow-root">
          <div class="my-4">2</div>
        </div>
      </div>
      <Box className='btn-blue'>mamad</Box>
    </>
  );
}
export default App;