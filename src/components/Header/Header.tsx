import React from 'react';
import { HeaderContainer, Logo, LogoBox, LogoText } from './styles';

import appLogo from '../../assets/img/logo.svg';
import DarkModeSwitcher from '../DarkModeSwitcher';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer className='app-container' data-testid='Header-component'>
      <LogoBox
        onClick={() => {
          navigate('/');
        }}
      >
        <Logo src={appLogo} alt='app-logo' />
        <LogoText>PokeApp</LogoText>
      </LogoBox>

      <DarkModeSwitcher />
    </HeaderContainer>
  );
}
