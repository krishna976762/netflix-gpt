import OpenAI from 'openai';
import { OPENAPI_KEY } from './Constants';

const openai = new OpenAI({
  apiKey: OPENAPI_KEY, 
  dangerouslyAllowBrowser:true
}); 

export default openai