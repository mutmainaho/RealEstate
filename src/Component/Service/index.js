import {default as apiaudio} from 'apiaudio'
const apiKey=process.env.REACT_APP_API_KEY
console.log({apiKey})
apiaudio.configure({apiKey})

export const convertToAudio=async(rawText) => {
    const text = `
  <<soundSegment::intro>>
  <<sectionName::hello>> 
  If you have any plans for today, cancel them, this really is the final call!  
  <<soundSegment::main>>
  <<sectionName::main1>> 
  We're clearing out all remaining 2021 Sords at Ottawa's top volume Sord dealers. These are the last days for clear out pricing and amazing clear out incentives. Zero percent financing for up to 84 months, and up to 7700 in cash price adjustments on all 2021 Sords at Sord on Bank street! Pick one of the 92 Santa Fays in stock, a family-sized SUV with all-wheel drive and back-up cameras from just $85 weekly, zero down!
  It's the easiest time to get into a new Sord, but these deals won't be around for long, ONLY until midnight TONIGHT! At Bank street Sord, better cars for passionate car drivers. <break time="1s"/>
  `;
    try{
        const script = await apiaudio.Script.create({
            scriptText: text,
          });
          console.log(script);
        const speech = await apiaudio.Speech.create({
            scriptId: script["scriptId"],
            voice: "Linda",
          });
          console.log(speech);
      
          const template = "headlines";
          const mastering = await apiaudio.Mastering.create({
            scriptId: script["scriptId"],
            soundTemplate: template,
          });
          console.log(mastering);
 }catch(e){
 console.log(e);
 }
 }