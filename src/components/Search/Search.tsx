// Dependencies
import * as React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import algoliasearch from 'algoliasearch/lite'
import { useHotkeys } from 'react-hotkeys-hook'
import { InstantSearch, Hits, Configure } from 'react-instantsearch-dom'
import { useClickAway } from 'react-use'

// Internals
import { SearchHeader } from './Header'
import { SearchHit } from './Hit'
import { SearchFooter } from './Footer'

export const Search = (): JSX.Element => {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState('')

  const searchInputRef = React.useRef<HTMLInputElement>(null)
  const boxRef = React.useRef<HTMLDivElement>(null)

  useHotkeys('cmd+k', () => setOpen(true))
  useHotkeys('ctrl+k', () => setOpen(true))
  useHotkeys('esc', () => setOpen(false))
  useClickAway(boxRef, () => setOpen(false))

  const searchClient = React.useMemo(
    () =>
      algoliasearch(
        process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
        process.env.NEXT_PUBLIC_ALGOLIA_API_KEY
      ),
    []
  )

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        title="cmd+k OR ctrl+k"
        type="button"
      >
        <SearchIcon className="w-6 h-6 text-primary-600 dark:text-white" />
      </button>

      <Transition.Root as={React.Fragment} show={open}>
        <Dialog
          as="div"
          className="overflow-y-auto fixed inset-0 z-[999999]"
          initialFocus={searchInputRef}
          onClose={setOpen}
          open={open}
          static
        >
          <div className="flex justify-center items-end px-4 pt-4 pb-20 min-h-screen text-center sm:block sm:p-0">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              aria-hidden="true"
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
            >
              &#8203;
            </span>
            <div className="flex fixed top-0 left-0 z-[200] flex-col p-4 w-screen h-screen sm:p-6 md:p-[10vh] lg:p-[12vh]">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                {/* Adding an extra div to avoid issues with Ref */}
                <div className="transition-all transform">
                  <div
                    className="flex flex-col px-6 mx-auto w-full max-w-[47.375rem] min-h-0 bg-white rounded-[1rem] shadow-search"
                    ref={boxRef}
                  >
                    <InstantSearch
                      indexName="posts"
                      onSearchStateChange={({ query }) => setSearch(query)}
                      searchClient={searchClient}
                    >
                      <SearchHeader />
                      <Configure hitsPerPage={5} />

                      {search.length > 0 && (
                        <div className="overflow-auto flex-auto pb-6 rounded-b-2xl">
                          <div id="search-container">
                            <Hits
                              hitComponent={(props) => (
                                <SearchHit {...props} setOpen={setOpen} />
                              )}
                            />
                          </div>
                        </div>
                      )}

                      <SearchFooter />
                    </InstantSearch>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default Search
