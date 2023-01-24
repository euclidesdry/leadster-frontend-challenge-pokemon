import React from 'react';
import { HeaderContainer, Logo, LogoBox, LogoText } from './styles';

import appLogo from '../../assets/img/logo.svg';
import DarkModeSwitcher from '../DarkModeSwitcher';

export default function Header() {
  return (
    <HeaderContainer className='app-container' data-testid='Header-component'>
      <LogoBox>
        <Logo src={appLogo} alt='app-logo' />
        <LogoText>PokeApp</LogoText>
      </LogoBox>

      <DarkModeSwitcher />
    </HeaderContainer>
  );
}
