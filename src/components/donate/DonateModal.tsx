import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ClipboardCopy, Check, X, WalletMinimal } from "lucide-react";

// NOTE: install tiny QR encoder:
// pnpm add qrcode
import QRCode from "qrcode";

type DonateModalProps = {
    address: string;                 // your Solana address
    onClose: () => void;
    amountSol?: number;              // optional prefill amount
    label?: string;                  // optional label for wallets
    message?: string;                // optional message for wallets
};

export default function DonateModal({
                                        address,
                                        onClose,
                                        amountSol,
                                        label = "Donation",
                                        message = "Thanks for supporting the work!",
                                    }: DonateModalProps) {
    const [qrDataUrl, setQrDataUrl] = useState<string>("");
    const [copied, setCopied] = useState(false);

    // Build a Solana Pay-style URI (lightweight; no validation here)
    // Format: solana:<recipient>?amount=<amount>&label=<label>&message=<message>
    const solUri = useMemo(() => {
        const params = new URLSearchParams();
        if (amountSol && amountSol > 0) params.set("amount", String(amountSol));
        if (label) params.set("label", label);
        if (message) params.set("message", message);
        const query = params.toString();
        return query ? `solana:${address}?${query}` : `solana:${address}`;
    }, [address, amountSol, label, message]);

    useEffect(() => {
        let active = true;
        // Generate QR for the solUri; fallback to raw address if something goes weird
        QRCode.toDataURL(solUri, { margin: 1, width: 320 })
            .then((url) => {
                if (active) setQrDataUrl(url);
            })
            .catch(() => {
                return QRCode.toDataURL(address, { margin: 1, width: 320 }).then((url) => {
                    if (active) setQrDataUrl(url);
                });
            });
        return () => {
            active = false;
        };
    }, [solUri, address]);

    const copyRef = useRef<HTMLButtonElement>(null);

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(address);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            // no-op
        }
    }

    return createPortal(
        <div
            className="fixed inset-0 z-[100] grid place-items-center bg-black/70 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
        >
            <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-surface shadow-glow">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-800 px-5 py-3">
                    <div className="flex items-center gap-2">
                        <WalletMinimal className="size-5 text-primary" />
                        <h2 className="text-sm font-semibold text-white">Donate with Solana</h2>
                    </div>
                    <button
                        aria-label="Close"
                        onClick={onClose}
                        className="rounded-lg p-2 text-gray-400 hover:bg-gray-900/60 hover:text-white"
                    >
                        <X className="size-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="px-5 py-5 space-y-4">
                    <p className="text-sm text-gray-400">
                        Scan the QR with a Solana wallet, or copy the address below.
                    </p>

                    <div className="grid place-items-center">
                        <div className="rounded-xl border border-gray-800 bg-black/50 p-3">
                            {qrDataUrl ? (
                                <img
                                    src={qrDataUrl}
                                    alt="Solana donation QR"
                                    className="h-64 w-64"
                                    width={256}
                                    height={256}
                                />
                            ) : (
                                <div className="h-64 w-64 grid place-items-center text-gray-500 animate-pulse">
                                    Generating QR…
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Address */}
                    <div className="rounded-lg border border-gray-800 bg-gray-950/60 p-3">
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                            Address
                        </p>
                        <div className="flex items-center justify-between gap-2">
                            <code className="text-emerald-300 text-sm break-all">{address}</code>
                            <button
                                ref={copyRef}
                                onClick={handleCopy}
                                className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-300 hover:bg-emerald-500/20 hover:text-white transition-colors"
                            >
                                {copied ? <Check className="size-4" /> : <ClipboardCopy className="size-4" />}
                                {copied ? "Copied" : "Copy"}
                            </button>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                        <a
                            href={solUri}
                            className="btn glow inline-flex items-center gap-2"
                        >
                            <WalletMinimal className="size-4" />
                            Open in Wallet
                        </a>

                        <div className="text-xs text-gray-500">
                            Optional amount:&nbsp;
                            <span className="text-gray-300">
                {amountSol ? `${amountSol} SOL` : "—"}
              </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
