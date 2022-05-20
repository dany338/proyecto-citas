import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import Loigin from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import AgregarCita from '../pages/Cita/AgregarCita';
import EditarCita from '../pages/Cita/EditarCita';
import VerCita from '../pages/Cita/VerCita';
import ListaUsuarios from '../pages/ListaUsuarios';

export const listRoute = [
  {
    path: '/',
    element: (
      <PublicRoute>
        <Loigin />
      </PublicRoute>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: '/agregar-cita',
    element: (
      <PrivateRoute>
        <AgregarCita />
      </PrivateRoute>
    ),
  },
  {
    path: '/editar-cita/:editId',
    element: (
      <PrivateRoute>
        <EditarCita />
      </PrivateRoute>
    ),
  },
  {
    path: '/ver-cita/:editId',
    element: (
      <PrivateRoute>
        <VerCita />
      </PrivateRoute>
    ),
  },
  {
    path: '/ListaUsuarios',
    element: (
      <PrivateRoute>
        <ListaUsuarios />
      </PrivateRoute>
    ),
  },
  {
    path: '*',
    element: (
      <div>
        <p>No se encontró la página consultada</p>
      </div>
    ),
  },
];
