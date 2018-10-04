/**
 *
 * Asynchronously loads the component for AllPostsList
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
