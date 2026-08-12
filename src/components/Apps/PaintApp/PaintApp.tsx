import { useEffect, useRef, useState } from 'react'
import { SKILLS } from '../../../data/portfolio.data'

const CANVAS_WIDTH = 680
const CANVAS_HEIGHT = 380

type Tool = 'pencil' | 'brush' | 'eraser' | 'bucket'

const TOOLS: { id: Tool | null; label: string; short: string }[] = [
  { id: 'pencil', label: 'Lapis', short: 'La' },
  { id: 'bucket', label: 'Balde', short: 'Ba' },
  { id: null, label: 'Texto', short: 'Te' },
  { id: null, label: 'Zoom', short: 'Zo' },
  { id: null, label: 'Linha', short: 'Li' },
  { id: null, label: 'Forma', short: 'Fo' },
  { id: 'brush', label: 'Pincel', short: 'Pi' },
  { id: 'eraser', label: 'Borracha', short: 'Bo' },
]

const PALETTE = [
  '#000000',
  '#ffffff',
  '#808080',
  '#c75050',
  '#ffb300',
  '#f2e94e',
  '#00a651',
  '#245edc',
  '#6ca0f6',
  '#7b3fbf',
]

function hexToRgb(hex: string) {
  const value = parseInt(hex.replace('#', ''), 16)
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255]
}

function jitter(amount: number) {
  return (Math.random() - 0.5) * amount
}

const HAND_FONT = '"Segoe Print", "Bradley Hand", "Comic Sans MS", cursive'

const BAR_COLORS = [
  '#f5e64f',
  '#93a6f2',
  '#0f6b23',
  '#79e6a0',
  '#12206e',
  '#e8935a',
  '#c75050',
  '#6ca0f6',
]

function addWobblyEdge(
  ctx: CanvasRenderingContext2D,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  segments: number,
  wobble: number,
) {
  for (let i = 1; i <= segments; i += 1) {
    const t = i / segments
    const x = x0 + (x1 - x0) * t + (i === segments ? jitter(wobble * 0.4) : jitter(wobble))
    const y = y0 + (y1 - y0) * t + jitter(wobble)
    ctx.lineTo(x, y)
  }
}

// Draws text one glyph at a time with small per-character offset/rotation so it
// reads as hand-lettered rather than a computer font tilted as a single block.
function shakyText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  fontPx: number,
  color = '#1a1a1a',
) {
  ctx.save()
  ctx.font = `${fontPx}px ${HAND_FONT}`
  ctx.fillStyle = color
  ctx.textBaseline = 'alphabetic'

  let cursorX = x
  for (const char of text) {
    if (char === ' ') {
      cursorX += fontPx * 0.32
      continue
    }
    ctx.save()
    ctx.translate(cursorX, y + jitter(fontPx * 0.1))
    ctx.rotate(jitter(0.1))
    ctx.fillText(char, 0, 0)
    ctx.restore()
    cursorX += ctx.measureText(char).width + jitter(fontPx * 0.05) + fontPx * 0.05
  }
  ctx.restore()
}

const MAX_BLOCKS = 5

function drawWobblyBlock(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  color: string | null,
) {
  ctx.beginPath()
  ctx.moveTo(x, y + jitter(1))
  addWobblyEdge(ctx, x, y, x + size, y, 3, 1.6)
  addWobblyEdge(ctx, x + size, y, x + size, y + size, 3, 1.6)
  addWobblyEdge(ctx, x + size, y + size, x, y + size, 3, 1.6)
  ctx.closePath()
  if (color) {
    ctx.fillStyle = color
    ctx.fill()
  }
  ctx.strokeStyle = 'rgba(0,0,0,0.5)'
  ctx.lineWidth = 1
  ctx.stroke()
}

function drawSkillsSketch(ctx: CanvasRenderingContext2D) {
  ctx.save()
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'

  shakyText(ctx, 'SKILLS', 24, 46, 34)

  const chartX = 148
  const rowTop = 74
  const rowHeight = (CANVAS_HEIGHT - rowTop - 12) / SKILLS.length
  const blockSize = Math.min(rowHeight - 12, 26)
  const blockGap = 7

  SKILLS.forEach((skill, index) => {
    const y = rowTop + index * rowHeight
    const color = BAR_COLORS[index % BAR_COLORS.length]
    const filled = Math.max(1, Math.min(MAX_BLOCKS, Math.round((skill.level / 100) * MAX_BLOCKS)))

    for (let b = 0; b < MAX_BLOCKS; b += 1) {
      const bx = chartX + b * (blockSize + blockGap)
      const by = y + (rowHeight - blockSize) / 2
      drawWobblyBlock(ctx, bx, by, blockSize, b < filled ? color : null)
    }

    const label = skill.name.split(' / ')[0].split(' (')[0]
    shakyText(ctx, label, 14, y + rowHeight / 2 + 5, 15)
  })

  ctx.restore()
}

