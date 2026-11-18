import type { Lang } from '.'

export interface PrivacySection {
  title: string
  paragraphs?: string[]
  list?: string[]
  link?: { label: string; href: string }
}

export interface PrivacyContent {
  lang: Lang
  metaTitle: string
  metaDescription: string
  title: string
  effective: string
  contactLabel: string
  sections: PrivacySection[]
  back: string
  homeHref: string
  switchLabel: string
  switchTo: string
}

// The page is plain text: no HTML in these strings. Keep both languages in step.
const contact = 'support@kovakey.app'
const googlePolicy = 'https://policies.google.com/privacy'
const userDataPolicy = 'https://developers.google.com/terms/api-services-user-data-policy'

export const privacyContact = contact

export const privacy: Record<Lang, PrivacyContent> = {
  es: {
    lang: 'es',
    metaTitle: 'Política de privacidad · KovaKey',
    metaDescription: 'Qué datos guarda KovaKey, dónde los guarda y qué hace con los datos de Google Drive.',
    title: 'Política de privacidad',
    effective: 'Fecha de entrada en vigor: 18 de noviembre de 2026.',
    contactLabel: 'Contacto',
    back: 'Volver a KovaKey',
    homeHref: '/es',
    switchLabel: 'English',
    switchTo: '/privacy',
    sections: [
      {
        title: 'Resumen',
        paragraphs: [
          'KovaKey es un gestor de contraseñas que guarda tus datos en tu dispositivo, cifrados con tu contraseña maestra. No tenemos servidores que reciban tus datos, no usamos analítica, publicidad ni rastreadores, y no creamos cuentas de KovaKey.',
        ],
      },
      {
        title: 'Qué datos guarda la app y dónde',
        paragraphs: [
          'Tu bóveda (contraseñas, notas, tarjetas, adjuntos y demás elementos) se guarda cifrada en el almacenamiento de tu dispositivo. Las claves se derivan de tu contraseña maestra y nunca salen del dispositivo sin cifrar. Si olvidas la contraseña maestra, solo puedes recuperar la bóveda con tu clave de recuperación.',
        ],
      },
      {
        title: 'Google Drive (opcional)',
        paragraphs: [
          'Si conectas tu cuenta de Google, KovaKey puede guardar una copia cifrada de tu bóveda en tu propio Google Drive, en una carpeta oculta que solo la app puede ver. Solo se sube el archivo cifrado. Nunca se suben contraseñas ni datos sin cifrar.',
          'Para las bóvedas compartidas, el archivo cifrado se guarda en tu Drive en una carpeta visible llamada Kovakey Shared. Si la compartes con otra persona, Google le da acceso a ese archivo. La contraseña de la bóveda compartida no pasa por Google: la compartes tú por otro medio.',
          'Usamos únicamente los permisos de Google Drive necesarios: drive.appdata (la copia de tu bóveda) y drive.file (solo los archivos que crea la app o que tú eliges). KovaKey no lee ningún otro archivo de tu Drive.',
          'Los datos de Google se usan solo para guardar y sincronizar tus bóvedas cifradas. No se transfieren a nadie, no se usan para publicidad ni para entrenar modelos, y nadie los lee: todo ocurre en tu dispositivo.',
        ],
        link: { label: 'Política de privacidad de Google', href: googlePolicy },
      },
      {
        title: 'Uso limitado de los datos de Google',
        paragraphs: [
          'El uso y la transferencia que hace KovaKey de la información recibida de las APIs de Google cumplen la Política de datos de usuario de los servicios de API de Google (Google API Services User Data Policy), incluidos los requisitos de uso limitado (Limited Use).',
        ],
        link: { label: 'Google API Services User Data Policy', href: userDataPolicy },
      },
      {
        title: 'Comprobación de contraseñas filtradas (opcional)',
        paragraphs: [
          'La comprobación de filtraciones está desactivada por defecto. Si la activas, se envían a Have I Been Pwned los cinco primeros caracteres del hash de tus contraseñas, nunca la contraseña ni el hash completo. El servicio puede ver tu dirección IP. Puedes desactivarla en cualquier momento.',
        ],
      },
      {
        title: 'Lo que no hacemos',
        list: [
          'No recogemos analítica, estadísticas de uso ni informes de errores.',
          'No mostramos publicidad y no vendemos ni compartimos datos.',
          'No usamos rastreadores ni identificadores publicitarios.',
          'No tenemos acceso a tu bóveda ni a tu contraseña maestra.',
        ],
      },
      {
        title: 'Permisos del dispositivo',
        paragraphs: [
          'Usamos Face ID o Touch ID solo para desbloquear la app en tu dispositivo, si lo activas. La extensión de autocompletado usa el sistema de contraseñas de iOS para rellenar tus credenciales en otras apps y webs cuando tú lo pides.',
        ],
      },
      {
        title: 'Borrar tus datos',
        paragraphs: [
          'Al desinstalar KovaKey se borran los datos locales de tu dispositivo. Los archivos que hayas guardado en Google Drive siguen en tu Drive hasta que los borres desde Google Drive o desde la app (en bóvedas compartidas, «Eliminar para todos»). Puedes quitarle a KovaKey el acceso a tu cuenta de Google en cualquier momento desde myaccount.google.com/permissions.',
        ],
      },
      {
        title: 'Cambios',
        paragraphs: ['Si cambiamos esta política, actualizaremos la fecha de arriba.'],
      },
    ],
  },
  en: {
    lang: 'en',
    metaTitle: 'Privacy policy · KovaKey',
    metaDescription: 'What KovaKey stores, where it stores it, and what it does with Google Drive data.',
    title: 'Privacy policy',
    effective: 'Effective date: November 18, 2026.',
    contactLabel: 'Contact',
    back: 'Back to KovaKey',
    homeHref: '/',
    switchLabel: 'Español',
    switchTo: '/es/privacidad',
    sections: [
      {
        title: 'Summary',
        paragraphs: [
          'KovaKey is a password manager that keeps your data on your device, encrypted with your master password. We have no servers that receive your data, we use no analytics, advertising or trackers, and we do not create KovaKey accounts.',
        ],
      },
      {
        title: 'What the app stores and where',
        paragraphs: [
          "Your vault (passwords, notes, cards, attachments and other items) is stored encrypted on your device's storage. Keys are derived from your master password and never leave the device unencrypted. If you forget your master password, the vault can only be recovered with your recovery key.",
        ],
      },
      {
        title: 'Google Drive (optional)',
        paragraphs: [
          'If you connect your Google account, KovaKey can store an encrypted copy of your vault in your own Google Drive, in a hidden folder only the app can see. Only the encrypted file is uploaded. Passwords and unencrypted data are never uploaded.',
          "For shared vaults, the encrypted file is stored in your Drive in a visible folder called Kovakey Shared. If you share it with someone, Google gives them access to that file. The shared vault's password never goes through Google: you share it through another channel.",
          'We only request the Google Drive permissions the app needs: drive.appdata (the copy of your vault) and drive.file (only files the app creates or that you pick). KovaKey reads no other file in your Drive.',
          'Google data is used only to store and sync your encrypted vaults. It is not transferred to anyone, not used for advertising or to train models, and no person reads it: everything happens on your device.',
        ],
        link: { label: 'Google privacy policy', href: googlePolicy },
      },
      {
        title: 'Limited Use of Google data',
        paragraphs: [
          "KovaKey's use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements.",
        ],
        link: { label: 'Google API Services User Data Policy', href: userDataPolicy },
      },
      {
        title: 'Breached-password check (optional)',
        paragraphs: [
          'The breach check is off by default. If you turn it on, the first five characters of the hash of your passwords are sent to Have I Been Pwned, never the password or the full hash. The service can see your IP address. You can turn it off at any time.',
        ],
      },
      {
        title: 'What we do not do',
        list: [
          'We collect no analytics, usage statistics or crash reports.',
          'We show no advertising and do not sell or share data.',
          'We use no trackers and no advertising identifiers.',
          'We have no access to your vault or your master password.',
        ],
      },
      {
        title: 'Device permissions',
        paragraphs: [
          "We use Face ID or Touch ID only to unlock the app on your device, if you turn it on. The AutoFill extension uses iOS's password system to fill your credentials in other apps and websites when you ask it to.",
        ],
      },
      {
        title: 'Deleting your data',
        paragraphs: [
          'Deleting KovaKey removes its local data from your device. Files you saved in Google Drive stay in your Drive until you delete them from Google Drive or from the app (for shared vaults, "Delete for everyone"). You can remove KovaKey\'s access to your Google account at any time at myaccount.google.com/permissions.',
        ],
      },
      {
        title: 'Changes',
        paragraphs: ['If we change this policy, we will update the date above.'],
      },
    ],
  },
}
