self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'Mis Hábitos';
  const options = {
    body: data.body || 'Revisá tus hábitos de hoy',
    icon: '/habit-tracker/icon.png',
    badge: '/habit-tracker/icon.png',
    vibrate: [200, 100, 200],
    data: { url: data.url || '/habit-tracker/' },
    actions: [{ action: 'open', title: 'Ver hábitos' }]
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});
// actualización service worker
