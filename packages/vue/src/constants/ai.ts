/**
 * AI
 */
interface Indexable {
  [key: string]: any;
}

export const AiProviders: Indexable = {
  deepseek: {
    baseURL: 'https://api.deepseek.com/v1',
    name: 'DeepSeek',
  },
  openai: {
    baseURL: 'https://api.openai.com/v1',
    name: 'OpenAI',
  },
  google_vertex_ai: {
    baseURL: 'https://asia-southeast1-aiplatform.googleapis.com',
    name: 'Google Vertex AI',
  },
  openrouter: {
    baseURL: 'https://openrouter.ai/api/v1',
    name: 'OpenRouter',
  },
  anthropic_claude: {
    baseURL: 'https://api.anthropic.com/v1',
    name: 'Anthropic Claude',
  },
}

export const getProviderProp = (name: string, prop: string) => {
  const provider = AiProviders[name]
  return provider ? provider[prop] : null
}

export const Prompts: Indexable = {
  writing:
    'You are a professional writing assistant. Please answer in [LANGUAGE]. Your responses should consist *only* of the requested text output, without any additional explanations or conversational phrases.',
}
