import axios from 'axios';
import {HUGGING_FACE_KEY, OPEN_AI_KEY} from '../keys/keys';
import {Alert} from 'react-native';

const huggingFaceURL = 'https://api-inference.huggingface.co/models';

export const getHuggingFaceResponse = async (msg: string) => {
  try {
    const response = await axios.post(
      huggingFaceURL + '/distilgpt2',
      {
        inputs: msg,
      },
      {
        headers: {
          Authorization: `Bearer ${HUGGING_FACE_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    );

    console.log('looooooooooooog', response.data);

    return response.data[0]?.generated_text;
  } catch (error: unknown) {
    const errorMessage = axios.isAxiosError(error)
      ? error?.message
      : 'An unknown error occurred!';
    console.log(JSON.stringify(errorMessage));
    Alert.alert(errorMessage);
  }
};

const openaiURL = 'https://api.openai.com/v1/chat/completions';
export const getOpenAIResponse = async (msg: string) => {
  try {
    const response = await axios.post(
      openaiURL,
      {
        model: 'gpt-4o-mini',
        messages: [
          {
            content: msg,
            role: 'user',
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${OPEN_AI_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    );

    console.log('GPT Res', response.data);
    return response.data.choices[0].message.content;
  } catch (error: unknown) {
    const errorMessage = axios.isAxiosError(error)
      ? error?.message
      : 'An unknown error occurred!';
    console.log(JSON.stringify(errorMessage));
    // Alert.alert(errorMessage);
    return "An error occurred " + errorMessage
  }
};
