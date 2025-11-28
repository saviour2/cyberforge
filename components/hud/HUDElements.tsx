'use client'

import React, { useEffect, useState } from 'react'

export function LiveClock({ format = 'HH:mm:ss', className = '' }: { format?: string; className?: string }) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      setTime(`${hours}:${minutes}:${seconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return <span className={`font-mono ${className}`}>{time}</span>
}

export function SystemUptime({ className = '' }: { className?: string }) {
  const [uptime, setUptime] = useState('00:00:00')

  useEffect(() => {
    const startTime = Date.now()

    const updateUptime = () => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000)
      const hours = String(Math.floor(elapsed / 3600)).padStart(2, '0')
      const minutes = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0')
      const seconds = String(elapsed % 60).padStart(2, '0')
      setUptime(`${hours}:${minutes}:${seconds}`)
    }

    updateUptime()
    const interval = setInterval(updateUptime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`font-mono text-xs ${className}`}>
      <span className="text-gray-600">UPTIME:</span> <span className="text-gray-400">{uptime}</span>
    </div>
  )
}

export function NetworkIndicator({ className = '' }: { className?: string }) {
  const [status, setStatus] = useState<'online' | 'offline'>('online')

  useEffect(() => {
    const checkStatus = () => {
      setStatus(navigator.onLine ? 'online' : 'offline')
    }

    checkStatus()
    window.addEventListener('online', checkStatus)
    window.addEventListener('offline', checkStatus)

    return () => {
      window.removeEventListener('online', checkStatus)
      window.removeEventListener('offline', checkStatus)
    }
  }, [])

  return (
    <div className={`flex items-center gap-2 font-mono text-xs ${className}`}>
      <div className={`w-2 h-2 rounded-full ${status === 'online' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
      <span className="text-gray-400">{status === 'online' ? 'CONNECTED' : 'OFFLINE'}</span>
    </div>
  )
}

export function CPUMeter({ animated = true, className = '' }: { animated?: boolean; className?: string }) {
  const [load, setLoad] = useState(45)

  useEffect(() => {
    if (!animated) return

    const interval = setInterval(() => {
      setLoad(Math.floor(Math.random() * 30) + 30) // 30-60%
    }, 2000)

    return () => clearInterval(interval)
  }, [animated])

  return (
    <div className={`font-mono text-xs ${className}`}>
      <div className="flex items-center gap-2">
        <span className="text-gray-600">CPU:</span>
        <div className="w-20 h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-500"
            style={{ width: `${load}%` }}
          />
        </div>
        <span className="text-gray-400">{load}%</span>
      </div>
    </div>
  )
}

export function CoordinateDisplay({ className = '' }: { className?: string }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className={`font-mono text-xs text-gray-500 ${className}`}>
      X:{String(coords.x).padStart(4, '0')} Y:{String(coords.y).padStart(4, '0')}
    </div>
  )
}

export function VersionTag({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`font-mono text-xs text-gray-600 ${className}`}>
      {children}
    </div>
  )
}
