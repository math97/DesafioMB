import {Router} from 'express';

import organizerRoutes from './organizers.routes';
import eventRoutes from './events.routes';
import userRoutes from './users.routes';
import sessionRoutes from './sessions.routes';
import ticketRoutes from './tickets.routes';

const routes = Router();
routes.use('/organizers',organizerRoutes);
routes.use('/events',eventRoutes);
routes.use('/users',userRoutes);
routes.use('/sessions',sessionRoutes);
routes.use('/tickets',ticketRoutes);

export default routes;