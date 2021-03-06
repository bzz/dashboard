import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { SearchPanel } from './SearchPanel';

const shouldMatchSnapshot = comp => {
  const wrapper = renderer.create(comp);
  expect(wrapper.toJSON()).toMatchStyledComponentsSnapshot();
};

it('renders correctly', () => {
  shouldMatchSnapshot(<SearchPanel />);
});

it('renders correctly with value', () => {
  shouldMatchSnapshot(<SearchPanel query="test" />);
});

it('input & button should be disabled while loading', () => {
  shouldMatchSnapshot(<SearchPanel loading={true} query="test" />);
});
