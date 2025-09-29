import { memo } from 'react';
import {  GoogleOAuthProvider } from '@react-oauth/google';
import { LoginWrapper } from '../../../features/auth';



export const Login = memo(() => {
  return (
    <div>
      <GoogleOAuthProvider clientId="653248516027-n871lkv2pdlskfcgi4o61pkl1vprdr88.apps.googleusercontent.com">
        <LoginWrapper/>
      </GoogleOAuthProvider>
    </div>
  );
});
