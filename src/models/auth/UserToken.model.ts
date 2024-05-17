export interface UserTokenModel{
    ExchangeToken?: string,
    ExpiredTime?: Date,
    ExpiryTs?: number,
    JWTToken?: string
}