import { render, screen } from '@testing-library/react';
import App from './App';

test('finds textbox by role and placeholder', () => {
  render(<App />);
  expect(screen.getByRole('textbox', { name: 'placeholder-value' })).toBeVisible()
});