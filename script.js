+const navToggle = document.querySelector('.navbar__toggle');
+const navLinks = document.querySelector('.navbar__links');
+const form = document.querySelector('#contact-form');
+const statusEl = document.querySelector('.form-status');
+const yearEl = document.querySelector('#current-year');
+
+if (yearEl) {
+  yearEl.textContent = new Date().getFullYear();
+}
+
+if (navToggle && navLinks) {
+  navToggle.addEventListener('click', () => {
+    navLinks.classList.toggle('is-open');
+  });
+}
+
+if (form && statusEl) {
+  form.addEventListener('submit', (event) => {
+    event.preventDefault();
+    const formData = new FormData(form);
+    const name = formData.get('name');
+    statusEl.textContent = `${name || 'Рахмат'}! Суранычыңыз кабыл алынды.`;
+    form.reset();
+    navLinks?.classList.remove('is-open');
+    setTimeout(() => {
+      statusEl.textContent = '';
+    }, 5000);
+  });
+}
