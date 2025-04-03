import type { Catalog } from '../types';
import master from './catalog.json';

// カタログの基本データを作成
const catalog = new Map<string, Catalog>();
// Process each version of the master catalog
// @ts-expect-error だまれ
master.forEach((c: Catalog) => catalog.set(c.id, c));

export default catalog;
