import type { Catalog } from '../types';
import master from './catalog.json';
import { initializeCatalogWithEffects } from './effectHandlers';

// カタログの基本データを作成
const catalog = new Map<string, Catalog>();
// Process each version of the master catalog
// @ts-expect-error だまれ
master.forEach((c: Catalog) => catalog.set(c.id, c));

// 効果ハンドラを登録してカタログを拡張
const enhancedCatalog = initializeCatalogWithEffects(catalog);

export default enhancedCatalog;
