// ============================================
// SKETCH P5.JS - VISUALIZAÇÃO INTERATIVA
// ============================================

let sketch = (p) => {
    let particles = [];
    let numParticles = 50;
    let mouseInfluence = 150;
    
    p.setup = function() {
        const container = document.getElementById('p5-container');
        const width = Math.min(container.offsetWidth - 40, 800);
        const height = 400;
        
        let canvas = p.createCanvas(width, height);
        canvas.parent('p5-container');
        
        // Inicializar partículas
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle(p, width, height));
        }
    };
    
    p.draw = function() {
        // Fundo com gradiente
        drawGradientBackground(p);
        
        // Atualizar e desenhar partículas
        for (let i = 0; i < particles.length; i++) {
            particles[i].update(p.mouseX, p.mouseY, mouseInfluence);
            particles[i].display(p);
            
            // Conectar partículas próximas
            for (let j = i + 1; j < particles.length; j++) {
                let d = p.dist(particles[i].pos.x, particles[i].pos.y, 
                               particles[j].pos.x, particles[j].pos.y);
                if (d < 150) {
                    p.stroke(0, 102, 255, map(d, 0, 150, 255, 0));
                    p.line(particles[i].pos.x, particles[i].pos.y,
                           particles[j].pos.x, particles[j].pos.y);
                }
            }
        }
        
        // Desenhar informações
        drawInfo(p);
    };
    
    p.windowResized = function() {
        if (document.getElementById('p5-container') && p.windowWidth > 0) {
            const container = document.getElementById('p5-container');
            if (container && container.offsetWidth > 0) {
                const width = Math.min(container.offsetWidth - 40, 800);
                const height = 400;
                p.resizeCanvas(width, height);
                
                // Reinicializar partículas se necessário
                if (particles.length === 0) {
                    for (let i = 0; i < numParticles; i++) {
                        particles.push(new Particle(p, width, height));
                    }
                }
            }
        }
    };
    
    // Função para desenhar fundo com gradiente
    function drawGradientBackground(p) {
        for (let y = 0; y < p.height; y++) {
            let inter = p.map(y, 0, p.height, 0, 1);
            let color = p.lerpColor(
                p.color(102, 126, 234, 20),
                p.color(118, 75, 162, 20),
                inter
            );
            p.stroke(color);
            p.line(0, y, p.width, y);
        }
    }
    
    // Função para desenhar informações
    function drawInfo(p) {
        p.fill(0, 0, 0);
        p.textSize(12);
        p.text(`Partículas: ${particles.length}`, 10, 20);
        p.text(`FPS: ${p.int(p.frameRate())}`, 10, 35);
        p.text(`Posição do Mouse: (${p.int(p.mouseX)}, ${p.int(p.mouseY)})`, 10, 50);
    }
    
    // Função auxiliar para mapear valores
    function map(value, start1, stop1, start2, stop2) {
        return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
    }
};

// ============================================
// CLASSE PARTICLE
// ============================================

class Particle {
    constructor(p, width, height) {
        this.p = p;
        this.width = width;
        this.height = height;
        
        this.pos = this.p.createVector(
            this.p.random(this.width),
            this.p.random(this.height)
        );
        
        this.vel = this.p.createVector(
            this.p.random(-2, 2),
            this.p.random(-2, 2)
        );
        
        this.acc = this.p.createVector(0, 0);
        this.radius = this.p.random(3, 8);
        this.color = this.p.color(
            this.p.random(102, 255),
            this.p.random(100, 150),
            this.p.random(200, 255)
        );
    }
    
    update(mouseX, mouseY, influence) {
        // Calcular distância do mouse
        let d = this.p.dist(this.pos.x, this.pos.y, mouseX, mouseY);
        
        // Se perto do mouse, ser repelido
        if (d < influence) {
            let angle = this.p.atan2(this.pos.y - mouseY, this.pos.x - mouseX);
            let force = this.p.map(d, 0, influence, 5, 0);
            
            this.acc.x = this.p.cos(angle) * force;
            this.acc.y = this.p.sin(angle) * force;
        } else {
            this.acc.x *= 0.95;
            this.acc.y *= 0.95;
        }
        
        // Aplicar aceleração
        this.vel.add(this.acc);
        this.vel.mult(0.98);
        this.pos.add(this.vel);
        
        // Bouncing nas bordas
        this.boundaries();
    }
    
    boundaries() {
        if (this.pos.x < 0) {
            this.pos.x = 0;
            this.vel.x *= -1;
        }
        if (this.pos.x > this.width) {
            this.pos.x = this.width;
            this.vel.x *= -1;
        }
        if (this.pos.y < 0) {
            this.pos.y = 0;
            this.vel.y *= -1;
        }
        if (this.pos.y > this.height) {
            this.pos.y = this.height;
            this.vel.y *= -1;
        }
    }
    
    display(p) {
        p.fill(this.color);
        p.noStroke();
        p.ellipse(this.pos.x, this.pos.y, this.radius * 2);
        
        // Adicionar brilho
        p.noFill();
        p.stroke(this.color);
        p.strokeWeight(1);
        p.ellipse(this.pos.x, this.pos.y, this.radius * 3);
    }
}

// ============================================
// INICIALIZAR SKETCH
// ============================================

let sketchInstance = new p5(sketch);
