import { useState } from 'react';
import { useAuthStore, AuthState } from '../../store/authStore';
import { Mail, Lock, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { LoginRequest } from '@hrms/shared-types';

interface LoginFormProps {
  onSuccess: () => void;
  onSwitchToSignup: () => void;
}

export function LoginForm({ onSuccess, onSwitchToSignup }: LoginFormProps) {
  const setUser = useAuthStore((s: AuthState) => s.setUser);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isAdminPort = typeof window !== 'undefined' && window.location.port === '5174';

  const [form, setForm] = useState<LoginRequest>({
    email: isAdminPort ? 'superadmin@hrms.internal' : '',
    password: isAdminPort ? 'SuperAdmin@123' : '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      let data: any = null;
      const text = await res.text();
      if (text) {
        try {
          data = JSON.parse(text);
        } catch {
          // not json
        }
      }

      if (!res.ok) {
        throw new Error(data?.message || data?.error?.message || `Server returned ${res.status}`);
      }

      // If logging in, fetch user session profile so isPlatformAdmin is immediately populated
      const profileRes = await fetch('/api/v1/auth/me');
      if (profileRes.ok) {
        const profileData = await profileRes.json();
        setUser(profileData?.data || profileData);
      } else {
        setUser(data?.data || data);
      }

      onSuccess();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
      <div className={`p-6 text-white text-center ${isAdminPort ? 'bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950' : 'bg-gradient-to-r from-slate-900 to-indigo-950'}`}>
        <h2 className="text-xl font-bold">{isAdminPort ? 'Platform Super Admin' : 'Sign In to Enterprise HRMS'}</h2>
        <p className="text-slate-400 text-xs mt-1">
          {isAdminPort ? 'Platform governance, approvals & plan management' : 'Access your organization, team, and self-service'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        {error && (
          <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2.5 text-xs text-rose-700">
            <AlertCircle className="w-4 h-4 text-rose-600 mt-0.5 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="rajesh@acmetech.com"
                className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="password"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••••••"
                className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] text-white font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Verifying...</span>
            </>
          ) : (
            <>
              <span>Sign In</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <div className="text-center pt-2">
          <p className="text-xs text-slate-500">
            Need to register a company?{' '}
            <button
              type="button"
              onClick={onSwitchToSignup}
              className="text-indigo-600 font-semibold hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
