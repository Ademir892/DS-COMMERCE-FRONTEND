import { getAccessTokenPayload } from "../services/auth-service";

export type RoleEnum = "ROLE_ADMIN" | "ROLE_CLIENT";

export type CredentialsDTO = {
  username: string;
  password: string;
};

export type AccessTokenPayloadDTO = {
  exp: number;
  user_name: string;
  authorities: RoleEnum[];
};

export function isAuthenticated(): boolean {
  let tokenPayload = getAccessTokenPayload();

  if(tokenPayload && tokenPayload.exp * 1000 > Date.now()){
    return true;
  }
  return false;
  //return tokenPayload && tokenPayload.exp * 1000 > Date.now() ? true : false; maneira simplificada 
}
