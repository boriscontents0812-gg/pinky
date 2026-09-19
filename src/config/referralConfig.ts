export interface StepItem {
  id: number;
  text: string;
}

export interface ReferralConfig {
  siteName: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  steps: StepItem[];
  ctaText: string;
  ctaSubtext?: string;
  footerNotice: string;
  defaultDestinationUrl: string;
  heroImage: string;
}

export const referralConfig: ReferralConfig = {
  siteName: "pinkyshoots",
  eyebrow: "FRANKIES BIKINIS $500",
  headline: "ENTER THE SWEEPSTAKES",
  subheadline: "Complete the steps below to submit your entry.",
  steps: [
    {
      id: 1,
      text: "Click the button below",
    },
    {
      id: 2,
      text: "Enter your email & basic info",
    },
    {
      id: 3,
      text: "Complete the required questions",
    },
    {
      id: 4,
      text: "Finish your entry",
    },
  ],
  ctaText: "GET STARTED",
  ctaSubtext: "Opening entry portal...",
  footerNotice: "Available to eligible US participants. See offer terms for details.",
  defaultDestinationUrl: "https://linkthem.net/aff_c?offer_id=4273&aff_id=197884",
  heroImage: "/images/frankies-bikinis-500.png",
};
