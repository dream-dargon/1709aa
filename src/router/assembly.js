import Loadable from '@@/Loadable'
const App = Loadable(() => import('@/pages/app'))
const Login = Loadable(() => import('@/pages/login'))
const Reg = Loadable(() => import('@/pages/reg'))
export {
  App,
  Login,
  Reg,
}