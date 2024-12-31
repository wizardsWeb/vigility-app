import React from 'react'

const Footer = () => {
  return (
    <footer className=" dark:bg-gray-900 ">
  <div className=" space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div className="text-teal-600 dark:text-teal-300">
          <img src="/favicon.ico" alt="" className='h-12' />
        </div>

        <p className="mt-4 max-w-xs text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam
          molestias.
        </p>

        <ul className="mt-8 flex gap-6">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-500 transition hover:opacity-75 dark:text-gray-200"
            >
              <span className="sr-only">Facebook</span>

              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
            >
              <span className="sr-only">Twitter</span>

              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
            >
              <span className="sr-only">Linkedin</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"></path>
                <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"></path>
                <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"></path>
              </svg>
            </a>
          </li>

         
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
        <div>
          <p className="font-medium dark:text-white">Services</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-200">
              Enterprise Management Solutions
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-200">
              IT Infrastructure Management
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-200">
              Application & Device Control
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-200">
              Software Development
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-200">
              Robotics Process Automation
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-200">
              Outsource Consulting
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-200">
              Support as a Service
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium  dark:text-white">Products</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-200">
                viGOps™
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium  dark:text-white">Quick Links</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-200">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-200">
                About
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-200">
                Support Login
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-200">
                Contact
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-200">
                Training
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className='flex justify-between items-center'>
    <p className="text-sm text-gray-500 dark:text-gray-400">
    © Vigility Technologies - 2020
    </p>
    <p className="text-sm text-gray-500 dark:text-gray-400">
        - Developed by WizardsWeb
    </p>
    </div>
  </div>
</footer>
  )
}

export default Footer
