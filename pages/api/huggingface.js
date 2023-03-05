import { HfInference } from "@huggingface/inference";
const hf = new HfInference(process.env.HG_TOKEN);

export async function generateText(input) {
	const result = await hf.textGeneration({
		model: "TurkuNLP/gpt3-finnish-3B",
		inputs: input,
		parameters: {
			return_full_text: false,
		},
	});

	return result;
}

export async function getConversationalResponse(inputs) {
	const result = await hf.conversational({
		model: "TurkuNLP/gpt3-finnish-3B",
		inputs: JSON.stringify(inputs),
	});

	return result;
}

export async function getTranslation(input) {
	const result = await hf.translation({
		model: "TurkuNLP/gpt3-finnish-3B",
		inputs: input,
		wait_for_model: true,
	});

	return JSON.stringify(result);
}
