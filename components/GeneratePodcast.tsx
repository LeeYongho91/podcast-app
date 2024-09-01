import React, { useState } from 'react'
import { Label } from './ui/label';
import { GeneratePodcastProps } from '@/types';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Loader } from 'lucide-react';



const useGeneratePodcast = (props: GeneratePodcastProps) => {

  return {
    isGenerating: false,
    GeneratePodcast: ()=> {}
  }
} 


const GeneratePodcast = (props: GeneratePodcastProps) => {

  const {isGenerating, GeneratePodcast} = useGeneratePodcast(props)


  return (
    <div>
      <div className='flex flex-col gap-2.5'>
        <Label className='text-16 font-bold text-white-1'>
          AI Prompt to generate Podcast
        </Label>
        <Textarea className='input-class font-light focus-visible:ring-offset-orange-1'
          placeholder='Provide text to generate podcast' rows={5}
          value={props.voicePrompt}
          onChange={(e) => props.setVoicePrompt(e.target.value)}
        />
      </div>
      <div className='mt-5 w-full max-w-[200px]'>
      <Button type="submit" className="text-16 w-full bg-orange-1 py-4 font-bold text-white-1">
          {isGenerating ? (
            <>
              Generating
              <Loader size={20} className="animate-spin ml-2" />
            </>
          ) : (
            'Generate'
          )}
          </Button>
      </div>
      {props.audio && (
        <audio src={props.audio} autoPlay controls className='mt-5'
        onLoadedMetadata={(e) => props.setAudioDuration(e.currentTarget.duration)}
        ></audio>
      )}
    </div>
  )
}

export default GeneratePodcast