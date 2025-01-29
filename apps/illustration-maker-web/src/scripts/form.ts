import { STEAM_PASTE_CODE } from '../constants'

const form = document.querySelector<HTMLFormElement>('#file_input_form')
const copyToClipboardCode = document.querySelector<HTMLButtonElement>(
  '#copy_to_clipboard_code'
)

if (form) {
  form.addEventListener('submit', (event) => {
    const fileInput = document.querySelector<HTMLInputElement>('#file_input')
    const isFileSelected = fileInput?.files?.length !== 0

    if (!fileInput || !isFileSelected) {
      event.preventDefault()
    }
  })
}

copyToClipboardCode?.addEventListener('click', () =>
  navigator.clipboard.writeText(STEAM_PASTE_CODE)
)
