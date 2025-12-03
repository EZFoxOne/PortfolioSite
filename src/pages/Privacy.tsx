// src/pages/Privacy.tsx
import FadeIn from "@/components/motion/FadeIn";
import { Shield, Mail, Calendar } from "lucide-react";

export default function Privacy() {
    const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="space-y-12 max-w-4xl mx-auto">
            {/* Header */}
            <FadeIn>
                <header className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/5 px-3 py-1 text-xs text-emerald-300">
                        <Shield className="size-3.5" />
                        Privacy Policy
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-white">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-400">
                        Last updated: {currentDate}
                    </p>
                </header>
            </FadeIn>

            {/* Introduction */}
            <FadeIn delay={0.05}>
                <section className="card p-6 space-y-4">
                    <h2 className="text-2xl font-semibold text-white">Introduction</h2>
                    <p className="text-gray-300 leading-relaxed">
                        This Privacy Policy describes how Cole Carey ("I", "me", or "my")
                        collects, uses, and protects your information when you visit my
                        portfolio website, use my services, or interact with my applications,
                        including Android apps. I am committed to protecting your privacy and
                        being transparent about data practices.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        By using my website or applications, you agree to the collection and
                        use of information in accordance with this policy.
                    </p>
                </section>
            </FadeIn>

            {/* Information Collection */}
            <FadeIn delay={0.1}>
                <section className="card p-6 space-y-4">
                    <h2 className="text-2xl font-semibold text-white">
                        Information I Collect
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-medium text-white mb-2">
                                Website Usage
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                When you visit my portfolio website, I may automatically
                                collect certain information, including:
                            </p>
                            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300 ml-4">
                                <li>IP address and general location data</li>
                                <li>Browser type and version</li>
                                <li>Device information (operating system, screen resolution)</li>
                                <li>Pages visited and time spent on pages</li>
                                <li>Referring website addresses</li>
                                <li>Date and time of visits</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-white mb-2">
                                Contact Information
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                If you contact me via email (cole.carey@outlook.com) or through
                                any contact forms on my website, I collect:
                            </p>
                            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300 ml-4">
                                <li>Your name (if provided)</li>
                                <li>Your email address</li>
                                <li>Message content and any attachments</li>
                                <li>Any other information you voluntarily provide</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-white mb-2">
                                Cookies and Local Storage
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                My website may use browser cookies and local storage to:
                            </p>
                            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300 ml-4">
                                <li>Remember your preferences and settings</li>
                                <li>Improve website functionality and performance</li>
                                <li>Maintain session state</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-2">
                                You can control cookies through your browser settings. Note that
                                disabling cookies may affect website functionality.
                            </p>
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* Android Apps Section */}
            <FadeIn delay={0.15}>
                <section className="card p-6 space-y-4">
                    <h2 className="text-2xl font-semibold text-white">
                        Android Applications
                    </h2>

                    <div className="space-y-4">
                        <p className="text-gray-300 leading-relaxed">
                            For Android applications I develop and publish, the following
                            privacy practices apply:
                        </p>

                        <div>
                            <h3 className="text-lg font-medium text-white mb-2">
                                Data Collection in Android Apps
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-2">
                                My Android applications may collect the following types of
                                information:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                                <li>
                                    <strong>Device Information:</strong> Device model, Android
                                    version, unique device identifiers (if necessary for app
                                    functionality)
                                </li>
                                <li>
                                    <strong>Usage Data:</strong> App interactions, feature
                                    usage, crash reports, and performance metrics
                                </li>
                                <li>
                                    <strong>Location Data:</strong> Only if explicitly required
                                    for app functionality (e.g., location-based features), and
                                    only with your explicit permission
                                </li>
                                <li>
                                    <strong>Account Information:</strong> If the app requires
                                    account creation, I collect only the information necessary
                                    to provide the service
                                </li>
                                <li>
                                    <strong>In-App Purchases:</strong> Transaction data
                                    processed through Google Play Billing (handled by Google,
                                    not directly by me)
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-white mb-2">
                                Android Permissions
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-2">
                                My Android apps request only the permissions necessary for
                                core functionality. Common permissions may include:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                                <li>
                                    <strong>Internet:</strong> For network connectivity and
                                    API calls
                                </li>
                                <li>
                                    <strong>Storage:</strong> For saving app data and user
                                    content (if applicable)
                                </li>
                                <li>
                                    <strong>Location:</strong> Only if the app provides
                                    location-based features
                                </li>
                                <li>
                                    <strong>Camera/Photos:</strong> Only if the app requires
                                    photo capture or selection
                                </li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-2">
                                You can review and manage app permissions through your Android
                                device settings at any time.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-white mb-2">
                                Third-Party Services in Android Apps
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-2">
                                My Android applications may integrate with third-party
                                services, including:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                                <li>
                                    <strong>Google Play Services:</strong> For app distribution,
                                    updates, and billing
                                </li>
                                <li>
                                    <strong>Firebase:</strong> For analytics, crash reporting,
                                    and cloud services (if applicable)
                                </li>
                                <li>
                                    <strong>Analytics Services:</strong> To understand app usage
                                    and improve functionality
                                </li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-2">
                                These services have their own privacy policies. I encourage you
                                to review them.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-white mb-2">
                                Data Storage and Security
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Data collected by my Android apps is stored securely using
                                industry-standard practices. Sensitive data is encrypted both
                                in transit and at rest. I do not sell your personal information
                                to third parties.
                            </p>
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* How Information is Used */}
            <FadeIn delay={0.2}>
                <section className="card p-6 space-y-4">
                    <h2 className="text-2xl font-semibold text-white">
                        How I Use Your Information
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        I use the collected information for the following purposes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                        <li>
                            To provide, maintain, and improve my website and applications
                        </li>
                        <li>To respond to your inquiries and provide customer support</li>
                        <li>To analyze usage patterns and improve user experience</li>
                        <li>To detect, prevent, and address technical issues</li>
                        <li>To comply with legal obligations</li>
                        <li>To protect my rights and prevent fraud or abuse</li>
                    </ul>
                </section>
            </FadeIn>

            {/* Third-Party Services */}
            <FadeIn delay={0.25}>
                <section className="card p-6 space-y-4">
                    <h2 className="text-2xl font-semibold text-white">
                        Third-Party Services
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        My website and applications may use third-party services that collect
                        information:
                    </p>

                    <div className="space-y-3 mt-4">
                        <div>
                            <h3 className="text-lg font-medium text-white mb-2">
                                Google Fonts
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                My website uses Google Fonts to display fonts. When you visit
                                my site, your browser may connect to Google's servers to load
                                fonts. Google may collect certain information, including your
                                IP address. For more information, see{" "}
                                <a
                                    href="https://policies.google.com/privacy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-emerald-300 hover:text-emerald-200 underline"
                                >
                                    Google's Privacy Policy
                                </a>
                                .
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-white mb-2">
                                Hosting and Infrastructure
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                My website and applications are hosted on third-party
                                infrastructure. These providers may have access to certain
                                technical data (e.g., server logs) as part of their services.
                            </p>
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* Data Sharing */}
            <FadeIn delay={0.3}>
                <section className="card p-6 space-y-4">
                    <h2 className="text-2xl font-semibold text-white">Data Sharing</h2>
                    <p className="text-gray-300 leading-relaxed">
                        I do not sell, trade, or rent your personal information to third
                        parties. I may share your information only in the following
                        circumstances:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                        <li>
                            <strong>Service Providers:</strong> With trusted third-party
                            service providers who assist in operating my website and
                            applications, subject to confidentiality agreements
                        </li>
                        <li>
                            <strong>Legal Requirements:</strong> When required by law, court
                            order, or government regulation
                        </li>
                        <li>
                            <strong>Protection of Rights:</strong> To protect my rights,
                            property, or safety, or that of others
                        </li>
                        <li>
                            <strong>Business Transfers:</strong> In connection with a merger,
                            acquisition, or sale of assets (with notice to users)
                        </li>
                    </ul>
                </section>
            </FadeIn>

            {/* Data Security */}
            <FadeIn delay={0.35}>
                <section className="card p-6 space-y-4">
                    <h2 className="text-2xl font-semibold text-white">Data Security</h2>
                    <p className="text-gray-300 leading-relaxed">
                        I implement appropriate technical and organizational measures to protect
                        your personal information against unauthorized access, alteration,
                        disclosure, or destruction. However, no method of transmission over the
                        Internet or electronic storage is 100% secure. While I strive to use
                        commercially acceptable means to protect your information, I cannot
                        guarantee absolute security.
                    </p>
                </section>
            </FadeIn>

            {/* Your Rights */}
            <FadeIn delay={0.4}>
                <section className="card p-6 space-y-4">
                    <h2 className="text-2xl font-semibold text-white">Your Rights</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Depending on your location, you may have certain rights regarding your
                        personal information, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                        <li>
                            <strong>Access:</strong> Request access to the personal information
                            I hold about you
                        </li>
                        <li>
                            <strong>Correction:</strong> Request correction of inaccurate or
                            incomplete information
                        </li>
                        <li>
                            <strong>Deletion:</strong> Request deletion of your personal
                            information
                        </li>
                        <li>
                            <strong>Objection:</strong> Object to processing of your personal
                            information
                        </li>
                        <li>
                            <strong>Data Portability:</strong> Request transfer of your data
                            to another service
                        </li>
                        <li>
                            <strong>Withdraw Consent:</strong> Withdraw consent where
                            processing is based on consent
                        </li>
                    </ul>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        To exercise these rights, please contact me using the information
                        provided in the "Contact Me" section below.
                    </p>
                </section>
            </FadeIn>

            {/* Children's Privacy */}
            <FadeIn delay={0.45}>
                <section className="card p-6 space-y-4">
                    <h2 className="text-2xl font-semibold text-white">
                        Children's Privacy
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        My website and applications are not intended for children under the
                        age of 13. I do not knowingly collect personal information from
                        children under 13. If you are a parent or guardian and believe your
                        child has provided me with personal information, please contact me so I
                        can delete such information.
                    </p>
                </section>
            </FadeIn>

            {/* Changes to Privacy Policy */}
            <FadeIn delay={0.5}>
                <section className="card p-6 space-y-4">
                    <h2 className="text-2xl font-semibold text-white">
                        Changes to This Privacy Policy
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        I may update this Privacy Policy from time to time. I will notify you
                        of any changes by posting the new Privacy Policy on this page and
                        updating the "Last updated" date. You are advised to review this
                        Privacy Policy periodically for any changes.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        Changes to this Privacy Policy are effective when they are posted on
                        this page.
                    </p>
                </section>
            </FadeIn>

            {/* Contact Information */}
            <FadeIn delay={0.55}>
                <section className="card p-6 space-y-4">
                    <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                        <Mail className="size-5 text-primary" />
                        Contact Me
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        If you have any questions about this Privacy Policy, wish to exercise
                        your rights, or have concerns about how your information is handled,
                        please contact me:
                    </p>
                    <div className="bg-gray-900/50 rounded-lg p-4 space-y-2">
                        <p className="text-white font-medium">Cole Carey</p>
                        <p className="text-gray-300">
                            Email:{" "}
                            <a
                                href="mailto:cole.carey@outlook.com"
                                className="text-emerald-300 hover:text-emerald-200 underline"
                            >
                                cole.carey@outlook.com
                            </a>
                        </p>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        I will respond to your inquiry as soon as reasonably possible.
                    </p>
                </section>
            </FadeIn>

            {/* Footer Note */}
            <FadeIn delay={0.6}>
                <div className="text-center text-sm text-gray-500 pt-4">
                    <p>
                        This Privacy Policy is effective as of {currentDate} and applies to
                        all services provided by Cole Carey.
                    </p>
                </div>
            </FadeIn>
        </div>
    );
}

