import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/components';
import { authVerification } from '@/redux-modules/auth/Actions';
import { AuthSelectors } from '@/redux-modules/auth';

export function Home() {
  const dispatch = useDispatch();
  const { user, authErrorMessage } = useSelector(AuthSelectors.authState);

  return (
    <>
      <div className="grid place-items-center mt-10">
        <h1>Home</h1>
        {user && <h2>{user.email}</h2>}
        <Button
          name="Authenticate User"
          onClick={() =>
            dispatch(authVerification({ email: 'sample@gmail.com' }))
          }
        />
        {authErrorMessage && <h2 className="text-red">{authErrorMessage}</h2>}
      </div>
    </>
  );
}
