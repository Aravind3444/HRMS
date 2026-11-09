import { useEffect, useState } from 'react';
import { useAuthStore } from '../../store/authStore';
import { Mail, Loader2, CheckCircle, AlertCircle, AlertTriangle } from 'lucide-react';

interface EmailVerificationPageProps {
  onBackToLogin: () => void;
}

export function EmailVerificationPage({ onBackToLogin }: EmailVerificationPageProps) {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const verificationToken = params.get('token');
    
    if (verificationToken) {
      setToken(verificationToken);
      verifyEmail(verificationToken);
    } else {
      setStatus('error');
      setMessage('Invalid verification link. No token provided.');
    }
  }, []);

  const verifyEmail = async (rawToken: string) => {
    try {
      const res = await fetch('/api/v1/auth/verify-email', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      // The verify-email endpoint uses query params, so we need to call it with the token
      const verifyRes = await fetch(`/api/v1/auth/verify-email?token=${encodeURIComponent(rawToken)}`);
      const data = await verifyRes.json();

      if (verifyRes.ok && data.success) {
        setStatus('success');
        setMessage(data.message || 'Email verified successfully. You can now log in.');
      } else {
        setStatus('error');
        setMessage(data.message || data.error?.message || 'Verification failed. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('An unexpected error occurred. Please try again.');
    }
  };

  const Icon = status === 'success' ? CheckCircle : AlertCircle;
  const iconColor = status === 'success' ? 'text-emerald-500' : 'text-rose-500';
  const bgColor = status === 'success' ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200';
  const textColor = status === 'success' ? 'text-emerald-700' : 'text-rose-700';

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 p-6 text-white text-center">
          <h2 className="text-xl font-bold">Email Verification</h2>
          <p className="text-slate-400 text-xs mt-1">Verify your account to get started</p>
        </div>

        <div className="p-6 space-y-4">
          <div className={`p-4 rounded-xl border ${bgColor} flex items-start gap-3`}>
            <Icon className={`w-6 h-6 ${iconColor} mt-0.5 flex-shrink-0`} />
            <div className={`text-sm ${textColor}`}>
              <p className="font-medium">{status === 'success' ? 'Verification Successful' : 'Verification Failed'}</p>
              <p className="mt-1">{message}</p>
            </div>
          </div>

          {status === 'loading' && (
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
              <p className="text-xs text-slate-500 font-medium">Verifying your email...</p>
            </div>
          )}

          {status === 'success' && (
            <div className="pt-4">
              <button
                onClick={onBackToLogin}
                className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] text-white font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
              >
                <span>Continue to Login</span>
              </button>
            </div>
          )}

          {status === 'error' && (
            <div className="pt-4 space-y-3">
              <button
                onClick={() => verifyEmail(token)}
                disabled={!token}
                className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] text-white font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Retry Verification</span>
              </button>
              <button
                onClick={onBackToLogin}
                className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 active:scale-[0.99] text-slate-700 font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2"
              >
                <span>Back to Login</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}