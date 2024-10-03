'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import ImageCarousel from './ImageCarousel'

export default function Modal({ open, setOpen, images, title, link }) {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      {/* Backdrop */}
      <DialogBackdrop
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        enter="transition-opacity duration-300 ease-out"
        leave="transition-opacity duration-200 ease-in"
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto p-4">
        <div className="flex min-h-full items-center justify-center text-center sm:p-0">
          <DialogPanel
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl"
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4"
            enterTo="opacity-100 translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-4"
          >
            {/* Modal Content */}
            <div className="bg-white px-4 pt-5 pb-0 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                  <DialogTitle as="h3" className="text-lg font-semibold leading-6 text-gray-900">
                    {title}
                  </DialogTitle>
                  <div className="mt-2">
                    {/* Image Carousel */}
                    <div className="w-full">
                      <ImageCarousel images={images} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-4 py-3 flex flex-col sm:flex-row sm:justify-end sm:px-6">
              <div className="mt-4 flex w-full justify-center space-y-2 sm:space-y-0 sm:space-x-3 sm:w-auto">
              {link !== "#" && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 transition-colors duration-300"
                >
                  Visit Website
                </a>
              )}

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 transition-colors duration-300"
                  aria-label="Close modal"
                >
                  Close
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
