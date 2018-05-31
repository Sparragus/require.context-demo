// @flow
import L from 'react-loadable';

import LoadingBar from '../LoadingBar';

const Loadable = (opts: *) =>
  L({
    loading: LoadingBar,
    delay: 200,
    ...opts,
  });

export default Loadable;
