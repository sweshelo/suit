// Import using relative paths to avoid module resolution issues
import type { EffectHandler } from "../../../../../package/core/class/effect";

/**
 * カタログデータの拡張型定義
 * カード効果ハンドラを追加
 */
export interface CatalogWithEffects {
  // 基本データ
  id: string;
  name: string;
  cost: number;
  cardType: 'unit' | 'spell' | 'atom';
  
  // 効果ハンドラ群
  onDrive?: EffectHandler;
  onBreak?: EffectHandler;
  onDamage?: EffectHandler;
  onDraw?: EffectHandler;
  // 他の効果タイプも必要に応じて追加
}

// Note: We don't need IAtomWithCatalog because ICard already extends IAtom and has catalogId
