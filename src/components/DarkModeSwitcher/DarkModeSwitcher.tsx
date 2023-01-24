import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import { Label, Switcher } from './styles';
import { useAppContext } from '../../contexts/App';

export default function DarkModeSwitcher() {
  const { settings, toggleDarkMode } = useAppContext();

  const labelText = settings.darkMode ? 'Modo escuro' : 'Modo claro';

  return (
    <Switcher data-testid='DarkModeSwitcher-component'>
      <Label htmlFor='dark-mode'>{labelText}</Label>
      <Switch.Root className='SwitchRoot' id='dark-mode' checked={settings.darkMode} onClick={toggleDarkMode}>
        <Switch.Thumb className='SwitchThumb' />
      </Switch.Root>
    </Switcher>
  );
}
