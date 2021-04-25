import {Router} from 'express';

import organizerRoutes from './organizers.routes';
import eventRoutes from './events.routes';
import userRoutes from './users.routes';

const routes = Router();
routes.use('/organizers',organizerRoutes);
routes.use('/events',eventRoutes);
routes.use('/users',userRoutes);

export default routes;