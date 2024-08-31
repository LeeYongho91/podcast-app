"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"

const voiceCategories = ['alloy', 'shimmer', 'nova', 'echo', 'fable', 'onyx'];


const CreatePodcast = () => {

  const [voiceType, setVoiceType] = useState<string | null>(null)



  const formSchema = z.object({
    podcastTitle: z.string().min(2),
    podcastDescription: z.string().min(2),
  })
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      podcastTitle: "",
      podcastDescription: "",
    },
  })
  
  
  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log('test');
  }


  return (
    <section className="mt-10 flex flex-col">
      <h1 className="text-20 font-bold text-white-1">Create Podcast</h1>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-12 flex w-full flex-col">
      <div className="flex flex-col gap-[30px] border-b border-black-5 pb-10">
      <FormField
          control={form.control}
          name="podcastTitle"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2.5">
              <FormLabel className="text-16 font-bold text-white-1">podcastTitle</FormLabel>
              <FormControl>
                <Input placeholder="JSM Pro Podcast" className="input-class focus-visible:ring-orange-1" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
          <div className="flex flex-col gap-2.5">
          <Label className="text-16 font-bold text-white-1">
            Select AI Voice
          </Label>
            <Select onValueChange={(value)=> setVoiceType(value)}>
              <SelectTrigger className={cn('text-16 w-full border-none bg-black-1 text-gray-1')}>
                <SelectValue placeholder="Select AI Voice" className="placeholder:text-gray-1" />
              </SelectTrigger>
              <SelectContent className="text-16 border-none bg-black-1 font-bold text-white-1 focus:ring-orange-1">
                {voiceCategories.map((category,) => (
                  <SelectItem value={category} key={category} className="capitalize focus:bg-orange-1">
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
              {voiceType && (<audio src={`/${voiceType}.mp3`} autoPlay className="hidden"></audio>)}
            </Select>
          </div>

          <FormField
          control={form.control}
          name="podcastDescription"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2.5">
              <FormLabel className="text-16 font-bold text-white-1">Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Write a short podcast description" className="input-class focus-visible:ring-orange-1" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
      <div className="flex flex-col pt-10"></div>
      </form>
    </Form>
    </section>

  )
}

export default CreatePodcast