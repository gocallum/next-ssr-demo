import CardComponent from '@/app/components/CardComponent'
import { getName } from '@/app/actions/actions'

export default async function Home() {
  const name = await getName()
  console.log(name)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">
        Hello, {name ? name : 'Guest'}!
      </h1>
      <CardComponent />
    </main>
  )
}