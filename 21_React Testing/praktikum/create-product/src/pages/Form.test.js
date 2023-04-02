import React from 'react';
import renderer from 'react-test-renderer';
import Form from './Form';

describe('Form Page', () => {
    test('should check name input', () => {
        const form = renderer.create(<Form />);
        const productName = form.root.findByProps({ 'data-testid': 'productNameTitle' });
        expect(productName.props.children).toBe('Product Name');
    });
});

test('renders correctly', () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
});
