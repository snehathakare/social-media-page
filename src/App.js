import './App.css';
import Rightbar from './components/Rightbar';
import Topbar from './components/Topbar';
import Feed from './components/Feed';
import { Box, Stack } from '@mui/material';

function App() {
  return (
    <Box sx={{
      width: 900,
    }} margin='auto'>
      <Topbar />
      <Stack direction="row" spacing={2} justify-content='center'>
        <Feed />
        <Rightbar />
      </Stack>

    </Box>
  );
}

export default App;
