import { Decimal } from '@prisma/client/runtime/library';
import { CollateralType, CollateralStatus } from '@prisma/client';

export class Collateral {
  id: string;
  type: CollateralType;
  description: string;
  weight?: Decimal;
  purity?: Decimal;
  estimatedValue: Decimal;
  currentValue: Decimal;
  appraisalDate: Date;
  appraisedBy?: string;
  photos?: any;
  certificates?: any;
  storageLocation?: string;
  status: CollateralStatus;
  createdAt: Date;
  updatedAt: Date;
  loans?: any[];
  valuations?: any[];
}
