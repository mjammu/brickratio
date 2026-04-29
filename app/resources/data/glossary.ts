export type GlossaryTerm = {
  term: string
  abbreviation?: string
  techDefinition: string
  plainDefinition: string
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'Agent',
    techDefinition: 'An LLM-based system that can take actions, use tools, and complete multi-step tasks autonomously with minimal human input.',
    plainDefinition: 'A piece of software powered by AI that can do tasks on your behalf — like browsing the web, reading emails, or updating a spreadsheet — without you clicking anything.',
  },
  {
    term: 'API',
    abbreviation: 'Application Programming Interface',
    techDefinition: 'A set of protocols that allow software systems to communicate with each other by sending and receiving structured data.',
    plainDefinition: 'A connector that lets two pieces of software talk to each other. When your CRM pulls in data from another app, that\'s an API doing the work.',
  },
  {
    term: 'Context Window',
    techDefinition: 'The maximum number of tokens (words/characters) an LLM can process in a single prompt-and-response cycle.',
    plainDefinition: 'How much an AI can "hold in its head" at once. A short context window means it forgets earlier parts of a long conversation.',
  },
  {
    term: 'Embedding',
    techDefinition: 'A numeric vector representation of text that captures semantic meaning, used to measure similarity between pieces of content.',
    plainDefinition: 'A way of turning text into numbers so a computer can figure out which pieces of text mean similar things — the foundation of semantic search.',
  },
  {
    term: 'Fine-tuning',
    techDefinition: 'The process of continuing to train a pre-trained model on a smaller, task-specific dataset to improve performance on targeted outputs.',
    plainDefinition: 'Teaching an AI to get better at a specific job by showing it a lot of examples of that job done well. Like training a new hire with real work samples.',
  },
  {
    term: 'Foundation Model',
    techDefinition: 'A large neural network trained on broad data (text, images, code) that can be adapted to many downstream tasks via prompting or fine-tuning.',
    plainDefinition: 'A general-purpose AI model that has learned from a huge amount of data and can be pointed at many different tasks. GPT-4 and Claude are examples.',
  },
  {
    term: 'Hallucination',
    techDefinition: 'When a language model generates plausible-sounding but factually incorrect or fabricated output that is not grounded in the input data.',
    plainDefinition: 'When an AI confidently makes something up. It sounds real and is stated with certainty — but it\'s wrong. This is why you should always verify AI-generated facts.',
  },
  {
    term: 'LLM',
    abbreviation: 'Large Language Model',
    techDefinition: 'A neural network trained on large text corpora using self-supervised learning to predict and generate human-like text.',
    plainDefinition: 'The engine behind AI tools like ChatGPT, Claude, and Gemini. It is a very large AI that has read enormous amounts of text and learned to respond like a human.',
  },
  {
    term: 'Orchestration',
    techDefinition: 'The coordination layer that manages multiple AI agents, tool calls, memory access, and routing logic within an automated pipeline.',
    plainDefinition: 'The part of an AI system that decides what order things happen in, which agents do what, and how information flows between them.',
  },
  {
    term: 'Prompt',
    techDefinition: 'The input text provided to a language model that specifies the task, context, constraints, and desired output format.',
    plainDefinition: 'The instruction or question you give an AI. The better you write it, the better the result. "Prompt engineering" is the skill of writing these well.',
  },
  {
    term: 'RAG',
    abbreviation: 'Retrieval-Augmented Generation',
    techDefinition: 'An architecture that retrieves relevant documents from a knowledge base at inference time and injects them into the prompt to ground LLM responses.',
    plainDefinition: 'A method that makes AI answers more accurate by first searching a database of your actual documents, then using those results to answer the question.',
  },
  {
    term: 'System Prompt',
    techDefinition: 'A set of instructions placed before the user input in an LLM call that defines the model\'s role, tone, constraints, and behavioral rules.',
    plainDefinition: 'The behind-the-scenes instructions that shape how an AI behaves. It tells the model who it is, what it should do, and what rules to follow.',
  },
  {
    term: 'Token',
    techDefinition: 'The basic unit of text that a language model processes — roughly a word or sub-word segment. Pricing and context limits are measured in tokens.',
    plainDefinition: 'The unit AI companies use to measure and charge for how much text was processed. Think of it as a chunk of a word. "hamburger" might be 2–3 tokens.',
  },
  {
    term: 'Tool Use',
    techDefinition: 'A model capability that allows an LLM to call external functions or APIs — such as web search, calculators, or database queries — during inference.',
    plainDefinition: 'When an AI is allowed to actually do things, not just answer questions. Search the web, run code, write to a spreadsheet — that is tool use.',
  },
  {
    term: 'Vector Database',
    techDefinition: 'A database optimized for storing and querying high-dimensional embedding vectors, typically used to power semantic search over unstructured text.',
    plainDefinition: 'A special kind of database that stores AI-readable versions of your documents so the AI can quickly find the most relevant ones when answering a question.',
  },
  {
    term: 'Webhook',
    techDefinition: 'An HTTP callback that sends data from one service to another in real-time when a specified event occurs, enabling event-driven integrations.',
    plainDefinition: 'An automatic notification between software tools. When something happens in one app (a form is submitted, a payment is made), a webhook tells another app right away.',
  },
  {
    term: 'Workflow Automation',
    techDefinition: 'The use of software to trigger a predefined sequence of tasks based on rules or events, replacing manual human steps in a business process.',
    plainDefinition: 'Setting up a system so that a series of steps happen automatically when a trigger fires — no one has to do it by hand every time.',
  },
  {
    term: 'Zero-shot',
    techDefinition: 'Asking a model to perform a task without providing any examples in the prompt, relying entirely on capabilities learned during pre-training.',
    plainDefinition: 'Asking an AI to do something without giving it any examples first. It just figures it out from the instruction alone.',
  },
]
