import { useEffect, useState } from 'react'

export function FollowBall() {
    const [enabled, setEnabled] = useState(false)
    const [positions, setPositions] = useState([])
  
    useEffect(() => {
      const handleMouseMove = (event) => {
        if(enabled) {
            setPositions((prevPositions) => {
                const newPositions = [...prevPositions, { x: event.clientX, y: event.clientY }]
                if(newPositions.length > 10) {
                  newPositions.shift()
                }
                return newPositions;
        });
      }
    };
  
    window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    }, [enabled])
  
    //Agregando clase a body
    useEffect(() => {
      document.body.classList.toggle('no-cursor', enabled)
  
      return () => {
        document.body.classList.remove('no-cursor')
      }
    }, [enabled])

    return (
        <main>
            {positions.map((position, index) => (
                <div
                key={index}
                style={{
                  position: 'absolute',
                  top: -20,
                  left: -20,
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'red',
                  opacity: 0 + index / 10,
                  borderRadius: '50%',
                  pointerEvents: 'none',
                  transform: `translate(${position.x}px, ${position.y}px)`
                }}
                />
            ))}
          <button onClick={() => setEnabled(!enabled)}>
          {enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
        </main>
      )
}