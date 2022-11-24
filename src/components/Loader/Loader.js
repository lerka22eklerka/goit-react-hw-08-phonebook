import { ThreeDots } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/contacts/selectors';

export const Loader = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  return (
    <div>
      {isLoading && !error && (
        <ThreeDots color="#ff0000" width={45} height={45} />
      )}
    </div>
  );
};
