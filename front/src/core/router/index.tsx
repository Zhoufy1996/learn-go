/** @format */
import { routerModel } from '../../model/router.model';
import learningRoutes from '../../features/learning/learning.routes';
import componentDemoRoutes from '../../features/components/components.routes';

/** @format */
const router: routerModel[] = [learningRoutes, componentDemoRoutes];

export default router;
