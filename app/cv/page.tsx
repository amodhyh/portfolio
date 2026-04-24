"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type DownloadState = "downloading" | "downloaded";
type NavigationState = "idle" | "countdown" | "transitioning";

export default function CVProxyPage() {
  const REDIRECT_SECONDS = 5;
  const DOWNLOAD_STATE_DELAY_MS = 1200;
  const TRANSITION_DELAY_MS = 600;
  const DOWNLOAD_GUARD_WINDOW_MS = 4000;

  const [downloadState, setDownloadState] = useState<DownloadState>("downloading");
  const [navigationState, setNavigationState] = useState<NavigationState>("idle");
  const [countdown, setCountdown] = useState(REDIRECT_SECONDS);
  const router = useRouter();

  useEffect(() => {
    // 1. Trigger the download immediately (same tab/window).
    // In development, React Strict Mode can mount/unmount/mount once, causing
    // effects to run twice. This guard prevents a double-download.
    let shouldTriggerDownload = true;
    try {
      const key = "cv-download:last-trigger";
      const now = Date.now();
      const last = Number(sessionStorage.getItem(key) ?? 0);
      if (Number.isFinite(last) && now - last < DOWNLOAD_GUARD_WINDOW_MS) {
        shouldTriggerDownload = false;
      } else {
        sessionStorage.setItem(key, String(now));
      }
    } catch {
      // If sessionStorage is unavailable, just proceed.
    }

    if (shouldTriggerDownload) {
      const link = document.createElement("a");
      link.href = "/cv/CV.pdf";
      link.download = "Amodh_Herath_CV.pdf";
      link.target = "_self";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    // 2. Update the download state after a short delay so the UI reflects
    //    "downloaded" before we start the redirect countdown.
    const downloadStateTimer = window.setTimeout(() => {
      setDownloadState("downloaded");
      setCountdown(REDIRECT_SECONDS);
      setNavigationState("countdown");
    }, DOWNLOAD_STATE_DELAY_MS);

    return () => {
      window.clearTimeout(downloadStateTimer);
    };
  }, []);

  // 3. Handle countdown + transition to home
  useEffect(() => {
    if (navigationState !== "countdown") return;

    const countdownInterval = window.setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.clearInterval(countdownInterval);
          setNavigationState("transitioning");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      window.clearInterval(countdownInterval);
    };
  }, [navigationState]);

  useEffect(() => {
    if (navigationState !== "transitioning") return;

    const redirectTimer = window.setTimeout(() => {
      router.replace("/");
    }, TRANSITION_DELAY_MS);

    return () => {
      window.clearTimeout(redirectTimer);
    };
  }, [navigationState, router]);

  return (
    <div className="flex flex-col h-screen items-center justify-center font-mono text-xs tracking-tighter gap-6">
      <div className="text-center space-y-2">
        <p className="uppercase opacity-70">
          {downloadState === "downloading" ? "FILE DOWNLOADING" : "DOWNLOAD COMPLETED"}
        </p>
        
        {/* Visual Countdown */}
        <div className="text-xl font-bold text-primary tabular-nums">
          {navigationState === "countdown" ? countdown : navigationState === "transitioning" ? 0 : "—"}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        {navigationState === "transitioning" && (
          <p className="animate-pulse"> TO SYSTEM HOME...</p>
        )}

        {navigationState === "countdown" && (
          <p className="animate-pulse">REDIRECTING TO SYSTEM HOME IN {countdown}s...</p>
        )}

        {navigationState === "idle" && (
          <p className="animate-pulse">PREPARING REDIRECT...</p>
        )}

        {downloadState === "downloaded" && (
          <Link
            href="/"
            className="border border-primary px-6 py-2 hover:bg-primary hover:text-background transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
          >
            Return Home
          </Link>
        )}

        {downloadState === "downloading" && (
          <p className="text-muted-foreground opacity-60">
            If your browser blocked the download, <a href="/cv/CV.pdf" download="Amodh_Herath_CV.pdf" className="underline">click here</a>.
          </p>
        )}
      </div>
    </div>
  );
}