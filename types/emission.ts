interface Emission {
  id: string;
  companyId: string;
  bondName: string;
  issueDate: Date;
  maturityDate: Date;
  yield: number;
  amountIssued: number;
  currency: string;
}

export default Emission;