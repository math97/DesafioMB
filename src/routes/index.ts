import {Router} from 'express';

import organizerRoutes from './organizers.routes';
import eventRoutes from './events.routes';

const routes = Router();
routes.use('/organizers',organizerRoutes);
routes.use('/events',eventRoutes);

export default routes;