import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Spinner from '../components/Spinner/Spinner';
import Footer from '../components/Footer/Footer';

const Root = () => {
    const navigation = useNavigation()
    return (
        <>
            <Navbar />
      {navigation?.state === 'loading' ? (
        <Spinner />
      ) : (
        <div className='min-h-[calc(100vh-285px)]'>
          <Outlet />
        </div>
      )}
      <Footer />
        </>
    );
};

export default Root;