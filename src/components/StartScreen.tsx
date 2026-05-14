interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-gradient-to-br from-[#1a0033] via-purple-950 to-black">
      <div className="text-center max-w-sm">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-300 mb-2">Bingo Mixer</h1>
        <p className="text-lg text-cyan-300 mb-8">Find your people!</p>
        
        <div className="bg-purple-950/60 backdrop-blur rounded-lg p-6 shadow-lg border border-pink-500/30 mb-8">
          <h2 className="font-semibold text-pink-300 mb-3">How to play</h2>
          <ul className="text-left text-cyan-200 text-sm space-y-2">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-accent text-white font-semibold py-4 px-8 rounded-lg text-lg active:bg-accent-light transition-colors"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
