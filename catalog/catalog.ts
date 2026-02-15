import type { InternalCatalog } from '../types';
import catalog from './catalog.json';

// カタログの基本データを作成
const master = new Map<string, InternalCatalog>();
// Process each version of the master catalog
catalog.forEach((c: InternalCatalog) => master.set(c.id, c));

export default master;
