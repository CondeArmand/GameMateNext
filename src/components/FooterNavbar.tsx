import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        position: 'fixed', // Fixa o componente na tela
        bottom: 0, // Posiciona o componente na parte inferior
        left: '50%', // Centraliza horizontalmente
        transform: 'translateX(-50%)', // Centraliza exatamente no meio
        width: '100%', // Ocupa a largura total
        maxWidth: 500, // Limita a largura máxima
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Biblioteca"
        value="biblioteca"
        icon={<SportsEsportsIcon />}
      />
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Perfil"
        value="perfil"
        icon={<PersonIcon />}
      />
      
    </BottomNavigation>
  );
}
