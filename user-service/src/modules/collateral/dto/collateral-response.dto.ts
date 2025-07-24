import { ApiProperty } from '@nestjs/swagger';
import { Collateral } from '../entities/collateral.entity';
import { CollateralType, CollateralStatus } from '@prisma/client';

const collateralExample = {
  id: "clk9f7zk10000qw3j1234abcd",
  type: CollateralType.GOLD_JEWELRY,
  description: "22K Gold Necklace",
  weight: "25.7",
  purity: "91.6",
  estimatedValue: "150000.00",
  currentValue: "155000.00",
  appraisalDate: new Date("2025-07-25").toISOString(),
  appraisedBy: "John Doe",
  photos: {
    front: "http://example.com/photos/necklace-front.jpg",
    back: "http://example.com/photos/necklace-back.jpg"
  },
  certificates: {
    authenticity: "http://example.com/certificates/auth-123.pdf",
    valuation: "http://example.com/certificates/val-123.pdf"
  },
  storageLocation: "Vault A-123",
  status: CollateralStatus.AVAILABLE,
  createdAt: new Date("2025-07-25").toISOString(),
  updatedAt: new Date("2025-07-25").toISOString()
};

export class CollateralResponse {
  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ example: 'Operation completed successfully' })
  message: string;

  @ApiProperty({
    type: Collateral,
    example: collateralExample
  })
  data: Collateral;
}

export class CollateralListResponse {
  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ example: 'Operation completed successfully' })
  message: string;

  @ApiProperty({
    type: [Collateral],
    example: [collateralExample, {
      ...collateralExample,
      id: "clk9f7zk10001qw3j5678efgh",
      type: CollateralType.GOLD_COINS,
      description: "24K Gold Coin Collection",
      weight: "50.0",
      currentValue: "300000.00"
    }]
  })
  data: Collateral[];
}
