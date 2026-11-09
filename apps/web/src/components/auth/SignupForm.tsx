import { useState } from 'react';
import { useAuthStore, AuthState } from '../../store/authStore';
import { Building2, Mail, Lock, User, Phone, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { TenantSignupRequest } from '@hrms/shared-types';

interface SignupModalProps {
  onSuccess: () => void;
  onSwitchToLogin: () => void;
}

export function SignupForm({ onSuccess, onSwitchToLogin }: SignupModalProps) {
  const setUser = useAuthStore((s: AuthState) => s.setUser);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState<TenantSignupRequest>({
    companyName: '',
    companySlug: '',
    adminFullName: '',
    adminEmail: '',
    adminPassword: '',
    adminPhoneNumber: '',
  });

  const handleNameChange = (name: string) => {
    // Automatically generate a URL-friendly slug as the user types their company name
    const slug = name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    setForm((prev) => ({ ...prev, companyName: name, companySlug: slug }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/v1/tenant/signup', {
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
        throw new Error(data?.message || data?.error?.message || `Registration failed (${res.status})`);
      }

      // Registration successful: user needs email verification + superadmin approval before login
      // Redirect to login page
      onSuccess();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 p-6 text-white text-center">
        <h2 className="text-xl font-bold">Register Your Organization</h2>
        <p className="text-slate-400 text-xs mt-1">Get started with a 14-day full-feature trial</p>
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
            <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Organization Name</label>
            <div className="relative">
              <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                required
                value={form.companyName}
                onChange={(e) => handleNameChange(e.target.value)}
                placeholder="e.g. Apex Global Solutions"
                className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Company Subdomain Slug</label>
            <div className="flex items-center text-xs border border-slate-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500">
              <span className="bg-slate-50 px-3 py-2.5 text-slate-500 border-r border-slate-200 font-mono">hrms.io/</span>
              <input
                type="text"
                required
                value={form.companySlug}
                onChange={(e) => setForm({ ...form, companySlug: e.target.value })}
                placeholder="apex-global"
                className="w-full px-3 py-2 text-sm focus:outline-none font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Admin Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={form.adminFullName}
                  onChange={(e) => setForm({ ...form, adminFullName: e.target.value })}
                  placeholder="e.g. Priya Sharma"
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  value={form.adminPhoneNumber}
                  onChange={(e) => setForm({ ...form, adminPhoneNumber: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="email"
                required
                value={form.adminEmail}
                onChange={(e) => setForm({ ...form, adminEmail: e.target.value })}
                placeholder="priya@apexsolutions.com"
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
                value={form.adminPassword}
                onChange={(e) => setForm({ ...form, adminPassword: e.target.value })}
                placeholder="••••••••••••"
                className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>
            <p className="text-[10px] text-slate-400 mt-1">Must be at least 8 characters with 1 uppercase, 1 number, and 1 special symbol</p>
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
              <span>Creating Organization...</span>
            </>
          ) : (
            <>
              <span>Start Free 14-Day Trial</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <div className="text-center pt-2">
          <p className="text-xs text-slate-500">
            Already have an organization?{' '}
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="text-indigo-600 font-semibold hover:underline"
            >
              Sign In
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
