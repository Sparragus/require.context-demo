// @flow
import Loadable from '../../components/Loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "Project" */ './index.js'),
});
