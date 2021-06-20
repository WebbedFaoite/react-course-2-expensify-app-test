import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});

//CHALLENGE
//You are going to create a test file
//Grab those imports
//Create the test case that renders the actual component. 
/* So you will render ExpenseListItem and you are going to render 
it with one of the fixture expenses. So you can pick any one of 
them you like. You could use the first one, the second one or 
the third one.   */
//Create the snapshot