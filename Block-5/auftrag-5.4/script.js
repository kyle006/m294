    const canvas = document.getElementById('smiley');
    const ctx = canvas.getContext('2d');
  
    // Kreis für den Kopf des Smileys
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2);
    ctx.fillStyle = 'yellow';
    ctx.fill();
  
    // Kreise für die Augen des Smileys
    ctx.beginPath();
    ctx.arc(80, 80, 10, 0, Math.PI * 2);
    ctx.arc(120, 80, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();
  
    // Bogen für den Mund des Smileys
    ctx.beginPath();
    ctx.arc(100, 100, 40, 0, Math.PI);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'black';
    ctx.stroke();
 