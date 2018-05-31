// @flow
import Loadable from '../../components/Loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "Contact" */ './index.js'),
});
