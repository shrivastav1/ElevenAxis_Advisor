document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h5><i class="fas fa-map-marker-alt"></i> Office Address</h5>
                        <p>123 Business Street, City, Country</p>
                    </div>
                    <div class="footer-section">
                        <h5><i class="fas fa-envelope"></i> Email</h5>
                        <p><a href="mailto:info@elevenaxis.com">info@elevenaxis.com</a></p>
                    </div>
                    <div class="footer-section">
                        <h5><i class="fas fa-phone-alt"></i> Call Us</h5>
                        <p><a href="tel:+1234567890">+123 456 7890</a></p>
                    </div>
                    <div class="footer-section">
                        <a href="https://wa.me/1234567890" class="btn-whatsapp">
                            <i class="fab fa-whatsapp"></i> Get in Touch
                        </a>
                    </div>
                </div>
            </div>
            <hr class="footer-divider">
            <p class="footer-copyright">© 2024 Developed by <span>Sakshi Shrivastav</span></p>
        </footer>
    `;
    document.body.insertAdjacentHTML("beforeend", footerHTML);
});