function floodFill(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  startX: number,
  startY: number,
  fillHex: string,
) {
  const sx = Math.floor(startX)
  const sy = Math.floor(startY)
  if (sx < 0 || sy < 0 || sx >= width || sy >= height) return

  const imageData = ctx.getImageData(0, 0, width, height)
  const data = imageData.data
  const [fr, fg, fb] = hexToRgb(fillHex)

  const startPos = (sy * width + sx) * 4
  const startR = data[startPos]
  const startG = data[startPos + 1]
  const startB = data[startPos + 2]
  const startA = data[startPos + 3]

  if (startR === fr && startG === fg && startB === fb && startA === 255) return

  const matches = (pos: number) =>
    data[pos] === startR &&
    data[pos + 1] === startG &&
    data[pos + 2] === startB &&
    data[pos + 3] === startA

  const stack: number[] = [sx, sy]
  while (stack.length) {
    const y = stack.pop() as number
    const x = stack.pop() as number
    if (x < 0 || x >= width || y < 0 || y >= height) continue
    const pos = (y * width + x) * 4
    if (!matches(pos)) continue

    data[pos] = fr
    data[pos + 1] = fg
    data[pos + 2] = fb
    data[pos + 3] = 255

    stack.push(x + 1, y, x - 1, y, x, y + 1, x, y - 1)
  }

  ctx.putImageData(imageData, 0, 0)
}

export function PaintApp() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isDrawingRef = useRef(false)
  const lastPosRef = useRef<{ x: number; y: number } | null>(null)
  const [tool, setTool] = useState<Tool>('pencil')
  const [color, setColor] = useState('#000000')

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    drawSkillsSketch(ctx)
  }, [])

  const getPos = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    return {
      x: ((e.clientX - rect.left) / rect.width) * CANVAS_WIDTH,
      y: ((e.clientY - rect.top) / rect.height) * CANVAS_HEIGHT,
    }
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const pos = getPos(e)

    if (tool === 'bucket') {
      floodFill(ctx, canvas.width, canvas.height, pos.x, pos.y, color)
      return
    }

    e.currentTarget.setPointerCapture(e.pointerId)
    isDrawingRef.current = true
    lastPosRef.current = pos

    ctx.beginPath()
    ctx.fillStyle = tool === 'eraser' ? '#ffffff' : color
    ctx.arc(pos.x, pos.y, (tool === 'brush' ? 5 : tool === 'eraser' ? 8 : 1.2) / 2, 0, Math.PI * 2)
    ctx.fill()
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    const lastPos = lastPosRef.current
    if (!canvas || !ctx || !lastPos) return

    const pos = getPos(e)
    ctx.strokeStyle = tool === 'eraser' ? '#ffffff' : color
    ctx.lineWidth = tool === 'brush' ? 5 : tool === 'eraser' ? 8 : 1.2
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.beginPath()
    ctx.moveTo(lastPos.x, lastPos.y)
    ctx.lineTo(pos.x, pos.y)
    ctx.stroke()

    lastPosRef.current = pos
  }

  const stopDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isDrawingRef.current) e.currentTarget.releasePointerCapture(e.pointerId)
    isDrawingRef.current = false
    lastPosRef.current = null
  }

  return (
    <section className="flex h-full flex-col bg-xp-window-bg">
      <div className="flex h-7 items-center gap-4 border-b border-[#aca899] px-2 text-xp-sm">
        <span>Arquivo</span>
        <span>Editar</span>
        <span>Imagem</span>
        <span>Cores</span>
        <span>Ajuda</span>
      </div>
      <div className="flex min-h-0 flex-1">
        <div className="grid w-16 shrink-0 grid-cols-2 content-start gap-[2px] border-r border-[#aca899] p-1">
          {TOOLS.map(({ id, label, short }) => (
            <button
              key={label}
              type="button"
              disabled={id === null}
              onClick={() => id && setTool(id)}
              className={`h-7 border border-[#aca899] text-[9px] shadow-btn-xp disabled:opacity-50 ${
                id && tool === id ? 'bg-xp-blue-light text-white' : 'bg-xp-btn'
              }`}
              title={label}
            >
              {short}
            </button>
          ))}
        </div>
        <div className="min-w-0 flex-1 overflow-auto bg-[#808080] p-4">
          <div className="inline-block border border-[#404040] bg-white shadow-[4px_4px_0_rgba(0,0,0,0.25)]">
            <canvas
              ref={canvasRef}
              width={CANVAS_WIDTH}
              height={CANVAS_HEIGHT}
              className="block cursor-crosshair touch-none"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={stopDrawing}
              onPointerLeave={stopDrawing}
            />
          </div>
        </div>
      </div>
      <div className="flex h-10 items-center gap-2 border-t border-[#aca899] bg-xp-window-bg p-1">
        <div
          className="h-6 w-6 shrink-0 border border-[#404040]"
          style={{ backgroundColor: color }}
          title="Cor atual"
        />
        <div className="flex gap-1">
          {PALETTE.map((swatch) => (
            <button
              key={swatch}
              type="button"
              onClick={() => setColor(swatch)}
              className={`h-6 w-6 border ${
                color === swatch ? 'border-2 border-black' : 'border-[#404040]'
              }`}
              style={{ backgroundColor: swatch }}
              title={swatch}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
