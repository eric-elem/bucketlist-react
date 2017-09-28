import React from 'react';
import renderer from 'react-test-renderer';
import Bucketlist from '../components/bucketlists/bucketlist';


const props = {
  key: 1,
  bucketlist: {
    id: 1,
    title: 'Test Bucket',
    description: 'This is a test bucket',
    created_at: 'Wed, 20 Sep 2017 11:31:50 GMT',
    updated_at: 'Wed, 20 Sep 2017 11:31:50 GMT',
  },
  request: jest.fn(),
  viewItems: jest.fn(),
};
it('renders correctly', () => {
  const tree = renderer.create(<Bucketlist {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
