'use client'

import { InstallPrompt } from '@/utils/pwa/install-prompt'
import { PushNotificationManager } from '@/utils/pwa/push-notification-manager'

export default function Home() {
    return (
        <div>
            <PushNotificationManager />
            <InstallPrompt />
        </div>
    )
}
