export class Collateral {
  id: string;
  type: string;
  description: string;
  weight?: number;
  purity?: number;
  estimatedValue: number;
  currentValue: number;
  appraisalDate: Date;
  appraisedBy?: string;
  photos?: any;
  certificates?: any;
  storageLocation?: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  loans?: any[];
  valuations?: any[];
}
