import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PortalFormTest from './PortalFormTest';

describe('<PortalFormTest />', () => {
  test('it should mount', () => {
    render(<PortalFormTest />);
    
    const portalFormTest = screen.getByTestId('PortalFormTest');

    expect(portalFormTest).toBeInTheDocument();
  });
});