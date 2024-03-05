const footerComponent = document.createElement('template');

footerComponent.innerHTML = `
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
    <footer class="mt-[72px] bg-slate-200 dark:bg-gray-900">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between mx-5 md:mx-[40px] lg:mx-[110px] xl:mx-[110px]">
                <a href="#" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Logo</span>
                </a>
                <ul
                    class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Beranda</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Tentang</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Destinasi</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Favorit</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 text-center dark:text-gray-400">© 2024 <a href="#"
                    class="hover:underline">Restu Ibu</a>. All Rights Reserved.</span>
        </div>
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
`
class FooterComponent extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(footerComponent.content.cloneNode(true));
    }
}

customElements.define('footer-component', FooterComponent);
