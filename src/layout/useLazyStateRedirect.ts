import { History } from 'history';
import { useHistory } from 'react-router';

const lazyStateRedirect = (history: History) => (path: string) => {
  const redirect = history.action === 'POP' ? history.replace : history.push;
  const alreadyThere = path === history.location.pathname;
  if (!alreadyThere) {
    redirect(path);
  }
};

export function useLazyStateRedirect() {
  const history = useHistory();
  return lazyStateRedirect(history);
}
