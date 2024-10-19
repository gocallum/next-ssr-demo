'use client'

import { useTransition } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { updateName } from "@/app/actions/actions"

export default function CardComponent() {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      await updateName(formData)
      toast({
        title: "Success",
        description: "Name updated",
      })
    })
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Update Name</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form action={handleSubmit}>
          <div className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? 'Updating...' : 'Update Name'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}