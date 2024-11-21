import './App.css'
// Anything that is commented out is for things that are required for a backend to work 
// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Background from './components/Background/Background';
// import Phone from './components/Phone/phone;'
// import Footer from './components/Footer';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <>

      <Background />
      <div>
      {/* <Phone /> */}
        <Header />
        <div>
          <Nav />
          <div>
            <Outlet />
          </div> 
        </div>
      </div>
    </>
  );
}

export default App;