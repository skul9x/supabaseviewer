export const Gender = {
  NAM: "NAM",
  NU: "NU"
} as const;

export type Gender = typeof Gender[keyof typeof Gender];

export interface UserInfoResult {
  name: string;
  gender: string;
  solarDate: string;
  time: string;
  lunarDate: string;
  canChi: string;
  cuc: string;
  menhTai: string;
  thanTai: string;
  viewingYear: number;
  viewingMonth: number;
  viewingMode: string;
  readingStyle: string;
  daiVanInfo: string;
  menhNguHanh: string;
  cucMenhRelation: string;
  daiVanFullList: string;
  amDuong: string;
  tieuHanCung: string;
  phiTinhTuHoa: string;
  phoneNumber?: string;
}

export interface CungInfo {
  index: number;
  name: string;
  chucNang: string;
  nguHanhCung: string;
  canChi: string;
  chinhTinh: string[];
  phuTinh: string[];
  score: number;
}

export interface LasoData {
  info: UserInfoResult;
  cung: CungInfo[];
  scores: number[];
}

export interface LasoSyncRecord {
  id: number;
  phone_number: string;
  device_info: {
    userAgent: string;
    platform: string;
    vendor: string;
    language: string;
    screen: string;
  };
  laso_data: LasoData;
  ip_address: string;
  created_at: string;
}
