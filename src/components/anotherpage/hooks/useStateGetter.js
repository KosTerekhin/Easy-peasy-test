import { useStoreState } from 'easy-peasy';
import * as R from 'ramda';

export const useStateGetter = (...path) =>
	useStoreState((state) =>
		path[0].reduce((c, p) => {
			return (c = {
				...c,
				[p[p.length - 1]]: R.path(p, state)
			});
		}, {})
	);
