export const TestUser: User = {
  id: '00000000000',
  name: {
    first: 'Michael',
    last: 'Peschke'
  }
};

interface User {
  id: string;
  name: {
    first: string;
    last: string;
  };
}
export default User;
