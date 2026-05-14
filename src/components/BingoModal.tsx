interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-purple-900 to-purple-950 border border-pink-500/50 rounded-xl p-6 max-w-xs w-full text-center shadow-xl animate-[bounce_0.5s_ease-out]">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-300 mb-2">BINGO!</h2>
        <p className="text-cyan-200 mb-6">You completed a line!</p>
        
        <button
          onClick={onDismiss}
          className="w-full bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg active:from-pink-700 active:to-pink-600 transition-all"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
