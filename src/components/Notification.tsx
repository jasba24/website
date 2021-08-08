// Dependencies
import { Transition } from '@headlessui/react'
import clsx from 'clsx'

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  onClose: () => void
  children: React.ReactNode
}

export const Notification = ({
  isOpen,
  setIsOpen,
  onClose,
  children,
}: Props): JSX.Element => {
  return (
    <div
      className={clsx(
        'flex fixed inset-0 justify-center items-end py-6 px-4 pointer-events-none sm:justify-end sm:items-start sm:p-6',
        isOpen ? 'visible' : 'invisible'
      )}
    >
      <Transition
        className="overflow-hidden absolute right-6 w-full max-w-md bg-white rounded-lg ring-1 ring-black ring-opacity-5 shadow-lg pointer-events-auto"
        enter="transform ease-out duration-300 transition"
        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        show={isOpen}
      >
        <div className="p-4">
          <div className="flex items-center space-x-4">
            <div className="flex flex-1 justify-between items-center w-0">
              {children}
            </div>
            <div className="flex flex-shrink-0 ml-4">
              <button
                className="inline-flex text-gray-400 hover:text-gray-500 bg-white rounded-md focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus:outline-none"
                onClick={() => {
                  setIsOpen(false)
                  onClose()
                }}
                type="button"
              >
                <span className="sr-only">Close</span>
                {/* Heroicon name: solid/x */}
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default Notification
