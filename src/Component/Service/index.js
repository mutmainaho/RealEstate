import {default as apiaudio} from 'apiaudio'
const apiKey=process.env.REACT_APP_API_KEY

apiaudio.configure({apiKey})

export const convertToAudio = async(rawText) => {

  try{
   const text = `
  <<soundSegment::intro>><<sectionName::intro>> 
  React Estate.
 <<soundSegment::main>><<sectionName::main1>> 
   ${rawText}
  <break time="1s"/>
 `;
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
   console.log({mastering});
   return mastering.url 

  }catch(e){
    console.log({e})
  }
}