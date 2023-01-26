import { renderHook, act } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import AppProvider, { useAppContext } from './';

const wrapper = ({ children }: PropsWithChildren) => <AppProvider>{children}</AppProvider>;

describe('useAppContext hook', () => {
  test('should renders with initial values', () => {
    const { result } = renderHook(() => useAppContext(), {
      wrapper,
    });

    expect(result.current.settings).toHaveProperty('darkMode', false);
    expect(result.current.pokemon).toHaveProperty('selected', null);
  });

  test('should toggle dark mode', () => {
    const { result } = renderHook(() => useAppContext(), {
      wrapper,
    });

    act(() => {
      result.current.toggleDarkMode();
    });

    expect(result.current.settings).toHaveProperty('darkMode', true);

    act(() => {
      result.current.toggleDarkMode();
    });

    expect(result.current.settings).toHaveProperty('darkMode', false);
  });

  test('should set the selected pokemon', () => {
    const { result } = renderHook(() => useAppContext(), {
      wrapper,
    });

    act(() => {
      result.current.setSelectedPokemon(1);
    });

    expect(result.current.pokemon).toHaveProperty('selected', 1);

    act(() => {
      result.current.setSelectedPokemon(null);
    });

    expect(result.current.pokemon).toHaveProperty('selected', null);
  });
});
