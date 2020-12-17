import React, { useState,Image } from 'react';
import premio from '../src/assets/premio.webp';
import btnvolta from '../src/assets/Botão-Voltar.png';

export default function App() {
	const questions = [
		{
			questionText: 'A história da biomedicina teve início em qual década ?',
			answerOptions: [
				{ answerText: 'Década de 50', isCorrect: false },				
				{ answerText: 'Década de 60', isCorrect: true },
				{ answerText: 'Década de 70', isCorrect: false },
				{ answerText: 'Década de 80', isCorrect: false },
			],
		},
		{
			questionText: 'Qual foi a data em que se normatizou a atuação do biomédico nos serviços de radiodiagnostico e radioterapia ?',
			answerOptions: [
				{ answerText: '03/04/2001', isCorrect: false },
				{ answerText: '10/11/2001', isCorrect: false },
				{ answerText: '29/04/2002', isCorrect: true },
				{ answerText: '12/11/2010', isCorrect: false },
				
			],
		},
		{
			questionText: 'Quantas habilitações o biomédico tem?',
			answerOptions: [
				{ answerText: '10 habilitações', isCorrect: false },
				{ answerText: '15 habilitações', isCorrect: false },
				{ answerText: '23 habilitações', isCorrect: false },
				{ answerText: 'Mais de 29 habilitações', isCorrect: true },
			],
		},
		{
			questionText: 'Quais áreas fazem parte da imaginelogia?',
			answerOptions: [
				{ answerText: 'Ecocardiografia e Valvopatias', isCorrect: false },
				{ answerText: 'Tomografia computadorizada e ultrassonografia', isCorrect: true},
				{ answerText: 'Micologia e biotecnologja', isCorrect: false },
				{ answerText: 'Biologia e Zootecnia', isCorrect: false },
			],
		},
		{
			questionText: ' O que a medicina nuclear faz?',
			answerOptions: [
				{ answerText: 'Trata doenças que acometem o coração', isCorrect: false },
				{ answerText: 'Estuda microorganismos', isCorrect: false },
				{ answerText: 'Cria armas nucleares', isCorrect: false },
				{ answerText: 'Emprega materiais radioativos com finalidade diagnóstica e terapêutica', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const voltar = ()=>{
		document.location.reload();
	}


	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Você acertou {score} de {questions.length} perguntas
					
					<span>					
						{score==5 ?( <a href="https://www.google.com/forms/about/" > <img src={premio}  alt ='Micro' height='30px'/> Pegue seu prêmio !!</a>
						
						):
						<button onClick={voltar}><img src={btnvolta}  alt ='Micro' height='50px'/></button>
						
						}
						
					</span>
				</div>				
				
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Pergunta {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
