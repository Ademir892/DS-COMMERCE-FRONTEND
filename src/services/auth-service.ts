import { AxiosRequestConfig } from "axios";
import { AccessTokenPayloadDTO, CredentialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/systm";
import QueryString from "qs";
import { requestBackend } from "../utils/requests";
import * as acessTokenRepository from "../localstorage/acess-token-repository";
import jwtDecode from "jwt-decode";

export function loginRequest(loginData: CredentialsDTO) {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
  };

  const requestBody = QueryString.stringify({
    ...loginData,
    grant_type: "password",
  });

  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/oauth/token",
    data: requestBody,
    headers,
  };

  return requestBackend(config);
}

export function logout() {
  acessTokenRepository.remove();
}

export function saveAcessToken(token: string) {
  acessTokenRepository.save(token);
}

export function getAcessToken() {
  return acessTokenRepository.get();
}

export function getAccessTokenPayload(): AccessTokenPayloadDTO | undefined {
  try {
    const token = acessTokenRepository.get();
    return token == null
      ? undefined
      : (jwtDecode(token) as AccessTokenPayloadDTO);
  } catch (error) {
    return undefined;
  }
}


