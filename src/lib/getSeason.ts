import { seasons } from './seasons';

export interface SeasonInfo {
  /** 二十四節気 */
  sekki: string;
  /** 七十二候 */
  kou: string;
}

/**
 * "YYYY-MM-DD" 形式の日付文字列から "MM-DD" 部分だけを取り出す。
 * 年に依存しない判定を行うためのユーティリティ。
 */
function toMonthDay(dateStr: string): string {
  const match = dateStr.match(/(\d{2})-(\d{2})$/);
  if (!match) {
    throw new Error(`不正な日付形式です: ${dateStr}`);
  }
  return `${match[1]}-${match[2]}`;
}

/**
 * monthDay が start〜end の範囲内かどうかを判定する。
 * start > end の場合は年をまたぐ期間（例: 冬至 12-22〜01-04）として扱う。
 */
function isInRange(monthDay: string, start: string, end: string): boolean {
  if (start <= end) {
    return monthDay >= start && monthDay <= end;
  }
  return monthDay >= start || monthDay <= end;
}

/**
 * 日付から二十四節気・七十二候を判定する。
 *
 * 年をまたいでも同じロジックで動作するよう、月日のみで判定する。
 *
 * @param dateStr "YYYY-MM-DD" 形式の日付文字列
 */
export function getSeason(dateStr: string): SeasonInfo {
  const monthDay = toMonthDay(dateStr);

  for (const s of seasons) {
    if (!isInRange(monthDay, s.start, s.end)) {
      continue;
    }
    const kou = s.kou.find((k) => isInRange(monthDay, k.start, k.end));
    return {
      sekki: s.sekki,
      kou: kou?.name ?? '',
    };
  }

  // 通常はここには到達しない（データが1年を完全にカバーしているため）
  return { sekki: '', kou: '' };
}
