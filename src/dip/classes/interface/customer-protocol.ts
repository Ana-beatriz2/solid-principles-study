export interface CustumerOrder {
    getName(): string;
    getIdentifierNumber(): string;
}

export interface IndividualCustomerProtocol {
    firstName: string;
    lastName: string;
    cpf: string;
}

export interface EnterpriseCustomerProtocol {
    name: string;
    cnpj: string;
}
