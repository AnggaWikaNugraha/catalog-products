import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/ProductionQuantityLimitsSharp';
import FavoriteIcon from '@mui/icons-material/CategoryRounded';
import { useNavigate } from 'react-router-dom';

export default function BottomNavigationApp() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()


  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        sx={{backgroundColor : '#0eb3ff'}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction onClick={()=>navigate('/')} label="Products" icon={<RestoreIcon />} />
        <BottomNavigationAction onClick={()=>navigate('/kategori')} label="Kategori" icon={<FavoriteIcon />} />
      </BottomNavigation>
    </Box>
  );
}