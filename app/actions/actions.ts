'use server'

import { revalidatePath } from 'next/cache'

let currentName = ''

export async function updateName(formData: FormData) {
  const newName = formData.get('name') as string
  currentName = newName.trim()
  revalidatePath('/')
}

export async function getName() {
  return currentName
}