class Wave {
    currentDuration = WAVE_DURATION;
    currentBreak = WAVE_BREAK_DURATION;
    remainingEnemies = WAVE_DENSITY;
    currentWaveIndex = 1;
    currentSpawnTimer = 0;

    constructor(){

    }

    update(dt, game) {
        if (this.currentDuration > 0){
            this.currentDuration -= dt;

            if (this.currentSpawnTimer > 0 ){
                this.currentSpawnTimer -=dt;
            }
            else {
                this.currentSpawnTimer = WAVE_SPAWN_INTERVAL;

                var remainingSpawns = Math.floor(this.currentDuration / WAVE_SPAWN_INTERVAL);
                if (remainingSpawns == 0) return;

                var currentSpawnCount = this.remainingEnemies / remainingSpawns; 

                this.remainingEnemies -= currentSpawnCount;

                console.log(currentSpawnCount);

                for (var i=0; i< currentSpawnCount; i++) {
                    
                    // Randomize position
                    var angle = Math.random() * Math.PI * 2;
                    var x = Math.cos(angle) * WAVE_STARTING_RANGE;
                    var y = Math.sin(angle) * WAVE_STARTING_RANGE;
                    var position = new Point(x,y);

                    var enemy = new EnemyBasic(position);
                    game.objects.push(enemy);
                }
            }
        }
        else {
            if (this.currentBreak > 0) {
              this.currentBreak -= dt;

            }  else {
                this.currentDuration = WAVE_DURATION;
                this.currentBreak = WAVE_BREAK_DURATION;
                
                this.currentWaveIndex++;
                this.remainingEnemies = WAVE_DENSITY;
                this.currentSpawnTimer = 0;         
            }
        }
    }


}