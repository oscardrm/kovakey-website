import type { Content } from './es'

export const en: Content = {
  lang: 'en',
  meta: {
    title: 'KovaKey: your passwords, in your cloud',
    description:
      'A local-first, zero-knowledge password manager. Your vault is encrypted on your device and synced through your own cloud. KovaKey runs no servers.',
  },
  nav: {
    how: 'How it works',
    features: 'Features',
    security: 'Security',
    pricing: 'Pricing',
    faq: 'Questions',
    cta: 'Tell me when it launches',
    menu: 'Menu',
    switchLabel: 'Español',
    switchTo: '/es',
  },
  hero: {
    title: 'Your passwords live in your cloud. Not ours.',
    lead: 'KovaKey encrypts your vault on your device and syncs it through your own Google Drive, iCloud or OneDrive. We run no servers, so we hold nothing anyone could steal from us.',
    primary: 'Tell me when it launches',
    secondary: 'See how it works',
    note: 'In development. Coming first to iPhone and Mac.',
  },
  demo: {
    deviceLabel: 'On your device',
    site: 'Site',
    user: 'Username',
    password: 'Password',
    passwordHint: 'Type here and watch the file change',
    userValue: 'ana@mail.com',
    passwordValue: 'correct-horse-staple-9',
    step: 'AES-256-GCM encryption in your browser',
    cloudLabel: 'What your cloud receives',
    bytes: 'bytes',
    caption:
      'A real demo: this page encrypts the text with a throwaway key and nothing leaves your browser. In the app, the key comes from your master password through Argon2id.',
  },
  absent: {
    title: 'What KovaKey does not have',
    items: [
      {
        title: 'Servers of its own',
        text: 'There is no central database holding everyone’s vaults. Each vault is a file that you keep.',
      },
      {
        title: 'Your email',
        text: 'You never create an account with us. The app asks for no email, phone number or name.',
      },
      {
        title: 'Telemetry',
        text: 'The app ships with no analytics, no trackers and no crash reports that leave your device.',
      },
    ],
  },
  how: {
    title: 'Three steps and the vault is yours',
    steps: [
      {
        title: 'Create your vault',
        text: 'You choose a master password. KovaKey generates a recovery key for you to keep offline, with a PDF kit you can print.',
      },
      {
        title: 'Choose where it lives',
        text: 'You connect your own cloud. KovaKey uploads a .vault file that is already encrypted: your provider stores bytes it cannot read.',
      },
      {
        title: 'Open it on every device',
        text: 'Unlock with Face ID, Touch ID or your fingerprint. If you edit on two devices at once, changes merge item by item instead of overwriting each other.',
      },
    ],
  },
  features: {
    title: 'Everything you expect from a password manager',
    lead: 'Plus a few things that usually mean trusting someone else’s server.',
    autofill: {
      title: 'Native autofill and passkeys',
      text: 'KovaKey plugs into system autofill on iPhone and Mac. It fills usernames, passwords and codes, saves new logins and stores your passkeys.',
      fieldUser: 'Username',
      fieldPass: 'Password',
      suggestion: 'Fill with KovaKey',
    },
    generator: {
      title: 'Password generator',
      text: 'From 8 to 128 characters, or passphrases of random words. Strength is measured in bits of entropy.',
      length: 'Length',
      symbols: 'Symbols',
      numbers: 'Numbers',
      regenerate: 'Generate another',
      copy: 'Copy',
      copied: 'Copied',
      bits: 'bits',
      levels: ['Very weak', 'Weak', 'Fair', 'Strong', 'Very strong'],
    },
    list: [
      {
        icon: 'totp',
        title: 'One-time codes',
        text: 'Scan the QR code and KovaKey generates your 2FA codes next to each login.',
      },
      {
        icon: 'audit',
        title: 'Security audit',
        text: 'Finds weak, reused and old passwords, and logins missing 2FA. All computed on your device.',
      },
      {
        icon: 'vaults',
        title: 'Multiple vaults',
        text: 'Personal, work, clients. Each one has its own color, and you switch between them instantly.',
      },
      {
        icon: 'share',
        title: 'Shared vaults',
        text: 'Share a vault with your family or team from your Google Drive, protected by its own password.',
      },
      {
        icon: 'dev',
        title: 'Built for developers',
        text: 'Templates for databases, SSH keys, API keys and .env files, and notes with code blocks.',
      },
      {
        icon: 'copy',
        title: 'One-tap copy',
        text: 'Tap a field and it is copied. The clipboard clears itself a few seconds later.',
      },
      {
        icon: 'categories',
        title: 'Categories your way',
        text: 'Cards, identity, travel, Wi-Fi, licenses. Define your own fields, colors and icons.',
      },
      {
        icon: 'import',
        title: 'Import and export',
        text: 'Bring your vault over from Enpass with a guided wizard. Export any time, encrypted or as JSON and CSV.',
      },
      {
        icon: 'trash',
        title: 'Trash and history',
        text: 'Deleted items can be restored for 30 days, and every password keeps its previous versions.',
      },
    ],
  },
  security: {
    title: 'Security, explained without fine print',
    lead: 'We use standard, audited primitives. We do not invent cryptography.',
    chain: [
      { name: 'Master password', note: 'Exists only in your head' },
      { name: 'Argon2id', note: 'Turns it into a key that is slow to guess' },
      { name: 'Data key', note: 'Random, unique to each vault' },
      { name: '.vault file', note: 'Encrypted with AES-256-GCM' },
    ],
    chainLabel: 'How your vault is protected',
    facts: [
      {
        title: 'A recovery key, not an email',
        text: 'If you forget your master password, your recovery key opens the vault and the app asks you to set a new password. There is no email recovery, because that would need a server that knows who you are.',
      },
      {
        title: 'Biometrics never store your password',
        text: 'Face ID, Touch ID and fingerprint only release a wrapped key held in the device’s secure keychain.',
      },
      {
        title: 'It locks itself',
        text: 'After inactivity, when the app goes to the background, or when the screen locks. Locking wipes the keys from memory.',
      },
      {
        title: 'One optional connection',
        text: 'The breach check is off by default. If you turn it on, only the first 5 characters of a hash leave your device, never the password.',
      },
    ],
    limitsTitle: 'What you should know before you trust us',
    limits: [
      'If you lose both your master password and your recovery key, nobody can open your vault. Neither can we.',
      'Removing someone from a shared vault means changing its password.',
      'A shared vault is only as strong as that password. The app warns you when it is weak.',
    ],
  },
  compare: {
    title: 'How it differs from a cloud password manager',
    colTopic: 'Question',
    colKova: 'KovaKey',
    colOther: 'Typical cloud manager',
    rows: [
      {
        topic: 'Where is your vault?',
        kova: 'On your device and in the cloud you choose',
        other: 'On the provider’s servers',
      },
      {
        topic: 'What does an attacker get from the company?',
        kova: 'Nothing: we store no vaults',
        other: 'The encrypted vaults of every user',
      },
      {
        topic: 'Do you need an account?',
        kova: 'No',
        other: 'Yes, with an email',
      },
      {
        topic: 'What if the company shuts down?',
        kova: 'Your file stays in your cloud and you can export it',
        other: 'You depend on being allowed to export in time',
      },
      {
        topic: 'Getting back in?',
        kova: 'A recovery key that you keep',
        other: 'Usually by email',
      },
    ],
  },
  pricing: {
    title: 'A fair price, because we run no servers',
    lead: 'Start free. Pay only if you want to sync and share, by subscription or just once.',
    monthly: 'Monthly',
    annual: 'Yearly',
    billingLabel: 'Billing period',
    free: {
      name: 'Free',
      price: '$0',
      period: 'forever',
      text: 'The full manager on one device.',
      items: [
        'One vault on one device',
        'Autofill, passkeys and 2FA codes',
        'Password generator',
        'Import and export your data',
      ],
    },
    premium: {
      name: 'Premium',
      monthlyPrice: '$1.99',
      monthlyPeriod: 'per month',
      monthlyNote: 'Cancel any time.',
      annualPrice: '$17.99',
      annualPeriod: 'per year',
      annualNote: 'That is $1.50 a month: 25% less than paying monthly.',
      text: 'Your vault on every device.',
      items: [
        'Everything in Free',
        'Sync through your own cloud',
        'Unlimited devices',
        'Multiple vaults and shared vaults',
        'Security audit',
      ],
    },
    lifetime: {
      name: 'Lifetime',
      price: '$59.99',
      period: 'one-time payment',
      text: 'Premium forever, with no subscription.',
      founderTag: 'Founder price',
      founderPrice: '$39.99',
      founderNote: 'For the first buyers at launch. $59.99 afterwards.',
      items: ['Everything in Premium', 'A single payment', 'Future updates included'],
    },
    notes: [
      'Prices are adjusted per country in the app store, so it may cost less in your currency.',
      'Planned launch prices. They may change before then.',
    ],
  },
  platforms: {
    title: 'Where it will be available',
    lead: 'KovaKey is still in development. This is the order it will arrive in.',
    items: [
      { name: 'iPhone and Mac', status: 'In development', text: 'Native app with system autofill and passkeys.' },
      { name: 'Windows and Chrome', status: 'Next', text: 'Desktop app and browser extension.' },
      { name: 'Android', status: 'Later', text: 'Native app with autofill and fingerprint unlock.' },
    ],
    sync: 'Sync: Google Drive first. iCloud, OneDrive and WebDAV are planned.',
    langs: 'The app comes in English and Spanish, with light, dark and dark blue themes.',
  },
  faq: {
    title: 'Common questions',
    items: [
      {
        q: 'What happens if I forget my master password?',
        a: 'You open the vault with your recovery key and the app asks you to set a new master password. It then issues a new recovery key, because the old one has been used. If you lose both, the vault cannot be opened.',
      },
      {
        q: 'Can my cloud provider read my passwords?',
        a: 'No. The file is encrypted on your device before it is uploaded. Google, Apple or Microsoft only store encrypted bytes.',
      },
      {
        q: 'What happens if KovaKey goes away?',
        a: 'Your vault is a file on your device and in your cloud, not in a service of ours. You can also export your data to JSON or CSV whenever you like.',
      },
      {
        q: 'How do I share passwords with someone?',
        a: 'You create a shared vault with its own password and give them access to the file from the app. You hand over the password yourself through another channel, in person or on a call. It never travels through the app or by email.',
      },
      {
        q: 'Does the app connect to the internet?',
        a: 'Only to the cloud you set up, to sync the encrypted file. The single exception is the breach check, which is optional and off by default.',
      },
      {
        q: 'Can I bring my passwords from another manager?',
        a: 'Today you can import from Enpass. Importers for Bitwarden, 1Password and generic CSV come later.',
      },
    ],
  },
  closing: {
    title: 'Keep your own keys.',
    text: 'KovaKey is coming first to iPhone and Mac. Write to us and we will let you know on launch day.',
    cta: 'Tell me when it launches',
  },
  footer: {
    tagline: 'A local-first, zero-knowledge password manager.',
    noTracking: 'This site uses no cookies and no trackers.',
    rights: 'KovaKey',
  },
}
