import { CollateralType } from '@prisma/client';

const baseCollateral = {
  id: "clk9f7zk10000qw3j1234abcd",
  type: CollateralType.GOLD_JEWELRY,
  description: "22K Gold Necklace",
  weight: "25.7",
  purity: "91.6",
  estimatedValue: "150000.00",
  currentValue: "155000.00",
  appraisalDate: "2025-07-25T00:00:00.000Z",
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
  status: "AVAILABLE",
  createdAt: "2025-07-25T00:00:00.000Z",
  updatedAt: "2025-07-25T00:00:00.000Z"
};

const secondCollateral = {
  ...baseCollateral,
  id: "clk9f7zk10001qw3j5678efgh",
  type: CollateralType.GOLD_COINS,
  description: "24K Gold Coin Collection",
  weight: "50.0",
  purity: "99.9",
  estimatedValue: "300000.00",
  currentValue: "300000.00",
  appraisedBy: "Jane Smith",
  photos: {
    front: "http://example.com/photos/coins-front.jpg",
    back: "http://example.com/photos/coins-back.jpg"
  },
  certificates: {
    authenticity: "http://example.com/certificates/auth-124.pdf",
    valuation: "http://example.com/certificates/val-124.pdf"
  },
  storageLocation: "Vault B-456"
};

const updatedCollateral = {
  ...baseCollateral,
  description: "22K Gold Necklace (Updated)",
  estimatedValue: "160000.00",
  currentValue: "165000.00",
  photos: {
    front: "http://example.com/photos/necklace-front-new.jpg",
    back: "http://example.com/photos/necklace-back-new.jpg"
  },
  certificates: {
    ...baseCollateral.certificates,
    valuation: "http://example.com/certificates/val-123-updated.pdf"
  }
};

export const CollateralExamples = {
  SingleSuccess: {
    success: true,
    message: 'Operation completed successfully',
    data: baseCollateral
  },

  ListSuccess: {
    success: true,
    message: 'Operation completed successfully',
    data: [baseCollateral, secondCollateral]
  },

  CreateSuccess: {
    success: true,
    message: 'Collateral created successfully',
    data: baseCollateral
  },

  UpdateSuccess: {
    success: true,
    message: 'Collateral updated successfully',
    data: updatedCollateral
  },

  DeleteSuccess: {
    success: true,
    message: 'Collateral deleted successfully',
    data: baseCollateral
  },

  NotFound: {
    success: false,
    message: 'Collateral not found',
    data: null
  }
};
