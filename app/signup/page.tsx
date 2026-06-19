"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Icon } from "@/components/icons";
import { AuthShell } from "@/components/auth/AuthShell";
import { GoogleButton } from "@/components/auth/GoogleButton";

/** Accept only relative paths to prevent open-redirect attacks. */
function safeRedirectPath(value: string | null): string {
  if (!value) return "/";
  return /^\/[^/\\]/.test(value) || value === "/" ? value : "/";
}

function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = safeRedirectPath(searchParams.get("redirect"));
  const { user, loading: authLoading, signUp } = useAuth();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  if (authLoading) return null;
  if (user) {
    router.replace(redirect);
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      setLoading(false);
      return;
    }

    const { error: err } = await signUp(email, password, fullName);
    if (err) {
      setError(err);
      setLoading(false);
    } else {
      setSuccess(true);
    }
  };

  if (success) {
    return (
      <AuthShell
        title="Welcome to the family."
        lead="You're one step away from gentle, pet-safe care delivered to your door."
      >
        <div className="center">
          <div className="auth-success-icon">
            <Icon name="check" size={36} strokeWidth={3} />
          </div>
          <h2 className="h2" style={{ marginBottom: 12 }}>Check your email</h2>
          <p className="muted">
            We&apos;ve sent a confirmation link to <strong>{email}</strong>. Click it to
            activate your account.
          </p>
          <Link href="/login" className="btn btn-primary btn-block btn-lg" style={{ marginTop: 28 }}>
            Go to Login
          </Link>
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title="Join the ClariPet family."
      lead="Create an account for faster checkout, order tracking, and rewards on every purchase."
      bullets={[
        "Gentle, pet-safe formulas made in Indonesia",
        "Faster checkout with saved addresses",
        "Earn ClariPet points on every order",
      ]}
    >
      <div className="form-head">
        <h2 className="h2">Create an account</h2>
        <p className="muted">Join the ClariPet family</p>
      </div>

      {error && (
        <div className="auth-error" role="alert">
          <Icon name="alert-circle" size={18} />
          {error}
        </div>
      )}

      <GoogleButton redirectPath={redirect} label="Sign up with Google" />

      <div className="auth-divider">or sign up with email</div>

      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Your name"
            required
            autoFocus
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="pw-wrap">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              required
              minLength={8}
            />
            <button
              type="button"
              className="pw-toggle"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <Icon name={showPassword ? "eye-off" : "eye"} size={18} />
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block btn-lg"
          disabled={loading}
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>
      </form>

      <p className="auth-footer">
        Already have an account?{" "}
        <Link href={`/login${redirect !== "/" ? `?redirect=${encodeURIComponent(redirect)}` : ""}`}>Sign in</Link>
      </p>
    </AuthShell>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<main className="section"><div className="wrap center">Loading…</div></main>}>
      <SignupForm />
    </Suspense>
  );
}
