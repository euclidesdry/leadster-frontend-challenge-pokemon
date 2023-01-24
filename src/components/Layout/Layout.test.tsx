import React from 'react';
import { render, screen } from '../../utils/test-config';
import Layout from './Layout';

const MOCK_EXPECTED_TEXT = 'Testing';

describe('Layout component', () => {
  test('should be rendered correctly', () => {
    render(<Layout />);
    expect(screen.getByTestId('Layout-component')).toBeTruthy();
  });

  test('should have a child component inside', () => {
    render(
      <Layout>
        <p>{MOCK_EXPECTED_TEXT}</p>
      </Layout>
    );
    expect(screen.getByText(MOCK_EXPECTED_TEXT)).toBeTruthy();
  });
});
