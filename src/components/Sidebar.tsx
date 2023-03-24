import React from 'react'

export default function Sidebar() {
  return (
    <aside className='border-r border-white/10 w-80 fixed left-0 top-0 bottom-0 p-6'>
      <img
        src=''
        alt=''
        className='text-white h-4 w-auto'
      />

      <nav className='mt-10 flex flex-col gap-6'>
        <div className='flex flex-col gap-4'>
          <strong className='text-zinc-100 font-medium text-sm'>Guides</strong>
          <div className='text-sm flex flex-col pl-2'>
            <a
              href=''
              className='px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors'
            >
              Indtroduction
            </a>
            <a
              href=''
              className='px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors'
            >
              Quickstart
            </a>
            <a
              href=''
              className='px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors'
            >
              SDKs
            </a>
            <a
              href=''
              className='px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors'
            >
              Authentication
            </a>
            <a
              href=''
              className='px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors'
            >
              Pagination
            </a>
            <a
              href=''
              className='px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors'
            >
              Errors
            </a>
            <a
              href=''
              className='px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors'
            >
              Webhooks
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <strong className='text-zinc-100 font-medium text-sm'>
            Resources
          </strong>
          <div className='text-sm flex flex-col pl-2'>
            <a
              href=''
              className='px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors'
            >
              Contacts
            </a>
            <a
              href=''
              className='px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors'
            >
              Conversations
            </a>
            <a
              href=''
              className='px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors'
            >
              Messages
            </a>
            <a
              href=''
              className='px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors'
            >
              Groups
            </a>
            <a
              href=''
              className='px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors'
            >
              Attachments
            </a>
          </div>
        </div>
      </nav>
    </aside>
  )
}
