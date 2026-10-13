/**
 * 二十四節気・七十二候のデータ定義。
 *
 * start / end は "MM-DD" 形式の月日のみを持つ（年をまたいで再利用するため）。
 * 冬至のように年をまたぐ期間（例: 12-22〜01-04）も扱えるよう、
 * 判定側 (getSeason.ts) で month-day の巡回比較を行う。
 *
 * 日付は実際の天文学的な節気とは毎年数日前後するため、
 * ここでは一般的に用いられる近似日を採用している。
 */

export interface Kou {
  /** 開始日 (MM-DD) */
  start: string;
  /** 終了日 (MM-DD) */
  end: string;
  /** 七十二候の名称 */
  name: string;
}

export interface Sekki {
  /** 二十四節気の名称 */
  sekki: string;
  /** 開始日 (MM-DD) */
  start: string;
  /** 終了日 (MM-DD) */
  end: string;
  /** この節気に属する七十二候（初候・次候・末候） */
  kou: Kou[];
}

export const seasons: Sekki[] = [
  {
    sekki: '小寒',
    start: '01-05',
    end: '01-19',
    kou: [
      { start: '01-05', end: '01-09', name: '芹乃栄' },
      { start: '01-10', end: '01-14', name: '水泉動' },
      { start: '01-15', end: '01-19', name: '雉始雊' },
    ],
  },
  {
    sekki: '大寒',
    start: '01-20',
    end: '02-03',
    kou: [
      { start: '01-20', end: '01-24', name: '款冬華' },
      { start: '01-25', end: '01-29', name: '水沢腹堅' },
      { start: '01-30', end: '02-03', name: '鶏始乳' },
    ],
  },
  {
    sekki: '立春',
    start: '02-04',
    end: '02-18',
    kou: [
      { start: '02-04', end: '02-08', name: '東風解凍' },
      { start: '02-09', end: '02-13', name: '黄鶯睍睆' },
      { start: '02-14', end: '02-18', name: '魚上氷' },
    ],
  },
  {
    sekki: '雨水',
    start: '02-19',
    end: '03-04',
    kou: [
      { start: '02-19', end: '02-23', name: '土脉潤起' },
      { start: '02-24', end: '02-29', name: '霞始靆' },
      { start: '03-01', end: '03-04', name: '草木萠動' },
    ],
  },
  {
    sekki: '啓蟄',
    start: '03-05',
    end: '03-19',
    kou: [
      { start: '03-05', end: '03-09', name: '蟄虫啓戸' },
      { start: '03-10', end: '03-14', name: '桃始笑' },
      { start: '03-15', end: '03-19', name: '菜虫化蝶' },
    ],
  },
  {
    sekki: '春分',
    start: '03-20',
    end: '04-03',
    kou: [
      { start: '03-20', end: '03-24', name: '雀始巣' },
      { start: '03-25', end: '03-29', name: '桜始開' },
      { start: '03-30', end: '04-03', name: '雷乃発声' },
    ],
  },
  {
    sekki: '清明',
    start: '04-04',
    end: '04-19',
    kou: [
      { start: '04-04', end: '04-08', name: '玄鳥至' },
      { start: '04-09', end: '04-13', name: '鴻雁北' },
      { start: '04-14', end: '04-19', name: '虹始見' },
    ],
  },
  {
    sekki: '穀雨',
    start: '04-20',
    end: '05-04',
    kou: [
      { start: '04-20', end: '04-24', name: '葭始生' },
      { start: '04-25', end: '04-29', name: '霜止出苗' },
      { start: '04-30', end: '05-04', name: '牡丹華' },
    ],
  },
  {
    sekki: '立夏',
    start: '05-05',
    end: '05-20',
    kou: [
      { start: '05-05', end: '05-09', name: '蛙始鳴' },
      { start: '05-10', end: '05-14', name: '蚯蚓出' },
      { start: '05-15', end: '05-20', name: '竹笋生' },
    ],
  },
  {
    sekki: '小満',
    start: '05-21',
    end: '06-04',
    kou: [
      { start: '05-21', end: '05-25', name: '蚕起食桑' },
      { start: '05-26', end: '05-30', name: '紅花栄' },
      { start: '05-31', end: '06-04', name: '麦秋至' },
    ],
  },
  {
    sekki: '芒種',
    start: '06-05',
    end: '06-20',
    kou: [
      { start: '06-05', end: '06-09', name: '螳螂生' },
      { start: '06-10', end: '06-14', name: '腐草為螢' },
      { start: '06-15', end: '06-20', name: '梅子黄' },
    ],
  },
  {
    sekki: '夏至',
    start: '06-21',
    end: '07-06',
    kou: [
      { start: '06-21', end: '06-26', name: '乃東枯' },
      { start: '06-27', end: '07-01', name: '菖蒲華' },
      { start: '07-02', end: '07-06', name: '半夏生' },
    ],
  },
  {
    sekki: '小暑',
    start: '07-07',
    end: '07-21',
    kou: [
      { start: '07-07', end: '07-11', name: '温風至' },
      { start: '07-12', end: '07-16', name: '蓮始開' },
      { start: '07-17', end: '07-21', name: '鷹乃学習' },
    ],
  },
  {
    sekki: '大暑',
    start: '07-22',
    end: '08-06',
    kou: [
      { start: '07-22', end: '07-27', name: '桐始結花' },
      { start: '07-28', end: '08-01', name: '土潤溽暑' },
      { start: '08-02', end: '08-06', name: '大雨時行' },
    ],
  },
  {
    sekki: '立秋',
    start: '08-07',
    end: '08-22',
    kou: [
      { start: '08-07', end: '08-11', name: '涼風至' },
      { start: '08-12', end: '08-16', name: '寒蝉鳴' },
      { start: '08-17', end: '08-22', name: '蒙霧升降' },
    ],
  },
  {
    sekki: '処暑',
    start: '08-23',
    end: '09-06',
    kou: [
      { start: '08-23', end: '08-27', name: '綿柎開' },
      { start: '08-28', end: '09-01', name: '天地始粛' },
      { start: '09-02', end: '09-06', name: '禾乃登' },
    ],
  },
  {
    sekki: '白露',
    start: '09-07',
    end: '09-21',
    kou: [
      { start: '09-07', end: '09-11', name: '草露白' },
      { start: '09-12', end: '09-16', name: '鶺鴒鳴' },
      { start: '09-17', end: '09-21', name: '玄鳥去' },
    ],
  },
  {
    sekki: '秋分',
    start: '09-22',
    end: '10-07',
    kou: [
      { start: '09-22', end: '09-27', name: '雷乃収声' },
      { start: '09-28', end: '10-02', name: '蟄虫坏戸' },
      { start: '10-03', end: '10-07', name: '水始涸' },
    ],
  },
  {
    sekki: '寒露',
    start: '10-08',
    end: '10-22',
    kou: [
      { start: '10-08', end: '10-12', name: '鴻雁来' },
      { start: '10-13', end: '10-17', name: '菊花開' },
      { start: '10-18', end: '10-22', name: '蟋蟀在戸' },
    ],
  },
  {
    sekki: '霜降',
    start: '10-23',
    end: '11-06',
    kou: [
      { start: '10-23', end: '10-27', name: '霜始降' },
      { start: '10-28', end: '11-01', name: '霎時施' },
      { start: '11-02', end: '11-06', name: '楓蔦黄' },
    ],
  },
  {
    sekki: '立冬',
    start: '11-07',
    end: '11-21',
    kou: [
      { start: '11-07', end: '11-11', name: '山茶始開' },
      { start: '11-12', end: '11-16', name: '地始凍' },
      { start: '11-17', end: '11-21', name: '金盞香' },
    ],
  },
  {
    sekki: '小雪',
    start: '11-22',
    end: '12-06',
    kou: [
      { start: '11-22', end: '11-26', name: '虹蔵不見' },
      { start: '11-27', end: '12-01', name: '朔風払葉' },
      { start: '12-02', end: '12-06', name: '橘始黄' },
    ],
  },
  {
    sekki: '大雪',
    start: '12-07',
    end: '12-21',
    kou: [
      { start: '12-07', end: '12-11', name: '閉塞成冬' },
      { start: '12-12', end: '12-16', name: '熊蟄穴' },
      { start: '12-17', end: '12-21', name: '鱖魚群' },
    ],
  },
  {
    sekki: '冬至',
    start: '12-22',
    end: '01-04',
    kou: [
      { start: '12-22', end: '12-26', name: '乃東生' },
      { start: '12-27', end: '12-31', name: '麋角解' },
      { start: '01-01', end: '01-04', name: '雪下出麦' },
    ],
  },
];
