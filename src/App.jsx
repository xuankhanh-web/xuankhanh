export default function App() {
  return (
    <Game />
  )
}

import { useEffect, useState } from "react"

function Game() {
  const [playerX, setPlayerX] = useState(180)
  const [enemyY, setEnemyY] = useState(-60)
  const [enemyX, setEnemyX] = useState(
    Math.floor(Math.random() * 360)
  )
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") {
        setPlayerX((prev) => Math.max(prev - 25, 0))
      }

      if (e.key === "ArrowRight") {
        setPlayerX((prev) => Math.min(prev + 25, 360))
      }
    }

    window.addEventListener("keydown", handleKey)

    return () =>
      window.removeEventListener("keydown", handleKey)
  }, [])

  useEffect(() => {
    if (gameOver) return

    const interval = setInterval(() => {
      setEnemyY((prev) => {
        const next = prev + 8

        if (
          next > 500 &&
          enemyX < playerX + 40 &&
          enemyX + 40 > playerX
        ) {
          setGameOver(true)
        }

        if (next > 600) {
          setScore((s) => s + 1)
          setEnemyX(Math.floor(Math.random() * 360))
          return -60
        }

        return next
      })
    }, 30)

    return () => clearInterval(interval)
  }, [enemyX, playerX, gameOver])

  const restart = () => {
    setPlayerX(180)
    setEnemyY(-60)
    setEnemyX(Math.floor(Math.random() * 360))
    setScore(0)
    setGameOver(false)
  }

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      
      <h1 className="text-4xl mb-4 font-bold text-cyan-400">
        Dodge Game
      </h1>

      <div className="text-xl mb-4">
        Score: {score}
      </div>

      <div className="relative w-[400px] h-[600px] bg-zinc-900 border-4 border-cyan-400 overflow-hidden rounded-2xl">

        {/* player */}
        <div
          className="absolute bottom-4 w-10 h-10 bg-cyan-400 rounded-md shadow-[0_0_20px_#22d3ee]"
          style={{
            left: playerX,
          }}
        />

        {/* enemy */}
        <div
          className="absolute w-10 h-10 bg-red-500 rounded-md shadow-[0_0_20px_red]"
          style={{
            top: enemyY,
            left: enemyX,
          }}
        />
      </div>

      {gameOver && (
        <div className="mt-6 flex flex-col items-center">
          <div className="text-3xl text-red-500 mb-4">
            Game Over
          </div>

          <button
            onClick={restart}
            className="px-6 py-3 bg-cyan-400 text-black rounded-xl font-bold hover:scale-105 transition"
          >
            Restart
          </button>
        </div>
      )}

      <div className="mt-6 text-zinc-400">
        Use ← → to move
      </div>
    </div>
  )
}